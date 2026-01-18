import { createClient } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url";
import type { SanityImageSource } from "@sanity/image-url/lib/types/types";

// Check if Sanity is configured
const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "";
const isConfigured = projectId && projectId !== "your_sanity_project_id" && /^[a-z0-9-]+$/.test(projectId);

export const sanityConfig = {
  projectId: isConfigured ? projectId : "placeholder",
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
  apiVersion: process.env.NEXT_PUBLIC_SANITY_API_VERSION || "2024-01-01",
  useCdn: process.env.NODE_ENV === "production",
};

// Only create real client if configured
export const sanityClient = isConfigured ? createClient(sanityConfig) : null;

// Image URL builder (only if configured)
const builder = isConfigured && sanityClient ? imageUrlBuilder(sanityClient) : null;

export function urlFor(source: SanityImageSource) {
  if (!builder) {
    return { url: () => "/products/placeholder.svg", width: () => ({ height: () => ({ url: () => "/products/placeholder.svg" }) }) };
  }
  return builder.image(source);
}

// Check if Sanity is available
export function isSanityConfigured() {
  return isConfigured;
}

// Types for Sanity documents
export interface SanityProduct {
  _id: string;
  _type: "product";
  name: string;
  slug: { current: string };
  description: string;
  price: number;
  image: SanityImageSource;
  category: {
    _ref: string;
    name?: string;
  };
  featured?: boolean;
  available?: boolean;
}

export interface SanityCategory {
  _id: string;
  _type: "category";
  name: string;
  slug: { current: string };
  description?: string;
  order?: number;
}

export interface SanityService {
  _id: string;
  _type: "service";
  title: string;
  slug: { current: string };
  description: string;
  features: string[];
  startingPrice: number;
  image: SanityImageSource;
}

export interface SanityTestimonial {
  _id: string;
  _type: "testimonial";
  name: string;
  text: string;
  event: string;
  rating?: number;
}

export interface SiteSettings {
  _id: string;
  _type: "siteSettings";
  businessName: string;
  tagline: string;
  description: string;
  logo: SanityImageSource;
  whatsappNumber: string;
  phoneNumber: string;
  instagramHandle: string;
  email?: string;
  address?: string;
  businessHours?: {
    weekdays: string;
    saturday: string;
    sunday: string;
  };
  bankDetails?: {
    bankName: string;
    accountName: string;
    accountNumber: string;
  };
  deliveryFee: number;
}

// GROQ Queries
export const queries = {
  // Get all products
  allProducts: `*[_type == "product" && available != false] | order(name asc) {
    _id,
    name,
    "slug": slug.current,
    description,
    price,
    image,
    "category": category->name,
    "categorySlug": category->slug.current,
    featured,
    available
  }`,

  // Get featured products
  featuredProducts: `*[_type == "product" && featured == true && available != false] | order(name asc) [0...4] {
    _id,
    name,
    "slug": slug.current,
    description,
    price,
    image,
    "category": category->name,
    featured
  }`,

  // Get products by category
  productsByCategory: `*[_type == "product" && category->slug.current == $category && available != false] | order(name asc) {
    _id,
    name,
    "slug": slug.current,
    description,
    price,
    image,
    "category": category->name,
    featured
  }`,

  // Get single product
  productBySlug: `*[_type == "product" && slug.current == $slug][0] {
    _id,
    name,
    "slug": slug.current,
    description,
    price,
    image,
    "category": category->name,
    featured,
    available
  }`,

  // Get all categories
  allCategories: `*[_type == "category"] | order(order asc) {
    _id,
    name,
    "slug": slug.current,
    description,
    order
  }`,

  // Get all services
  allServices: `*[_type == "service"] | order(title asc) {
    _id,
    title,
    "slug": slug.current,
    description,
    features,
    startingPrice,
    image
  }`,

  // Get testimonials
  testimonials: `*[_type == "testimonial"] | order(_createdAt desc) [0...6] {
    _id,
    name,
    text,
    event,
    rating
  }`,

  // Get site settings
  siteSettings: `*[_type == "siteSettings"][0] {
    _id,
    businessName,
    tagline,
    description,
    logo,
    whatsappNumber,
    phoneNumber,
    instagramHandle,
    email,
    address,
    businessHours,
    bankDetails,
    deliveryFee
  }`,
};

// Fetch functions - return empty arrays if Sanity is not configured
export async function getProducts(): Promise<SanityProduct[]> {
  if (!sanityClient) return [];
  return sanityClient.fetch<SanityProduct[]>(queries.allProducts);
}

export async function getFeaturedProducts(): Promise<SanityProduct[]> {
  if (!sanityClient) return [];
  return sanityClient.fetch<SanityProduct[]>(queries.featuredProducts);
}

export async function getProductsByCategory(category: string): Promise<SanityProduct[]> {
  if (!sanityClient) return [];
  return sanityClient.fetch<SanityProduct[]>(queries.productsByCategory, { category });
}

export async function getProductBySlug(slug: string): Promise<SanityProduct | null> {
  if (!sanityClient) return null;
  return sanityClient.fetch<SanityProduct | null>(queries.productBySlug, { slug });
}

export async function getCategories(): Promise<SanityCategory[]> {
  if (!sanityClient) return [];
  return sanityClient.fetch<SanityCategory[]>(queries.allCategories);
}

export async function getServices(): Promise<SanityService[]> {
  if (!sanityClient) return [];
  return sanityClient.fetch<SanityService[]>(queries.allServices);
}

export async function getTestimonials(): Promise<SanityTestimonial[]> {
  if (!sanityClient) return [];
  return sanityClient.fetch<SanityTestimonial[]>(queries.testimonials);
}

export async function getSiteSettings(): Promise<SiteSettings | null> {
  if (!sanityClient) return null;
  return sanityClient.fetch<SiteSettings | null>(queries.siteSettings);
}

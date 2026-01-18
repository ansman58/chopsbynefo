import { useQuery } from "@tanstack/react-query";
import {
  getProducts,
  getCategories,
  getFeaturedProducts,
  getServices,
  getTestimonials,
  urlFor,
  type SanityProduct,
  type SanityCategory,
  type SanityService,
  type SanityTestimonial,
} from "./sanity";
import {
  products as staticProducts,
  categories as staticCategories,
  services as staticServices,
} from "@/data/products";

export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  features: string[];
  startingPrice: number;
  image: string;
}

export interface Testimonial {
  name: string;
  text: string;
  event: string;
}

function transformProduct(p: SanityProduct): Product {
  let imageUrl = "/products/placeholder.svg";
  if (p.imageUrl) {
    imageUrl = p.imageUrl;
  } else if (p.image && typeof p.image === "object" && "asset" in p.image) {
    imageUrl = urlFor(p.image).width(400).height(300).url();
  }

  return {
    id: p._id,
    name: p.name,
    description: p.description,
    price: p.price,
    image: imageUrl,
    category: typeof p.category === "string" ? p.category : p.category?.name || "Other",
  };
}

function transformService(s: SanityService): Service {
  return {
    id: s._id,
    title: s.title,
    description: s.description,
    features: s.features || [],
    startingPrice: s.startingPrice,
    image: s.image ? urlFor(s.image).width(600).height(400).url() : "/services/placeholder.svg",
  };
}

const staticTestimonials: Testimonial[] = [
  {
    name: "Chioma A.",
    text: "The small chops at my daughter's birthday were amazing! Everyone kept asking for more. Chops by Nefo never disappoints!",
    event: "Birthday Party",
  },
  {
    name: "Emmanuel O.",
    text: "Best banana bread in town! I order weekly and it's always fresh and delicious. Highly recommended!",
    event: "Regular Customer",
  },
  {
    name: "Blessing N.",
    text: "They catered my wedding and everything was perfect. The food was delicious and the service was professional.",
    event: "Wedding",
  },
];

export function useProducts() {
  return useQuery({
    queryKey: ["products"],
    queryFn: async () => {
      const sanityProducts = await getProducts();
      if (sanityProducts && sanityProducts.length > 0) {
        return sanityProducts.map(transformProduct);
      }
      return staticProducts;
    },
    staleTime: 5 * 60 * 1000, // 5 minutes
    gcTime: 30 * 60 * 1000, // 30 minutes
  });
}

export function useFeaturedProducts() {
  return useQuery({
    queryKey: ["products", "featured"],
    queryFn: async () => {
      const sanityProducts = await getFeaturedProducts();
      if (sanityProducts && sanityProducts.length > 0) {
        return sanityProducts.map(transformProduct);
      }
      return staticProducts.slice(0, 4);
    },
    staleTime: 5 * 60 * 1000, // 5 minutes
    gcTime: 30 * 60 * 1000, // 30 minutes
  });
}

export function useCategories() {
  return useQuery({
    queryKey: ["categories"],
    queryFn: async () => {
      const sanityCategories = await getCategories();
      if (sanityCategories && sanityCategories.length > 0) {
        return ["All", ...sanityCategories.map((c: SanityCategory) => c.name)];
      }
      return staticCategories;
    },
    staleTime: 10 * 60 * 1000, // 10 minutes
    gcTime: 60 * 60 * 1000, // 60 minutes
  });
}

export function useServices() {
  return useQuery({
    queryKey: ["services"],
    queryFn: async () => {
      const sanityServices = await getServices();
      if (sanityServices && sanityServices.length > 0) {
        return sanityServices.map(transformService);
      }
      return staticServices;
    },
    staleTime: 10 * 60 * 1000,
    gcTime: 60 * 60 * 1000,
  });
}

export function useTestimonials() {
  return useQuery({
    queryKey: ["testimonials"],
    queryFn: async () => {
      const sanityTestimonials = await getTestimonials();
      if (sanityTestimonials && sanityTestimonials.length > 0) {
        return sanityTestimonials.map((t: SanityTestimonial) => ({
          name: t.name,
          text: t.text,
          event: t.event,
        }));
      }
      return staticTestimonials;
    },
    staleTime: 10 * 60 * 1000,
    gcTime: 60 * 60 * 1000,
  });
}

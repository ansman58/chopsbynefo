/**
 * Sync static content to Sanity
 * 
 * Run with: npx tsx scripts/sync-to-sanity.ts
 * 
 * Make sure you have SANITY_API_TOKEN in your .env.local file
 * Get one from: https://www.sanity.io/manage → Project → API → Tokens → Add API token (Editor permissions)
 */

import { config } from "dotenv";
import { createClient } from "@sanity/client";
import { products, categories, services } from "../src/data/products";

// Load environment variables from .env.local
config({ path: ".env.local" });

// Sanity client with write access
const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "8xhuqblu",
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
  apiVersion: "2024-01-01",
  token: process.env.SANITY_API_TOKEN, // Required for write operations
  useCdn: false,
});

// Helper to create a slug
function createSlug(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

async function syncCategories() {
  console.log("📁 Syncing categories...");
  
  const categoryDocs: Record<string, string> = {};
  
  // Skip "All" category
  const realCategories = categories.filter((c) => c !== "All");
  
  for (let i = 0; i < realCategories.length; i++) {
    const categoryName = realCategories[i];
    const slug = createSlug(categoryName);
    
    // Check if category already exists
    const existing = await client.fetch(
      `*[_type == "category" && slug.current == $slug][0]._id`,
      { slug }
    );
    
    if (existing) {
      console.log(`  ✓ Category "${categoryName}" already exists`);
      categoryDocs[categoryName] = existing;
    } else {
      const doc = await client.create({
        _type: "category",
        name: categoryName,
        slug: { _type: "slug", current: slug },
        order: i + 1,
      });
      console.log(`  + Created category "${categoryName}"`);
      categoryDocs[categoryName] = doc._id;
    }
  }
  
  return categoryDocs;
}

async function syncProducts(categoryIds: Record<string, string>) {
  console.log("\n🍰 Syncing products...");
  
  for (const product of products) {
    const slug = createSlug(product.name);
    
    // Check if product already exists
    const existing = await client.fetch(
      `*[_type == "product" && slug.current == $slug][0]._id`,
      { slug }
    );
    
    if (existing) {
      console.log(`  ✓ Product "${product.name}" already exists`);
      continue;
    }
    
    const categoryId = categoryIds[product.category];
    
    if (!categoryId) {
      console.log(`  ⚠ Skipping "${product.name}" - category "${product.category}" not found`);
      continue;
    }
    
    await client.create({
      _type: "product",
      name: product.name,
      slug: { _type: "slug", current: slug },
      description: product.description,
      price: product.price,
      imageUrl: product.image, 
      category: {
        _type: "reference",
        _ref: categoryId,
      },
      featured: false,
      available: true,
    });
    
    console.log(`  + Created product "${product.name}"`);
  }
}

async function syncServices() {
  console.log("\n🎉 Syncing services...");
  
  for (const service of services) {
    const slug = createSlug(service.title);
    
    // Check if service already exists
    const existing = await client.fetch(
      `*[_type == "service" && slug.current == $slug][0]._id`,
      { slug }
    );
    
    if (existing) {
      console.log(`  ✓ Service "${service.title}" already exists`);
      continue;
    }
    
    await client.create({
      _type: "service",
      title: service.title,
      slug: { _type: "slug", current: slug },
      description: service.description,
      features: service.features,
      startingPrice: service.startingPrice,
    });
    
    console.log(`  + Created service "${service.title}"`);
  }
}

async function syncTestimonials() {
  console.log("\n💬 Syncing testimonials...");
  
  const testimonials = [
    {
      name: "Chioma A.",
      text: "The small chops at my daughter's birthday were amazing! Everyone kept asking for more. Chops by Nefo never disappoints!",
      event: "Birthday Party",
      rating: 5,
    },
    {
      name: "Emmanuel O.",
      text: "Best banana bread in town! I order weekly and it's always fresh and delicious. Highly recommended!",
      event: "Regular Customer",
      rating: 5,
    },
    {
      name: "Blessing N.",
      text: "They catered my wedding and everything was perfect. The food was delicious and the service was professional.",
      event: "Wedding",
      rating: 5,
    },
  ];
  
  for (const testimonial of testimonials) {
    // Check if testimonial already exists
    const existing = await client.fetch(
      `*[_type == "testimonial" && name == $name][0]._id`,
      { name: testimonial.name }
    );
    
    if (existing) {
      console.log(`  ✓ Testimonial from "${testimonial.name}" already exists`);
      continue;
    }
    
    await client.create({
      _type: "testimonial",
      ...testimonial,
    });
    
    console.log(`  + Created testimonial from "${testimonial.name}"`);
  }
}

async function syncSiteSettings() {
  console.log("\n⚙️  Syncing site settings...");
  
  // Check if site settings already exist
  const existing = await client.fetch(
    `*[_type == "siteSettings"][0]._id`
  );
  
  if (existing) {
    console.log("  ✓ Site settings already exist");
    return;
  }
  
  await client.create({
    _type: "siteSettings",
    businessName: "Chops by Nefo",
    tagline: "The Delight is in the Taste",
    description: "Premium pastries, cakes, zobo drinks, and professional catering services for all your special occasions.",
    whatsappNumber: "+2348093958707",
    phoneNumber: "+2348093958707",
    instagramHandle: "chopsbynefo",
    deliveryFee: 2000,
    businessHours: {
      weekdays: "9:00 AM - 7:00 PM",
      saturday: "10:00 AM - 6:00 PM",
      sunday: "Closed",
    },
  });
  
  console.log("  + Created site settings");
}

async function main() {
  console.log("🚀 Starting Sanity sync...\n");
  
  if (!process.env.SANITY_API_TOKEN) {
    console.error("❌ Error: SANITY_API_TOKEN is required");
    console.log("\nTo get a token:");
    console.log("1. Go to https://www.sanity.io/manage");
    console.log("2. Select your project (chopsbynefo)");
    console.log("3. Go to API → Tokens → Add API token");
    console.log("4. Give it 'Editor' permissions");
    console.log("5. Add it to your .env.local file as SANITY_API_TOKEN=your_token");
    process.exit(1);
  }
  
  try {
    const categoryIds = await syncCategories();
    await syncProducts(categoryIds);
    await syncServices();
    await syncTestimonials();
    await syncSiteSettings();
    
    console.log("\n✅ Sync complete!");
    console.log("\nYou can now view your content at: http://localhost:3000/studio");
  } catch (error) {
    console.error("\n❌ Sync failed:", error);
    process.exit(1);
  }
}

main();

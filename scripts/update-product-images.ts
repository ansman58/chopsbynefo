/**
 * Update existing Sanity products with image URLs
 * 
 * Run with: pnpm update-images
 */

import { config } from "dotenv";
import { createClient } from "@sanity/client";
import { products } from "../src/data/products";

// Load environment variables from .env.local
config({ path: ".env.local" });

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "8xhuqblu",
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
  apiVersion: "2024-01-01",
  token: process.env.SANITY_API_TOKEN,
  useCdn: false,
});

function createSlug(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

async function updateProductImages() {
  console.log("🖼️  Updating product images in Sanity...\n");

  if (!process.env.SANITY_API_TOKEN) {
    console.error("❌ Error: SANITY_API_TOKEN is required");
    process.exit(1);
  }

  for (const product of products) {
    const slug = createSlug(product.name);
    
    // Find existing product
    const existing = await client.fetch(
      `*[_type == "product" && slug.current == $slug][0]`,
      { slug }
    );
    
    if (existing) {
      // Update with image URL
      await client.patch(existing._id)
        .set({ imageUrl: product.image })
        .commit();
      console.log(`  ✓ Updated "${product.name}" with image`);
    } else {
      console.log(`  ⚠ Product "${product.name}" not found in Sanity`);
    }
  }

  console.log("\n✅ Image update complete!");
}

updateProductImages().catch(console.error);

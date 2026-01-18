import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { schemaTypes } from "./sanity/schemas";
import StudioNavbar from "./sanity/components/StudioNavbar";

export default defineConfig({
  name: "chops-by-nefo",
  title: "Chops by Nefo",

  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "8xhuqblu",
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",

  plugins: [structureTool()],

  schema: {
    types: schemaTypes,
  },

  studio: {
    components: {
      navbar: StudioNavbar,
    },
  },
});

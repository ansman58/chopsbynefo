// Sanity schema for Product
export default {
  name: "product",
  title: "Product",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Name",
      type: "string",
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "name",
        maxLength: 96,
      },
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: "description",
      title: "Description",
      type: "text",
      rows: 3,
    },
    {
      name: "price",
      title: "Price (₦)",
      type: "number",
      validation: (Rule: any) => Rule.required().positive(),
    },
    {
      name: "image",
      title: "Product Image",
      type: "image",
      options: {
        hotspot: true,
      },
    },
    {
      name: "category",
      title: "Category",
      type: "reference",
      to: [{ type: "category" }],
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: "featured",
      title: "Featured Product",
      type: "boolean",
      description: "Show this product on the homepage",
      initialValue: false,
    },
    {
      name: "available",
      title: "Available",
      type: "boolean",
      description: "Is this product currently available?",
      initialValue: true,
    },
  ],
  preview: {
    select: {
      title: "name",
      subtitle: "price",
      media: "image",
    },
    prepare(selection: { title: string; subtitle: number; media: any }) {
      const { title, subtitle, media } = selection;
      return {
        title,
        subtitle: `₦${subtitle?.toLocaleString() || 0}`,
        media,
      };
    },
  },
};

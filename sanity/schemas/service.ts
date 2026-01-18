// Sanity schema for Service
export default {
  name: "service",
  title: "Catering Service",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
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
      name: "features",
      title: "Features",
      type: "array",
      of: [{ type: "string" }],
      description: "List of features included in this service",
    },
    {
      name: "startingPrice",
      title: "Starting Price (₦)",
      type: "number",
      description: "Minimum price for this service",
      validation: (Rule: any) => Rule.positive(),
    },
    {
      name: "image",
      title: "Service Image",
      type: "image",
      options: {
        hotspot: true,
      },
    },
  ],
  preview: {
    select: {
      title: "title",
      subtitle: "startingPrice",
      media: "image",
    },
    prepare(selection: { title: string; subtitle: number; media: any }) {
      const { title, subtitle, media } = selection;
      return {
        title,
        subtitle: subtitle ? `From ₦${subtitle.toLocaleString()}` : "",
        media,
      };
    },
  },
};

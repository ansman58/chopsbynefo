import { defineType, defineField } from "sanity";

const service = defineType({
  name: "service",
  title: "Catering Service",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "text",
      rows: 3,
    }),
    defineField({
      name: "features",
      title: "Features",
      type: "array",
      of: [{ type: "string" }],
      description: "List of features included in this service",
    }),
    defineField({
      name: "startingPrice",
      title: "Starting Price (₦)",
      type: "number",
      description: "Minimum price for this service",
      validation: (Rule) => Rule.positive(),
    }),
    defineField({
      name: "image",
      title: "Service Image",
      type: "image",
      options: {
        hotspot: true,
      },
    }),
  ],
  preview: {
    select: {
      title: "title",
      subtitle: "startingPrice",
      media: "image",
    },
    prepare(selection) {
      const { title, subtitle, media } = selection;
      return {
        title,
        subtitle: subtitle ? `From ₦${subtitle.toLocaleString()}` : "",
        media,
      };
    },
  },
});

export default service;

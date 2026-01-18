// Sanity schema for Category
export default {
  name: "category",
  title: "Category",
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
      rows: 2,
    },
    {
      name: "order",
      title: "Display Order",
      type: "number",
      description: "Order in which categories appear (lower numbers first)",
      initialValue: 0,
    },
  ],
  preview: {
    select: {
      title: "name",
      subtitle: "description",
    },
  },
};

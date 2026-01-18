// Sanity schema for Testimonial
export default {
  name: "testimonial",
  title: "Testimonial",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Customer Name",
      type: "string",
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: "text",
      title: "Testimonial Text",
      type: "text",
      rows: 4,
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: "event",
      title: "Event/Occasion",
      type: "string",
      description: "What occasion was the order for?",
    },
    {
      name: "rating",
      title: "Rating",
      type: "number",
      description: "Rating out of 5",
      validation: (Rule: any) => Rule.min(1).max(5),
      initialValue: 5,
    },
  ],
  preview: {
    select: {
      title: "name",
      subtitle: "event",
    },
  },
};

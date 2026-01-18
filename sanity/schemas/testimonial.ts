import { defineType, defineField } from "sanity";

const testimonial = defineType({
  name: "testimonial",
  title: "Testimonial",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Customer Name",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "text",
      title: "Testimonial Text",
      type: "text",
      rows: 4,
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "event",
      title: "Event/Occasion",
      type: "string",
      description: "What occasion was the order for?",
    }),
    defineField({
      name: "rating",
      title: "Rating",
      type: "number",
      description: "Rating out of 5",
      validation: (Rule) => Rule.min(1).max(5),
      initialValue: 5,
    }),
  ],
  preview: {
    select: {
      title: "name",
      subtitle: "event",
    },
  },
});

export default testimonial;

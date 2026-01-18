import { defineType, defineField } from "sanity";

const siteSettings = defineType({
  name: "siteSettings",
  title: "Site Settings",
  type: "document",
  fields: [
    defineField({
      name: "businessName",
      title: "Business Name",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "tagline",
      title: "Tagline",
      type: "string",
    }),
    defineField({
      name: "description",
      title: "Site Description",
      type: "text",
      rows: 3,
      description: "Used for SEO and meta descriptions",
    }),
    defineField({
      name: "logo",
      title: "Logo",
      type: "image",
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: "whatsappNumber",
      title: "WhatsApp Number",
      type: "string",
      description: "Include country code, e.g., +2348093958707",
    }),
    defineField({
      name: "phoneNumber",
      title: "Phone Number",
      type: "string",
    }),
    defineField({
      name: "instagramHandle",
      title: "Instagram Handle",
      type: "string",
      description: "Without the @ symbol",
    }),
    defineField({
      name: "email",
      title: "Email Address",
      type: "string",
    }),
    defineField({
      name: "address",
      title: "Business Address",
      type: "text",
      rows: 2,
    }),
    defineField({
      name: "businessHours",
      title: "Business Hours",
      type: "object",
      fields: [
        {
          name: "weekdays",
          title: "Monday - Friday",
          type: "string",
        },
        {
          name: "saturday",
          title: "Saturday",
          type: "string",
        },
        {
          name: "sunday",
          title: "Sunday",
          type: "string",
        },
      ],
    }),
    defineField({
      name: "bankDetails",
      title: "Bank Details",
      type: "object",
      description: "For bank transfer payments",
      fields: [
        {
          name: "bankName",
          title: "Bank Name",
          type: "string",
        },
        {
          name: "accountName",
          title: "Account Name",
          type: "string",
        },
        {
          name: "accountNumber",
          title: "Account Number",
          type: "string",
        },
      ],
    }),
    defineField({
      name: "deliveryFee",
      title: "Delivery Fee (₦)",
      type: "number",
      description: "Standard delivery fee",
      initialValue: 1500,
    }),
  ],
  preview: {
    select: {
      title: "businessName",
      subtitle: "tagline",
      media: "logo",
    },
  },
});

export default siteSettings;

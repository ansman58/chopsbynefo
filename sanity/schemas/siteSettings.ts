// Sanity schema for Site Settings
export default {
  name: "siteSettings",
  title: "Site Settings",
  type: "document",
  fields: [
    {
      name: "businessName",
      title: "Business Name",
      type: "string",
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: "tagline",
      title: "Tagline",
      type: "string",
    },
    {
      name: "description",
      title: "Site Description",
      type: "text",
      rows: 3,
      description: "Used for SEO and meta descriptions",
    },
    {
      name: "logo",
      title: "Logo",
      type: "image",
      options: {
        hotspot: true,
      },
    },
    {
      name: "whatsappNumber",
      title: "WhatsApp Number",
      type: "string",
      description: "Include country code, e.g., +2348093958707",
    },
    {
      name: "phoneNumber",
      title: "Phone Number",
      type: "string",
    },
    {
      name: "instagramHandle",
      title: "Instagram Handle",
      type: "string",
      description: "Without the @ symbol",
    },
    {
      name: "email",
      title: "Email Address",
      type: "string",
    },
    {
      name: "address",
      title: "Business Address",
      type: "text",
      rows: 2,
    },
    {
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
    },
    {
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
    },
    {
      name: "deliveryFee",
      title: "Delivery Fee (₦)",
      type: "number",
      description: "Standard delivery fee",
      initialValue: 1500,
    },
  ],
  preview: {
    select: {
      title: "businessName",
      subtitle: "tagline",
      media: "logo",
    },
  },
};

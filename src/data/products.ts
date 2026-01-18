export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
}

export const products: Product[] = [
  // Banana Bread
  {
    id: "banana-bread-1",
    name: "Classic Banana Bread",
    description: "Moist and delicious homemade banana bread made with ripe bananas and a hint of vanilla.",
    price: 3500,
    image: "/products/banana-bread.svg",
    category: "Banana Bread",
  },
  {
    id: "banana-bread-2",
    name: "Chocolate Chip Banana Bread",
    description: "Our classic banana bread loaded with rich chocolate chips for extra indulgence.",
    price: 4000,
    image: "/products/banana-bread-choco.svg",
    category: "Banana Bread",
  },
  {
    id: "banana-bread-3",
    name: "Walnut Banana Bread",
    description: "Premium banana bread with crunchy walnuts for added texture and nutrition.",
    price: 4500,
    image: "/products/banana-bread-walnut.svg",
    category: "Banana Bread",
  },

  // Zobo Drinks
  {
    id: "zobo-1",
    name: "Classic Zobo (1 Litre)",
    description: "Refreshing traditional hibiscus drink made with natural spices and ginger.",
    price: 1500,
    image: "/products/zobo.svg",
    category: "Zobo Drink",
  },
  {
    id: "zobo-2",
    name: "Zobo with Pineapple (1 Litre)",
    description: "Our signature zobo infused with fresh pineapple for a tropical twist.",
    price: 2000,
    image: "/products/zobo-pineapple.svg",
    category: "Zobo Drink",
  },
  {
    id: "zobo-3",
    name: "Party Pack Zobo (5 Litres)",
    description: "Perfect for events and gatherings. Our classic zobo in a party-size container.",
    price: 6000,
    image: "/products/zobo-party.svg",
    category: "Zobo Drink",
  },

  // Small Chops & Pastries
  {
    id: "smallchops-1",
    name: "Small Chops (50 pieces)",
    description: "Assorted mini pastries including spring rolls, samosa, puff puff, and chicken wings.",
    price: 15000,
    image: "/products/smallchops.svg",
    category: "Small Chops",
  },
  {
    id: "smallchops-2",
    name: "Small Chops (100 pieces)",
    description: "Party size assortment of our delicious mini pastries. Perfect for celebrations.",
    price: 28000,
    image: "/products/smallchops-large.svg",
    category: "Small Chops",
  },
  {
    id: "pastry-1",
    name: "Meat Pie (6 pieces)",
    description: "Flaky pastry filled with seasoned minced meat and vegetables.",
    price: 3000,
    image: "/products/meatpie.svg",
    category: "Pastries",
  },
  {
    id: "pastry-2",
    name: "Chicken Pie (6 pieces)",
    description: "Golden puff pastry stuffed with tender chicken and savory filling.",
    price: 3500,
    image: "/products/chickenpie.svg",
    category: "Pastries",
  },
  {
    id: "pastry-3",
    name: "Sausage Roll (12 pieces)",
    description: "Crispy pastry wrapped around seasoned sausage. A crowd favorite!",
    price: 3000,
    image: "/products/sausageroll.svg",
    category: "Pastries",
  },
  {
    id: "pastry-4",
    name: "Spring Rolls (12 pieces)",
    description: "Crispy fried rolls filled with vegetables and minced meat.",
    price: 3500,
    image: "/products/springrolls.svg",
    category: "Pastries",
  },

  // Cakes
  {
    id: "cake-1",
    name: "Birthday Cake (6 inch)",
    description: "Custom decorated birthday cake. Contact us for design preferences.",
    price: 25000,
    image: "/products/birthday-cake.svg",
    category: "Cakes",
  },
  {
    id: "cake-2",
    name: "Wedding Cake (2-Tier)",
    description: "Elegant two-tier wedding cake with custom design and flavors.",
    price: 75000,
    image: "/products/wedding-cake.svg",
    category: "Cakes",
  },
  {
    id: "cake-3",
    name: "Red Velvet Cake (6 inch)",
    description: "Classic red velvet cake with cream cheese frosting.",
    price: 20000,
    image: "/products/red-velvet.svg",
    category: "Cakes",
  },
  {
    id: "cake-4",
    name: "Chocolate Cake (6 inch)",
    description: "Rich chocolate layer cake with chocolate ganache frosting.",
    price: 18000,
    image: "/products/chocolate-cake.svg",
    category: "Cakes",
  },
  {
    id: "cake-5",
    name: "Cupcakes (12 pieces)",
    description: "Assorted flavored cupcakes with buttercream frosting.",
    price: 8000,
    image: "/products/cupcakes.svg",
    category: "Cakes",
  },
];

export const categories = [
  "All",
  "Banana Bread",
  "Zobo Drink",
  "Small Chops",
  "Pastries",
  "Cakes",
];

export const services = [
  {
    id: "indoor-catering",
    title: "Indoor Catering",
    description: "Professional catering services for your indoor events including corporate meetings, birthdays, anniversaries, and private parties.",
    features: [
      "Customized menu planning",
      "Professional setup and presentation",
      "Trained serving staff",
      "Complete cleanup after event",
    ],
    startingPrice: 50000,
    image: "/services/indoor-catering.svg",
  },
  {
    id: "outdoor-catering",
    title: "Outdoor Catering",
    description: "Complete outdoor catering solutions for weddings, garden parties, corporate events, and large celebrations.",
    features: [
      "Full event catering",
      "Equipment and tent rental",
      "On-site cooking available",
      "Flexible packages for any budget",
    ],
    startingPrice: 100000,
    image: "/services/outdoor-catering.svg",
  },
];

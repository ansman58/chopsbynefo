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
    image: "https://images.unsplash.com/photo-1432457990754-c8b5f21448de?w=400&h=300&fit=crop",
    category: "Banana Bread",
  },
  {
    id: "banana-bread-2",
    name: "Chocolate Chip Banana Bread",
    description: "Our classic banana bread loaded with rich chocolate chips for extra indulgence.",
    price: 4000,
    image: "https://images.unsplash.com/photo-1559620192-032c4bc4674e?w=400&h=300&fit=crop",
    category: "Banana Bread",
  },
  {
    id: "banana-bread-3",
    name: "Walnut Banana Bread",
    description: "Premium banana bread with crunchy walnuts for added texture and nutrition.",
    price: 4500,
    image: "https://images.unsplash.com/photo-1559620192-032c4bc4674e?w=400&h=300&fit=crop",
    category: "Banana Bread",
  },

  // Zobo Drinks
  {
    id: "zobo-1",
    name: "Classic Zobo (1 Litre)",
    description: "Refreshing traditional hibiscus drink made with natural spices and ginger.",
    price: 1500,
    image: "https://images.unsplash.com/photo-1558642452-9d2a7deb7f62?w=400&h=300&fit=crop",
    category: "Zobo Drink",
  },
  {
    id: "zobo-2",
    name: "Zobo with Pineapple (1 Litre)",
    description: "Our signature zobo infused with fresh pineapple for a tropical twist.",
    price: 2000,
    image: "https://images.unsplash.com/photo-1534353473418-4cfa6c56fd38?w=400&h=300&fit=crop",
    category: "Zobo Drink",
  },
  {
    id: "zobo-3",
    name: "Party Pack Zobo (5 Litres)",
    description: "Perfect for events and gatherings. Our classic zobo in a party-size container.",
    price: 6000,
    image: "https://images.unsplash.com/photo-1544145945-f90425340c7e?w=400&h=300&fit=crop",
    category: "Zobo Drink",
  },

  // Small Chops & Pastries
  {
    id: "smallchops-1",
    name: "Small Chops (50 pieces)",
    description: "Assorted mini pastries including spring rolls, samosa, puff puff, and chicken wings.",
    price: 15000,
    image: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=400&h=300&fit=crop",
    category: "Small Chops",
  },
  {
    id: "smallchops-2",
    name: "Small Chops (100 pieces)",
    description: "Party size assortment of our delicious mini pastries. Perfect for celebrations.",
    price: 28000,
    image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400&h=300&fit=crop",
    category: "Small Chops",
  },
  {
    id: "pastry-1",
    name: "Meat Pie (6 pieces)",
    description: "Flaky pastry filled with seasoned minced meat and vegetables.",
    price: 3000,
    image: "https://images.unsplash.com/photo-1509365390695-33aee754301f?w=400&h=300&fit=crop",
    category: "Pastries",
  },
  {
    id: "pastry-2",
    name: "Chicken Pie (6 pieces)",
    description: "Golden puff pastry stuffed with tender chicken and savory filling.",
    price: 3500,
    image: "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=400&h=300&fit=crop",
    category: "Pastries",
  },
  {
    id: "pastry-3",
    name: "Sausage Roll (12 pieces)",
    description: "Crispy pastry wrapped around seasoned sausage. A crowd favorite!",
    price: 3000,
    image: "https://images.unsplash.com/photo-1600891964092-4316c288032e?w=400&h=300&fit=crop",
    category: "Pastries",
  },
  {
    id: "pastry-4",
    name: "Spring Rolls (12 pieces)",
    description: "Crispy fried rolls filled with vegetables and minced meat.",
    price: 3500,
    image: "https://images.unsplash.com/photo-1606755962773-d324e0a13086?w=400&h=300&fit=crop",
    category: "Pastries",
  },

  // Cakes - Using real business images where available
  {
    id: "cake-1",
    name: "Birthday Cake (6 inch)",
    description: "Custom decorated birthday cake. Contact us for design preferences.",
    price: 25000,
    image: "/images/birthday_cake.jpeg",
    category: "Cakes",
  },
  {
    id: "cake-2",
    name: "Wedding Cake (2-Tier)",
    description: "Elegant two-tier wedding cake with custom design and flavors.",
    price: 75000,
    image: "https://images.unsplash.com/photo-1535254973040-607b474cb50d?w=400&h=300&fit=crop",
    category: "Cakes",
  },
  {
    id: "cake-3",
    name: "Red Velvet Cake (6 inch)",
    description: "Classic red velvet cake with cream cheese frosting.",
    price: 20000,
    image: "https://images.unsplash.com/photo-1586788680434-30d324b2d46f?w=400&h=300&fit=crop",
    category: "Cakes",
  },
  {
    id: "cake-4",
    name: "Chocolate Cake (6 inch)",
    description: "Rich chocolate layer cake with chocolate ganache frosting.",
    price: 18000,
    image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=400&h=300&fit=crop",
    category: "Cakes",
  },
  {
    id: "cake-5",
    name: "Cupcakes (12 pieces)",
    description: "Assorted flavored cupcakes with buttercream frosting.",
    price: 8000,
    image: "https://images.unsplash.com/photo-1519869325930-281384150729?w=400&h=300&fit=crop",
    category: "Cakes",
  },
  {
    id: "cake-6",
    name: "Mother's Day Cake",
    description: "Special celebration cake perfect for honoring mom on her special day.",
    price: 30000,
    image: "/images/mother_of_day_cake.jpeg",
    category: "Cakes",
  },
  {
    id: "cake-7",
    name: "Fresh Strawberry Cake",
    description: "Light sponge cake topped with fresh strawberries and cream.",
    price: 22000,
    image: "/images/strawberries.jpeg",
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
    image: "https://images.unsplash.com/photo-1555244162-803834f70033?w=600&h=400&fit=crop",
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
    image: "https://images.unsplash.com/photo-1530062845289-9109b2c9c868?w=600&h=400&fit=crop",
  },
];

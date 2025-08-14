import { Order, Product } from "./types";

export const dummyProducts: Product[] = [
  {
    id: "1",
    name: "Whey Protein",
    description: "High-quality whey protein for muscle growth.",
    price: 49.99,
    category: "Protein",
    image:
      "https://images.unsplash.com/photo-1579758629938-03607ccdbaba?w=400&h=400&fit=crop&crop=center",
    bestSeller: true,
  },
  {
    id: "2",
    name: "Creatine Monohydrate",
    description: "Pure creatine for increased strength and performance.",
    price: 29.99,
    category: "Performance",
    image:
      "https://images.unsplash.com/photo-1632212261559-08f365d91444?w=400&h=400&fit=crop&crop=center",
    bestSeller: false,
  },
  {
    id: "3",
    name: "Pre-Workout",
    description: "Explosive energy and focus for your workouts.",
    price: 39.99,
    category: "Performance",
    image:
      "https://images.unsplash.com/photo-1599403483984-2ab66a27e462?w=400&h=400&fit=crop&crop=center",
    bestSeller: true,
  },
  {
    id: "4",
    name: "Multivitamin",
    description: "Complete multivitamin for overall health.",
    price: 19.99,
    category: "Health",
    image:
      "https://images.unsplash.com/photo-1607958992120-13d55c7a2b0d?w=400&h=400&fit=crop&crop=center",
    bestSeller: false,
  },
  {
    id: "5",
    name: "Fish Oil",
    description: "Omega-3 fatty acids for heart and brain health.",
    price: 24.99,
    category: "Health",
    image:
      "https://images.unsplash.com/photo-1627463424854-e057563b79de?w=400&h=400&fit=crop&crop=center",
    bestSeller: true,
  },
  {
    id: "6",
    name: "Vitamin D3",
    description: "Essential for bone health and immune support.",
    price: 14.99,
    category: "Health",
    image:
      "https://images.unsplash.com/photo-1628102490393-273f32938497?w=400&h=400&fit=crop&crop=center",
    bestSeller: true,
  },
];

export const dummyOrders: Order[] = [
  {
    id: "ORD001",
    customerName: "John Doe",
    date: "2024-07-20",
    status: "Delivered",
    products: [dummyProducts[0], dummyProducts[2]],
    shippingInfo: {
      name: "John Doe",
      address: "123 Main St",
      city: "Anytown",
      state: "CA",
      zip: "12345",
      email: "john.doe@example.com",
    },
  },
  {
    id: "ORD002",
    customerName: "Jane Smith",
    date: "2024-07-21",
    status: "Shipped",
    products: [dummyProducts[1]],
    shippingInfo: {
      name: "Jane Smith",
      address: "456 Oak Ave",
      city: "Somecity",
      state: "NY",
      zip: "67890",
      email: "jane.smith@example.com",
    },
  },
];

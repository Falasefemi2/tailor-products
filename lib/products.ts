/** @format */

import type { Product } from "./types";
import suit from "../public/suit.png";
import cloth1 from "../public/portrait-woman-posing-traditional-african-attire-outdoors.jpg";
import cloth2 from "../public/side-view-woman-wearing-native-attire.jpg";
import cloth3 from "../public/woman-wearing-native-african-clothing-beach.jpg";
import weddinggown from "../public/weddinggown.jpg";

export const products: Product[] = [
  {
    id: "classic-suit",
    name: "Classic Wool Suit",
    description:
      "A timeless two-piece suit crafted from premium Italian wool. Perfect for business meetings and formal occasions.",
    price: 899.99,
    category: "suits",
    image: suit,
    details: [
      "100% Italian wool",
      "Two-piece suit (jacket and trousers)",
      "Fully canvassed construction",
      "Custom fit with multiple fittings",
      "Available in navy, charcoal, and black",
    ],
  },
  {
    id: "evening-dress",
    name: "Elegant Evening Gown",
    description:
      "A stunning floor-length gown designed for special occasions. Features intricate hand-sewn beadwork and a flattering silhouette.",
    price: 1299.99,
    category: "dresses",
    image: cloth1,
    details: [
      "Premium silk fabric",
      "Hand-sewn beadwork",
      "Built-in corset for structure",
      "Floor-length design with train option",
      "Available in multiple colors",
    ],
  },
  {
    id: "casual-blazer",
    name: "Casual Linen Blazer",
    description:
      "A versatile linen blazer perfect for summer events and casual business settings. Lightweight and breathable.",
    price: 499.99,
    category: "suits",
    image: cloth2,
    details: [
      "100% premium linen",
      "Half-lined for breathability",
      "Patch pockets",
      "Custom fit with two fittings",
      "Available in beige, light blue, and olive",
    ],
  },
  {
    id: "cocktail-dress",
    name: "Modern Cocktail Dress",
    description:
      "A chic knee-length dress perfect for cocktail parties and semi-formal events. Features a modern cut with classic details.",
    price: 599.99,
    category: "dresses",
    image: cloth3,
    details: [
      "Premium crepe fabric",
      "Knee-length design",
      "Structured bodice",
      "Custom fit with two fittings",
      "Available in black, burgundy, and emerald",
    ],
  },
  {
    id: "tuxedo",
    name: "Premium Tuxedo",
    description:
      "An exquisite tuxedo for the most formal occasions. Features satin lapels and traditional styling with modern proportions.",
    price: 1199.99,
    category: "suits",
    image: suit,
    details: [
      "Super 150s wool",
      "Satin peak lapels",
      "Fully canvassed construction",
      "Custom fit with multiple fittings",
      "Includes trousers with satin stripe",
    ],
  },
  {
    id: "wedding-dress",
    name: "Custom Wedding Dress",
    description:
      "A bespoke wedding dress designed to make your special day unforgettable. Includes multiple fittings and consultations.",
    price: 2499.99,
    category: "dresses",
    image: weddinggown,
    details: [
      "Premium fabrics (silk, lace, organza options)",
      "Hand-sewn embellishments",
      "Built-in structure and support",
      "Custom design with multiple fittings",
      "Includes veil and alterations",
    ],
  },
  {
    id: "business-shirt",
    name: "Custom Business Shirt",
    description:
      "A perfectly fitted dress shirt made from Egyptian cotton. Available in various collar and cuff styles.",
    price: 199.99,
    category: "shirts",
    image: cloth3,
    details: [
      "100% Egyptian cotton",
      "Multiple collar and cuff options",
      "Mother of pearl buttons",
      "Custom fit",
      "Available in various colors and patterns",
    ],
  },
  {
    id: "silk-tie",
    name: "Handcrafted Silk Tie",
    description:
      "A luxurious silk tie made with traditional techniques. Perfect for adding a touch of elegance to any outfit.",
    price: 129.99,
    category: "accessories",
    image: suit,
    details: [
      "100% silk",
      "Hand-rolled edges",
      "Traditional seven-fold construction",
      "Available in various patterns and colors",
      "Comes in a gift box",
    ],
  },
  {
    id: "summer-dress",
    name: "Summer Linen Dress",
    description:
      "A lightweight linen dress perfect for summer events and casual outings. Features a flattering cut and comfortable fit.",
    price: 399.99,
    category: "dresses",
    image: cloth2,
    details: [
      "100% premium linen",
      "Knee-length design",
      "Relaxed fit",
      "Custom tailored",
      "Available in white, light blue, and blush",
    ],
  },
  {
    id: "wool-coat",
    name: "Tailored Wool Coat",
    description:
      "A sophisticated wool coat designed to keep you warm and stylish during colder months. Features a classic silhouette with modern details.",
    price: 899.99,
    category: "outerwear",
    image: cloth1,
    details: [
      "Premium wool blend",
      "Fully lined",
      "Custom fit with multiple fittings",
      "Available in camel, navy, and black",
      "Optional cashmere blend upgrade",
    ],
  },
];

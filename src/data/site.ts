import roomStandard from "@/assets/room-standard.jpg";
import roomDeluxe from "@/assets/room-deluxe.jpg";
import roomExecutive from "@/assets/room-executive.jpg";
import roomVip from "@/assets/room-vip.jpg";
import drinkWhiskey from "@/assets/drink-whiskey.jpg";
import drinkChampagne from "@/assets/drink-champagne.jpg";
import drinkWine from "@/assets/drink-wine.jpg";
import drinkBeer from "@/assets/drink-beer.jpg";
import drinkCocktail from "@/assets/drink-cocktail.jpg";
import drinkSoft from "@/assets/drink-soft.jpg";
import galleryLounge from "@/assets/gallery-lounge.jpg";
import galleryExterior from "@/assets/gallery-exterior.jpg";
import galleryPool from "@/assets/gallery-pool.jpg";

export const SITE = {
  name: "ESSENCE PLACE HOTEL & LOUNGE",
  short: "Essence Place",
  tagline: "Luxury, Comfort, Relaxation, and Exceptional Hospitality.",
  whatsapp: "2348167739674", // wa.me expects digits only, no +
  phoneDisplay: "+234 816 773 9674",
  email: "hello@essenceplace.example",
  address: "Essence Place Hotel & Lounge, Anyigba, Kogi State, Nigeria",
  mapEmbed:
    "https://www.google.com/maps?q=Essence+Place+Hotel&hl=en&z=15&output=embed",
  currency: "₦",
  socials: {
    instagram: "#",
    facebook: "#",
    twitter: "#",
  },
};

export type Room = {
  id: string;
  name: string;
  category: string;
  price: number;
  image: string;
  description: string;
  amenities: string[];
  available: boolean;
};

export type Drink = {
  id: string;
  name: string;
  category: string;
  price: number;
  image: string;
  description: string;
  available: boolean;
};

export const ROOMS: Room[] = [
  {
    id: "room-standard",
    name: "Standard Room",
    category: "Standard",
    price: 15000,
    image: roomStandard,
    description:
      "A serene retreat with a plush queen bed, en-suite bathroom, and quiet climate control.",
    amenities: ["Queen Bed", "Air Conditioning", "Free Wi-Fi", "Smart TV", "24/7 Security"],
    available: true,
  },
  {
    id: "room-deluxe",
    name: "Deluxe Room",
    category: "Deluxe",
    price: 20000,
    image: roomDeluxe,
    description:
      "Elevated comfort with a king bed, sitting nook, and warm curated lighting.",
    amenities: ["King Bed", "Mini Bar", "Free Wi-Fi", "Smart TV", "Breakfast Included"],
    available: true,
  },
  {
    id: "room-executive",
    name: "Executive Room",
    category: "Executive",
    price: 35000,
    image: roomExecutive,
    description:
      "A dark, refined suite with lounge seating, workspace, and premium amenities.",
    amenities: ["King Bed", "Lounge Area", "Workspace", "Mini Bar", "Breakfast", "Room Service"],
    available: true,
  },
  {
    id: "room-vip",
    name: "VIP Suite",
    category: "VIP",
    price: 75000,
    image: roomVip,
    description:
      "The pinnacle of the hotel — marble finishes, chandelier lighting, and personalized concierge.",
    amenities: ["Master Suite", "Private Lounge", "Jacuzzi", "Butler Service", "Complimentary Bar"],
    available: true,
  },
];

export const DRINKS: Drink[] = [
  {
    id: "hennessy-vsop",
    name: "Hennessy VSOP",
    category: "Whiskey",
    price: 85000,
    image: drinkWhiskey,
    description: "Smooth, complex, and refined cognac — a house favourite.",
    available: true,
  },
  {
    id: "moet-chandon",
    name: "Moët & Chandon",
    category: "Champagne",
    price: 95000,
    image: drinkChampagne,
    description: "Iconic French champagne with fine bubbles and citrus notes.",
    available: true,
  },
  {
    id: "red-wine-reserve",
    name: "Reserve Red Wine",
    category: "Wine",
    price: 25000,
    image: drinkWine,
    description: "Full-bodied red with velvety tannins and dark fruit finish.",
    available: true,
  },
  {
    id: "heineken",
    name: "Heineken",
    category: "Beer",
    price: 1500,
    image: drinkBeer,
    description: "Crisp, cold, and always in season.",
    available: true,
  },
  {
    id: "signature-cocktail",
    name: "Essence Signature Cocktail",
    category: "Cocktails",
    price: 6500,
    image: drinkCocktail,
    description: "Our house cocktail — citrus, honey, and a whisper of smoke.",
    available: true,
  },
  {
    id: "coca-cola",
    name: "Coca-Cola",
    category: "Soft Drinks",
    price: 800,
    image: drinkSoft,
    description: "Ice-cold classic served in a chilled glass bottle.",
    available: true,
  },
  {
    id: "red-bull",
    name: "Red Bull",
    category: "Energy Drinks",
    price: 2500,
    image: drinkSoft,
    description: "The energy boost that carries the night.",
    available: true,
  },
  {
    id: "still-water",
    name: "Still Water",
    category: "Water",
    price: 500,
    image: drinkSoft,
    description: "Pure, chilled, and refreshing.",
    available: true,
  },
];

export const GALLERY = [
  { src: galleryLounge, alt: "Lounge interior" },
  { src: galleryExterior, alt: "Hotel exterior at night" },
  { src: galleryPool, alt: "Pool at dusk" },
  { src: roomVip, alt: "VIP suite" },
  { src: roomDeluxe, alt: "Deluxe room" },
  { src: roomExecutive, alt: "Executive suite" },
];

export const REVIEWS = [
  {
    name: "Chinedu O.",
    rating: 5,
    text: "Had a great time there. Wonderful customer service and the lounge is beautiful.",
  },
  {
    name: "Aisha M.",
    rating: 4,
    text: "I stayed there once and I honestly salute your services. Very comfortable rooms.",
  },
  {
    name: "David A.",
    rating: 5,
    text: "This place is luxury, eye-catching and comfortable. Will definitely be back.",
  },
  {
    name: "Grace T.",
    rating: 4,
    text: "The signature cocktails are unreal. Perfect vibe for a Friday night.",
  },
];

export const AVG_RATING = 4.2;
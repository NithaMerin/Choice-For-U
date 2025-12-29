import { Product } from './types';

export const PRODUCTS: Product[] = [
  // --- Electronics ---
  {
    id: 'e1',
    name: 'Sonic Bass Pro Headphones',
    price: 249.50,
    category: 'Electronics',
    description: 'Immersive noise-cancelling headphones with 40-hour battery life and studio-quality sound.',
    image: 'https://picsum.photos/400/400?random=2',
    rating: 4.9,
    reviews: 89,
    features: ['Active Noise Cancellation', '40h Battery', 'Bluetooth 5.3']
  },
  {
    id: 'e2',
    name: 'Lumina Smart Watch',
    price: 199.00,
    category: 'Electronics',
    description: 'Track your fitness, sleep, and heart rate with the sleek Lumina Smart Watch.',
    image: 'https://picsum.photos/400/400?random=3',
    rating: 4.6,
    reviews: 215,
    features: ['Heart Rate Monitor', 'GPS', 'Water Resistant']
  },
  {
    id: 'e3',
    name: 'Photon 15 Pro Smartphone',
    price: 999.00,
    category: 'Electronics',
    description: 'The ultimate device for creativity and productivity. Features a 200MP camera and all-day battery.',
    image: 'https://picsum.photos/400/400?random=7',
    rating: 4.9,
    reviews: 512,
    features: ['200MP Camera', 'Titanium Frame', 'AI Processor']
  },
  {
    id: 'e4',
    name: 'Pixel Tab 4',
    price: 499.00,
    category: 'Electronics',
    description: 'Ultra-thin tablet with a stunning OLED display, perfect for entertainment and work.',
    image: 'https://picsum.photos/400/400?random=11',
    rating: 4.7,
    reviews: 310,
    features: ['OLED Display', 'Stylus Support', 'All-day Battery']
  },
  {
    id: 'e5',
    name: 'Echo Soundbar',
    price: 149.00,
    category: 'Electronics',
    description: 'Cinema-quality sound in a compact bar. Features Dolby Atmos support.',
    image: 'https://picsum.photos/400/400?random=12',
    rating: 4.6,
    reviews: 150,
    features: ['Dolby Atmos', 'Wireless Subwoofer', 'Bluetooth']
  },
  
  // --- Footwear ---
  {
    id: 'f1',
    name: 'Nebula Runner X1',
    price: 129.99,
    category: 'Footwear',
    description: 'Ultra-lightweight running shoes designed for marathon endurance.',
    image: 'https://picsum.photos/400/400?random=1',
    rating: 4.8,
    reviews: 124,
    features: ['Reactive Foam', 'Breathable Mesh', 'Carbon Plate']
  },
  {
    id: 'f2',
    name: 'Velocity Sprint Spikes',
    price: 85.00,
    category: 'Footwear',
    description: 'Professional track spikes designed for maximum traction and speed.',
    image: 'https://picsum.photos/400/400?random=8',
    rating: 4.7,
    reviews: 45,
    features: ['Spike Plate', 'Lightweight Upper', 'Aerodynamic']
  },
  {
    id: 'f3',
    name: 'Trail Blazer Hiker',
    price: 155.00,
    category: 'Footwear',
    description: 'Rugged hiking boots with waterproof Gore-Tex lining and vibram soles.',
    image: 'https://picsum.photos/400/400?random=9',
    rating: 4.8,
    reviews: 203,
    features: ['Waterproof', 'Vibram Sole', 'Ankle Support']
  },
  {
    id: 'f4',
    name: 'Street Style Loafers',
    price: 79.99,
    category: 'Footwear',
    description: 'Casual comfort meets modern style in these suede loafers.',
    image: 'https://picsum.photos/400/400?random=10',
    rating: 4.5,
    reviews: 67,
    features: ['Suede Leather', 'Memory Foam', 'Slip-on']
  },

  // --- Fashion ---
  {
    id: 'fa1',
    name: 'Vintage Denim Jacket',
    price: 89.00,
    category: 'Fashion',
    description: 'Classic washed denim jacket with a relaxed fit and durable stitching.',
    image: 'https://picsum.photos/400/400?random=20',
    rating: 4.5,
    reviews: 88,
    features: ['100% Cotton', 'Vintage Wash', 'Unisex Fit']
  },
  {
    id: 'fa2',
    name: 'Silk Touch Scarf',
    price: 45.00,
    category: 'Fashion',
    description: 'Elegant silk blend scarf to add a touch of luxury to any outfit.',
    image: 'https://picsum.photos/400/400?random=21',
    rating: 4.8,
    reviews: 42,
    features: ['Silk Blend', 'Hand Stitched', 'Lightweight']
  },
  {
    id: 'fa3',
    name: 'Urban Aviator Sunglasses',
    price: 120.00,
    category: 'Fashion',
    description: 'Polarized lenses with a classic gold metal frame.',
    image: 'https://picsum.photos/400/400?random=22',
    rating: 4.6,
    reviews: 150,
    features: ['Polarized', 'UV400 Protection', 'Case Included']
  },
  {
    id: 'fa4',
    name: 'Leather Weekender Bag',
    price: 210.00,
    category: 'Fashion',
    description: 'Premium full-grain leather bag perfect for short trips.',
    image: 'https://picsum.photos/400/400?random=23',
    rating: 4.9,
    reviews: 65,
    features: ['Full-Grain Leather', 'Laptop Sleeve', 'Brass Hardware']
  },

  // --- Home & Living ---
  {
    id: 'hl1',
    name: 'Brew Master Pour-Over',
    price: 35.99,
    category: 'Home & Living',
    description: 'Artisan ceramic pour-over coffee maker for the perfect morning brew.',
    image: 'https://picsum.photos/400/400?random=6',
    rating: 4.9,
    reviews: 78,
    features: ['Ceramic', 'Heat Retaining', 'Dishwasher Safe']
  },
  {
    id: 'hl2',
    name: 'Minimalist Desk Lamp',
    price: 55.00,
    category: 'Home & Living',
    description: 'LED dimmable desk lamp with a sleek matte finish.',
    image: 'https://picsum.photos/400/400?random=30',
    rating: 4.7,
    reviews: 210,
    features: ['Dimmable', 'Touch Control', 'USB Charging Port']
  },
  {
    id: 'hl3',
    name: 'Scandinavian Throw Blanket',
    price: 65.00,
    category: 'Home & Living',
    description: 'Soft wool blend throw to keep you warm and cozy.',
    image: 'https://picsum.photos/400/400?random=31',
    rating: 4.8,
    reviews: 112,
    features: ['Wool Blend', 'Hypoallergenic', 'Machine Washable']
  },
  {
    id: 'hl4',
    name: 'Smart Indoor Garden',
    price: 89.99,
    category: 'Home & Living',
    description: 'Grow fresh herbs year-round with this self-watering LED garden.',
    image: 'https://picsum.photos/400/400?random=32',
    rating: 4.5,
    reviews: 95,
    features: ['LED Grow Lights', 'Self-Watering', 'Includes Seeds']
  },

  // --- Beauty & Personal Care ---
  {
    id: 'b1',
    name: 'Hydra-Glow Serum',
    price: 42.00,
    category: 'Beauty',
    description: 'Vitamin C enriched serum for radiant and hydrated skin.',
    image: 'https://picsum.photos/400/400?random=40',
    rating: 4.7,
    reviews: 320,
    features: ['Vitamin C', 'Hyaluronic Acid', 'Vegan']
  },
  {
    id: 'b2',
    name: 'Botanical Clay Mask',
    price: 28.00,
    category: 'Beauty',
    description: 'Detoxifying clay mask with botanical extracts.',
    image: 'https://picsum.photos/400/400?random=41',
    rating: 4.6,
    reviews: 180,
    features: ['Deep Cleansing', 'Pore Minimizing', 'Cruelty-Free']
  },
  {
    id: 'b3',
    name: 'Sonic Facial Cleanser',
    price: 75.00,
    category: 'Beauty',
    description: 'Silicone facial cleansing brush for deep yet gentle exfoliation.',
    image: 'https://picsum.photos/400/400?random=42',
    rating: 4.8,
    reviews: 245,
    features: ['Waterproof', 'Rechargeable', 'Antibacterial Silicone']
  },
  {
    id: 'b4',
    name: 'Organic Shea Butter',
    price: 18.00,
    category: 'Beauty',
    description: 'Raw, unrefined shea butter for intense body moisturization.',
    image: 'https://picsum.photos/400/400?random=43',
    rating: 4.9,
    reviews: 400,
    features: ['100% Organic', 'Unrefined', 'Multi-purpose']
  },

  // --- Sports & Outdoors ---
  {
    id: 's1',
    name: 'Aero Flex Yoga Mat',
    price: 45.00,
    category: 'Sports',
    description: 'Non-slip, eco-friendly yoga mat with alignment markers.',
    image: 'https://picsum.photos/400/400?random=5',
    rating: 4.5,
    reviews: 342,
    features: ['Non-slip', 'Eco-friendly', 'Extra Thick']
  },
  {
    id: 's2',
    name: 'Adjustable Dumbbells Set',
    price: 199.00,
    category: 'Sports',
    description: 'Space-saving adjustable dumbbells ranging from 5 to 50 lbs.',
    image: 'https://picsum.photos/400/400?random=50',
    rating: 4.8,
    reviews: 156,
    features: ['5-50 lbs Range', 'Compact Design', 'Non-slip Grip']
  },
  {
    id: 's3',
    name: 'Pro Cycling Helmet',
    price: 85.00,
    category: 'Sports',
    description: 'Aerodynamic and lightweight helmet for serious cyclists.',
    image: 'https://picsum.photos/400/400?random=51',
    rating: 4.7,
    reviews: 92,
    features: ['Aerodynamic', 'Ventilated', 'Safety Certified']
  },
  {
    id: 's4',
    name: 'Thermal Insulated Flask',
    price: 32.00,
    category: 'Sports',
    description: 'Keep your drinks cold for 24 hours or hot for 12 hours.',
    image: 'https://picsum.photos/400/400?random=52',
    rating: 4.9,
    reviews: 512,
    features: ['Double Wall Vacuum', 'Stainless Steel', 'Leak Proof']
  }
];

// Price history mock data for charts
export const PRICE_HISTORY = [
  { month: 'Jan', price: 140 },
  { month: 'Feb', price: 135 },
  { month: 'Mar', price: 129.99 },
  { month: 'Apr', price: 132 },
  { month: 'May', price: 129.99 },
  { month: 'Jun', price: 125 },
];
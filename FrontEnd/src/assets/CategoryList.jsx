import { FaBox, FaDollarSign, FaFlipboard, FaInstagram, FaLinkedin, FaShoppingCart, FaStore } from "react-icons/fa";
import { BsFillWalletFill, BsGraphUpArrow } from "react-icons/bs";
import { HiMiniUserGroup } from "react-icons/hi2";
import { MdDashboard, MdLocalOffer, MdLogout } from "react-icons/md";
import { IoLogoTwitter, IoMdLock } from "react-icons/io";
import { RiShoppingBagFill } from "react-icons/ri";
import { FaLocationDot } from "react-icons/fa6";
import { BsShopWindow } from "react-icons/bs";
import { BiSolidCoupon } from "react-icons/bi";
import { SiFacebook } from "react-icons/si";

export const navbarIcones = [
  {icone: <SiFacebook/>},
  {icone: <IoLogoTwitter/>},
  {icone: <FaInstagram/>},
  {icone: <FaLinkedin/>},
]

export const sub = [
  {
    gender: "men",
    items: ["shirt", "tshirt","jeans", "formal", "track"]
  },
  {
    gender: "man",
    items: ["top", "tshirt", "jeans", "dress","co-ords"],
  },

]




export const products = [
  // MEN
  {
    _id: 1,
    name: "Slim Fit Casual Shirt",
    category: "Men",
    subCategory: "Clothing",
    brand: "Urban Fit",
    price: 1899,
    oldPrice: 2499,
    stock: 12,
    sold: 18,
    rating: 4.5,
    description: "Premium cotton slim fit casual shirt for men.",
    badge: "Trending",
    images: [
      "/images/men/shirt1.png",
      "/images/men/shirt1-2.png",
    ],
  },

  {
    _id: 2,
    name: "Classic Denim Jacket",
    category: "Men",
    subCategory: "Clothing",
    brand: "Levio",
    price: 3299,
    oldPrice: 3999,
    stock: 7,
    sold: 11,
    rating: 4.7,
    description: "Stylish blue denim jacket perfect for winter outfits.",
    badge: "Top Rated",
    images: [
      "/images/men/jacket1.png",
    ],
  },

  {
    _id: 3,
    name: "Running Sneakers",
    category: "Men",
    subCategory: "Footwear",
    brand: "FastWalk",
    price: 2599,
    oldPrice: 3200,
    stock: 14,
    sold: 24,
    rating: 4.3,
    description: "Comfortable running shoes for daily use.",
    badge: "New Arrival",
    images: [
      "/images/men/shoes1.png",
    ],
  },

  // WOMEN
  {
    _id: 4,
    name: "Printed Kaftan Maxi Dress",
    category: "Women",
    subCategory: "Clothing",
    brand: "BK Fashion",
    price: 2250,
    oldPrice: 2500,
    stock: 8,
    sold: 7,
    rating: 4.2,
    description: "Elegant printed kaftan maxi dress with soft fabric.",
    badge: "Trending",
    images: [
      "/images/women/kaftan1.png",
      "/images/women/kaftan2.png",
      "/images/women/kaftan3.png",
    ],
  },

  {
    _id: 5,
    name: "Floral Summer Top",
    category: "Women",
    subCategory: "Clothing",
    brand: "Pink Mood",
    price: 1499,
    oldPrice: 1999,
    stock: 10,
    sold: 15,
    rating: 4.6,
    description: "Lightweight floral top perfect for summer.",
    badge: "Best Seller",
    images: [
      "/images/women/top1.png",
    ],
  },

  {
    _id: 6,
    name: "Canvas Slip-ons",
    category: "Women",
    subCategory: "Footwear",
    brand: "StreetStep",
    price: 3555,
    oldPrice: 4500,
    stock: 5,
    sold: 21,
    rating: 4.8,
    description: "Comfortable and trendy canvas slip-ons.",
    badge: "Top Rated",
    images: [
      "/images/women/slipon1.png",
    ],
  },

  // KIDS
  {
    _id: 7,
    name: "Kids Cartoon T-Shirt",
    category: "Kids",
    subCategory: "Clothing",
    brand: "TinyWear",
    price: 899,
    oldPrice: 1200,
    stock: 20,
    sold: 32,
    rating: 4.4,
    description: "Cute cartoon printed t-shirt for kids.",
    badge: "Trending",
    images: [
      "/images/kids/tshirt1.png",
    ],
  },

  {
    _id: 8,
    name: "Baby Winter Hoodie",
    category: "Kids",
    subCategory: "Clothing",
    brand: "WarmBug",
    price: 1699,
    oldPrice: 2200,
    stock: 9,
    sold: 13,
    rating: 4.7,
    description: "Warm fleece hoodie for winter season.",
    badge: "New Arrival",
    images: [
      "/images/kids/hoodie1.png",
    ],
  },

  {
    _id: 9,
    name: "Kids Sports Shoes",
    category: "Kids",
    subCategory: "Footwear",
    brand: "JumpX",
    price: 2100,
    oldPrice: 2700,
    stock: 11,
    sold: 19,
    rating: 4.5,
    description: "Durable and lightweight sports shoes for kids.",
    badge: "Top Rated",
    images: [
      "/images/kids/shoes1.png",
    ],
  },

  // BEAUTY
  {
    _id: 10,
    name: "Matte Lipstick Set",
    category: "Beauty",
    subCategory: "Makeup",
    brand: "GlowUp",
    price: 1299,
    oldPrice: 1800,
    stock: 25,
    sold: 40,
    rating: 4.9,
    description: "Long-lasting matte lipstick combo pack.",
    badge: "Best Seller",
    images: [
      "/images/beauty/lipstick1.png",
    ],
  },

  {
    _id: 11,
    name: "Vitamin C Face Serum",
    category: "Beauty",
    subCategory: "Skincare",
    brand: "PureSkin",
    price: 1599,
    oldPrice: 2100,
    stock: 16,
    sold: 28,
    rating: 4.8,
    description: "Brightening serum for glowing skin.",
    badge: "Trending",
    images: [
      "/images/beauty/serum1.png",
    ],
  },

  {
    _id: 12,
    name: "Luxury Perfume",
    category: "Beauty",
    subCategory: "Fragrance",
    brand: "Royal Mist",
    price: 3999,
    oldPrice: 4999,
    stock: 6,
    sold: 14,
    rating: 4.6,
    description: "Premium long-lasting luxury fragrance.",
    badge: "Top Rated",
    images: [
      "/images/beauty/perfume1.png",
    ],
  },
];


export const sidebardetail = [
  
  {
    icon: <HiMiniUserGroup />,
    name: "Users",
    link: "user"
  },
  {
    icon: <FaStore />,
    name: "Sellers",
    link: "sellers"
  },
  {
    icon: <FaBox />,
    name: "Inventory",
    link: "products"
  },
  {
    icon: <FaShoppingCart />,
    name: "Orders",
    link: "orders"
  },
]

export const marketing = [
  {
    icon: <MdLocalOffer />,
    name: "deals"
  },
  {
    icon: <MdLocalOffer />,
    name: "mega deals"
  },
]

export const performance = [
  {
    name: "Gross Revenue",
    num: 0,
    icon: <FaDollarSign />,
    graph: 12.5,
    time: "Monthly",
    iconBg: "bg-green-500",
  },
  {
    name: "Platform Income",
    num: 0,
    icon: <BsGraphUpArrow />,
    graph: 8.2,
    time: "Monthly",
    iconBg: "bg-purple-500",
  },
  {
    name: "Total Orders",
    num: 0,
    icon: <FaShoppingCart />,
    graph: 15.3,
    time: "Monthly",
    iconBg: "bg-orange-400",

  },
  {
    name: "Active Users",
    num: 0,
    icon: <HiMiniUserGroup />,
    graph: 5.1,
    time: "Monthly",
    iconBg: "bg-rose-500",
  }
]

export const accountdetail = [
  {
    name: "Dashboard",
    icon: <MdDashboard />
  },
  {
    name: "Update Password",
    icon: <IoMdLock />
  },
  {
    name: "Orders",
    icon: <RiShoppingBagFill />
  },
  {
    name: "My Wallet",
    icon: <BsFillWalletFill />
  },
  {
    name: "Addresses",
    icon: <FaLocationDot />
  },
  {
    name: "Become Seller",
    icon: <BsShopWindow />
  }
]

export const categories = [
  {
    img: "https://res.cloudinary.com/dsyfbtvba/image/upload/v1782546921/d1tiitdsyjwvmublvigf.avif",
    name: 'Man',
    gender: "men",
    category:"clothes",
    items: ["shirt", "tshirt","jeans", "formal", "track"]
  },
  {
    img: "https://res.cloudinary.com/dsyfbtvba/image/upload/v1782715882/e5bs4fnzl5fws4nixpim.avif",
    name: "Women",
    gender: "women",
    category:"clothes",
    items: ["top", "tshirt", "jeans", "dress","co-ords"]
  },
  {
    img: "https://res.cloudinary.com/dsyfbtvba/image/upload/v1782538202/jc7uxxaovjeilkyjgvph.avif",
    name: "Beauty",
    gender: "women",
    category:"beauty",
    items: ["lipstick", "makeup", "foundation","perfume"]

  },
  {
    img: "https://res.cloudinary.com/dsyfbtvba/image/upload/v1782552427/nmk01rsxyra7bivo3qby.avif",
    name: "Footwear",
    gender: "men",
    category:"footwear",
    items: ["sportsshoes","formalshoes","snickers",'flipflops','boots',"flipflopsman"]
  },
  {
    img: "https://res.cloudinary.com/dsyfbtvba/image/upload/v1782705022/jmyjm0timwvzwtlyninr.avif",
    gender: "women",
    category:"footwear",
    name:"Heels",
    items: ["heels","flats", "shoes", "flipflops"]
  }
]



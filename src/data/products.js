import saree1 from "../assets/images/products/saree1.jpg";
import kurti1 from "../assets/images/products/kurti1.jpg";
import accessory1 from "../assets/images/products/accessory1.jpg";
import partywear1 from "../assets/images/products/partywear1.jpg";
const products = [
  {
    id: 1,
    name: "Saree",
    category: "Sarees",
    price: 2499,
    originalPrice: 3199,
    discount: 22,
    image: saree1,
    colors: ["Red", "Maroon"],
    sizes: ["Free Size"],
    stock: 12,
    rating: 4.8,
    reviews: 132,
    featured: true,
    newArrival: true,
  },

  {
    id: 2,
    name: "Cotton Kurti",
    category: "Kurtis",
    price: 999,
    originalPrice: 1499,
    discount: 33,
    image: kurti1,
    colors: ["Blue", "White"],
    sizes: ["S", "M", "L", "XL"],
    stock: 20,
    rating: 4.6,
    reviews: 87,
    featured: true,
    newArrival: false,
  },

  {
    id: 3,
    name: "party wear",
    category: "party wear",
    price: 999,
    originalPrice: 1499,
    discount: 33,
    image: partywear1,
    colors: ["Blue", "White"],
    sizes: ["S", "M", "L", "XL"],
    stock: 13,
    rating: 4.6,
    reviews: 87,
    featured: true,
    newArrival: false,
  },
  
  {
    id: 4,
    name: "Bangles Set",
    category: "Accessories",
    price: 599,
    originalPrice: 799,
    discount: 25,
    image: accessory1,
    colors: ["Gold"],
    sizes: ["Free Size"],
    stock: 50,
    rating: 4.9,
    reviews: 210,
    featured: false,
    newArrival: true,
  },
];

export default products;
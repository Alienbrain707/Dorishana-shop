import { useState } from "react";
import products from "../../data/products";
import ProductCard from "../../components/common/ProductCard";

export default function Shop() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [search, setSearch] = useState("");
  const [sortBy, setSortBy] = useState("featured");

  const categories = [
    "All",
    "Sarees",
    "Kurtis",
    "Accessories",
    "Party Wear",
  ];

  let filteredProducts = [...products];

  // Search
  filteredProducts = filteredProducts.filter((product) =>
    product.name.toLowerCase().includes(search.toLowerCase())
  );

  // Category
  if (selectedCategory !== "All") {
    filteredProducts = filteredProducts.filter(
      (product) => product.category === selectedCategory
    );
  }

  // Sort
  switch (sortBy) {
    case "low":
      filteredProducts.sort((a, b) => a.price - b.price);
      break;

    case "high":
      filteredProducts.sort((a, b) => b.price - a.price);
      break;

    case "rating":
      filteredProducts.sort((a, b) => b.rating - a.rating);
      break;

    default:
      break;
  }

  return (
    <div className="min-h-screen bg-black text-white">

      <div className="max-w-7xl mx-auto px-6 py-12">

        <h1 className="text-5xl text-yellow-400 mb-10">
          Shop
        </h1>

        {/* Search + Sort */}

        <div className="flex flex-col md:flex-row gap-5 mb-8">

          <input
            placeholder="Search products..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="flex-1 rounded-xl bg-neutral-900 p-4 outline-none"
          />

          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="rounded-xl bg-neutral-900 p-4"
          >
            <option value="featured">Featured</option>
            <option value="low">Price Low → High</option>
            <option value="high">Price High → Low</option>
            <option value="rating">Highest Rated</option>
          </select>

        </div>

        {/* Categories */}

        <div className="flex flex-wrap gap-4 mb-12">

          {categories.map((cat) => (

            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-6 py-3 rounded-full transition ${
                selectedCategory === cat
                  ? "bg-yellow-400 text-black"
                  : "bg-neutral-900"
              }`}
            >
              {cat}
            </button>

          ))}

        </div>

        {/* Products */}

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          {filteredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
            />
          ))}

        </div>

      </div>

    </div>
  );
}
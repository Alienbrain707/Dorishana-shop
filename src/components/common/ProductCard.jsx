import { Heart, ShoppingBag, Star } from "lucide-react";

export default function ProductCard({ product }) {
  return (
    <div className="group overflow-hidden rounded-2xl bg-neutral-900 border border-white/10 hover:border-yellow-400 transition duration-300">

      <div className="relative">

        <img
          src={product.image}
          alt={product.name}
          className="h-80 w-full object-cover group-hover:scale-105 transition duration-500"
        />

        <button className="absolute top-4 right-4 rounded-full bg-black/60 p-2">
          <Heart size={18} />
        </button>

      </div>

      <div className="p-5">

        <p className="text-sm text-yellow-400">
          {product.category}
        </p>

        <h3 className="mt-2 text-xl font-semibold">
          {product.name}
        </h3>

        <div className="flex items-center gap-2 mt-2">

          <Star
            size={16}
            className="fill-yellow-400 text-yellow-400"
          />

          <span>{product.rating}</span>

        </div>

        <div className="mt-4 flex items-center gap-3">

          <span className="text-2xl font-bold">
            ₹{product.price}
          </span>

          <span className="line-through text-gray-500">
            ₹{product.originalPrice}
          </span>

        </div>

        <button className="mt-6 w-full rounded-xl bg-yellow-400 py-3 font-semibold text-black hover:bg-yellow-300 transition">
          <ShoppingBag className="inline mr-2" size={18} />
          Add to Cart
        </button>

      </div>

    </div>
  );
}
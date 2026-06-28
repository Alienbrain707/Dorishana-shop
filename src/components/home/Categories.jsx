import {
  Shirt,
  Gem,
  Sparkles,
  Crown,
} from "lucide-react";

const categories = [
  {
    title: "Sarees",
    icon: Sparkles,
    color: "from-yellow-400 to-yellow-600",
  },
  {
    title: "Kurtis",
    icon: Shirt,
    color: "from-pink-400 to-rose-500",
  },
  {
    title: "Accessories",
    icon: Gem,
    color: "from-purple-400 to-fuchsia-500",
  },
  {
    title: "Party Wear",
    icon: Crown,
    color: "from-orange-400 to-red-500",
  },
];

export default function Categories() {
  return (
    <section className="bg-black py-24">
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-5xl text-center text-yellow-400 mb-4">
          Shop by Category
        </h2>

        <p className="text-center text-gray-400 mb-16">
          Explore our carefully curated collections.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

          {categories.map((category) => {
            const Icon = category.icon;

            return (
              <div
                key={category.title}
                className="group rounded-3xl bg-neutral-900 border border-white/10 p-10 text-center hover:scale-105 hover:border-yellow-400 transition duration-300 cursor-pointer"
              >
                <div
                  className={`w-20 h-20 mx-auto rounded-full bg-gradient-to-br ${category.color} flex items-center justify-center`}
                >
                  <Icon size={36} className="text-black" />
                </div>

                <h3 className="mt-8 text-2xl font-semibold">
                  {category.title}
                </h3>

                <p className="mt-3 text-gray-400">
                  Explore Collection
                </p>
              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
}
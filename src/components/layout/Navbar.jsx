import logo from "../../assets/logo/logo.png";
import { Search, User, ShoppingBag, Menu } from "lucide-react";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-black/80 backdrop-blur-md border-b border-white/10">
      <nav className="max-w-7xl mx-auto px-8 py-5 flex justify-between items-center">

        <div className="flex items-center gap-3">

          <img
            src={logo}
            alt="Dorishana"
            className="h-14"
          />

          <span className="text-3xl text-yellow-400 font-bold">
            Dorishana
          </span>

        </div>

        <div className="hidden lg:flex gap-10 text-gray-300">

          <a className="hover:text-yellow-400 transition" href="#">
            Home
          </a>

          <a className="hover:text-yellow-400 transition" href="#">
            Shop
          </a>

          <a className="hover:text-yellow-400 transition" href="#">
            Collections
          </a>

          <a className="hover:text-yellow-400 transition" href="#">
            About
          </a>

          <a className="hover:text-yellow-400 transition" href="#">
            Contact
          </a>

        </div>

        <div className="flex items-center gap-5">

          <Search className="cursor-pointer hover:text-yellow-400 transition"/>

          <User className="cursor-pointer hover:text-yellow-400 transition"/>

          <ShoppingBag className="cursor-pointer hover:text-yellow-400 transition"/>

          <Menu className="lg:hidden"/>

        </div>

      </nav>
    </header>
  );
}
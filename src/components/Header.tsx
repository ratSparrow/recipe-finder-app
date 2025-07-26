import { Link } from "react-router-dom";

export const Header = () => (
  <header className="bg-green-600 text-white p-4 shadow">
    <nav className="flex justify-between max-w-6xl mx-auto">
      <h1 className="font-bold text-xl">Recipe Finder 🍳</h1>
      <div className="space-x-4">
        <Link to="/" className="hover:underline">Home</Link>
        <Link to="/about" className="hover:underline">About</Link>
        <Link to="/contact" className="hover:underline">Contact</Link>
      </div>
    </nav>
  </header>
);

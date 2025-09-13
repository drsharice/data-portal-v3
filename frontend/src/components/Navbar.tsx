// src/components/Navbar.tsx
import { Link } from "react-router-dom"

function Navbar() {
  return (
    <nav className="bg-blue-600 text-white p-4 flex space-x-6">
      <Link to="/" className="hover:underline">Home</Link>
      <Link to="/data" className="hover:underline">Data</Link>
      <Link to="/api" className="hover:underline">API</Link>
      <Link to="/catalog" className="hover:underline">Catalog</Link>
      <Link to="/about" className="hover:underline">About</Link>
    </nav>
  )
}

export default Navbar

import { NavLink } from "react-router-dom"

function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-black text-white shadow-md">
      <div className="container mx-auto flex items-center justify-between px-6 py-3">
        
        {/* Logo */}
        <div className="font-bold text-lg text-red-600">Data Portal</div>

        {/* Nav links */}
        <div className="flex space-x-6">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `hover:text-yellow-400 ${
                isActive ? "text-yellow-400 border-b-2 border-yellow-400" : ""
              }`
            }
          >
            Home
          </NavLink>
          <NavLink to="/data" className="hover:text-yellow-400">Data</NavLink>
          <NavLink to="/api" className="hover:text-yellow-400">API</NavLink>
          <NavLink to="/catalog" className="hover:text-yellow-400">Catalog</NavLink>
          <NavLink to="/about" className="hover:text-yellow-400">About</NavLink>
        </div>

        {/* Search + Guest */}
        <div className="flex items-center space-x-4">
          <input
            type="text"
            placeholder="Search..."
            className="px-2 py-1 rounded bg-gray-800 text-sm focus:outline-none"
          />
          <span className="text-sm">Welcome, Guest</span>
        </div>
      </div>
    </nav>
  )
}

export default Navbar

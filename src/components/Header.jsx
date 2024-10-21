import { useState } from "react";
const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="flex justify-between items-center py-4">
      {/* Hamburger Icon for mobile */}
      <div className="md:hidden">
        <button
          onClick={toggleMenu}
          className="text-gray-800 focus:outline-none"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
            />
          </svg>
        </button>
      </div>
      <div className="logo">
        <h1 className="text-2xl font-bold text-purple-600">Psinaf</h1>
      </div>

      {/* Navbar for desktop */}
      <nav className="hidden md:flex space-x-4">
        <a href="#" className="text-sm font-medium">
          Inicio
        </a>
        <a href="#" className="text-sm font-medium">
          Nosotros
        </a>
        <a href="#" className="text-sm font-medium">
          Nuestro equipo
        </a>
        <a href="#" className="text-sm font-medium">
          Integracion escolar
        </a>
        <a href="#" className="text-sm font-medium">
          Actividades institucionales
        </a>
        <a href="#" className="text-sm font-medium">
          Sumate a nuestro equipo
        </a>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-16 left-0 right-0 bg-white shadow-lg z-10">
          <nav className="flex flex-col space-y-4 p-4">
            <a href="#" className="text-sm font-medium">
              Inicio
            </a>
            <a href="#" className="text-sm font-medium">
              Nosotros
            </a>
            <a href="#" className="text-sm font-medium">
              Nuestro equipo
            </a>
            <a href="#" className="text-sm font-medium">
              Integracion escolar
            </a>
            <a href="#" className="text-sm font-medium">
              Actividades institucionales
            </a>
            <a href="#" className="text-sm font-medium">
              Sumate a nuestro equipo
            </a>
          </nav>
        </div>
      )}

      {/* Contact */}
      <div className="md:flex items-center space-x-4">
        <button className="border border-purple-600 text-purple-600 px-4 py-2 rounded">
          Contacto
        </button>
      </div>
    </header>
  );
};

export default Header;

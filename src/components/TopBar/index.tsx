import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { MenuIcon, XIcon } from "@heroicons/react/solid";
const TopBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 1024);

  // Detecta los cambios en el tamaño de la pantalla
  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 1024);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <div className="bg-gray-800 text-white w-full fixed top-0 left-0 z-10">
      <div className="flex justify-between items-center p-4 max-w-screen-xl mx-auto">
        <div className="text-xl font-bold text-left">Admin Dashboard</div>

        {/* Menú en pantallas grandes */}
        <div className={`${isDesktop ? "block" : "hidden"} space-x-4`}>
          <Link to="/" className="hover:text-gray-400">
            Dashboard
          </Link>
          <Link to="/listings" className="hover:text-gray-400">
            Listados
          </Link>
          <Link to="/users" className="hover:text-gray-400">
            Usuarios
          </Link>
          <Link to="/transactions" className="hover:text-gray-400">
            Transacciones
          </Link>
        </div>

        {/* Icono de menú para pantallas pequeñas */}
        <div className="lg:hidden">
          <button onClick={toggleMenu}>
            {isOpen ? (
              <XIcon className="w-8 h-8 text-white" />
            ) : (
              <MenuIcon className="w-8 h-8 text-white" />
            )}
          </button>
        </div>
      </div>

      {/* Menú en pantallas pequeñas */}
      {isOpen && !isDesktop && (
        <div className="bg-gray-800 text-white p-4">
          <Link
            to="/"
            className="block py-2 hover:bg-gray-700"
            onClick={toggleMenu}
          >
            Dashboard
          </Link>
          <Link
            to="/listings"
            className="block py-2 hover:bg-gray-700"
            onClick={toggleMenu}
          >
            Listados
          </Link>
          <Link
            to="/users"
            className="block py-2 hover:bg-gray-700"
            onClick={toggleMenu}
          >
            Usuarios
          </Link>
          <Link
            to="/transactions"
            className="block py-2 hover:bg-gray-700"
            onClick={toggleMenu}
          >
            Transacciones
          </Link>
        </div>
      )}
    </div>
  );
};

export default TopBar;

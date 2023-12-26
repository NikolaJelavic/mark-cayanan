import { Link } from "react-router-dom";
import { useState } from "react";

const NavLink = ({ to, children, onClick }) => (
  <li>
    <Link
      to={to}
      className="text-pink-300 font-bold hover:text-pink-400 text-2xl bg-slate-100 px-2 rounded-xl my-3"
      onClick={onClick}
    >
      {children}
    </Link>
  </li>
);

export default function Navbar() {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <nav className=" p-6 bg-transparent">
      <div className="flex justify-between mx-auto relative z-10">
      <button
          className="lg:hidden text-white text-3xl focus:outline-none bg-pink-300 p-4 justify-left"
          onClick={toggleMenu}
        >
          &#9776;
        </button>
        <ul
          className={`${
            isMenuOpen ? "block" : "hidden"
          } lg:flex lg:justify-evenly  lg:space-x-4 lg:w-full w-36 absolute lg:relative bg-pink-300 lg:bg-transparent top-full lg:top-0 left-0 lg:left-auto  lg:mt-0 p-4 lg:p-0 `}
        >
          <NavLink to="/" onClick={toggleMenu} end>
            Home
          </NavLink>
          <NavLink to="/about" onClick={toggleMenu}>
            About
          </NavLink>
          <NavLink to="/works" onClick={toggleMenu}>
            Works
          </NavLink>
          <NavLink to="/presence" onClick={toggleMenu}>
            Presence
          </NavLink>
          <NavLink to="/contact" onClick={toggleMenu}>
            Contact
          </NavLink>
        </ul>
     </div>
    </nav>
  );
}

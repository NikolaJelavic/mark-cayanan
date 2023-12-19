import { Link } from "react-router-dom";

const NavLink = ({ to, children }) => (
  <li>
    <Link
      to={to}
      className="text-pink-300 font-bold hover:text-pink-400 text-2xl bg-slate-100 px-2 rounded-xl"
    >
      {children}
    </Link>
  </li>
);

export default function Navbar() {
  return (
    <nav className=" p-6   bg-transparent">
      <ul className="flex justify-around space-x-4 w-3/5 mx-auto relative z-10">
    <NavLink to="/">Home</NavLink>
    <NavLink to="/about">About</NavLink>
    <NavLink to="/works">Works</NavLink>
    <NavLink to="/contact">Contact</NavLink>
  </ul>
    </nav>
  );
}

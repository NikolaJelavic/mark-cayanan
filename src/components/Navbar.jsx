import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className=" p-6   ">
      <ul className="flex justify-around space-x-4 w-3/5 mx-auto">
        <li>
          <Link
            to="/mark-cayanan/about"
            className="text-pink-300  font-bold hover:text-pink-400 text-2xl"
          >
            About
          </Link>
        </li>
        <li>
          <Link
            to="/mark-cayanan/works"
            className="text-pink-300 font-bold hover:text-pink-400 text-2xl"
          >
            Works
          </Link>
        </li>
        <li>
          <Link
            to="/mark-cayanan/contact"
            className="text-pink-300 font-bold hover:text-pink-400 text-2xl"
          >
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
}

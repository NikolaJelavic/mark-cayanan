import { Link } from "react-router-dom"

export default function Navbar() {
  return (
    <nav className=" p-6 w-screen">
  <ul className="flex justify-around space-x-4 w-3/5 mx-auto">
    <li>
      <Link to="/home" className="text-pink-200 font-bold hover:text-pink-300 text-lg">Home</Link>
    </li>
    <li>
      <Link to="/about" className="text-pink-200 font-bold hover:text-pink-300 text-lg">About</Link>
    </li>
    <li>
      <Link to="/work" className="text-pink-200 font-bold hover:text-pink-300 text-lg">Work</Link>
    </li>
    <li>
      <Link to="/contact" className="text-pink-200 font-bold hover:text-pink-300 text-lg">Contact</Link>
    </li>
  </ul>
</nav>
  )
}
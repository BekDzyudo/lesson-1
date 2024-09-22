import { useContext } from "react";
import { Link } from "react-router-dom";
import { GlobalContext } from "../context/globalContext";
// icon heart
import { FaHeart } from "react-icons/fa";

// rrd
function Navbar() {
  const { activeColor } = useContext(GlobalContext);
  return (
    <header style={{ background: `${activeColor}` }} className="py-5">
      <div className="flex justify-between items-center align-elements">
        <Link className="text-white text-3xl">Logo</Link>
        <nav className="hidden md:flex">
          <ul className="flex gap-5 items-center">
            <li>
              <Link
                to="/"
                className="text-white font-medium hover:text-slate-400"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className="text-white font-medium hover:text-slate-400"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="text-white font-medium hover:text-slate-400"
              >
                Contact
              </Link>
            </li>
            <li>
              <Link to="/likes">
                <FaHeart className="text-red-700 text-lg" />
              </Link>
            </li>
          </ul>
        </nav>
        <button className="text-white font-medium hover:text-slate-400 md:hidden">
          Show
        </button>
      </div>
    </header>
  );
}

export default Navbar;

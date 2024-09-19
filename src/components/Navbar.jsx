import { Link } from "react-router-dom";

// rrd
function Navbar() {
  return (
    <header className="bg-slate-600 py-5">
      <div className="flex justify-between items-center align-elements">
        <Link className="text-white text-3xl">Logo</Link>
        <nav className="hidden md:flex">
          <ul className="flex gap-5">
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

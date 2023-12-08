import LOGO from "./Assets/ANIFLIX.png";
import { FiSearch } from "react-icons/fi";
import "./NavBar.css";

export default function NavBar() {
  return (
    <>
      <heading className="flex bg-dark-gray justify-between items-center px-12">
        <div className="logo">
          <a href="#">
            <img src={LOGO} alt="ANI-FLIX" className="h-24" />
          </a>
        </div>

        <nav className="flex justify-center items-center gap-5">
          <a href="#">Movies</a>
          <a href="#">Trending</a>
          <a href="#">Upcoming</a>
        </nav>

        <button>
          <FiSearch />
        </button>
      </heading>
    </>
  );
}

import MovieCard from "./MovieCard";
import "./Slider.css";
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";

export default function Slider() {
  return (
    <div className="flex justify-around items-center">
      <section>
        <MovieCard />
        <MovieCard />
        <MovieCard />
      </section>
      <div className="slide-buttons">
        <div>
          <IoIosArrowForward />
        </div>
        <div>
          <IoIosArrowBack />
        </div>
      </div>
    </div>
  );
}

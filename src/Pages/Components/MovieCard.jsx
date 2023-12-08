import MovieLogo from "./Assets/DMDP.jpeg";
import "./MovieCard.css";
import { GoDot } from "react-icons/go";
import { BsThreeDots } from "react-icons/bs";

export default function MovieCard() {
  const MovieName = "Death Mount Death Play";
  const Date = "27/11/2023";
  const Genres = ["Drama", "Adventure"];
  const Duration = "3h 5m";
  const Description =
    "A necromancer in a distant era incarnates himself into a young boy in modern Tokyo. But he gets caught in a mystery about the boy and his own past.";

  return (
    <>
      <div className="card box-content p-0 rounded-2xl mr-4">
        <div className="card-description">
          <div className="badge cursor-pointer">Tv-Series</div>
          <h2 className="movieName cursor-pointer">{MovieName}</h2>
          <h3>
            {Date}
            <span>
              <GoDot />
            </span>
            {Genres}
            <span>
              <GoDot />
            </span>
            {Duration}
          </h3>
          <p className="description">{Description}</p>
          <div title="User Ratings" className="user-rating">
            86
          </div>
        </div>

        <div>
          <div className="three-dots">
            <BsThreeDots />
          </div>
          <img
            src={MovieLogo}
            alt={"name of movie"}
            className="h-80 rounded-r-2xl"
          />
        </div>
      </div>
    </>
  );
}

import IMG from "./Assets/DMDP.jpeg";
import "./MovieCardV2.css";
import { GoDot } from "react-icons/go";

export default function MovieCard2() {
  const name = "Death Mount Death Play";
  const year = "2023";
  const duration = "109 min";
  const genre = ["Action", "Drama"];
  let genreList = "";
  for (const e of genre) {
    if (e !== genre[genre.length - 1]) {
      genreList = genreList + ` ${e + ","}`;
    } else {
      genreList = genreList + ` ${e}`;
    }
  }

  return (
    <>
      <div className="mb-6 w-60 rounded-xl hex-1f1f1f card-hover flex flex-col">
        <img src={IMG} alt={"ANIME BANNER"} className="w-60 rounded-t-xl" />
        <div className="score text-white">86</div>
        <h2 className="font-bold text-center text-white text-lg pt-4 cursor-pointer">
          {name}
        </h2>
        <h3 className="text-white text-sm pl-3">
          {year}
          <GoDot />
          {duration}
        </h3>
        <h3 className="genre pt-4 text-base font-semibold justify-self-center self-center pb-2">
          {genreList}
        </h3>
      </div>
    </>
  );
}

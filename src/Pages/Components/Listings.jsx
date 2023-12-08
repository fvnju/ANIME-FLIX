import "./Listings.css";
import MovieCard2 from "./MovieCardV2";

export default function Listings() {
  return (
    <>
      <section id="listings-body">
        <nav>
          <li>Latest</li>
          <li>Trending</li>
          <li>Upcoming</li>
        </nav>

        <div className="container-grid flex gap-10 flex-wrap justify-evenly">
          <MovieCard2 />
          <MovieCard2 />
          <MovieCard2 />
          <MovieCard2 />
          <MovieCard2 />
          <MovieCard2 />
          <MovieCard2 />
          <MovieCard2 />
          <MovieCard2 />
          <MovieCard2 />
          <MovieCard2 />
          <MovieCard2 />
        </div>
      </section>
    </>
  );
}

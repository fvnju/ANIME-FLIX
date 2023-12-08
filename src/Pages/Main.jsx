import Listings from "./Components/Listings";
import NavBar from "./Components/NavBar";
import Slider from "./Components/Slider";

export default function Main() {
  return (
    <>
      <NavBar />
      <main className="grid place-content-center">
        <Slider />
        <Listings />
      </main>
    </>
  );
}

import Carousel from "./Carousel/Carousel.js";
import AboutUsIndex from "./AboutUsIndex/AboutUsIndex.js";
import FeaturedJobs from "./FeaturedJobs/FeaturedJobs.js";

const Main = () => {
  return (
    <main className="page landing-page">
      <Carousel />

      <AboutUsIndex />
      <FeaturedJobs />
    </main>
  );
};
export default Main;

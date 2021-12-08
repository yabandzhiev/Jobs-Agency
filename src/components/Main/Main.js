import Carousel from "./Carousel/Carousel.js";
import AboutUsIndex from "./AboutUsIndex/AboutUsIndex.js";
import FeaturedJobs from "./FeaturedJobs/FeaturedJobs.js";

const Main = () => {
  return (
    <main className="page landing-page">
      <section
        className="clean-block clean-info dark"
        style={{ color: "rgb(33, 37, 41)", background: "rgb(255,255,255)" }}
      >
        <Carousel />
        <AboutUsIndex />
      </section>
      <FeaturedJobs />
      <section
        className="clean-block features"
        style={{ background: "rgb(255,255,255)" }}
      >
        <div className="container">
          <div className="block-heading">
            <h2 className="text-info">Features</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc quam urna,
              dignissim nec auctor in, mattis vitae leo.
            </p>
          </div>
          <div className="row justify-content-center">
            <div className="col-md-5 feature-box">
              <i className="icon-star icon"></i>
              <h4>Bootstrap 4</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc quam urna,
                dignissim nec auctor in, mattis vitae leo.
              </p>
            </div>
            <div className="col-md-5 feature-box">
              <i className="icon-pencil icon"></i>
              <h4>Customizable</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc quam urna,
                dignissim nec auctor in, mattis vitae leo.
              </p>
            </div>
            <div className="col-md-5 feature-box">
              <i className="icon-screen-smartphone icon"></i>
              <h4>Responsive</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc quam urna,
                dignissim nec auctor in, mattis vitae leo.
              </p>
            </div>
            <div className="col-md-5 feature-box">
              <i className="icon-refresh icon"></i>
              <h4>All Browser Compatibility</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc quam urna,
                dignissim nec auctor in, mattis vitae leo.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};
export default Main;

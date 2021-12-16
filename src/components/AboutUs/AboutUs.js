const AboutUs = () => {
  return (
    <section className="clean-block about-us">
      <div className="container">
        <div className="block-heading">
          <h2 className="text-info">About Us</h2>
          <p>
            Meet the team who managed to build and keep on maintaining the site for you!
          </p>
        </div>
        <div className="row justify-content-center">
          <div className="col-sm-6 col-lg-4">
            <div className="card text-center clean-card">
              <img
                className="card-img-top w-100 d-block"
                src="assets/img/avatars/avatar1.jpg"
              />
              <div className="card-body info">
                <h4 className="card-title">John Smith</h4>
                <p className="card-text">Front-End Developer</p>
                <div className="icons">
                  <a href="#">
                    <i className="icon-social-facebook"></i>
                  </a>
                  <a href="#">
                    <i className="icon-social-instagram"></i>
                  </a>
                  <a href="#">
                    <i className="icon-social-twitter"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-6 col-lg-4">
            <div className="card text-center clean-card">
              <img
                className="card-img-top w-100 d-block"
                src="assets/img/avatars/avatar2.jpg"
              />
              <div className="card-body info">
                <h4 className="card-title">Robert Downturn</h4>
                <p className="card-text">Back-End Developer</p>
                <div className="icons">
                  <a href="#">
                    <i className="icon-social-facebook"></i>
                  </a>
                  <a href="#">
                    <i className="icon-social-instagram"></i>
                  </a>
                  <a href="#">
                    <i className="icon-social-twitter"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-6 col-lg-4">
            <div className="card text-center clean-card">
              <img
                className="card-img-top w-100 d-block"
                src="assets/img/avatars/avatar3.jpg"
              />
              <div className="card-body info">
                <h4 className="card-title">Ally Sanders</h4>
                <p className="card-text">Team Lead</p>
                <div className="icons">
                  <a href="#">
                    <i className="icon-social-facebook"></i>
                  </a>
                  <a href="#">
                    <i className="icon-social-instagram"></i>
                  </a>
                  <a href="#">
                    <i className="icon-social-twitter"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;

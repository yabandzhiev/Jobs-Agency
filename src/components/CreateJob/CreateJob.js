import Form from "react-bootstrap/Form";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext.js";
import * as jobService from "../../services/jobService.js";

const CreateJob = () => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    let formData = new FormData(e.currentTarget);

    let headline = formData.get("headline");
    let type = formData.get("type");
    let location = formData.get("location");
    let salary = formData.get("salary");
    let category = formData.get("category");
    let company = formData.get("company");
    let date = formData.get("date");
    let level = formData.get("level");
    let description = formData.get("description");
    let contact = formData.get("contact");
    let image = formData.get("image");

    if (
      headline.length === "" ||
      location.length === "" ||
      salary.length == "" ||
      company.length === "" ||
      date.length === "" ||
      image.length === "" ||
      contact.length === "" ||
      description.length === ""
    ) {
      return alert("Fill in all the fields!");
    }

    let regex = /^https?:\/\/.+/i;
    let emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

    if (headline.length < 3) {
      return alert("Headline must be at least 3 characters.");
    } else if (location.length < 3) {
      return alert("Location must be at least 3 characters.");
    } else if (salary < 0) {
      return alert("Salary must be a positive number.");
    } else if (company.length < 3) {
      return alert("Location must be at least 3 characters.");
    } else if (!image.match(regex)) {
    } else if (description.length < 20) {
      return alert("Description must be at least 20 characters.");
    } else if (!image.match(regex)) {
    } else if (!contact.match(emailRegex)) {
      return alert("Please enter valid email address.");
    } else if (!image.match(regex)) {
      return alert("Image URL is invalid.");
    }

    jobService
      .create(
        {
          headline,
          type,
          location,
          salary,
          category,
          company,
          date,
          level,
          image,
          contact,
          description,
          ownerId: user._id,
        },
        user.accessToken
      )
      .then(
        (res) => {
          navigate("/jobs");
        },
        (error) => {
          alert(error);
        }
      );
  };
  return (
    <section className="clean-block clean-form dark">
      <div className="container">
        <div className="block-heading">
          <h2 className="text-info">Create Job</h2>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label" htmlFor="headline">
              Headline
            </label>
            <input
              className="form-control"
              type="text"
              id="headline"
              name="headline"
              placeholder="ex. React Developer"
            />
          </div>

          <div className="mb-3">
            <label className="form-label" htmlFor="subject">
              Type
              <Form.Select aria-label="Default select example" name="type">
                <option disabled>Choose a type</option>
                <option value="Contract">Contract</option>
                <option value="Fulltime">Fulltime</option>
                <option value="Information Technology">Information Technology</option>
              </Form.Select>{" "}
            </label>
          </div>

          <div className="mb-3">
            <label className="form-label" htmlFor="location">
              Location
            </label>
            <input
              className="form-control"
              type="location"
              id="location"
              name="location"
              placeholder="ex. London"
            />
          </div>
          <div className="mb-3">
            <label className="form-label" htmlFor="salary">
              Salary
            </label>
            <input
              type="number"
              className="form-control"
              id="salary"
              name="salary"
            ></input>
          </div>
          <div className="mb-3">
            <label className="form-label" htmlFor="subject">
              Category
              <Form.Select aria-label="Default select example" name="category">
                <option disabled>Choose a category</option>
                <option value="Health Science">Health Science</option>
                <option value="Business and Finance">Business and Finance</option>
                <option value="Internship">Internship</option>
              </Form.Select>{" "}
            </label>
          </div>
          <div className="mb-3">
            <label className="form-label" htmlFor="company">
              Company Name
            </label>
            <input className="form-control" id="company" name="company"></input>
          </div>
          <div className="mb-3">
            <label className="form-label" htmlFor="date">
              Date
            </label>
            <input type="date" className="form-control" id="date" name="date" />
          </div>
          <div className="mb-3">
            <label className="form-label" htmlFor="subject">
              Level
              <Form.Select aria-label="Default select example" name="level">
                <option disabled>Choose level</option>
                <option value="Entry Level">Entry Level</option>
                <option value="Intermediate Level">Intermediate Level</option>
                <option value="Senior Level">Senior Level</option>
              </Form.Select>{" "}
            </label>
          </div>
          <div className="mb-3">
            <label className="form-label" htmlFor="contact">
              Contact
            </label>
            <input
              className="form-control"
              id="contact"
              name="contact"
              placeholder="Company's email"
            />
          </div>
          <div className="mb-3">
            <label className="form-label" htmlFor="image">
              Image
            </label>
            <input
              className="form-control"
              id="image"
              name="image"
              placeholder="https://..."
            />
          </div>
          <div className="mb-3">
            <label className="form-label" htmlFor="description">
              Description
            </label>
            <textarea className="form-control" id="description" name="description" />
          </div>
          <div className="mb-3" style={{ textAlign: "center" }}>
            <button className="btn btn-primary" type="submit">
              Create Job
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};
export default CreateJob;

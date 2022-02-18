import Form from "react-bootstrap/Form";
import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext.js";
import * as jobService from "../../services/jobService.js";
import { formsValidate } from "../../formsValidate/formsValidate.js";

const EditJob = () => {
  const { user } = useContext(AuthContext);
  const { jobId } = useParams();
  const navigate = useNavigate();
  const [initialData, setInitialData] = useState([]);

  useEffect(() => {
    jobService.getOne(jobId).then((res) => {
      setInitialData(res);
    });
  }, [jobId]);

  const isOwner = initialData.ownerId === user._id;

  const handleSubmit = (e) => {
    let obj = formsValidate(e);
    if (obj !== undefined) {
      jobService
        .edit(
          {
            _id: jobId,
            ...obj,
            ownerId: user._id,
          },
          jobId,
          user.accessToken
        )
        .then((res) => {
          navigate(-1);
        });
    }
  };
  return isOwner ? (
    <section className="clean-block clean-form dark">
      <div className="container">
        <div className="block-heading">
          <h2 className="text-info">Edit Job</h2>
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
              defaultValue={initialData.headline}
            />
          </div>

          <div className="mb-3">
            <label className="form-label" htmlFor="subject">
              Type
              <Form.Select
                aria-label="Default select example"
                name="type"
                defaultValue={initialData.type}
              >
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
              defaultValue={initialData.location}
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
              defaultValue={initialData.salary}
            ></input>
          </div>
          <div className="mb-3">
            <label className="form-label" htmlFor="subject">
              Category
              <Form.Select
                aria-label="Default select example"
                name="category"
                defaultValue={initialData.category}
              >
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
            <input
              className="form-control"
              id="company"
              name="company"
              defaultValue={initialData.company}
            />
          </div>
          <div className="mb-3">
            <label className="form-label" htmlFor="date">
              Date
            </label>
            <Form.Control
              type="date"
              className="form-control"
              id="date"
              name="date"
              defaultValue={initialData.date}
            />
          </div>
          <div className="mb-3">
            <label className="form-label" htmlFor="subject">
              Level
              <Form.Select
                aria-label="Default select example"
                name="level"
                defaultValue={initialData.level}
              >
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
              defaultValue={initialData.contact}
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
              defaultValue={initialData.image}
            />
          </div>
          <div className="mb-3">
            <label className="form-label" htmlFor="description">
              Description
            </label>
            <textarea
              className="form-control"
              id="description"
              name="description"
              defaultValue={initialData.description}
            />
          </div>
          <div className="mb-3" style={{ textAlign: "center" }}>
            <button className="btn btn-primary" type="submit">
              Edit Job
            </button>
          </div>
        </form>
      </div>
    </section>
  ) : (
    <section className="clean-block clean-form dark">
      <div className="container">
        <div className="block-heading">
          <h2 className="text-info">You are not the owner of this Job</h2>
        </div>
      </div>
    </section>
  );
};

export default EditJob;

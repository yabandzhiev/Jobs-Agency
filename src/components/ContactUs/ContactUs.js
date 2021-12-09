const ContactUs = () => {
  const handleSubmit = (e) => {
    e.preventDefault();

    alert(
      "Thank you for submitting the contact form! We will respond as soon as we can!"
    );
  };
  return (
    <section className="clean-block clean-form dark">
      <div className="container">
        <div className="block-heading">
          <h2 className="text-info">Contact Us</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc quam urna,
            dignissim nec auctor in, mattis vitae leo.
          </p>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label" htmlFor="name">
              Name
            </label>
            <input className="form-control" type="text" id="name" name="name" />
          </div>
          <div className="mb-3">
            <label className="form-label" htmlFor="subject">
              Subject
            </label>
            <input className="form-control" type="text" id="subject" name="subject" />
          </div>
          <div className="mb-3">
            <label className="form-label" htmlFor="email">
              Email
            </label>
            <input className="form-control" type="email" id="email" name="email" />
          </div>
          <div className="mb-3">
            <label className="form-label" htmlFor="message">
              Message
            </label>
            <textarea className="form-control" id="message" name="message"></textarea>
          </div>
          <div className="mb-3">
            <button className="btn btn-primary" type="submit">
              Send
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default ContactUs;

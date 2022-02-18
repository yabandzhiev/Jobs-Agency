export const formsValidate = (e) => {
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
    salary.length === 0 ||
    company.length === "" ||
    date.length === 0 ||
    image.length === "" ||
    contact.length === "" ||
    description.length === ""
  ) {
    return alert("Fill in all the fields!");
  }

  let regex = /^https?:\/\/.+/i;
  let emailRegex = /^[\w-.]+@([\w-]+.)+[\w-]{2,4}$/;

  if (headline.length < 3) {
    return alert("Headline must be at least 3 characters.");
  } else if (location.length < 3) {
    return alert("Location must be at least 3 characters.");
  } else if (salary < 0) {
    return alert("Salary must be a positive number.");
  } else if (salary < 700) {
    return alert("Salary must be above minimum salary for Bulgaria.(>700)");
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

  return {
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
  };
};

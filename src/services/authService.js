const baseUrl = "https://jobs-agency.herokuapp.com";

export const login = async (email, password) => {
  let response = await fetch(`${baseUrl}/users/login`, {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  });

  let result = await response.json();

  if (response.ok) {
    return result;
  } else {
    throw result.message;
  }
};

export const register = async (email, password) => {
  let response = await fetch(`${baseUrl}/users/register`, {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  });

  let result = await response.json();

  if (response.ok) {
    return result;
  } else {
    throw result.message;
  }
};

export const logout = (token) => {
  return fetch(`${baseUrl}/users/logout`, {
    headers: {
      "X-Authorization": token,
    },
  });
};

export const getUser = () => {
  let email = localStorage.getItem("email");

  return email;
};

export const isAuthenticated = () => {
  return Boolean(getUser());
};

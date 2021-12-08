const baseUrl = "http://localhost:3030/jsonstore/job";

export const getAll = async () => {
  let response = await fetch(baseUrl);

  let blogs = await response.json();

  let result = Object.values(blogs);

  return result;
};
export const getOne = (blogId) => {
  return fetch(`${baseUrl}/${blogId}`).then((res) => res.json());
};

export const getLastThree = async () => {
  let array = await getAll();
  let lastThree = array.slice(-3);
  return lastThree;
};

export const create = async (blogData, token) => {
  let response = await fetch(baseUrl, {
    method: "POST",
    headers: {
      "content-type": "application/json",
      "x-authorization": token,
    },
    body: JSON.stringify({ ...blogData }),
  });

  let result = await response.json();

  return result;
};

export const destroy = (blogId, token) => {
  return fetch(`${baseUrl}/${blogId}`, {
    method: "DELETE",
    headers: {
      "X-Authorization": token,
    },
  }).then((res) => res.json());
};

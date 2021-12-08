const baseUrl = "http://localhost:3030/jsonstore/carousel";

export const getAll = async () => {
  let response = await fetch(baseUrl);

  let carouselItems = await response.json();

  let result = Object.values(carouselItems);

  return result;
};

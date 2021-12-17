const baseUrl = "https://jobs-agency.herokuapp.com/data/applies";

export const apply = async (userId, jobId, token) => {
  let result = await fetch(baseUrl, {
    method: "POST",
    headers: {
      "content-type": "application/json",
      "X-Authorization": token,
    },
    body: JSON.stringify({ userId, jobId }),
  });

  let jsonData = await result.json();

  if (result.ok) {
    return Object.values(jsonData);
  } else {
    throw jsonData;
  }
};

export const getApplicants = async (jobId) => {
  const query = encodeURIComponent(`jobId="${jobId}"`);

  let response = await fetch(`${baseUrl}?select=userId&where=${query}`);

  let jsonData = await response.json();

  if (response.ok) {
    let values = Object.values(jsonData);

    return values.map((x) => x.userId);
  } else {
    throw jsonData;
  }
};

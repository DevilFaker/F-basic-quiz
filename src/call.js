const baseUrl = "http://localhost:8080/users/";

const getUsers = async (id) => {
  const result = fetch(`${baseUrl}${id}`, {
    method: "GET",
    headers: {
      accept: "application/json",
    },
    credentials: "same-origin",
  })
    .then((response) => {
      return response.json();
    })
    .then((text) => {
      alert(text.id);
    })
    .catch((err) => console.log(err));

  return result;
};

const getEducation = async (id) => {
  const result = fetch(`${baseUrl}${id}/educations`, {
    method: "GET",
    headers: {
      accept: "application/json",
    },
    credentials: "same-origin",
  })
    .then((response) => {
      return response.json();
    })
    .then((text) => {
      console.log(text.year);
    })
    .catch((err) => console.log(err));

  return result;
};

export default { getUsers, getEducation };

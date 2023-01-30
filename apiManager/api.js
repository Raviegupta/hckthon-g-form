const baseUrl = "https://aircampushack.onrender.com/forms/";

export const signUpApi = (email, pass) => {
  let url = baseUrl + "signin";

  let options = {
    body: JSON.stringify({
      email: email,
      pass: pass,
    }),
    headers: {
      "content-type": "application/json",
    },
    method: "POST",
  };

  let promise = new Promise((resolve, error) => {
    fetch(url, options) //api for the get request
      .then((response) => response.json())
      .then((data) => resolve(data))
      .catch((err) => error(err));
  });
  return promise;
};

// ----------------------------------------------------------------------------------------------

export const loginApi = (email, pass) => {
  let url = baseUrl + "login";

  let options = {
    body: JSON.stringify({
      email: email,
      pass: pass,
    }),
    headers: {
      "content-type": "application/json",
    },
    method: "POST",
  };

  let promise = new Promise((resolve, error) => {
    fetch(url, options)
      .then((response) => response.json())
      .then((data) => resolve(data))
      .catch((err) => error(err));
  });
  return promise;
};

// ----------------------------------------------------------------------------------------------

// export const shareApi = (questionsData) => {
//   let url = baseUrl + "senddata";
//   let localFormId = localStorage.getItem("formId");

//   let options = {
//     body: JSON.stringify({
//       data: questionsData,
//       formId: localFormId,
//     }),
//     headers: {
//       "content-type": "application/json",
//     },
//     method: "POST",
//   };

//   let promise = new Promise((resolve, error) => {
//     fetch(url, options)
//       .then((response) => response.json())
//       .then((data) => resolve(data))
//       .catch((err) => error(err));
//   });
//   return promise;
// };


// ----------------------------------------------------------------------------------------------

// https://aircampushack.onrender.com/forms/getalldata
// getalldata

export const getalldataApi = () => {
  let url = baseUrl + "getalldata";
  let localFormId = localStorage.getItem("formId");

  let options = {
    body: JSON.stringify({
      formId: localFormId,
    }),
    headers: {
      "content-type": "application/json",
    },
    method: "POST",
  };

  let promise = new Promise((resolve, error) => {
    fetch(url, options) //api for the get request
      .then((response) => response.json())
      .then((data) => resolve(data))
      .catch((err) => error(err));
  });

  return promise;
  };


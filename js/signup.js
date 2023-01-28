import { signUpApi } from "../apiManager/api.js";

const firstName = document.querySelector(".first-name");
const lastName = document.querySelector(".last-name");
const emailId = document.querySelector(".email-id");
const password = document.querySelector(".password");
const signUpBtn = document.querySelector(".sign-up-btn");

signUpBtn.addEventListener("click", () => {
  // validation

  const signUpData = {
    "first name": firstName.value,
    "last name": lastName.value,
    emailId: emailId.value,
    password: password.value,
  };

  if (emailId.value && password.value)
    signUpApi(emailId.value, password.value).then((data) => {
      if(data && data.user && data.user._id) {
        localStorage.setItem("formId", data.user._id);
        window.location.href = "../index.html"
      }
    });
});

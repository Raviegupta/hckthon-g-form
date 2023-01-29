import { loginApi } from "../apiManager/api.js";

const emailId = document.querySelector(".email-id");
const password = document.querySelector(".password");
const signInBtn = document.querySelector(".sign-in-btn");

signInBtn.addEventListener("click", () => {
  // validation

  if (emailId.value && password.value)
    loginApi(emailId.value, password.value).then((data) => {
      if (data && data.user && data.user._id) {
        localStorage.setItem("formId", data.user._id);
        window.location.href = "../index.html";
      }
    }).catch(err => {
        console.log(err)
    });
});

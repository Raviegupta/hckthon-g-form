const id = localStorage.getItem("formId")
if(id) {
    window.location.href = "html/form.html"
}else {
    window.location.href = "html/sign-up.html"
}
const baseUrl = "https://aircampushack.onrender.com/forms/";

export const signUpApi = (email, pass) => {
    let url = baseUrl + "signin"
    
    let options = {
        body: JSON.stringify({
          email: email,
          pass: pass
        }),
        headers: {
          "content-type": "application/json",
        },
        method: "POST",
      };

 let promise = new Promise((resolve, error)=>{
    fetch(url, options)           //api for the get request
  .then(response => response.json())
  .then(data => resolve(data)).catch((err)=>error(err));
 })
 return promise

}


// ----------------------------------------------------------------------------------------------











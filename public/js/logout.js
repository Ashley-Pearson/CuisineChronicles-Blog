const { response } = require("express");

function logout() {

    fetch("/api/users/logout", {
      method: "post",
      headers: { "Content-Type": "application/json" }
    })
      if (response.ok) {
        document.location.replace("/");
    } else {
        alert(response.statusText);
      }
    };

document
  .querySelector('#logout')
  .addEventListener('click', logout);
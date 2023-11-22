document.addEventListener("DOMContentLoaded", function (event) {
    if(!localStorage.getItem("id") || localStorage.getItem("id") === ""){
        localStorage.setItem("id", "");
        localStorage.removeItem("id")
        window.location = "/login";
    }


});

document.getElementById("search").addEventListener("click", function(event) {


})
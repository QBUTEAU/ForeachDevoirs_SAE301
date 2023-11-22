document.addEventListener("DOMContentLoaded", function (event) {

if(!localStorage.getItem("id") || localStorage.getItem("id") === ""){
    localStorage.setItem("id", "");
    localStorage.removeItem("id")
    window.location = "/login";
    }

    fetch("../assets/json/user.json")
        .then(response => response.json())
        .then(data => {
var userId = localStorage.getItem("id");
            data["utilisateurs"].forEach(user => {
                if(user.id === userId){
                    console.log(user)
                    document.getElementById("username").innerHTML = user.prenom;
                    document.getElementById("hello").innerHTML = "Bonjour, " + user.prenom;
                    document.getElementById('img').style.backgroundImage = "url('" + user.image + "')";
                    document.getElementById('img').style.backgroundSize = "cover";
                }
            });
        })


});

document.getElementById("username").addEventListener("click", function(event) {

})
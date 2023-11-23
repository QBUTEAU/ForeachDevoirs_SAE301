document.addEventListener("DOMContentLoaded", function (event) {

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
        .catch(error => {
            console.error('Une erreur s\'est produite lors de la récupération des données : ', error);
            localStorage.removeItem("id");
            window.location = "/login";
        });

});

document.getElementById("username").addEventListener("click", function(event) {

})
document.addEventListener("DOMContentLoaded", function (event) {

    fetch("../assets/json/user.json")
        .then(response => response.json())
        .then(data => {
            var userId = localStorage.getItem("id");
            data["utilisateurs"].forEach(user => {
                if(user.id === userId){
                    document.getElementById("username").innerHTML = user.prenom;
                    var imgs = document.getElementById("img");

                        imgs.style.backgroundImage = "url('" + user.image + "')";
                        imgs.style.backgroundSize = "cover";

                }
            });
        })

});
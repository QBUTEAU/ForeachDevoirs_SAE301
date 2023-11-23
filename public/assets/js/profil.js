document.addEventListener("DOMContentLoaded", function (event) {

    fetch("../assets/json/user.json")
        .then(response => response.json())
        .then(data => {
            var userId = localStorage.getItem("id");
            data["utilisateurs"].forEach(user => {
                if(user.id === userId){
                    document.getElementById("username").innerHTML = user.prenom;
                    var imgs = document.getElementsByClassName("img");
                    for(var i = 0; i < imgs.length; i++){
                        imgs[i].style.backgroundImage = "url('" + user.image + "')";
                        imgs[i].style.backgroundSize = "cover";
                    }
                    document.getElementById('name').innerHTML = user.prenom + " " + user.nomDeFamille;
                    document.getElementById('season').innerHTML = "CM "+ user.promo;
                    document.getElementById('td').innerHTML = "TD "+ user.groupeTD;
                    document.getElementById('tp').innerHTML = "TP " + user.groupeTP;
                    document.getElementById('email').innerHTML = user.prenom.toLowerCase() + "." + user.nomDeFamille.toLowerCase() + "@etudiant.univ-reims.fr";
                }
            });
        })

});

document.getElementById('sign-out').addEventListener('click', function(event){
    localStorage.clear();
    window.location = "../login";
    console.log("test")
})
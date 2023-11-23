document.getElementById("submit").addEventListener("click", function (event) {
    event.preventDefault();
    const id = document.getElementById("id").value;
    const password = document.getElementById("password").value;

    if (id === "" || password === "") {
        alert("Veuillez remplir tous les champs");
    } else {
        fetch("../assets/json/user.json")
            .then(response => response.json())
            .then(data => {
                let authentificationReussie = false;

                data["utilisateurs"].forEach(user => {
                    if (user.id === id && user.password === password) {
                        authentificationReussie = true;
                    }
                });
                var error = document.getElementById("error");
                var sucess = document.getElementById("sucess");
                if (authentificationReussie) {

                    error.style.display = "none";
                    sucess.style.display = "block";
                    sucess.innerHTML = "Connexion réussie, redirection en cours...";
                    setTimeout(function () {
                        localStorage.setItem("id", id);
                        window.location = "../";
                    }, 3000);

                } else {
                    error.style.display = "block";
                    sucess.style.display = "none";
                    error.innerHTML = "Identifiant ou mot de passe incorrect";
                }
            })
            .catch(error => {
                console.error('Une erreur s\'est produite lors de la récupération des données : ', error);
            });
    }
});

document.addEventListener("DOMContentLoaded", function (event) {
    console.log(localStorage.getItem("id"));

    if (localStorage.getItem("id")) {
        window.location = "../";
    }
})

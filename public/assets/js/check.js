document.getElementById("submit").addEventListener("click", function(event){
    event.preventDefault();
    const id = document.getElementById("id").value;
    const password = document.getElementById("password").value;

    if(id === "" || password === ""){
        alert("Veuillez remplir tous les champs");
    } else {
        fetch("../assets/json/user.json")
            .then(response => response.json())
            .then(data => {
                let authentificationReussie = false;

                data["utilisateurs"].forEach(user => {
                    if(user.id === id && user.password === password){
                        authentificationReussie = true;
                    }
                });

                if (authentificationReussie) {
                    localStorage.setItem("id", id);
                    window.location = "../";
                } else {
                    alert("Identifiant ou mot de passe incorrect");
                }
            })
            .catch(error => {
                console.error('Une erreur s\'est produite lors de la récupération des données : ', error);
            });
    }
});

document.addEventListener("DOMContentLoaded", function(event){
console.log(localStorage.getItem("id"));

if(localStorage.getItem("id")){
        window.location = "../";
    }
})

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

    fetch("../assets/json/events.json")
        .then(response => response.json())
        .then(data => {
            var user = JSON.parse(localStorage.getItem("user"));
            console.log(user)
            var tp = user.groupeTP;
            var td = user.groupeTD;
            var alert = document.getElementById("alert");
            var date = new Date();
            data.forEach(cours => {

                if (cours.tp === tp || cours.td === td) {

                    var date = new Date();
                    var dateComparee = new Date(cours.date);
                    var diff = dateComparee - date;
                    var days = diff / (1000 * 60 * 60 * 24);

                    var div = document.createElement("div");
                    div.classList.add("cours");

                    if (days < 0) {
                        div.classList.add("danger")
                    } else if (days < 7) {
                        div.classList.add("warning")
                    } else {
                        div.classList.add("active")
                    }

                    div.id = cours.id;
                    div.innerHTML = cours.title + " - " + cours.date;
                    alert.appendChild(div);
                }

            })
        })

    //get all localstorage with start with data
    var keys = Object.keys(localStorage),
        i = keys.length;

    while (i--) {
        if (keys[i].startsWith("data")) {
            var cours = JSON.parse(localStorage.getItem(keys[i]));
            var date = new Date();
            var dateComparee = new Date(cours.date);
            var diff = dateComparee - date;
            var days = diff / (1000 * 60 * 60 * 24);
            console.log(days);

            var div = document.createElement("div");

            if (days < 0) {
                div.classList.add("danger")
            } else if (days < 7) {
                div.classList.add("warning")
            } else {
                div.classList.add("active")
            }

            div.classList.add("cours");
            div.id = keys[i];
            div.innerHTML = cours.title + " - " + cours.date;
            document.getElementById("alert").appendChild(div);
        }
    }


});

document.getElementById("username").addEventListener("click", function(event) {

})

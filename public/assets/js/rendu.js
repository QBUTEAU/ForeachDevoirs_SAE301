const submit = document.getElementById("submit")


submit.addEventListener("click", function (event) {
    event.preventDefault();

    const date = document.getElementById("date").value;
    const subject = document.getElementById("subject").value;
    const details = document.getElementById("details").value;
    const renderTypeselect = document.getElementById("renderTypeSelect").value;
    const moodleLink = document.getElementById("moodleLink").value;
    const tpoutd = document.getElementById("tpoutd").value;

    if (date === "" || subject === "" || details === "" || renderTypeselect === "" || tpoutd === "") {
        alert("Veuillez remplir tous les champs");
    } else {
        var tp = "";
        if (tpoutd === "tp") {
            var user = localStorage.getItem('user')
            const userJson = JSON.parse(user)
            tp = userJson.groupeTP
        } else {
            var user = localStorage.getItem('user')
            const userJson = JSON.parse(user)
            tp = userJson.groupeTD
        }

        function generateNumberId() {
    return Math.floor(Math.random() * 10000000000) + 50;
        }

        var json = {
            "id": generateNumberId(),
            "date": date,
            "title": subject,
            "details": details,
            "renderType": renderTypeselect,
            "visibility": false,
        }

        if (tpoutd === "tp") {
            json["tp"] = tp;
        } else {
            json["td"] = tp;
        }

        if (moodleLink !== "" || moodleLink !== null) {
            json["moodleLink"] = moodleLink;
        }

        var i = 0;

        while (localStorage.getItem(`data${i}`) !== null) {
            i++;
        }

        localStorage.setItem(`data${i}`, JSON.stringify(json));

        console.log(json)
    }

});

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
                }
            });
        })

});
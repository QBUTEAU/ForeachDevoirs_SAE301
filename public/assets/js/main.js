document.addEventListener("DOMContentLoaded", function (event) {
    if (!window.location.href.includes("login")) {
        if (!localStorage.getItem("id") || localStorage.getItem("id") === "") {
            localStorage.setItem("id", "");
            localStorage.removeItem("id");
            window.location = "/login";
        }
    }
});

document.getElementById("search").addEventListener("click", function (event) {
    var background = document.createElement("div");
    background.id = "blackBackground";
    background.style.position = "fixed";
    background.style.top = "0";
    background.style.left = "0";
    background.style.width = "100%";
    background.style.height = "100%";
    background.style.backgroundColor = "rgba(0, 0, 0, 0.7)";
    background.style.backdropFilter = "blur(5px)";
    background.style.zIndex = "1000";

    var input = document.createElement("input");
    input.id = "inputSearch";
    input.style.position = "absolute";
    input.style.top = "50%";
    input.style.left = "50%";
    input.style.transform = "translate(-50%, -50%)";
    input.style.width = "50%";
    input.style.height = "50px";
    input.style.borderRadius = "20px";
    input.style.border = "none";
    input.style.padding = "0 20px";
    input.style.fontSize = "18px";

    var cross = document.createElement("i");
    cross.id = "cross";
    cross.classList.add("fas");
    cross.classList.add("fa-times");
    cross.style.position = "absolute";
    cross.style.top = "50px";
    cross.style.right = "5%";
    cross.style.transform = "translate(-50%, -50%)";
    cross.style.fontSize = "30px";
    cross.style.color = "white";
    cross.style.cursor = "pointer";

    cross.addEventListener("click", function (event) {
        document.body.removeChild(background);
    });

    input.addEventListener("input", function (event) {
        fetch("../assets/json/events.json")
            .then(response => response.json())
            .then(data => {
                var user = JSON.parse(localStorage.getItem("user"));
                var tp = user.groupeTP;
                var td = user.groupeTD;

                data.forEach(cours => {
                    if (cours.tp === tp || cours.td === td) {
                        function removeAccents(str) {
                            return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
                        }

                        if (removeAccents(cours.title.toLowerCase()).includes(removeAccents(input.value.toLowerCase()))) {
                            document.getElementById(cours.id).style.display = "block";
                        } else {
                            document.getElementById(cours.id).style.display = "none";
                        }
                    }
                });
            });
    });

    fetch("../assets/json/events.json").then(response => response.json()).then(data => {
        var user = JSON.parse(localStorage.getItem("user"));
        var tp = user.groupeTP;
        var td = user.groupeTD;

        data.forEach(cours => {
            if(cours.tp === tp || cours.td === td) {
                var div = document.createElement("div");
                div.classList.add("cours");
                div.id = cours.id;
                div.style.width = "100%";
                div.style.height = "50px";
                div.style.borderBottom = "1px solid white";
                div.style.color = "white";
                div.style.display = "flex";
                div.style.alignItems = "center";
                div.style.justifyContent = "space-between";
                div.style.cursor = "pointer";
                div.innerHTML = `<p style="margin: 0 20px;">${cours.title}</p><p style="margin: 0 20px;">${cours.date}</p>`;
                background.appendChild(div);
            }
        });
    })
    background.appendChild(cross);
    background.appendChild(input);
    document.body.appendChild(background);
});

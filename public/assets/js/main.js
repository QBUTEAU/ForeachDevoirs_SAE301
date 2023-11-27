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
    input.style.top = "50px";
    input.style.left = "50%";
    input.style.transform = "translate(-50%, -50%)";
    input.style.border = "1px solid var(--dark)";
    input.style.textIndent = "10px";
    input.style.borderRadius = "5px";
    input.style.width = "80%";
    input.style.padding = "17px 0";

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

                        console.log(removeAccents(cours.title.toLowerCase()).includes(removeAccents(input.value.toLowerCase())))
                        console.log(removeAccents(cours.title.toLowerCase()).includes(removeAccents(input.value.toLowerCase())), cours.id)
                        if (removeAccents(cours.title.toLowerCase()).includes(removeAccents(input.value.toLowerCase()))) {
                            document.getElementById(cours.id).style.display = "block";
                        } else {
                            document.getElementById(cours.id).style.display = "none";
                        }
                    }
                });
            });
    });

    var containDiv = document.createElement("div");
    containDiv.style.width = "100%";
    containDiv.style.padding = "50px 0";
    containDiv.style.position = "absolute";
    containDiv.style.top = "380px";
    containDiv.style.left = "50%";
    containDiv.style.transform = "translate(-50%, -50%)";
    containDiv.style.display = "flex";
    containDiv.style.flexDirection = "column";
    containDiv.style.alignContent = "center";
    containDiv.style.justifyContent = "center";
    containDiv.style.gap = "20px";
    containDiv.style.alignItems = "center";


    fetch("../assets/json/events.json").then(response => response.json()).then(data => {
        var user = JSON.parse(localStorage.getItem("user"));
        var tp = user.groupeTP;
        var td = user.groupeTD;

        data.forEach(cours => {
            if(cours.tp === tp || cours.td === td) {
                var div = document.createElement("div");
                div.classList.add("cours");
                div.id = cours.id;
                div.style.width = "80%";
                div.style.background = "#6c6c6c";
                div.style.color = "white";
                div.style.padding = "10px";
                div.style.display = "block";
                div.style.alignItems = "center";
                div.style.justifyContent = "space-between";
                div.style.cursor = "pointer";
                div.style.borderRadius = "10px";




                div.innerHTML = `<p style="margin: 0 20px;">${cours.title}</p><p style="margin: 0 20px;">${cours.date}</p>`;

                if(cours.tp) {
                    div.innerHTML += `<p style="margin: 0 20px;">TP : ${cours.tp}</p>`;
                }

                if(cours.td) {
                    div.innerHTML += `<p style="margin: 0 20px;">TD : ${cours.td}</p>`;
                }

                containDiv.appendChild(div);
            }
        });
    })
    background.appendChild(containDiv);
    background.appendChild(cross);
    background.appendChild(input);
    document.body.appendChild(background);
});

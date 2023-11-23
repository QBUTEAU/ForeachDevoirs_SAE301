document.addEventListener("DOMContentLoaded", function (event) {
    if(!window.location.href.includes("login")) {
        if (!localStorage.getItem("id") || localStorage.getItem("id") === "") {
            localStorage.setItem("id", "");
            localStorage.removeItem("id")
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
    })

    background.appendChild(cross);

    background.appendChild(input);
    document.body.appendChild(background);
});

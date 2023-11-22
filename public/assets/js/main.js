document.addEventListener("DOMContentLoaded", function (event) {
    if(!localStorage.getItem("id") || localStorage.getItem("id") === ""){
        localStorage.setItem("id", "");
        localStorage.removeItem("id")
        window.location = "/login";
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

    background.appendChild(input);
    document.body.appendChild(background);
});

document.addEventListener('DOMContentLoaded', function () {
    var burgerBtn = document.getElementById('burger');
    var closeBtn = document.getElementById('close-burger');
    var menu = document.querySelector('.navbar');

    burgerBtn.addEventListener('click', function () {
        menu.style.display = 'flex';
    });

    closeBtn.addEventListener('click', function () {
        menu.style.display = 'none';
    });
});
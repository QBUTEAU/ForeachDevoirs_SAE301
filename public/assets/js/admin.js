const admin = JSON.parse(localStorage.getItem('user'));

if (!admin.admin === true) {
    window.location = '/';
}

document.addEventListener('DOMContentLoaded', function () {
    const adminTable = document.getElementById('table');
    var id = localStorage.getItem('id');

    headTable = `
    <table>
        <tr>
            <td>date</td>
            <td>sujet</td>
            <td>type de rendu</td>
            <td>details</td>
            <td>visibilité</td>
        </tr>`;

    let contentTable = '';

    for (let i = 0; i < keysWithDataPrefix.length; i++) {
        var item = localStorage.getItem(keysWithDataPrefix[i]);
        const itemJson = JSON.parse(item);

        if (itemJson.tp === admin.groupeTP) {
            contentTable += `
        <tr>
        <td>${itemJson.date}</td>
        <td>${itemJson.title}</td>
        <td>${itemJson.renderType}</td>
        <td>${itemJson.details}</td>
        <td><button onclick="visible(${i})">${itemJson.visibility === true ? 'rendre invisible' : 'rendre visible'}</button></td>
        </tr>
        `
        } else if(itemJson.td === admin.groupeTD) {
            contentTable += `
            <tr>
            <td>${itemJson.date}</td>
            <td>${itemJson.title}</td>
            <td>${itemJson.renderType}</td>
            <td>${itemJson.details}</td>
            <td><button onclick="visible(${i})">${itemJson.visibility === true ? 'rendre invisible' : 'rendre visible'}</button></td>
            </tr>
            `
        }
    }

    adminTable.innerHTML = headTable + contentTable + '</table>'
})

function getAllKeysStartingWith(prefix) {
    var keys = Object.keys(localStorage);
    var filteredKeys = keys.filter(function (key) {
        return key.startsWith(prefix);
    });

    filteredKeys.sort(function (a, b) {
        var numA = parseInt(a.replace(prefix, ''));
        var numB = parseInt(b.replace(prefix, ''));
        return numA - numB;
    });

    return filteredKeys;
}

var keysWithDataPrefix = getAllKeysStartingWith('data');

function visible(i) {
    key = keysWithDataPrefix[i]
    data = JSON.parse(localStorage.getItem(key));

    if (data.visibility === false) {
        newData = {
            "date": data.date,
            "title": data.title,
            "details": data.details,
            "renderType": data.renderType,
            "visibility": true,
            "tp": data.tp,
            "td": data.td
        }


    } else {
        newData = {
            "date": data.date,
            "title": data.title,
            "details": data.details,
            "renderType": data.renderType,
            "visibility": false,
            "tp": data.tp,
            "td": data.td
        }

    }

    localStorage.setItem(key, JSON.stringify(newData))
    window.location.reload()
}

document.addEventListener("DOMContentLoaded", function (event) {

    fetch("../assets/json/user.json")
        .then(response => response.json())
        .then(data => {
            var userId = localStorage.getItem("id");
            data["utilisateurs"].forEach(user => {
                if(user.id === userId){
                    document.getElementById("username").innerHTML = user.prenom;
                    var imgs = document.getElementById("img");

                    imgs.style.backgroundImage = "url('" + user.image + "')";
                    imgs.style.backgroundSize = "cover";

                }
            });
        })

});
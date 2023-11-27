document.addEventListener('DOMContentLoaded', function () {
    var calendarEl = document.getElementById('calendar');

    function afficherCal() {
        const params = {
            timeZone: 'UTC',
            initialView: 'dayGridWeek',
            headerToolbar: {
                left: 'prev,next',
                center: 'title',
                right: 'dayGridYear,dayGridWeek,dayGridDay'
            },
            editable: true,
            events: [],
            eventDisplay: 'list-item',
            locale: 'fr',
            eventClick: function (info) {
                alert('Détails de l\'événement :\n\nTitre : ' + info.event.title + '\nFin : ' + info.event.start);
            },
        }

        var calendar = new FullCalendar.Calendar(calendarEl, params);
        calendar.render();

        var user = localStorage.getItem('user')
        const userJson = JSON.parse(user)
        const tp = userJson.groupeTP

        async function afficherEventsBase() {
            fetch("../assets/json/events.json")
                .then(response => response.json())
                .then(data => {

                    data.forEach(cours => {
                        if (cours.tp === tp) {
                            calendar.addEvent(cours)
                        }
                    })
                })
        }

        function afficherEventLocalStorage() {
            for(let i = 0; i < keysWithDataPrefix.length; i++) {
                data = JSON.parse(localStorage.getItem(keysWithDataPrefix[i]));
                if(data.visibility === true){
                    calendar.addEvent(data)
                }
            }
        }

        afficherEventsBase();
        afficherEventLocalStorage();
    }

    afficherCal();
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

window.addEventListener('resize', function () {
    var width = window.innerWidth;
    if (width <= 900) {
        var calendarEl = document.getElementById('calendar');
        var calendar = new FullCalendar.Calendar(calendarEl, {
            timeZone: 'UTC',
            initialView: 'dayGridDay',
            headerToolbar: {
                left: 'prev,next',
                center: 'title',
                right: 'dayGridYear,dayGridWeek,dayGridDay'
            },
            editable: true,
            events: [],
            eventDisplay: 'list-item',
            locale: 'fr',
            eventClick: function (info) {
                alert('Détails de l\'événement :\n\nTitre : ' + info.event.title + '\nFin : ' + info.event.start);
            },
        });
        calendar.render();

        var user = localStorage.getItem('user')
        const userJson = JSON.parse(user)
        const tp = userJson.groupeTP

        async function afficherEventsBase() {
            fetch("../assets/json/events.json")
                .then(response => response.json())
                .then(data => {

                    data.forEach(cours => {
                        if (cours.tp === tp) {
                            calendar.addEvent(cours)
                        }
                    })
                })
        }

        function afficherEventLocalStorage() {
            for(let i = 0; i < keysWithDataPrefix.length; i++) {
                data = JSON.parse(localStorage.getItem(keysWithDataPrefix[i]));
                if(data.visibility === true){
                    calendar.addEvent(data)
                }
            }
        }

        afficherEventsBase();
        afficherEventLocalStorage();
    }
})
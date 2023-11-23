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
            eventDisplay: 'list-item'
        }

        var calendar = new FullCalendar.Calendar(calendarEl, params);
        calendar.render();

        async function afficherEventsBase() {
            fetch("../assets/json/events.json")
                .then(response => response.json())
                .then(data => {
                    var userTp = localStorage.getItem('tp')
                    console.log(userTp)

                    data.forEach(cours => {
                        if (cours.tp === userTp) {
                            calendar.addEvent(cours)
                        }
                    })
                })
        }

        afficherEventsBase();
    }

    afficherCal();
})
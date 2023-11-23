document.addEventListener('DOMContentLoaded', function () {
    const adminTable = document.getElementById('table');
    var id = localStorage.getItem('id');
    var data = JSON.parse(localStorage.getItem('data'));

    console.log(data)

    headTable = `
    <table>
        <tr>
            <td>tp</td>
            <td>date</td>
            <td>sujet</td>
            <td>type de rendu</td>
            <td>rendre visible</td>
        </tr>`;

    let contentTable = '';
    for (let i = 0; i < data.length; i++) {
        contentTable += `<tr>
                    <td>${data[i].tp}</td>
                    <td>${data[i].date}</td>
                    <td>${data[i].subject}</td>
                    <td>${data[i].renderType}</td>
                    <td><button id='visibility'>rendre visible</button></td>
               </tr>`;
               adminTable.innerHTML = headTable + contentTable + '</table>'
        document.querySelectorAll('#visibility')[i].addEventListener('click', function() {
            console.log(localStorage.getItem('data').value)
        })
    }
})
const driver = document.querySelector('.ds');
const constructor = document.querySelector('.cs');
const round = document.querySelector('.CurrentRound--submit');
const get = document.querySelector('.currentBox--but1');

function displayControl(t1) {
    if (t1.classList.contains("none")) {
        t1.classList.remove('none');
        t1.classList.add('block');
    } else {
        t1.classList.remove('block');
        t1.classList.add('none');
    }
}

driver.addEventListener('click', async function () {

    fetch('http://ergast.com/api/f1/current/driverStandings.json')
        .then((response) => response.json())
        .then((data) => {
            data = data.MRData.StandingsTable.StandingsLists[0].DriverStandings;
            // console.log(data[0].Constructors[0].name);

            //removing previous Module
            const temp = document.querySelector('.main');
            temp.classList.add('none');

            //Rendring new Module
            const CurrentDriver = document.querySelector('.CurrentDriver');
            displayControl(CurrentDriver);

            for (let i = 0; i < data.length; i++) {

                const row = document.createElement('tr');
                const td1 = document.createElement('td');
                const td2 = document.createElement('td');
                const td3 = document.createElement('td');
                const td4 = document.createElement('td');
                const td5 = document.createElement('td');

                td1.innerText = data[i].position;
                td2.innerText = data[i].Driver.code;
                td3.innerText = data[i].Constructors[0].name;
                td4.innerText = data[i].points;
                td5.innerText = data[i].wins;

                row.appendChild(td1);
                row.appendChild(td2);
                row.appendChild(td3);
                row.appendChild(td4);
                row.appendChild(td5);

                const table = document.querySelector('.driverTable');
                table.appendChild(row);
                // console.log(table);
            }

        })
        .catch((err) => console.log(err.message));


});


constructor.addEventListener('click', () => {

    fetch('http://ergast.com/api/f1/current/constructorStandings.json')
        .then((response) => response.json())
        .then((data) => {
            console.log(data.MRData.StandingsTable.StandingsLists[0].ConstructorStandings);
            data = data.MRData.StandingsTable.StandingsLists[0].ConstructorStandings;

            //removing previous Module
            const temp = document.querySelector('.main');
            temp.classList.add('none');

            //Rendring new Module
            const CurrentConstructor = document.querySelector('.CurrentConstructor');
            displayControl(CurrentConstructor);

            //loop

            for (let i = 0; i < data.length; i++) {

                const row = document.createElement('tr');
                const td1 = document.createElement('td');
                const td2 = document.createElement('td');
                const td3 = document.createElement('td');
                const td4 = document.createElement('td');

                td1.innerText = data[i].position;
                td2.innerText = data[i].Constructor.name;
                td3.innerText = data[i].Constructor.nationality;
                td4.innerText = data[i].wins;

                row.appendChild(td1);
                row.appendChild(td2);
                row.appendChild(td3);
                row.appendChild(td4);

                const table = document.querySelector('.constructorTable');
                table.appendChild(row);

            }
            // console.log(table);
        })
        .catch((err) => console.log(err.message));

});

round.addEventListener('click', (data) => {
    let value = document.querySelector('.rs').value;
    // console.log(value);

    if (value === '')
        value = 'last';

    fetch(`http://ergast.com/api/f1/current/${value}/results.json`)
        .then((response) => response.json())
        .then((data) => {
            // console.log(data);
            data = data.MRData.RaceTable.Races[0];
            console.log(data);

            //removing previous Module
            const o = document.querySelector('.main');
            o.classList.add('none');

            //Rendring new Module
            const CurrentRound = document.querySelector('.CurrentRound');
            displayControl(CurrentRound);

            const Season = document.querySelector('.currentSeason');
            const Round = document.querySelector('.currentRound');
            const Date = document.querySelector('.currentDate');
            const RaceName = document.querySelector('.currentRaceName');
            const Country = document.querySelector('.currentCountry');


            Date.innerText = 'Date : ' + data.date;
            Season.innerText = 'Season : ' + data.season;

            Round.innerText = 'Round : ' + data.round;
            RaceName.innerText = 'Race : ' + data.raceName;
            Country.innerText = 'Country : ' + data.Circuit.Location.country + '(' + data.Circuit.Location.locality + ')';

            for (let i = 0; i < data.Results.length; i++) {
                const row = document.createElement('tr');
                const td1 = document.createElement('td');
                const td2 = document.createElement('td');
                const td3 = document.createElement('td');
                const td4 = document.createElement('td');
                const td5 = document.createElement('td');
                const td6 = document.createElement('td');
                const td7 = document.createElement('td');


                td1.innerText = data.Results[i].position;
                td2.innerText = data.Results[i].Driver.driverId;
                td3.innerText = data.Results[i].points;
                td4.innerText = data.Results[i].Constructor.name;
                td5.innerText = data.Results[i].grid;
                td6.innerText = data.Results[i].FastestLap.AverageSpeed.speed;
                td7.innerText = data.Results[i].status;


                row.appendChild(td1);
                row.appendChild(td2);
                row.appendChild(td3);
                row.appendChild(td4);
                row.appendChild(td5);
                row.appendChild(td6);
                row.appendChild(td7);

                const table = document.querySelector('.CurrentRoundTable');
                table.appendChild(row);

            }
        })
        .catch((err) => console.log(err.message));
});

get.addEventListener('click', () => {
    fetch('http://ergast.com/api/f1/current.json')
        .then(res => res.json())
        .then(data => {
            data = data.MRData.RaceTable.Races;
            console.log(data);

            //removing previous Module
            const temp = document.querySelector('.main');
            temp.classList.add('none');

            //Rendring new Module
            const CurrentSchedule = document.querySelector('.CurrentSchedule');
            displayControl(CurrentSchedule);

            for (let i = 0; i < data.length; i++) {
                const row = document.createElement('tr');
                const td1 = document.createElement('td');
                const td2 = document.createElement('td');
                const td3 = document.createElement('td');
                const td4 = document.createElement('td');
                const td5 = document.createElement('td');
                const td6 = document.createElement('td');
                const td7 = document.createElement('td');

                td1.innerText = data[i].round;
                td2.innerText = data[i].raceName;
                td3.innerText = data[i].date;
                td4.innerText = data[i].time;
                td5.innerText = data[i].Circuit.circuitName;
                td6.innerText = data[i].Qualifying.date;
                td7.innerText = data[i].Qualifying.time;

                row.appendChild(td1);
                row.appendChild(td2);
                row.appendChild(td3);
                row.appendChild(td4);
                row.appendChild(td5);
                row.appendChild(td6);
                row.appendChild(td7);

                const table = document.querySelector('.currentSchedule--Table');
                table.appendChild(row);


            }

        })
        .catch((err) => console.log(err.message));

});

document.querySelector('.upperLeft').addEventListener('click', () => {
    location.reload();
});
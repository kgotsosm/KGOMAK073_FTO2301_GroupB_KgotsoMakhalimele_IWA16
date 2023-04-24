const MONTHS = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
]

const data = {
    response: {
        requestType: "FETCH_ATHLETE_DATA",
        requestBy: "ALL_MATCHING_ATHLETES",
        forDisplay: "BEST_RACES",

        data: {
            NM372: {
                firstName: "Nwabisa",
                surname: "Masiko",
                id: "NM372",
                races: [
                    {
                        date: '2022-11-18T20:00:00.000Z',
                        time: [9, 7, 8, 6],
                    },
                    {
                        date: '2022-12-02T20:00:00.000Z',
                        time: [6, 7, 8, 7],
                    },
                ],
            },

            SV782: {
                firstName: "Schalk",
                surname: "Venter",
                id: "SV782",
                races: [
                    {
                        date: '2022-11-18T20:00:00.000Z',
                        time: [10, 8, 3, 12],
                    },
                    {
                        date: '2022-11-25T20:00:00.000Z',
                        time: [6, 8, 9, 11],
                    },
                    {
                        date: '2022-12-02T20:00:00.000Z',
                        time: [10, 11, 4, 8],
                    },
                    {
                        date: '2022-12-09T20:00:00.000Z',
                        time: [9, 8, 9, 11],
                    },
                ],
            },
        },
    },
};

// Only edit below this comment

const createHtml = (athlete) => {
    const { firstName, surname, id, races } = athlete;
    const [latestRace] = races.slice(-1);

    const formatDate = (date) => {
        const d = new Date(date);
        return `${d.getDate()} ${MONTHS[d.getMonth()]} ${d.getFullYear()}`;
    };

    const formatTime = (minutes) => {
        const hh = Math.floor(minutes / 60).toString().padStart(2, '0');
        const mm = (minutes % 60).toString().padStart(2, '0');
        return `${hh}:${mm}`;
    };

    const dl = document.createElement('dl');

    const dt1 = document.createElement('dt');
    dt1.textContent = 'Full name';
    const dd1 = document.createElement('dd');
    dd1.textContent = `${firstName} ${surname}`;
    dl.appendChild(dt1);
    dl.appendChild(dd1);

    const dt2 = document.createElement('dt');
    dt2.textContent = 'Total Races';
    const dd2 = document.createElement('dd');
    dd2.textContent = races.length;
    dl.appendChild(dt2);
    dl.appendChild(dd2);

    const dt3 = document.createElement('dt');
    dt3.textContent = 'Event Date (Latest)';
    const dd3 = document.createElement('dd');
    dd3.textContent = formatDate(latestRace.date);
    dl.appendChild(dt3);
    dl.appendChild(dd3);

    const dt4 = document.createElement('dt');
    dt4.textContent = 'Total Time (Latest)';
    const dd4 = document.createElement('dd');
    dd4.textContent = formatTime(latestRace.time.reduce((acc, t) => acc + t, 0));
    dl.appendChild(dt4);
    dl.appendChild(dd4);

    const h2 = document.createElement('h2');
    h2.textContent = `Athlete: ${id}`;

    const section = document.querySelector(`[data-athlete="${id}"]`);
    section.appendChild(h2);
    section.appendChild(dl);
};

const athletes = data.response.data;
for (const id in athletes) {
    createHtml(athletes[id]);
}

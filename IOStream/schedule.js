
fetch('schedule.json')
    .then(response => response.json())
    .then(data => {
        const scheduleList = document.getElementById('schedule-list');
        data.forEach(session => {
            const div = document.createElement('div');
            div.className = 'schedule-session'; 
            div.innerHTML = `<h3>${session.time} - ${session.title}</h3><p>${session.description}</p>`;
            scheduleList.appendChild(div);
        });
    })
    .catch(error => console.error('Error loading schedule:', error));
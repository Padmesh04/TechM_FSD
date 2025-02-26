
fetch('speakers.json')
    .then(response => response.json())
    .then(data => {
        const speakerList = document.getElementById('speaker-list');
        data.forEach(speaker => {
            const div = document.createElement('div');
            div.innerHTML = `<h3>${speaker.name}</h3><p>${speaker.bio}</p>`;
            speakerList.appendChild(div);
            div.className = 'speakers-session'; 
            
        });
    })
    .catch(error => console.error('Error loading speakers:', error));

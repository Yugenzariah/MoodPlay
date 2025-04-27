document.querySelectorAll('button[data-mood]').forEach(button => {
    button.addEventListener('click', async () => {
      const mood = button.getAttribute('data-mood');
      const res = await fetch(`http://localhost:5000/playlist/${mood}`);
      const data = await res.json();
  
      const resultDiv = document.getElementById('playlist-result');
      resultDiv.innerHTML = `
        <h2>${data.name}</h2>
        <p>${data.description}</p>
        <a href="${data.link}" target="_blank">🎵 Open Playlist</a>
      `;
    });
});
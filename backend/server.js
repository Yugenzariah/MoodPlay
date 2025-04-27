const express = require('express');
const cors = require('cors');
const playlists = require('./data');

const app = express();
const PORT = 5000;

app.use(cors());

// API Route: /playlist/:mood
app.get('/playlist/:mood', (req, res) => {
    const mood = req.params.mood.toLowerCase();
    const moodPlaylists = playlists[mood];

    if (!moodPlaylists) {
        return res.status(404).json({ error: 'Not a mood!' });
    }

    const randomIndex = Math.floor(Math.random() * moodPlaylists.length);
    const randomPlaylist = moodPlaylists[randomIndex];

    res.json(randomPlaylist);
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`)
})
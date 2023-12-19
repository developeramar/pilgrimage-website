
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Dummy data for upcoming events
const events = [
  { title: 'Event 1', date: '2023-12-25', location: 'City 1', description: 'Description 1' },
  { title: 'Event 2', date: '2023-12-31', location: 'City 2', description: 'Description 2' },
];

// API endpoint to get upcoming events
app.get('/api/events', (req, res) => {
  res.json(events);
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

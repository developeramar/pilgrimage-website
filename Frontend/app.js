
document.addEventListener('DOMContentLoaded', () => {
    const eventsContainer = document.getElementById('events-container');
  
    // Fetch upcoming events from the backend
    fetch('/api/events')
      .then(response => response.json())
      .then(events => {
        // Display events on the webpage
        events.forEach(event => {
          const eventElement = document.createElement('div');
          eventElement.className = 'event';
          eventElement.innerHTML = `<h3>${event.title}</h3><p>Date: ${event.date}</p><p>Location: ${event.location}</p>`;
          eventElement.addEventListener('click', () => {
            alert(`Description: ${event.description}`);
          });
          eventsContainer.appendChild(eventElement);
        });
      })
      .catch(error => {
        console.error('Error fetching events:', error.message);
        alert('Error fetching events. Please try again later.');
      });
  });
  
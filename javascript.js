// script.js
function updateRealTimeData() {
    const currentDayElement = document.querySelector('[data-testid="current-day"]');
    const currentTimeElement = document.querySelector('[data-testid="current-time"]');
    
    const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const now = new Date();
    const dayOfWeek = daysOfWeek[now.getUTCDay()];
    const time = now.toISOString().substr(11, 8);
    
    currentDayElement.textContent = `Current Day: ${dayOfWeek}`;
    currentTimeElement.textContent = `UTC Time: ${time}`;
}

// Call the function to update real-time data
updateRealTimeData();

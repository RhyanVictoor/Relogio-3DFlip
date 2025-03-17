document.getElementById('time-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const hours = parseInt(document.getElementById('hours-input').value) || 0;
    const minutes = parseInt(document.getElementById('minutes-input').value) || 0;
    const seconds = parseInt(document.getElementById('seconds-input').value) || 0;

    let totalTime = (hours * 3600) + (minutes * 60) + seconds;

    if (totalTime <= 0) return;

    document.getElementById('form-container').style.display = 'none';
    document.getElementById('countdown-container').style.display = 'flex';

    function updateCountdown() {
        if (totalTime <= 0) {
            clearInterval(countdownInterval);
            return;
        }

        totalTime--;

        const displayHours = Math.floor(totalTime / 3600);
        const displayMinutes = Math.floor((totalTime % 3600) / 60);
        const displaySeconds = totalTime % 60;

        updateTimeSection("hours", displayHours);
        updateTimeSection("minutes", displayMinutes);
        updateTimeSection("seconds", displaySeconds);
    }

    function updateTimeSection(sectionID, timeValue) {
        const firstNumber = Math.floor(timeValue / 10);
        const secondNumber = timeValue % 10;
        const sectionElement = document.getElementById(sectionID);
        const timeSegments = sectionElement.querySelectorAll(".time-segment");

        timeSegments[0].textContent = firstNumber;
        timeSegments[1].textContent = secondNumber;
    }

    const countdownInterval = setInterval(updateCountdown, 1000);
    updateCountdown();
});

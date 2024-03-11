document.addEventListener("DOMContentLoaded", function() {
    const countdownDisplay = document.getElementById("countdown");
    const startButton = document.getElementById("startButton");
    const resetButton = document.getElementById("resetButton");

    let totalSeconds = 60; // 1 minute timer
    let secondsLeft = totalSeconds;
    let countdownInterval;

    function startCountdown() {
        countdownInterval = setInterval(updateCountdown, 1000);
        startButton.disabled = true;
        resetButton.disabled = false;
    }

    function updateCountdown() {
        const hours = Math.floor(secondsLeft / 3600);
        const minutes = Math.floor((secondsLeft % 3600) / 60);
        const seconds = secondsLeft % 60;

        countdownDisplay.textContent = `${hours < 10 ? '0' : ''}${hours}:${minutes < 10 ? '0' : ''}${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;

        if (secondsLeft === 0) {
            clearInterval(countdownInterval);
            alert("Time's up!");
            resetCountdown();
        } else {
            secondsLeft--;
        }
    }

    function resetCountdown() {
        clearInterval(countdownInterval);
        secondsLeft = totalSeconds;
        countdownDisplay.textContent = '00:00:00';
        startButton.disabled = false;
        resetButton.disabled = true;
    }

    startButton.addEventListener("click", startCountdown);
    resetButton.addEventListener("click", resetCountdown);
});

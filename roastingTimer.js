let isRunning = false;
let timer;
let minutes = 0;
let seconds = 0;
let totalRoastTime = 0;

function startStop() {
    if (isRunning) {
        clearInterval(timer);
        document.getElementById("startStop").textContent = "Start";
    } else {
        timer = setInterval(updateStopwatch, 1000);
        document.getElementById("startStop").textContent = "Stop";
    }
    isRunning = !isRunning;
}

function reset() {
    clearInterval(timer);
    isRunning = false;
    minutes = 0;
    seconds = 0;
    updateDisplay();
    document.getElementById("startStop").textContent = "Start";
}

function updateStopwatch() {
    seconds++;
    if (seconds == 60) {
        seconds = 0;
        minutes++;

    }
    updateDisplay();
    console.log();

}

function updateDisplay() {
    var timerRoastDisplayMin = document.getElementById("total-time-min");
    var timerRoastDisplaySec = document.getElementById("total-time-sec");
    // const formattedTime = 
    //     (minutes < 10 ? "0" + minutes : minutes) + ":" + 
    //     (seconds < 10 ? "0" + seconds : seconds);
    timerRoastDisplayMin.value = (minutes < 10 ? "0" + minutes : minutes);
    timerRoastDisplaySec.value = (seconds < 10 ? "0" + seconds : seconds);
    
}

function logFirstCrack()
{
    var fcDisplayMin = document.getElementById("fc-min");
    var fcDisplaySec = document.getElementById("fc-sec");
    fcDisplayMin.value = (minutes < 10 ? "0" + minutes : minutes);
    fcDisplaySec.value = (seconds < 10 ? "0" + seconds : seconds);

}


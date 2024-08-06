let startTime;
let updatedTime;
let difference;
let tInterval

var savedTime = 0;
var running = false;

const timeDisplay = document.querySelector('.time-display')
const startBtn = document.querySelector('.start-btn')
const stopBtn = document.querySelector('.stop-btn')
const resetBtn = document.querySelector('.reset-btn')

startBtn.addEventListener('click', startTimer);
stopBtn.addEventListener('click', stopTimer);
resetBtn.addEventListener('click', resetTimer);

function startTimer() {
    if (!running) {
        startTime = new Date().getTime() - savedTime;
        tInterval = setInterval(updateTime, 1);
        running = true;
        startBtn.disabled = true;
        stopBtn.disabled = false;
        resetBtn.disabled = false;
    }
}

function stopTimer() {
    if (running) {
        clearInterval(tInterval);
        savedTime = new Date().getTime() - startTime;
        running = false;
        startBtn.disabled = false;
        stopBtn.disabled = true;
        resetBtn.disabled = false;
    }
}

function resetTimer() {
    clearInterval(tInterval);
    savedTime = 0;
    running = false;
    startBtn.disabled = false;
    stopBtn.disabled = true;
    resetBtn.disabled = true;
    timeDisplay.innerHTML = "00:00:00";
}

function updateTime() {
    updatedTime = new Date().getTime();
    difference = updatedTime - startTime;
    
    let hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((difference % (1000 * 60)) / 1000);

    hours = (hours < 10) ? "0" + hours : hours;
    minutes = (minutes < 10) ? "0" + minutes : minutes;
    seconds = (seconds < 10) ? "0" + seconds : seconds;

    timeDisplay.innerHTML = hours + ":" + minutes + ":" + seconds;
}

// Initially disable stop and reset buttons
stopButton.disabled = true;
resetButton.disabled = true;
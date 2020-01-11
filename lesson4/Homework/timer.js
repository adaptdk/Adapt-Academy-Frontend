// Time values
hours = "00";
minutes = "00";
seconds = "00";
valRst = ["00", "00", "10"]; // values for reset
timer;

timerHtml = document.getElementById("timer");
startBtn = document.getElementById("startBtn");
stopBtn = document.getElementById("stopBtn");
resumeBtn = document.getElementById("resumeBtn");
resetBtn = document.getElementById("resetBtn");

timerHtml.addEventListener("keyup", () => {
    timer.innerHTML = document.getElementById("timerValues").value;
})

// Start button to start time with the inserted values
startBtn.addEventListener("click", () => {
    val = document.getElementById("timerValues").value;
    if (val) {
        valArr = val.split(":");
        // Checking if values are correctly entered and in a range.
        if (valArr.length == 3 && valArr[0] >= 0 && valArr[0] <= 24 && valArr[1] >= 0 && valArr[1] <= 60 && valArr[2] >= 0 && valArr[2] <= 60) {
            valRst = valArr;
            hours = valArr[0];
            minutes = valArr[1];
            seconds = valArr[2];
            start();
        } else {
            // Default values
            alert("Wrong values/formating");
            hours = "00";
            minutes = "00";
            seconds = "10";
            start();
        }
        displayTime();
    }
})

// Stop button 
stopBtn.addEventListener("click", () => stop());

// Resume Button
resumeBtn.addEventListener("click", () => resume());

// Reset button to start timing with previous values(not newly entered)
resetBtn.addEventListener("click", () => {
    document.getElementById("timer").innerHTML = valRst[0] + ":" + valRst[1] + ":" + valRst[2];
    reset();
});

function start() {
    stop(); // stopping if there is an already running interval
    displayTime();
    timer = setInterval(handleTime, 1000);
}

function stop() {
    timer = clearInterval(timer);
}

function resume() {
    stop();
    start();
}

function reset() {
    stop();
    hours = valRst[0];
    minutes = valRst[1];
    seconds = valRst[2];
    start();
}

function handleTime() {
    if (timeVerification() == false) { return }

    seconds--;
    if (seconds == "60") {
        seconds = 0;
        minutes++;
    }
    if (minutes == "60") {
        minutes = 0;
        hours++;
    }
    displayTime();
}

function displayTime() {
    // Formating
    document.getElementById("timer").innerHTML = (
        (hours < 10 && hours[0] != 0 ? "0" + hours : hours) + ":" +
        (minutes < 10 && minutes[0] != 0 ? "0" + minutes : minutes) + ":" +
        (seconds < 10 && seconds[0] != 0 ? "0" + seconds : seconds));
}

function timeVerification() {
    if (hours == 0 && minutes == 0 && seconds == 0) {
        stop();
        alert("Timer done!")
        return false;
    }
    return true;
}
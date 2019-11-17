/* Write a prototype based counter which has methods `start()`, `stop()`, `resume()` and `reset()`.
`start()` method will receive a time parameter with format `hh:mm:ss` which as example is `00:01:10`.
It will count up to the given time and then it will stop automatically. If parameter is not supplied then it will count indefinitely.
If poorly formmatted time string will be supplied to the method it will throw an error.
`stop()` will stop (pause) the counter.
`resume()` will start counting once again from the time value it has stopped on.
`reset()` will reset time to 0.

A counter constructor will receive a formatted time parameter `hh:mm:ss` which we will use as a start time to start counting from.*/
let Seconds;
let Minutes;
let Hours;
let displaySeconds;
let displayMinutes;
let displayHours;
let endSeconds;
let endMinutes;
let endHours;
let interval = null;
let start;
let end;
let reset = true;
let infinity;
document.querySelector(".resume").disabled = true;
document.querySelector(".stop").disabled = true;
document.querySelector(".reset").disabled = true;
function counter() {

}
counter.prototype.start = function(start, end) {
    if (reset) {
        if (!start)
            start = '00:00:00';
        end === '' ? infinity = true : infinity = false;
        const startTime = start.split(':');
        startTime.forEach(value => value = parseInt(value));
        if (startTime.length !== 3) {
            error();
            return;
        }
        
        for (let i = 0; i < 3; i++) {
            if (startTime[i] >= 0) {
                
                if (i === 0) Hours = startTime[i];
                else if (i === 1 && startTime[i] <= 60) Minutes = startTime[i];
                else if (i === 2 && startTime[i] <= 60) Seconds = startTime[i];
                else {
                    error();
                    return;
                }
            }
            else {
                error();
                return;
            }
        }
        if (!infinity) {
            const endTime = end.split(':');
            endTime.forEach(value => value = parseInt(value));
            if (endTime.length !== 3) {
                error();
                return;
            }
            for (let i = 0; i < 3; i++) {
                if (endTime[i] >= 0) {
                    if (i === 0) endHours = endTime[i];
                    else if (i === 1 && endTime[i] <= 60) endMinutes = endTime[i];
                    else if (i === 2 && endTime[i] <= 60) endSeconds = endTime[i];
                    else {
                        error();
                        return;
                    }
                }
                else {
                    error();
                    return;
                }
            }
        }
        Seconds = parseInt(Seconds);
        Minutes = parseInt(Minutes);
        Hours = parseInt(Hours);
        endSeconds = parseInt(endSeconds);
        endMinutes = parseInt(endMinutes);
        endHours = parseInt(endHours);
        reset = false;
    }
    else {
        if (!infinity) {
            if (Seconds === endSeconds && Minutes === endMinutes && Hours === endHours) {
                this.stop();
                return;
            }
        }
        Seconds++;
        if (Seconds == 60) {
            Seconds = 0;
            Minutes++;
            if (Minutes == 60) {
                Minutes = 0;
                Hours++;
            }
        }
        if (Seconds < 10) {
            displaySeconds = '0' + Seconds;
        }
        else displaySeconds = Seconds;
        if (Minutes < 10) {
            displayMinutes = '0' + Minutes;
        }
        else displayMinutes = Minutes;
        if (Hours < 10) {
            displayHours = '0' + Hours;
        }
        else displayHours = Hours;
        document.querySelector(".counter").innerHTML = `${displayHours}:${displayMinutes}:${displaySeconds}`;
    }

}
counter.prototype.stop = function() {
    window.clearInterval(interval);
}
counter.prototype.resume = function() {
    interval = window.setInterval(timer.start, 1000);
}
function error() {
    document.querySelector(".counter").innerHTML = 'Poorly formatted time string';
    if (interval != null) timer.stop();
}


const timer = new counter;

document.querySelector(".start").addEventListener('click', () => {
    start = document.querySelector('.startInput').value;
    end = document.querySelector('.endInput').value;
    timer.start(start,end);  
    if (document.querySelector(".counter").innerHTML !== 'Poorly formatted time string') {
        interval = window.setInterval(timer.start, 1000);
    }
    document.querySelector(".resume").disabled = true;
    document.querySelector(".start").disabled = true;
    document.querySelector(".stop").disabled = false;
    document.querySelector(".reset").disabled = false;
});
document.querySelector(".stop").addEventListener('click', () => {
    timer.stop();
    document.querySelector(".resume").disabled = false;
});
document.querySelector(".resume").addEventListener('click', () => {
    interval = window.setInterval(timer.start, 1000);
    document.querySelector(".resume").disabled = true;
});
document.querySelector(".reset").addEventListener('click', () => {
    document.querySelector(".start").disabled = false;
    document.querySelector(".resume").disabled = true;
    document.querySelector(".stop").disabled = true;
    document.querySelector(".reset").disabled = true;
    document.querySelector(".counter").innerHTML = '00:00:00';
    reset = true;
    timer.stop();
});
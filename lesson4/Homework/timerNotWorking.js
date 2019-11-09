// Bandžiau daryti susikuręs klasę, bet nepavyko, nes nuolat rašė, kad laiko values
// yra undefined, kai buvo priskirtos
// class Timer {

//     constructor(h, m, s) {
//         this.hours = h;
//         this.minutes = m;
//         this.seconds = s;
//         console.log(this.hours, this.minutes, this.seconds, "cia data");
//         this.timer;
//         console.log("Your time is: " + this.hours + ":" + this.minutes + ":" + this.seconds, "lalala");
//     }

//     handleTime() {
//         console.log(this.seconds, "cia yra sekundes")  // undefined
//             //this.seconds--;
//         if (this.seconds == "60") {
//             sec = 0;
//             //min++;
//         }
//         if (this.minutes == "60") {
//             this.minutes = 0;
//             //this.hours++;
//         }

//         console.log(this.hours, this.minutes, this.seconds);  // undefined

//     }

//     displayTime() {
//         document.getElementById("timer").innerHTML = (this.hours + ":" + this.minutes + ":" + this.seconds);
//     }

//     start() {
//         this.timer = setInterval(this.handleTime, 1000);
//     }
//     stop() {}
//     resume() {}
//     reset() {}

// }


// startBtn = document.getElementById("startBtn");
// startBtn.addEventListener("click", () => {
//     let val = document.getElementById("timerValues").value;
//     if (val) {
//         valArr = val.split(":");
//         console.log(valArr);
//         timer = new Timer(valArr[0], valArr[1], valArr[2]);
//         console.log(timer);
//         timer.start();
//         console.log(val);
//     } else {
//         console.log('nx');
//     }

// })


// //c = new Timer(10, 10, 10);

// //console.log(c);
// c.start();
// //document.getElementById("timer").innerHTML = "lalla";
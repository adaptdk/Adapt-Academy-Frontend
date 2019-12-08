
//                    Adapt Academy 2019 lesson 04 - JS | task 04 by Donatas Dereškevičius  


    let t = 0;

    const timeFormat = () => {
        return document.querySelector(".result").innerHTML = "00:00:00";
    };

    const displayTime = () => {
        t = t + 1;
        counter = setInterval(()=>{
            time = t++;
            let hours = Math.floor(time / 3600);
            let minutes = Math.floor((time - (hours * 3600)) / 60);
            let seconds = Math.floor(time - (hours * 3600) - (minutes * 60));
            let displayFormat = hours.toString().padStart(2, '0') + ':' 
            + minutes.toString().padStart(2, '0') + ':'
            + seconds.toString().padStart(2, '0');
            return document.querySelector(".result").innerHTML = displayFormat;
        }, 1000);
    };

    let timeIsRunning;

    const start = () => {
        if (t === 0){
            timeIsRunning = true;
            displayTime();
            document.querySelector(".note").innerHTML = "STARTED";
        } else {
            document.querySelector(".note").innerHTML = "time is already running ... if NOT _press RESUME";
        };
    };

    const stop = () => {
        timeIsRunning = false;
        counter = clearInterval(counter);
        document.querySelector(".note").innerHTML = "STOPPED";
    };

    const resume = () => {
        if (t === 0){
            document.querySelector(".note").innerHTML = "first start counter with START button";
        } else if (timeIsRunning === true){
            document.querySelector(".note").innerHTML = "time is already running ...";
        } else if (t > 0){
            stop();
            timeIsRunning = true;
            displayTime();
            document.querySelector(".note").innerHTML = "RESUMED";
        };
    };

    const reset = () => {
        stop();
        t = 0;
        document.querySelector(".note").innerHTML = "RESET";
        return document.querySelector(".result").innerHTML = "00:00:00";
    };

    const setTime = () => {
        let input = Number(document.querySelector(".form-input").value);
        console.log(input);
        if (timeIsRunning === true){
            document.querySelector(".note").innerHTML = "time is already running ...";
            if (time > 0){
                document.querySelector(".note").innerHTML = "time is more than 0 ...";
            }
        } else if (input === NaN){
            document.querySelector(".note").innerHTML = "please enter number";
        } else if (input <0){
            document.querySelector(".note").innerHTML = "please enter positive number";
        } else if (input === 0){
            document.querySelector(".note").innerHTML = "please enter any positive number";
        } else if (input > 0){
            document.querySelector(".note").innerHTML = "STARTED";
            counter = setInterval(()=>{
                time = t++;
                let hours = Math.floor(time / 3600);
                let minutes = Math.floor((time - (hours * 3600)) / 60);
                let seconds = Math.floor(time - (hours * 3600) - (minutes * 60));
                let displayFormat = hours.toString().padStart(2, '0') + ':' 
                + minutes.toString().padStart(2, '0') + ':'
                + seconds.toString().padStart(2, '0');
                document.querySelector(".result").innerHTML = displayFormat;
                if(time === input){
                    clearInterval(counter);
                    document.querySelector(".note").innerHTML = "STOPPED";
                };
            }, 1000);
        };
    };
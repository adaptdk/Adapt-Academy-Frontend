
//                    Adapt Academy 2019 lesson 04 - JS | task 04 by Donatas Dereškevičius  


    class Counter {
        constructor (){
            this.startingTime();
            this.stopedTime();
            this.currentTime();
            this.startCounter();
            this.stopCounter();
            this.resetCounter();
            this.timeInterval();
            this.timeFormat();
            this.displayCounter();
            this.update();
            this.start();
            this.stop();
            this.reset();
        }

        static startingTime(){
            return 0;
        }

        static stopedTime(){
            return 0;
        }

        static currentTime(){
            return 0;
        }

        static startCounter(){
            let startingTime = this.startingTime() ? this.startingTime() : this.currentTime();
            return startingTime;
        }

        static stopCounter(){
            let startingTime = this.startCounter();
            let stopedTime = this.startingTime() ? this.stopedTime() + this.currentTime() - this.startingTime() : this.stopedTime();
            
            return startingTime, stopedTime;
        }

        static resetCounter(){
            let stopedTime = 0;
            let startingTime = 0;
            return stopedTime, startingTime;
        }

        static timeInterval(){
            return this.stopedTime() + (this.startingTime() ? this.currentTime() - this.startingTime() : 0); 
        }

        static timeFormat(){

            let time = this.currentTime();

            let hours = Math.floor(time / 3600);
            let minutes = Math.floor((time - (hours * 3600)) / 60);
            let seconds = Math.floor(time - (hours * 3600) - (minutes * 60));
    
            let displayTime = hours.toString().padStart(2, '0') + ':' 
                             + minutes.toString().padStart(2, '0') + ':'
                             + seconds.toString().padStart(2, '0');
    
            return displayTime;
        }
    
        static displayCounter(){
            let $result = document.querySelector(".result");
            this.update();
            return $result;
        }
    
        static update(){
            document.querySelector('.result').innerHTML = this.timeFormat(this.timeInterval());
        }
        
        static start(){
            let interval = setInterval("update()", 1000);
            this.startCounter();
            return interval;
        }
            
        static stop(){
            this.stopCounter();
            clearInterval(this.start());
        }
            
        static reset = () => {
            this.stop();
            this.resetCounter();
            this.update();
        }
    }

   

    console.log(Counter.startingTime());
    console.log(Counter.stopedTime());
    console.log(Counter.currentTime());

    console.log(Counter.startCounter());
    console.log(Counter.stopCounter());
    console.log(Counter.resetCounter());

    console.log(Counter.timeInterval());
    console.log(Counter.timeFormat());
    console.log(Counter.displayCounter());


    console.log(Counter.update());
    console.log(Counter.start());
    console.log(Counter.stop());
    console.log(Counter.reset());
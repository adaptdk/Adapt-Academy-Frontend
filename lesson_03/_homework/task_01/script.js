
//                    Adapt Academy 2019 lesson 03 - JS introduction | task 01 by Donatas Dereškevičius                     


const getZodiacSign = (month, day) => {

    month = document.querySelector(".form-input__month").value;
    day = document.querySelector(".form-input__day").value;

    if  ((month > 0 && month <= 12) && (day > 0 && day <= 31)){

        if (( month == 12 && day >= 22) || (month == 1 && day < 20)){
            document.querySelector(".answer-text").innerHTML = 'Capricorn';
    
                document.querySelector(".wrap-title").classList.add('hide');
                document.querySelector(".wrap-subtitle").classList.add('hide');
                document.querySelector(".form").classList.add('hide');
                document.querySelector(".answer").classList.add('show');
                document.querySelector(".answer-image").src = "./img/capricorn.png";
    
        } else if ((month == 1 && day >= 20) || (month == 2 && day < 18)){
            document.querySelector(".answer-text").innerHTML = 'Aquarius';
    
                document.querySelector(".wrap-title").classList.add('hide');
                document.querySelector(".wrap-subtitle").classList.add('hide');
                document.querySelector(".form").classList.add('hide');
                document.querySelector(".answer").classList.add('show');
                document.querySelector(".answer-image").src = "./img/aquarius.png";
    
        } else if ((month == 2 && day >= 18) || (month == 3 && day < 20)){
            document.querySelector(".answer-text").innerHTML = 'Pisces';
    
                document.querySelector(".wrap-title").classList.add('hide');
                document.querySelector(".wrap-subtitle").classList.add('hide');
                document.querySelector(".form").classList.add('hide');
                document.querySelector(".answer").classList.add('show');
                document.querySelector(".answer-image").src = "./img/pisces.png";
    
        } else if ((month == 3 && day >= 20) || (month == 4 && day < 20)){
            document.querySelector(".answer-text").innerHTML = 'Aries';
    
                document.querySelector(".wrap-title").classList.add('hide');
                document.querySelector(".wrap-subtitle").classList.add('hide');
                document.querySelector(".form").classList.add('hide');
                document.querySelector(".answer").classList.add('show');
                document.querySelector(".answer-image").src = "./img/aries.png";
    
        } else if ((month == 4 && day >= 20) || (month == 5 && day < 21)){
            document.querySelector(".answer-text").innerHTML = 'Taurus';
    
                document.querySelector(".wrap-title").classList.add('hide');
                document.querySelector(".wrap-subtitle").classList.add('hide');
                document.querySelector(".form").classList.add('hide');
                document.querySelector(".answer").classList.add('show');
                document.querySelector(".answer-image").src = "./img/taurus.png";
    
        } else if ((month == 5 && day >= 21) || (month == 6 && day < 21)){
            document.querySelector(".answer-text").innerHTML = 'Gemini';
    
                document.querySelector(".wrap-title").classList.add('hide');
                document.querySelector(".wrap-subtitle").classList.add('hide');
                document.querySelector(".form").classList.add('hide');
                document.querySelector(".answer").classList.add('show');
                document.querySelector(".answer-image").src = "./img/gemini.png";
    
        } else if ((month == 6 && day >= 21) || (month == 7 && day < 23)){
            document.querySelector(".answer-text").innerHTML = 'Cancer';
    
                document.querySelector(".wrap-title").classList.add('hide');
                document.querySelector(".wrap-subtitle").classList.add('hide');
                document.querySelector(".form").classList.add('hide');
                document.querySelector(".answer").classList.add('show');
                document.querySelector(".answer-image").src = "./img/cancer.png";
    
        } else if ((month == 7 && day >= 23) || (month == 8 && day < 23)){
            document.querySelector(".answer-text").innerHTML = 'Leo';
    
                document.querySelector(".wrap-title").classList.add('hide');
                document.querySelector(".wrap-subtitle").classList.add('hide');
                document.querySelector(".form").classList.add('hide');
                document.querySelector(".answer").classList.add('show');
                document.querySelector(".answer-image").src = "./img/leo.png";
    
        } else if ((month == 8 && day >= 23) || (month == 9 && day < 23)){
            document.querySelector(".answer-text").innerHTML = 'Virgo';
    
                document.querySelector(".wrap-title").classList.add('hide');
                document.querySelector(".wrap-subtitle").classList.add('hide');
                document.querySelector(".form").classList.add('hide');
                document.querySelector(".answer").classList.add('show');
                document.querySelector(".answer-image").src = "./img/virgo.png";
    
        } else if ((month == 9 && day >= 23) || (month == 10 && day < 23)){
            document.querySelector(".answer-text").innerHTML = 'Libra';
    
                document.querySelector(".wrap-title").classList.add('hide');
                document.querySelector(".wrap-subtitle").classList.add('hide');
                document.querySelector(".form").classList.add('hide');
                document.querySelector(".answer").classList.add('show');
                document.querySelector(".answer-image").src = "./img/libra.png";
    
        } else if ((month == 10 && day >= 23) || (month == 11 && day < 22)){
            document.querySelector(".answer-text").innerHTML = 'Scorpio';
    
                document.querySelector(".wrap-title").classList.add('hide');
                document.querySelector(".wrap-subtitle").classList.add('hide');
                document.querySelector(".form").classList.add('hide');
                document.querySelector(".answer").classList.add('show');
                document.querySelector(".answer-image").src = "./img/scorpio.png";
    
        } else if ((month == 11 && day >= 22) || (month == 12 && day < 22)){
            document.querySelector(".answer-text").innerHTML = 'Sagittarius';
    
                document.querySelector(".wrap-title").classList.add('hide');
                document.querySelector(".wrap-subtitle").classList.add('hide');
                document.querySelector(".form").classList.add('hide');
                document.querySelector(".answer").classList.add('show');
                document.querySelector(".answer-image").src = "./img/sagittarius.png";
    
        }
    } else {
        document.querySelector(".error-text").innerHTML = 'Wrong date or input !';

            document.querySelector(".answer").classList.add('show');
            document.querySelector(".answer-title").classList.add('hide');
    }
}
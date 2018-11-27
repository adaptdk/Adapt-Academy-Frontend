/* Vytenis Dzvonkas  dzvonkasvytenis@gmail.com
=============Adapt Academy Frontend=============
Lesson 3; Task 1 */



// 1. Write function getZodiacSign(day, month) which will return zodiac sign depending on input.
//    Dates for concrete zodiac sign can be found in https://www.horoscopedates.com/zodiac-signs/


function getZodiacSign(day, month){
    if (month == 'december'){
        if (day < 22){
            // or return saved to a variable
            console.log('Sagittarius');
        } else{
                console.log('Capricorn');
        }
    } else if (month == 'january'){
        if (day < 20){
            console.log('Capricorn');
        } else{
                console.log('Aquarius');
        }
    } else if (month == 'february'){
        if (day < 19){
            console.log('Aquarius');
        } else{
                console.log('Pisces');
        }
    }else if (month == 'march'){
        if (day < 21){
            console.log('Pisces');
        } else{
                console.log('Aries');
        }
    }else if (month == 'april'){
        if (day < 20){
            console.log('Aries');
        } else{
                console.log('Taurus');
        }
    }else if (month == 'may'){
        if (day < 21){
            console.log('Taurus');
        } else{
                console.log('Gemini');
        }
    }else if (month == 'june'){
        if (day < 21){
            console.log('Gemini');
        } else{
                console.log('Cancer');
        }
    }else if (month == 'july'){
        if (day < 23){
            console.log('Cancer');
        } else{
                console.log('Leo');
        }
    }else if (month == 'august'){
        if (day < 23){
            console.log('Leo');
        } else{
                console.log('Virgo');
        }
    }else if (month == 'september'){
        if (day < 23){
            console.log('Virgo');
        } else{
                console.log('Libra');
        }
    }else if (month == 'october'){
        if (day < 23){
            console.log('Libra');
        } else{
                console.log('Scorpio');
        }
    }else if (month == 'november'){
        if (day < 22){
            console.log('Scorpio');
        } else{
                console.log('Sagittarius');
        }
    }
}

getZodiacSign(19, 'january');



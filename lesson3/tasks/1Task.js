function getZodiacSign(day, month) {
    if (month == 'Dec' && day >= 22 || month == 'Jan' && day <= 20)
        console.log('You are Capricorn.');
    else if (month == 'Jan' && day >= 20 || month == 'Feb' && day <= 18)
        console.log('You are Aquarius.');
    else if (month == 'Feb' && day >= 18 || month == 'Mar' && day <= 20)
        console.log('You are Pisces.');
    else if (month == 'Mar' && day >= 20 || month == 'Apr' && day <= 20)
        console.log('You are Aries.');
    else if (month == 'Apr' && day >= 20 || month == 'May' && day <= 21)
        console.log('You are Taurus.');
    else if (month == 'May' && day >= 21 || month == 'Jun' && day <= 21)
        console.log('You are Gemini.');
    else if (month == 'Jun' && day >= 21 || month == 'Jul' && day <= 23)
        console.log('You are Cancer.');
    else if (month == 'Jul' && day >= 23 || month == 'Aug' && day <= 23)
        console.log('You are Leo.');
    else if (month == 'Aug' && day >= 23 || month == 'Sep' && day <= 23)
        console.log('You are Virgo.');
    else if (month == 'Sep' && day >= 23 || month == 'Oct' && day <= 23)
        console.log('You are Libra.');
    else if (month == 'Oct' && day >= 23 || month == 'Nov' && day <= 22)
        console.log('You are Scorpio.');
    else if (month == 'Nov' && day >= 22 || month == 'Dec' && day <= 22)
        console.log('You are Sagittarius.');
}
getZodiacSign(03,'Nov');
getZodiacSign(05,'May');
getZodiacSign(25,'Dec');
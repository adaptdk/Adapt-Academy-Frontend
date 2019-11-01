function getZodiacSign(day, month) {
    const invalidMonthMessage = 'Entered month is invalid! Please enter a month name or a number.';

    if (day < 0 || day > 31 || typeof day !== 'number') {
        console.log(`${day} is an invalid day. Please enter day ranging from 0 to 31!`);
        return;
    }
    if (month === '') {
        console.log(invalidMonthMessage);
        return;
    }
    const lastDay = ['', 20,18,20,20,21,21,23,23,23,23,22,22];
    const zodiacSigns = ['', 'Capricorn','Aquarius','Pisces','Aries','Taurus',
    'Gemini','Cancer','Leo','Virgo','Libra','Scorpio','Sagittarius','Capricorn'];
    const months = ['', 'jan', 'feb', 'mar', 'apr', 'may', 'jun', 'jul', 'aug', 'sep', 'oct', 'nov', 'dec'];
    let zodiacSign = '';

    if (typeof month === 'string') {
        month = month.toLowerCase();
        if (month.length > 3) 
            month = month.substring(0,3);
        if (months.indexOf(month) === -1) {
            console.log(invalidMonthMessage);
            return;
        }
        day > lastDay[months.indexOf(month)] ? zodiacSign = zodiacSigns[months.indexOf(month) + 1]
        : zodiacSign = zodiacSigns[months.indexOf(month)];
    }
    else if (typeof month === 'number') {
        if (month < 1 || month > 12) {
            console.log(invalidMonthMessage);
            return;
        }
        day > lastDay[month] ? zodiacSign = zodiacSigns[month + 1]
        : zodiacSign = zodiacSigns[month];
    }
    console.log(zodiacSign);
}
getZodiacSign(03,'Nov'); // Scorpio
getZodiacSign(05,'May'); // Taurus
getZodiacSign(25,'Dec'); // Capricorn
getZodiacSign(03, 11); // Scorpio
getZodiacSign(05, 05); // Taurus
getZodiacSign(25, 12); // Capricorn
getZodiacSign(03, 'November'); // Scorpio
getZodiacSign(25, 'December'); // Capricorn
getZodiacSign(100,'Dec'); // Invalid day
getZodiacSign(-99,'Jan'); // Invalid day
getZodiacSign(03, ''); // Invalid month
getZodiacSign(03, 0); // Invalid month
getZodiacSign(03, 13); // Invalid month
function getZodiacSign(day, month) {
    var zodiac = {
        aries: "Aries",
        taurus: "Taurus",
        gemini: "Gemini",
        cancer: "Cancer",
        leo: "Leo",
        virgo: "Virgo",
        libra: "Libra",
        scorpio: "Scorpio",
        sagittarius: "Sagittarius",
        capricorn: "Capricorn",
        aquarius: "Aquarius",
        pisces: "Pisces"
    };

    if ((month == 3 && day >= 21) || (month == 4 && day <= 20)) {
        return zodiac.aries;
    } else if (( day >= 21 && month == 4) || ( day <= 20 && month == 5)) {
        return zodiac.taurus;
    } else if (( day >= 22 &&  month == 6) || ( day <= 22 &&  month == 7)) {
        return zodiac.cancer;
    } else if ((day >= 21  && month == 5) || ( day <= 20 && month == 6)) {
        return zodiac.gemini;
    } else if (( day >= 23 && month == 7) || ( day <= 23 && month == 8)) {
        return zodiac.leo;
    } else if (( day >= 24 && month == 8) || ( day <= 23 && month == 9)) {
        return zodiac.virgo;
    } else if (( day >= 24 && month == 9 ) || (day <= 23 && month == 10 )) {
        return zodiac.libra;
    } else if (( day >= 24 && month == 10 ) || ( day <= 22 && month == 11 )) {
        return zodiac.scorpio;
    } else if (( day >= 23 && month == 11) || ( day <= 21 && month == 12)) {
        return zodiac.sagittarius;
    } else if (( day <= 20 && month == 1 ) || ( day >= 22 && month == 12 )) {
        return zodiac.capricorn;
    } else if (( day >= 21 && month == 1 ) || ( day <= 18 && month == 2 )) {
        return zodiac.aquarius;
    } else if (( day >= 19 && month == 2) || (day <= 20 && month == 3)) {
        return zodiac.pisces;
    }
}

console.log(getZodiacSign(25, 10));

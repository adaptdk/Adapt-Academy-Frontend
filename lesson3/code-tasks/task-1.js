
const getZodiacSign = (day, month) => {
  if((month == 1 && day <= 20) || (month == 12 && day >=22)) {
    return "Capricorn";
  } else if ((month == 1 && day >= 21) || (month == 2 && day <= 18)) {
    return "Aquarius";
  } else if((month == 2 && day >= 19) || (month == 3 && day <= 20)) {
    return "Pisces";
  } else if((month == 3 && day >= 21) || (month == 4 && day <= 20)) {
    return "Aries";
  } else if((month == 4 && day >= 21) || (month == 5 && day <= 20)) {
    return "Taurus";
  } else if((month == 5 && day >= 21) || (month == 6 && day <= 20)) {
    return "Gemini";
  } else if((month == 6 && day >= 22) || (month == 7 && day <= 22)) {
    return "Cancer";
  } else if((month == 7 && day >= 23) || (month == 8 && day <= 23)) {
    return "Leo";
  } else if((month == 8 && day >= 24) || (month == 9 && day <= 23)) {
    return "Virgo";
  } else if((month == 9 && day >= 24) || (month == 10 && day <= 23)) {
    return "Libra";
  } else if((month == 10 && day >= 24) || (month == 11 && day <= 22)) {
    return "Scorpio";
  } else if((month == 11 && day >= 23) || (month == 12 && day <= 21)) {
    return "Saggitarius";
  }
}

console.log(getZodiacSign(20,5))
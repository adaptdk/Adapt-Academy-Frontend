class Zodiac {
  constructor() {
    this.currentYear = new Date().getFullYear();
    this.data = this.getData();

    this.form = document.getElementById('zodiac-form');
    this.zodiacInfoHolder = document.getElementById('zodiac-info');
    this.init();
  }

  init() {
    const that = this;
    this.form.addEventListener('submit', (e) => {
      e.preventDefault();
      that.zodiacInfoHolder.innerHTML = '';

      if (!that.isUserInputValid(this.form.month.value, this.form.day.value)) {
        return;
      }

      const enteredDate = that.createDateFromInput(this.form.month.value, this.form.day.value);
      const zodiac = that.getZodiacSignByDate(enteredDate);

      that.zodiacInfoHolder.appendChild(that.createHtml(zodiac));
    });
  }

  createHtml(zodiac) {
    const zodiacHtmlHolder = document.createElement('div');
    const zodiacTitle = document.createElement('h2');
    const zodiacImg = document.createElement('img');
    zodiacTitle.innerText = zodiac.zodiac;
    zodiacImg.setAttribute('src', zodiac.img);
    zodiacHtmlHolder.appendChild(zodiacImg);
    zodiacHtmlHolder.appendChild(zodiacTitle);
    return zodiacHtmlHolder;
  }

  createDateFromInput(month, day) {
    return new Date(this.currentYear, month, day);
  }

  getZodiacSignByDate(date) {
    // hack for Capricorn Dec 22 - Jan 20
    if ((date.getMonth() === 11 && date.getDate() >= 22) || (date.getMonth() === 0 && date.getDate() <= 19)) {
      return this.data.find(item => item.zodiac === 'Capricorn');
    }

    return this.data.find(item => new Date(`${item.periodStart} ${this.currentYear}`) <= date
            && new Date(`${item.periodEnd} ${this.currentYear}`) >= date);
  }

  isUserInputValid(month, day) {
    if (day < 1 || day > 31) {
      return false;
    }
    if (month < 0 || month > 11) {
      return false;
    }
    return true;
  }

  getData() {
    return [
      {
        zodiac: 'Aries',
        periodStart: 'Mar 21',
        periodEnd: `Apr 19`,
        img: 'https://www.horoscopedates.com/img/icon_aries.png',
      },
      {
        zodiac: 'Taurus',
        periodStart: 'Apr 20',
        periodEnd: 'May 20',
        img: 'https://www.horoscopedates.com/img/icon_taurus.png',
      },
      {
        zodiac: 'Gemini',
        periodStart: 'May 21',
        periodEnd: 'Jun 20',
        img: 'https://www.horoscopedates.com/img/icon_gemini.png',
      },
      {
        zodiac: 'Cancer',
        periodStart: 'Jun 21',
        periodEnd: 'Jul 22',
        img: 'https://www.horoscopedates.com/img/icon_cancer.png',
      },
      {
        zodiac: 'Leo',
        periodStart: 'Jul 23',
        periodEnd: 'Aug 22',
        img: 'https://www.horoscopedates.com/img/icon_leo.png',
      },
      {
        zodiac: 'Virgo',
        periodStart: 'Aug 23',
        periodEnd: 'Sep 22',
        img: 'https://www.horoscopedates.com/img/icon_virgo.png',
      },
      {
        zodiac: 'Libra',
        periodStart: 'Sep 23',
        periodEnd: 'Oct 22',
        img: 'https://www.horoscopedates.com/img/icon_libra.png',
      },
      {
        zodiac: 'Scorpio',
        periodStart: 'Oct 23',
        periodEnd: 'Nov 21',
        img: 'https://www.horoscopedates.com/img/icon_scorpio.png',
      },
      {
        zodiac: 'Sagittarius',
        periodStart: 'Nov 22',
        periodEnd: 'Dec 21',
        img: 'https://www.horoscopedates.com/img/icon_sagittarius.png',
      },
      {
        zodiac: 'Capricorn',
        periodStart: 'Dec 22',
        periodEnd: 'Jan 19',
        img: 'https://www.horoscopedates.com/img/icon_capricorn.png',
      },
      {
        zodiac: 'Aquarius',
        periodStart: 'Jan 20',
        periodEnd: 'Feb 18',
        img: 'https://www.horoscopedates.com/img/icon_aquarius.png',
      },
      {
        zodiac: 'Pisces',
        periodStart: 'Feb 19',
        periodEnd: 'Mar 20',
        img: 'https://www.horoscopedates.com/img/icon_pisces.png',
      },
    ];
  }
}

const zodiacPage = document.getElementById('main-zodiac-page');

if (zodiacPage) {
  const zodiacStuff = new Zodiac();
}

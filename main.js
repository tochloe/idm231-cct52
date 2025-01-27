/**
 * @description
 * Given a month and day, determine the corresponding Zodiac sign.
 * @param {number} month - month of the year (1-12)
 * @param {number} day - day of the month (1-31)
 * @returns {string} the corresponding Zodiac sign
 */
function getZodiac(month, day) {
    if ((month === 12 && day >= 22) || (month === 1 && day <= 19)) {
      return 'Capricorn/Linus Van Pelt';
    } else if ((month === 11 && day >= 22) || (month === 12 && day <= 21)) {
      return 'Sagittarius/Snoopy';
    } else if ((month === 10 && day >= 24) || (month === 11 && day <= 21)) {
      return 'Scorpio/Woodstock';
    } else if ((month === 9 && day >= 23) || (month === 10 && day <= 23)) {
      return 'Libra/Sally Brown';
    } else if ((month === 8 && day >= 23) || (month === 9 && day <= 22)) {
      return 'Virgo/Marcie';
    } else if ((month === 7 && day >= 23) || (month === 8 && day <= 22)) {
      return 'Leo/Peppermint Patty';
    } else if ((month === 6 && day >= 22) || (month === 7 && day <= 22)) {
      return 'Cancer/Charlie Brown';
    } else if ((month === 5 && day >= 21) || (month === 6 && day <= 21)) {
      return 'Gemini/Schroeder';
    } else if ((month === 4 && day >= 20) || (month === 5 && day <= 20)) {
      return 'Taurus/Frieda';
    } else if ((month === 3 && day >= 21) || (month === 4 && day <= 19)) {
      return 'Aries/Lucy Van Pelt';
    } else if ((month === 2 && day >= 19) || (month === 3 && day <= 20)) {
      return 'Pisces/Pigpen';
    } else if ((month === 1 && day >= 20) || (month === 2 && day <= 18)) {
      return 'Aquarius/Franklin';
    } else return null;
  }



const zodiac = [

    {
        name: 'Aries/Lucy Van Pelt',
        img: 
        text: ''
    },
    
    {
        name: 'Taurus/Frieda',
        img:
        text:
    },

    {
        name: 'Gemini/Schroeder',
        img:
        text: 
    },

    {
        name: 'Cancer/Charlie Brown',
        img:
        text: 
    },

    {
        name: 'Leo/Peppermint Patty',
        img: 
        text:
    },

    {
        name: 'Virgo/Marcie',
        img:
        text:
    };

    {
        name: 'Libra/Sally Brown',
        img:
        text:
    };

    {
        name:'Scorpio/Woodstock',
        img:
        text:
    };

    {
        name: 'Sagittarius/Snoopy',
        img: 
        text:
    };
 
    {
        name: 'Capricorn/Linus Van Pelt',
        img:
        text:
    };

    {
        name:'Aquarius/Franklin',
        img:
        text:
    }

    {
        name: 'Pisces/Pigpen',
        img:
        text:
    };
]
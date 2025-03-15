/**
 * @description
 * Given a month and day, determine the corresponding Zodiac sign.
 * @param {number} month - month of the year (1-12)
 * @param {number} day - day of the month (1-31)
 * @returns {string} the corresponding Zodiac sign
 */
const franklinBtn = document.getElementById('franklin')
const lucyBtn = document.getElementById('lucy')
const charlieBtn = document.getElementById('charlie')
const linusBtn = document.getElementById('linus')
const schroederBtn = document.getElementById('schroeder')
const peppermintBtn = document.getElementById('peppermint')
const sallyBtn = document.getElementById('sally')
const pigpenBtn = document.getElementById('pigpen')
const snoopyBtn = document.getElementById('snoopy')
const woodstockBtn = document.getElementById('woodstock')
const friedaBtn = document.getElementById('frieda')
const marcieBtn = document.getElementById('marcie')

//sounds
const soundboard = document.getElementById('soundboard');
function play_audio(src) {
  let audio_element = new Audio();
  if (!audio_element.paused) {
    audio_element.paused();
    audio_element.currentTime = 0;
  }
  audio_element.src = src;
  audio_element.play();
}

document.getElementById('franklin').addEventListener('click', function() {
    play_audio('sounds/aquarius.mp3');
});

document.getElementById('lucy').addEventListener('click', function() {
    play_audio('sounds/aries.mp3');
});

document.getElementById('charlie').addEventListener('click', function() {
  play_audio('sounds/cancer.mp3');
});

document.getElementById('linus').addEventListener('click', function() {
  play_audio('sounds/capricorn.mp3');
});

document.getElementById('schroeder').addEventListener('click', function() {
  play_audio('sounds/gemini.mp3');
});

document.getElementById('peppermint').addEventListener('click', function() {
  play_audio('sounds/leo.mp3');
});

document.getElementById('sally').addEventListener('click', function() {
  play_audio('sounds/libra.mp3');
});

document.getElementById('pigpen').addEventListener('click', function() {
  play_audio('sounds/pisces.mp3');
});

document.getElementById('snoopy').addEventListener('click', function() {
  play_audio('sounds/sagitarius.mp3');
});

document.getElementById('woodstock').addEventListener('click', function() {
  play_audio('sounds/scorpio.mp3');
});

document.getElementById('frieda').addEventListener('click', function() {
  play_audio('sounds/taurus.mp3');
});

document.getElementById('marcie').addEventListener('click', function() {
  play_audio('sounds/virgo.mp3');
});


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
        img: "./im"
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
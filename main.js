// FAQ sections
const helpBtn = document.getElementById('faq'); 
const faqOverlay = document.getElementById('faqoverlay'); 
const closeBtn = document.getElementById('closeBtn'); 


helpBtn.addEventListener('click', function() {
    faqOverlay.style.display = 'flex'; // open
});


closeBtn.addEventListener('click', function() {
    faqOverlay.style.display = 'none'; 
}); //close


// zodiac
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
        img: "./img/aries_lucy.png",
        text: 'Aries is bold, confident, and a natural leader, much like Lucy. She’s assertive, often taking charge (even if it’s bossy). Her competitive nature and fiery temper also align with Aries energy.'
    },
    
    {
        name: 'Taurus/Frieda',
        img: "./img/taurus_frieda.png",
        text: 'Taurus is grounded, appreciates beauty, and takes pride in their appearance. Frieda’s constant emphasis on her “naturally curly hair” and her preference for the finer, aesthetically pleasing things in life make her an excellent representation of Taurus. She embodies the sign’s love for physical comfort and self-assurance in her unique way.'
    },

    {
        name: 'Gemini/Schroeder',
        img: "./img/gemini_schroeder.png",
        text: 'Gemini is intellectual, curious, and communicative. Schroeder’s love for music and his ability to lose himself in conversations about Beethoven reflect the Gemini love for ideas and self-expression.'
    },

    {
        name: 'Cancer/Charlie Brown',
        img: "./img/cancer_charlie.png",
        text: 'Cancer is sensitive, nurturing, and often introspective, just like Charlie Brown. His tendency to care deeply for others and his emotional vulnerability resonate with Cancer’s empathetic nature.'
    },

    {
        name: 'Leo/Peppermint Patty',
        img: "./img/leo_peppermint.png",
        text: 'Leo is confident, charismatic, and full of life. Peppermint Patty’s outgoing personality, love for the spotlight, and strong sense of self make her a perfect Leo.'
    },

    {
        name: 'Virgo/Marcie',
        img:"./img/virgo_marcie.png",
        text: 'Virgo is analytical, thoughtful, and detail-oriented. Marcie’s studious nature and her tendency to be precise and organized mirror Virgo’s practical and intellectual qualities.'
    },

    {
        name: 'Libra/Sally Brown',
        img: "./img/libra_sally.png",
        text: 'Libra values beauty, harmony, and relationships. Sally’s romantic side (especially her admiration for Linus) and her preference for things to be fair and pleasant reflect Libra’s ideals.'
    },

    {
        name:'Scorpio/Woodstock',
        img: "./img/scorpio_woodstock.png",
        text: 'Scorpio is loyal, resourceful, and enigmatic. Woodstock’s close bond with Snoopy and his mysterious ways (despite being small and underestimated) align with Scorpio’s depth and strength.'
    },

    {
        name: 'Sagittarius/Snoopy',
        img: "./img/sagittarius_snoopy.png",
        text: 'Sagittarius is adventurous, free-spirited, and always seeking new experiences. Snoopy’s imaginative flights of fancy—whether as the Flying Ace or a world traveler—perfectly reflect Sagittarius’ boundless optimism, love for adventure, and independent streak. His ability to dream big and live life on his terms is pure Sagittarius energy.'
    },
 
    {
        name: 'Capricorn/Linus Van Pelt',
        img: "./img/capricorn_linus.png",
        text: 'Capricorn is wise, responsible, and goal-oriented. Linus’s thoughtful nature, philosophical musings, and deep sense of tradition (like his devotion to the Great Pumpkin) reflect Capricorn’s grounded and mature qualities.'
    },

    {
        name:'Aquarius/Franklin',
        img: "./img/aquarius_franklin.png",
        text: 'Aquarius is progressive, intelligent, and values community. Franklin’s thoughtful approach to conversations, open-mindedness, and calm demeanor align with the humanitarian and innovative traits of Aquarius.'
    },

    {
        name: 'Pisces/Pigpen',
        img: "./img/pisces_pigpen.img",
        text: 'Pisces is imaginative, compassionate, and sees beauty in imperfection. Pigpen’s ability to embrace his messy self with confidence and his dreamy, nonchalant attitude make him a Pisces at heart.'
    }
]


function displayZodiac(index) {
  const zodiacDetails = zodiac[index];
  document.getElementById('zodiac-name').textContent = zodiacDetails.name;
  document.getElementById('zodiac-description').textContent = zodiacDetails.text;
  document.getElementById('zodiac-image').src = zodiacDetails.img;
}

function openZodiacPopup(index) {
  displayZodiac(index);
  document.getElementById('overlay').style.display = 'block'; // open
}

// Close the popup
document.getElementById('close-btn').addEventListener('click', function() {
  document.getElementById('overlay').style.display = 'none'; // close
});








function getZodiac(month, day) {
  if ((month === 12 && day >= 22) || (month === 1 && day <= 19)) {
    return 10; // Capricorn/Linus Van Pelt
  } else if ((month === 11 && day >= 22) || (month === 12 && day <= 21)) {
    return 9; // Sagittarius/Snoopy
  } else if ((month === 10 && day >= 24) || (month === 11 && day <= 21)) {
    return 8; // Scorpio/Woodstock
  } else if ((month === 9 && day >= 23) || (month === 10 && day <= 23)) {
    return 7; // Libra/Sally Brown
  } else if ((month === 8 && day >= 23) || (month === 9 && day <= 22)) {
    return 6; // Virgo/Marcie
  } else if ((month === 7 && day >= 23) || (month === 8 && day <= 22)) {
    return 5; // Leo/Peppermint Patty
  } else if ((month === 6 && day >= 22) || (month === 7 && day <= 22)) {
    return 4; // Cancer/Charlie Brown
  } else if ((month === 5 && day >= 21) || (month === 6 && day <= 21)) {
    return 3; // Gemini/Schroeder
  } else if ((month === 4 && day >= 20) || (month === 5 && day <= 20)) {
    return 2; // Pisces/Pigpen
  } else if ((month === 3 && day >= 21) || (month === 4 && day <= 19)) {
    return 1; // Gemini/Schroeder
  } else if ((month === 2 && day >= 19) || (month === 3 && day <= 20)) {
    return 0; // Pisces/Pigpen
  } else {
    return -1; // Invalid date range
  }
}


//submit
const submitButton = document.getElementById('submitBtn');
const overlay = document.getElementById('overlay');

function displayZodiac(index) {
  if (index === -1) return;

  const zodiacDetails = zodiac[index];
  document.getElementById('zodiac-name').textContent = zodiacDetails.name;
  document.getElementById('zodiac-description').textContent = zodiacDetails.text;
  document.getElementById('zodiac-image').src = zodiacDetails.img;
}

function openZodiacPopup(index) {
  displayZodiac(index);
  overlay.style.display = 'flex';
}
  submitButton.addEventListener('click', function() {
    const birthdayInput = document.getElementById('birthday').valueAsDate;
    if (!birthdayInput) {
      alert('Enter your birthday!');
      return;
    }
    const month = birthdayInput.getMonth() + 1; 
    const day = birthdayInput.getDate();

    const zodiacIndex = getZodiac(month, day); 
    openZodiacPopup(zodiacIndex); 
  });

  closeBtn.addEventListener('click', function() {
    overlay.style.display = 'none';
  });

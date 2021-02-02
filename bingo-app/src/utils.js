import React from "react";

export const tableData = [
  {
    text: "(child noises in the background)",
  },
  {
    text: "Hello, hello?",
  },
  {
    text: "i need to jump in another call",
  },
  {
    text: "can everyone go on mute",
  },
  {
    text: "could you please get closer to the mic",
  },
  {
    text: "(load painful echo / feedback)",
  },
  {
    text: "Next slide, please",
  },
  {
    text: "can we take this offline?",
  },
  {
    text: "is on the call",
  },
  {
    text: "Could you share this slides afterwards?",
  },
  {
    text: "can somebody grant presenter rights?",
  },
  {
    text: "sorry, i was on mute",
  },
  {
    text: "CONF 😷   CALL BINGO",
  },
  {
    text: "can you email that to everyone?",
  },
  {
    text: "sorry, i had problems loging in",
  },
  {
    text: "(animal noises in the background)",
  },
  {
    text: "sorry, i didn't found the conference id",
  },
  {
    text: "i was heaving issues",
  },
  {
    text: "i'll have to get back to you",
  },
  {
    text: "who just joined?",
  },
  {
    text: "sorry, something with my calendar",
  },
  {
    text: "do you see my screen?",
  },
  {
    text: "let's wait for ....",
  },
  {
    text: "You will send the minutes?",
  },
  {
    text: "can you repeat please?",
  },
];

function shuffle(array) {
  var currentIndex = array.length,
    temporaryValue,
    randomIndex;
  while (0 !== currentIndex) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    if (currentIndex !== 12 && randomIndex !== 12) {
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
  }

  return array;
}

export const chunkArray = (array) => {
  let i,
    j,
    temparray,
    chunk = 5;
  const chunkedArray = [];

  shuffle(array);

  for (i = 0; i < array.length; i++) {
    array[i].index = i;
  }

  for (i = 0, j = array.length; i < j; i += chunk) {
    temparray = array.slice(i, i + chunk);
    console.log(temparray);
    chunkedArray.push(temparray);
  }

  return chunkedArray;
};

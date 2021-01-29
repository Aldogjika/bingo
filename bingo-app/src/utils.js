import React from "react";

export const tableData = [
  {
    id: 0,
    text: "(child noises in the background)",
  },
  {
    id: 1,
    text: "Hello, hello?",
  },
  {
    id: 2,
    text: "i need to jump in another call",
  },
  {
    id: 3,
    text: "can everyone go on mute",
  },
  {
    id: 4,
    text: "could you please get closer to the mic",
  },
  {
    id: 5,
    text: "(load painful echo / feedback)",
  },
  {
    id: 6,
    text: "Next slide, please",
  },
  {
    id: 7,
    text: "can we take this offline?",
  },
  {
    id: 8,
    text: "is on the call",
  },
  {
    id: 9,
    text: "Could you share this slides afterwards?",
  },
  {
    id: 10,
    text: "can somebody grant presenter rights?",
  },
  {
    id: 11,
    text: "sorry, i was on mute",
  },
  {
    id: 12,
    text: "CONF 😷   CALL BINGO",
  },
  {
    id: 13,
    text: "can you email that to everyone?",
  },
  {
    id: 14,
    text: "sorry, i had problems loging in",
  },
  {
    id: 15,
    text: "(animal noises in the background)",
  },
  {
    id: 16,
    text: "sorry, i didn't found the conference id",
  },
  {
    id: 17,
    text: "i was heaving issues",
  },
  {
    id: 18,
    text: "i'll have to get back to you",
  },
  {
    id: 19,
    text: "who just joined?",
  },
  {
    id: 20,
    text: "sorry, something with my calendar",
  },
  {
    id: 21,
    text: "do you see my screen?",
  },
  {
    id: 22,
    text: "let's wait for ....",
  },
  {
    id: 23,
    text: "You will send the minutes?",
  },
  {
    id: 24,
    text: "can you repeat please?",
  },
];

export const chunkArray = (array) => {
  let i,
    j,
    temparray,
    chunk = 5;
  const chunkedArray = [];

  for (i = 0, j = array.length; i < j; i += chunk) {
    temparray = array.slice(i, i + chunk);
    console.log(temparray);
    chunkedArray.push(temparray);
  }

  return chunkedArray;
};

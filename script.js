"use strict";

let clickCount = 0;
let gamePiece = "";
let playerX = true;
let piece = "";

document.querySelector(".r1c1").addEventListener(
  "click",
  function a1() {
    if (piece === "O") {
      piece = "X";
    } else {
      piece = "O";
    }
    clickCount++;
    document.querySelector(".r1c1").textContent = piece;

    variables();
  },
  { once: true } //experimenting now put this back in play once I have this figured out
);

document.querySelector(".r1c2").addEventListener(
  "click",
  function a1() {
    if (piece === "O") {
      piece = "X";
    } else {
      piece = "O";
    }
    clickCount++;

    document.querySelector(".r1c2").textContent = piece;

    variables();
  },
  { once: true } //experimenting now put this back in play once I have this figured out
);

document.querySelector(".r1c3").addEventListener(
  "click",
  function a1() {
    if (piece === "O") {
      piece = "X";
    } else {
      piece = "O";
    }
    clickCount++;

    document.querySelector(".r1c3").textContent = piece;

    variables();
  },
  { once: true } //experimenting now put this back in play once I have this figured out
);

document.querySelector(".r2c1").addEventListener(
  "click",
  function a1() {
    if (piece === "O") {
      piece = "X";
    } else {
      piece = "O";
    }
    clickCount++;

    document.querySelector(".r2c1").textContent = piece;

    variables();
  },
  { once: true } //experimenting now put this back in play once I have this figured out
);

document.querySelector(".r2c2").addEventListener(
  "click",
  function a1() {
    if (piece === "O") {
      piece = "X";
    } else {
      piece = "O";
    }
    clickCount++;

    document.querySelector(".r2c2").textContent = piece;

    variables();
  },
  { once: true } //experimenting now put this back in play once I have this figured out
);

document.querySelector(".r2c3").addEventListener(
  "click",
  function a1() {
    if (piece === "O") {
      piece = "X";
    } else {
      piece = "O";
    }
    clickCount++;

    document.querySelector(".r2c3").textContent = piece;

    variables();
  },
  { once: true } //experimenting now put this back in play once I have this figured out
);

document.querySelector(".r3c1").addEventListener(
  "click",
  function a1() {
    if (piece === "O") {
      piece = "X";
    } else {
      piece = "O";
    }
    clickCount++;

    document.querySelector(".r3c1").textContent = piece;

    variables();
  },
  { once: true } //experimenting now put this back in play once I have this figured out
);

document.querySelector(".r3c2").addEventListener(
  "click",
  function a1() {
    if (piece === "O") {
      piece = "X";
    } else {
      piece = "O";
    }
    clickCount++;

    document.querySelector(".r3c2").textContent = piece;

    variables();
  },
  { once: true } //experimenting now put this back in play once I have this figured out
);

document.querySelector(".r3c3").addEventListener(
  "click",
  function a1() {
    if (piece === "O") {
      piece = "X";
    } else {
      piece = "O";
    }
    clickCount++;

    document.querySelector(".r3c3").textContent = piece;

    variables();
  },
  { once: true } //experimenting now put this back in play once I have this figured out
);

function variables() {
  let a1 = document.querySelector(".r1c1").textContent;
  let a2 = document.querySelector(".r1c2").textContent;
  let a3 = document.querySelector(".r1c3").textContent;
  let a4 = document.querySelector(".r2c1").textContent;
  let a5 = document.querySelector(".r2c2").textContent;
  let a6 = document.querySelector(".r2c3").textContent;
  let a7 = document.querySelector(".r3c1").textContent;
  let a8 = document.querySelector(".r3c2").textContent;
  let a9 = document.querySelector(".r3c3").textContent;

  if (
    (a1 === a2 && a1 === a3) ||
    (a1 === a4 && a1 === a7) ||
    (a1 === a5 && a1 === a9) ||
    (a2 === a5 && a2 === a8) ||
    (a3 === a6 && a3 === a9) ||
    (a3 === a5 && a3 === a7) ||
    (a4 === a5 && a4 === a6) ||
    (a7 === a8 && a7 === a9)
  ) {
    console.log(`${piece} You're the winner!`);
    //need to focus on adding an element that ends the game and doesn't alloow the player to continue to click
    //turning the console.log into a query selector
    document.getElementById("finalMessage").classList.remove("hidden");
    document.getElementById("container").classList.add("hidden");
    document.querySelector(
      ".addMessage"
    ).textContent = `${piece} You're the winner!`;
    //in order to not allow players to continue the game we will remove the tic-tac-toe grid and a message
    //announcing the winner will appear!

    //adds the reset button once someone has won
    document.getElementById("reset").classList.remove("hidden");
  } else {
    console.log("Keep going!");
  }

  //the reset button not necessarily letting us repeat functions with the once true property
  document.querySelector(".reset").addEventListener("click", function () {
    window.location.reload();
  });

  if (clickCount === 9) {
    console.log(`${piece} You're the winner!`);
    //need to focus on adding an element that ends the game and doesn't alloow the player to continue to click
    //turning the console.log into a query selector
    document.getElementById("finalMessage").classList.remove("hidden");
    document.getElementById("container").classList.add("hidden");
    document.querySelector(
      ".addMessage"
    ).textContent = `A TIE! Please Try Again!`;
    //in order to not allow players to continue the game we will remove the tic-tac-toe grid and a message
    //announcing the winner will appear!

    //adds the reset button once someone has won
    document.getElementById("reset").classList.remove("hidden");
  } else {
    console.log("Keep going!");
  }

  //the reset button not necessarily letting us repeat functions with the once true property
  document.querySelector(".reset").addEventListener("click", function () {
    window.location.reload();
  });
}

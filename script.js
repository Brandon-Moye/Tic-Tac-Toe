"use strict";

//this is the code that I will use to change values with a function
// document.querySelector(".r1c1").textContent = "O";

//this allows to change the content of a space in the tic-tac-toe board
// document.querySelector(".box").addEventListener("click", function () {
//   if ((document.querySelector(".r1c1").textContent = "X")) {
//     document.querySelector(".r1c1").textContent = "O";
//   }
// });

// let player = true;
// let gamePiece = "";
// if (player) {
//   let gamePiece = "X";
//   function Xturn(gamePiece) {
//     if ((document.querySelector(".r1c1").textContent = "")) {
//       document.querySelector(".r1c");
//     }
//   }
// }

//this is the template for how I will alternate between the players
// let i = 0;
// let test = true;
// for (i = 0; i < 5; i++) {
//   if (test) {
//     console.log("TRUE!");
//   } else console.log("false");
//   test = !test;
// }

// let j = 0;
// let playerX = true;
// let gamePiece = "";
// for (i = 0; i < 5; i++) {
//   if (playerX === true) {
//     gamePiece = "X";
//   } else gamePiece = "O";
//   playerX = !playerX;

//this function allows for the pieces to change based on who is playing the game!!
/**
 * this only works on the first element with the box element, need to find
 a way to where it will check if element has box element then go from there!
 */
let gamePiece = "";
let playerX = true;
/* 
had a lot of difficulties with the query selector, initially using the 
box class but switched to container class and that works on when all 
of the elements are clicked!!
*/
// document.querySelector(".r1c1").addEventListener("click", function () {
//   if (playerX === true) {
//     gamePiece = "X";
//     document.querySelector(".r1c1").textContent = gamePiece;
//   } else {
//     gamePiece = "O";
//     document.querySelector(".r1c1").textContent = gamePiece;
//   }
//   console.log(gamePiece);
//   console.log((playerX = !playerX));

//   //a for loop for the elements in the container class
// });

// activePlayer = activePlayer === 0 ? 1 : 0

//THIS WORKS DO NOT TOUCH!!!!!! -----------------------------------------
let piece = "";

document.querySelector(".r1c1").addEventListener(
  "click",
  function () {
    if (piece === "O") {
      piece = "X";
    } else {
      piece = "O";
    }
    document.querySelector(".r1c1").textContent = piece;

    console.log(".r1c1".indexOf(".r1c1"));
  },
  { once: true }
);

document.querySelector(".r1c2").addEventListener(
  "click",
  function () {
    if (piece === "O") {
      piece = "X";
    } else {
      piece = "O";
    }

    document.querySelector(".r1c2").textContent = piece;

    console.log(".r1c2".indexOf(".r1c2"));
  },
  { once: true }
);

document.querySelector(".r1c3").addEventListener(
  "click",
  function () {
    if (piece === "O") {
      piece = "X";
    } else {
      piece = "O";
    }

    document.querySelector(".r1c3").textContent = piece;
  },

  { once: true }
);

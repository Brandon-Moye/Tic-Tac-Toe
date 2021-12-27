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
// let piece = "";

// document.querySelector(".r1c1").addEventListener(
//   "click",
//   function () {
//     if (piece === "O") {
//       piece = "X";
//     } else {
//       piece = "O";
//     }
//     document.querySelector(".r1c1").textContent = piece;

//     console.log(".r1c1.box".indexOf(".r1c1.box"));
//   },
//   { once: true },

// );

// document.querySelector(".r1c2").addEventListener(
//   "click",
//   function () {
//     if (piece === "O") {
//       piece = "X";
//     } else {
//       piece = "O";
//     }

//     document.querySelector(".r1c2").textContent = piece;

//     console.log(".r1c2".indexOf(".r1c2"));
//   },
//   { once: true },

// );

// document.querySelector(".r1c3").addEventListener(
//   "click",
//   function () {
//     if (piece === "O") {
//       piece = "X";
//     } else {
//       piece = "O";
//     }

//     document.querySelector(".r1c3").textContent = piece;
//   },

//   { once: true }
// );

//writing a function that just checks if all possible combinations work?? This way it won't have to be specific to each individual game piece??

//THE FIRST R1C1 SECTION WORKS!! SAVE FOR LATER IF NEEDED ------------------------------------------------------------------------
// function checkWinner (piece, position) {
//   //for each array check if true
//   console.log(document.querySelector(".a1").textContent);
//   //if true stop game,
//   //if false keep going
// }
// checkWinner();

// let piece = "";

// let a1 = document.querySelector(".r1c1").textContent;
// console.log(a1);

// document.querySelector(".r1c1").addEventListener(
//   "click",
//   function () {
//     if (piece === "O") {
//       piece = "X";
//     } else {
//       piece = "O";
//     }
//     document.querySelector(".r1c1").textContent = piece;

//     let a1 = document.querySelector(".r1c1").textContent;
//     let a2 = document.querySelector(".r1c2").textContent;
//     let a3 = document.querySelector(".r1c3").textContent;
//     let a4 = document.querySelector(".r2c1").textContent;
//     let a5 = document.querySelector(".r2c2").textContent;
//     let a6 = document.querySelector(".r2c3").textContent;
//     let a7 = document.querySelector(".r3c1").textContent;
//     let a8 = document.querySelector(".r3c2").textContent;
//     let a9 = document.querySelector(".r3c3").textContent;

//     // console.log(".r1c1.box".indexOf(".r1c1.box"));

//     if((a1 === a2 && a1 === a3) || (a1 === a4 && a1 === a7) || (a1 === a5 && a1 === a9)) {
//       console.log("You're a winner!")
//     } else {
//       console.log("Keep going!")
//     }
//   },

//   // { once: true }, //experimenting now put this back in play once I have this figured out

// );

// document.querySelector(".r1c2").addEventListener(
//   "click",
//   function () {
//     if (piece === "O") {
//       piece = "X";
//     } else {
//       piece = "O";
//     }
//     document.querySelector(".r1c2").textContent = piece;

//     let a1 = document.querySelector(".r1c1").textContent;
//     let a2 = document.querySelector(".r1c2").textContent;
//     let a3 = document.querySelector(".r1c3").textContent;

//     // console.log(".r1c1.box".indexOf(".r1c1.box"));

//     if(a1 === a2 && a1 === a3) {
//       console.log("You're a winner!")
//     } else {
//       console.log("Keep going!")
//     }
//   },
//   // { once: true },

// );

// document.querySelector(".r1c3").addEventListener(
//   "click",
//   function () {
//     if (piece === "O") {
//       piece = "X";
//     } else {
//       piece = "O";
//     }

//     document.querySelector(".r1c3").textContent = piece;

//     let a1 = document.querySelector(".r1c1").textContent;
//     let a2 = document.querySelector(".r1c2").textContent;
//     let a3 = document.querySelector(".r1c3").textContent;

//     // console.log(".r1c1.box".indexOf(".r1c1.box"));

//     if(a1 === a2 && a1 === a3) {
//       console.log("You're a winner!")
//     } else {
//       console.log("Keep going!")
//     }
//   },

//   // { once: true }
// );

// -------------------------------------------------------------------------------------------------------------------------

let piece = "";

// document.querySelector(".r1c1").addEventListener(
//   "click",
//   function () {
//     if (piece === "O") {
//       piece = "X";
//     } else {
//       piece = "O";
//     }
//     document.querySelector(".r1c1").textContent = piece;

//     let a1 = document.querySelector(".r1c1").textContent;
//     let a2 = document.querySelector(".r1c2").textContent;
//     let a3 = document.querySelector(".r1c3").textContent;
//     let a4 = document.querySelector(".r2c1").textContent;
//     let a5 = document.querySelector(".r2c2").textContent;
//     let a6 = document.querySelector(".r2c3").textContent;
//     let a7 = document.querySelector(".r3c1").textContent;
//     let a8 = document.querySelector(".r3c2").textContent;
//     let a9 = document.querySelector(".r3c3").textContent;

//     // console.log(".r1c1.box".indexOf(".r1c1.box"));

//     if((a1 === a2 && a1 === a3) || (a1 === a4 && a1 === a7) || (a1 === a5 && a1 === a9)) {
//       console.log("You're a winner!")
//     } else {
//       console.log("Keep going!")
//     }
//   },

//   { once: true }, //experimenting now put this back in play once I have this figured out

// );

// REPEATED THE CORRECT FIRST SECTION FOR ALL OF THE 1 CELL WINNING POSSIBLITIES TO TEST ------------------------------------------------------

// document.querySelector(".r1c2").addEventListener(
//   "click",
//   function () {
//     if (piece === "O") {
//       piece = "X";
//     } else {
//       piece = "O";
//     }
//     document.querySelector(".r1c2").textContent = piece;

//     let a1 = document.querySelector(".r1c1").textContent;
//     let a2 = document.querySelector(".r1c2").textContent;
//     let a3 = document.querySelector(".r1c3").textContent;
//     let a4 = document.querySelector(".r2c1").textContent;
//     let a5 = document.querySelector(".r2c2").textContent;
//     let a6 = document.querySelector(".r2c3").textContent;
//     let a7 = document.querySelector(".r3c1").textContent;
//     let a8 = document.querySelector(".r3c2").textContent;
//     let a9 = document.querySelector(".r3c3").textContent;

//     // console.log(".r1c1.box".indexOf(".r1c1.box"));

//     if((a1 === a2 && a1 === a3) || (a1 === a4 && a1 === a7) || (a1 === a5 && a1 === a9)) {
//       console.log("You're a winner!")
//     } else {
//       console.log("Keep going!")
//     }
//   },

//   { once: true }, //experimenting now put this back in play once I have this figured out

// );

// document.querySelector(".r1c3").addEventListener(
//   "click",
//   function () {
//     if (piece === "O") {
//       piece = "X";
//     } else {
//       piece = "O";
//     }
//     document.querySelector(".r1c3").textContent = piece;

//     let a1 = document.querySelector(".r1c1").textContent;
//     let a2 = document.querySelector(".r1c2").textContent;
//     let a3 = document.querySelector(".r1c3").textContent;
//     let a4 = document.querySelector(".r2c1").textContent;
//     let a5 = document.querySelector(".r2c2").textContent;
//     let a6 = document.querySelector(".r2c3").textContent;
//     let a7 = document.querySelector(".r3c1").textContent;
//     let a8 = document.querySelector(".r3c2").textContent;
//     let a9 = document.querySelector(".r3c3").textContent;

//     // console.log(".r1c1.box".indexOf(".r1c1.box"));

//     if((a1 === a2 && a1 === a3) || (a1 === a4 && a1 === a7) || (a1 === a5 && a1 === a9)) {
//       console.log("You're a winner!")
//     } else {
//       console.log("Keep going!")
//     }
//   },

//   { once: true }, //experimenting now put this back in play once I have this figured out

// );

// document.querySelector(".r2c1").addEventListener(
//   "click",
//   function () {
//     if (piece === "O") {
//       piece = "X";
//     } else {
//       piece = "O";
//     }
//     document.querySelector(".r2c1").textContent = piece;

//     let a1 = document.querySelector(".r1c1").textContent;
//     let a2 = document.querySelector(".r1c2").textContent;
//     let a3 = document.querySelector(".r1c3").textContent;
//     let a4 = document.querySelector(".r2c1").textContent;
//     let a5 = document.querySelector(".r2c2").textContent;
//     let a6 = document.querySelector(".r2c3").textContent;
//     let a7 = document.querySelector(".r3c1").textContent;
//     let a8 = document.querySelector(".r3c2").textContent;
//     let a9 = document.querySelector(".r3c3").textContent;

//     // console.log(".r1c1.box".indexOf(".r1c1.box"));

//     if((a1 === a2 && a1 === a3) || (a1 === a4 && a1 === a7) || (a1 === a5 && a1 === a9)) {
//       console.log("You're a winner!")
//     } else {
//       console.log("Keep going!")
//     }
//   },

//   { once: true }, //experimenting now put this back in play once I have this figured out

// );

// document.querySelector(".r2c2").addEventListener(
//   "click",
//   function () {
//     if (piece === "O") {
//       piece = "X";
//     } else {
//       piece = "O";
//     }
//     document.querySelector(".r2c2").textContent = piece;

//     let a1 = document.querySelector(".r1c1").textContent;
//     let a2 = document.querySelector(".r1c2").textContent;
//     let a3 = document.querySelector(".r1c3").textContent;
//     let a4 = document.querySelector(".r2c1").textContent;
//     let a5 = document.querySelector(".r2c2").textContent;
//     let a6 = document.querySelector(".r2c3").textContent;
//     let a7 = document.querySelector(".r3c1").textContent;
//     let a8 = document.querySelector(".r3c2").textContent;
//     let a9 = document.querySelector(".r3c3").textContent;

//     // console.log(".r1c1.box".indexOf(".r1c1.box"));

//     if((a1 === a2 && a1 === a3) || (a1 === a4 && a1 === a7) || (a1 === a5 && a1 === a9)) {
//       console.log("You're a winner!")
//     } else {
//       console.log("Keep going!")
//     }
//   },

//   { once: true }, //experimenting now put this back in play once I have this figured out

// );

// document.querySelector(".r3c1").addEventListener(
//   "click",
//   function () {
//     if (piece === "O") {
//       piece = "X";
//     } else {
//       piece = "O";
//     }
//     document.querySelector(".r3c1").textContent = piece;

//     let a1 = document.querySelector(".r1c1").textContent;
//     let a2 = document.querySelector(".r1c2").textContent;
//     let a3 = document.querySelector(".r1c3").textContent;
//     let a4 = document.querySelector(".r2c1").textContent;
//     let a5 = document.querySelector(".r2c2").textContent;
//     let a6 = document.querySelector(".r2c3").textContent;
//     let a7 = document.querySelector(".r3c1").textContent;
//     let a8 = document.querySelector(".r3c2").textContent;
//     let a9 = document.querySelector(".r3c3").textContent;

//     // console.log(".r1c1.box".indexOf(".r1c1.box"));

//     if((a1 === a2 && a1 === a3) || (a1 === a4 && a1 === a7) || (a1 === a5 && a1 === a9)) {
//       console.log("You're a winner!")
//     } else {
//       console.log("Keep going!")
//     }
//   },

//   { once: true }, //experimenting now put this back in play once I have this figured out

// );

// document.querySelector(".r3c3").addEventListener(
//   "click",
//   function () {
//     if (piece === "O") {
//       piece = "X";
//     } else {
//       piece = "O";
//     }
//     document.querySelector(".r3c3").textContent = piece;

//     let a1 = document.querySelector(".r1c1").textContent;
//     let a2 = document.querySelector(".r1c2").textContent;
//     let a3 = document.querySelector(".r1c3").textContent;
//     let a4 = document.querySelector(".r2c1").textContent;
//     let a5 = document.querySelector(".r2c2").textContent;
//     let a6 = document.querySelector(".r2c3").textContent;
//     let a7 = document.querySelector(".r3c1").textContent;
//     let a8 = document.querySelector(".r3c2").textContent;
//     let a9 = document.querySelector(".r3c3").textContent;

//     // console.log(".r1c1.box".indexOf(".r1c1.box"));

//     if((a1 === a2 && a1 === a3) || (a1 === a4 && a1 === a7) || (a1 === a5 && a1 === a9)) {
//       console.log("You're a winner!")
//     } else {
//       console.log("Keep going!")
//     }
//   },

//   { once: true }, //experimenting now put this back in play once I have this figured out

// );

// // TRYING TO WRITE THIS AS A WORKABLE FUNCTION ---------------------------------------------------------------------------

// document.querySelector(".r1c1").addEventListener(
//   "click",
//   function a1 () {
//     if (piece === "O") {
//       piece = "X";
//     } else {
//       piece = "O";
//     }

//     document.querySelector(".r1c1").textContent = piece;

//     variables();
//   },
//   { once: true }, //experimenting now put this back in play once I have this figured out
// );

// document.querySelector(".r1c2").addEventListener(
//   "click",
//   function a1 () {
//     if (piece === "O") {
//       piece = "X";
//     } else {
//       piece = "O";
//     }

//     document.querySelector(".r1c2").textContent = piece;

//     variables();
//   },
//   { once: true }, //experimenting now put this back in play once I have this figured out
// );

// document.querySelector(".r1c3").addEventListener(
//   "click",
//   function a1 () {
//     if (piece === "O") {
//       piece = "X";
//     } else {
//       piece = "O";
//     }

//     document.querySelector(".r1c3").textContent = piece;

//     variables();
//   },
//   { once: true }, //experimenting now put this back in play once I have this figured out
// );

// document.querySelector(".r2c1").addEventListener(
//   "click",
//   function a1 () {
//     if (piece === "O") {
//       piece = "X";
//     } else {
//       piece = "O";
//     }

//     document.querySelector(".r2c1").textContent = piece;

//     variables();
//   },
//   { once: true }, //experimenting now put this back in play once I have this figured out
// );

// document.querySelector(".r2c2").addEventListener(
//   "click",
//   function a1 () {
//     if (piece === "O") {
//       piece = "X";
//     } else {
//       piece = "O";
//     }

//     document.querySelector(".r2c2").textContent = piece;

//     variables();
//   },
//   { once: true }, //experimenting now put this back in play once I have this figured out
// );

// document.querySelector(".r2c3").addEventListener(
//   "click",
//   function a1 () {
//     if (piece === "O") {
//       piece = "X";
//     } else {
//       piece = "O";
//     }

//     document.querySelector(".r2c3").textContent = piece;

//     variables();
//   },
//   { once: true }, //experimenting now put this back in play once I have this figured out
// );

// document.querySelector(".r3c1").addEventListener(
//   "click",
//   function a1 () {
//     if (piece === "O") {
//       piece = "X";
//     } else {
//       piece = "O";
//     }

//     document.querySelector(".r3c1").textContent = piece;

//     variables();
//   },
//   { once: true }, //experimenting now put this back in play once I have this figured out
// );

// document.querySelector(".r3c2").addEventListener(
//   "click",
//   function a1 () {
//     if (piece === "O") {
//       piece = "X";
//     } else {
//       piece = "O";
//     }

//     document.querySelector(".r3c2").textContent = piece;

//     variables();
//   },
//   { once: true }, //experimenting now put this back in play once I have this figured out
// );

// document.querySelector(".r3c3").addEventListener(
//   "click",
//   function a1 () {
//     if (piece === "O") {
//       piece = "X";
//     } else {
//       piece = "O";
//     }

//     document.querySelector(".r3c3").textContent = piece;

//     variables();
//   },
//   { once: true }, //experimenting now put this back in play once I have this figured out
// );

// function variables() {

//   let a1 = document.querySelector(".r1c1").textContent;
//   let a2 = document.querySelector(".r1c2").textContent;
//   let a3 = document.querySelector(".r1c3").textContent;
//   let a4 = document.querySelector(".r2c1").textContent;
//   let a5 = document.querySelector(".r2c2").textContent;
//   let a6 = document.querySelector(".r2c3").textContent;
//   let a7 = document.querySelector(".r3c1").textContent;
//   let a8 = document.querySelector(".r3c2").textContent;
//   let a9 = document.querySelector(".r3c3").textContent;

//   if(
//     (a1 === a2 && a1 === a3) || (a1 === a4 && a1 === a7) || (a1 === a5 && a1 === a9) ||
//     (a2 === a5 && a2 === a8) || (a3 === a6 && a3 === a9) || (a3 === a5 && a3 === a7) ||
//     (a4 === a5 && a4 === a6) || (a7 === a8 && a7 === a9)
//     ) {
//     console.log(`${piece} You're a winner!`)
//   } else {
//     console.log("Keep going!")
//   }
// };

// ENDING THE GAME IF THERE IS NO WINNER ---------------------------------------------------------------------------

// let clickCount = 0;

// document.querySelector(".r1c1").addEventListener(
//   "click",
//   function a1() {
//     if (piece === "O") {
//       piece = "X";
//     } else {
//       piece = "O";
//     }
//     clickCount++;
//     document.querySelector(".r1c1").textContent = piece;

//     variables();
//   },
//   { once: true } //experimenting now put this back in play once I have this figured out
// );

// document.querySelector(".r1c2").addEventListener(
//   "click",
//   function a1() {
//     if (piece === "O") {
//       piece = "X";
//     } else {
//       piece = "O";
//     }
//     clickCount++;

//     document.querySelector(".r1c2").textContent = piece;

//     variables();
//   },
//   { once: true } //experimenting now put this back in play once I have this figured out
// );

// document.querySelector(".r1c3").addEventListener(
//   "click",
//   function a1() {
//     if (piece === "O") {
//       piece = "X";
//     } else {
//       piece = "O";
//     }
//     clickCount++;

//     document.querySelector(".r1c3").textContent = piece;

//     variables();
//   },
//   { once: true } //experimenting now put this back in play once I have this figured out
// );

// document.querySelector(".r2c1").addEventListener(
//   "click",
//   function a1() {
//     if (piece === "O") {
//       piece = "X";
//     } else {
//       piece = "O";
//     }
//     clickCount++;

//     document.querySelector(".r2c1").textContent = piece;

//     variables();
//   },
//   { once: true } //experimenting now put this back in play once I have this figured out
// );

// document.querySelector(".r2c2").addEventListener(
//   "click",
//   function a1() {
//     if (piece === "O") {
//       piece = "X";
//     } else {
//       piece = "O";
//     }
//     clickCount++;

//     document.querySelector(".r2c2").textContent = piece;

//     variables();
//   },
//   { once: true } //experimenting now put this back in play once I have this figured out
// );

// document.querySelector(".r2c3").addEventListener(
//   "click",
//   function a1() {
//     if (piece === "O") {
//       piece = "X";
//     } else {
//       piece = "O";
//     }
//     clickCount++;

//     document.querySelector(".r2c3").textContent = piece;

//     variables();
//   },
//   { once: true } //experimenting now put this back in play once I have this figured out
// );

// document.querySelector(".r3c1").addEventListener(
//   "click",
//   function a1() {
//     if (piece === "O") {
//       piece = "X";
//     } else {
//       piece = "O";
//     }
//     clickCount++;

//     document.querySelector(".r3c1").textContent = piece;

//     variables();
//   },
//   { once: true } //experimenting now put this back in play once I have this figured out
// );

// document.querySelector(".r3c2").addEventListener(
//   "click",
//   function a1() {
//     if (piece === "O") {
//       piece = "X";
//     } else {
//       piece = "O";
//     }
//     clickCount++;

//     document.querySelector(".r3c2").textContent = piece;

//     variables();
//   },
//   { once: true } //experimenting now put this back in play once I have this figured out
// );

// document.querySelector(".r3c3").addEventListener(
//   "click",
//   function a1() {
//     if (piece === "O") {
//       piece = "X";
//     } else {
//       piece = "O";
//     }
//     clickCount++;

//     document.querySelector(".r3c3").textContent = piece;

//     variables();
//   },
//   { once: true } //experimenting now put this back in play once I have this figured out
// );

// function variables() {
//   let a1 = document.querySelector(".r1c1").textContent;
//   let a2 = document.querySelector(".r1c2").textContent;
//   let a3 = document.querySelector(".r1c3").textContent;
//   let a4 = document.querySelector(".r2c1").textContent;
//   let a5 = document.querySelector(".r2c2").textContent;
//   let a6 = document.querySelector(".r2c3").textContent;
//   let a7 = document.querySelector(".r3c1").textContent;
//   let a8 = document.querySelector(".r3c2").textContent;
//   let a9 = document.querySelector(".r3c3").textContent;

//   if (
//     (a1 === a2 && a1 === a3) ||
//     (a1 === a4 && a1 === a7) ||
//     (a1 === a5 && a1 === a9) ||
//     (a2 === a5 && a2 === a8) ||
//     (a3 === a6 && a3 === a9) ||
//     (a3 === a5 && a3 === a7) ||
//     (a4 === a5 && a4 === a6) ||
//     (a7 === a8 && a7 === a9)
//   ) {
//     console.log(`${piece} You're the winner!`);
//     //need to focus on adding an element that ends the game and doesn't alloow the player to continue to click
//     //turning the console.log into a query selector
//   } else {
//     console.log("Keep going!");
//   }

//   if (clickCount === 9) {
//     console.log("TIE - thats the game");
//     const button = document.getElementById("reset");
//     button.classList.remove("hidden");
//   }
// }

// -------------------------------------------------------------------------------------------------

let clickCount = 0;

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
    /*
    document.getElementById("finalMessage").classList.add("hidden");
    document.getElementById("container").classList.remove("hidden");
    
    document.querySelector(".r1c1").textContent = 1;
    document.querySelector(".r1c2").textContent = 2;
    document.querySelector(".r1c3").textContent = 3;
    document.querySelector(".r2c1").textContent = 4;
    document.querySelector(".r2c2").textContent = 5;
    document.querySelector(".r2c3").textContent = 6;
    document.querySelector(".r3c1").textContent = 7;
    document.querySelector(".r3c2").textContent = 8;
    document.querySelector(".r3c3").textContent = 9;
    */
    /*
    this feels like a cop out but with allowing the click events to only happen once it seems complex to try to
    reset these, the downside is there isn't a overall score counter
   */
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

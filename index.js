scoreDisplayElem.innerHTML = ++score;
var hiscoreDisplayElem = document.querySelector('.hi');
var hiscore = 0;

let width = 10;
let score = 0;
let intervalTime = 0;
let interval = 0;
let speedX = 0;
let speedY = 0;
let blockSize = 25;
let total_row = 17; 
let total_col = 17; 
let board;
let context;
 
let snakeX = blockSize * 5;
let snakeY = blockSize * 5;
document.addEventListener('keydown', function(e) {
    
    if (e.which === 37 && snake.dx === 0) {
        snake.dx = -grid;
        snake.dy = 0;
    }
    else if (e.which === 38 && snake.dy === 0) {
        snake.dy = -grid;
        snake.dx = 0;
    }
    else if (e.which === 39 && snake.dx === 0) {
        snake.dx = grid;
        snake.dy = 0;
    }
    else if (e.which === 40 && snake.dy === 0) {
        snake.dy = grid;
        snake.dx = 0;
    }
    
});

function left() {
    if (snake.dx === 0) {
        snake.dx = -grid;
        snake.dy = 0;
    }
};
function right() {
    if (snake.dx === 0) {
        snake.dx = grid;
        snake.dy = 0;
    }
};
function up() {
    if (snake.dy === 0) {
        snake.dy = -grid;
        snake.dx = 0;
    }
};
function down() {
    if (snake.dy === 0) {
        snake.dy = grid;
        snake.dx = 0;
    }  
};



requestAnimationFrame(gameLoop);
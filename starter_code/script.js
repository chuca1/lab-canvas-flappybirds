window.onload = function() {
  document.getElementById("start-button").onclick = function() {
    startGame();
  };

  function update(){
    frames++
    context.clearRect(0, 0, canvas.width, canvas.height);
    board.draw()
    flappy.draw()
    generatePipes()
    drawPipes()
    checkColliton()
    
  }
  function startGame() {
      if (interval) return
      interval = setInterval(update,1000/60)
  }

};

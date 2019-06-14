addEventListener("keydown",event=>{
    if(event.keyCode === 32){
        flappy.up()
    }
})
canvas.addEventListener("ontouchstart",event =>{
    flappy.up()
})

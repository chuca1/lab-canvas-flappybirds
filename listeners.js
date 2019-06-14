addEventListener("keydown",event=>{
    if(event.keyCode === 32){
        flappy.up()
    }
})
addEventListener("ontouchstart",event =>{
    flappy.up()
})

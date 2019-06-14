addEventListener("keydown",event=>{
    if(event.keyCode === 32){
        flappy.up()
    }
})
addEventListener("click",event =>{
   event.initEvent(flappy.up()) 
})

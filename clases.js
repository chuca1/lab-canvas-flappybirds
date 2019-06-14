class Board{
    constructor(){
        this.x=0
        this.y=0
        this.width = canvas.width
        this.height = canvas.height
        this.img = new Image()
        this.img.src = "./images/bg.png"
        this.img.onload  = () =>{
            this.draw()
        }
    }
    move(){
        this.x--
        if (this.x < -canvas.width) this.x = 0
    }
    draw(){
        context.drawImage(this.img,this.x,this.y,this.width,this.height)
        context.drawImage(
            this.img,
            this.x + canvas.width,
            this.y,
            this.width,
            this.height
        )
        this.move()
    }
}
class Pipe{
    constructor(y, height, type){
        this.x=canvas.width 
        this.y=y
        this.width=50
        this.height=height
        this.imgTop = new Image()
        this.imgBottom = new Image()
        this.imgBottom.src="./images/obstacle_bottom.png"
        this.imgTop.src="./images/obstacle_top.png"
        this.type = type
    }
    move(){
        this.x--
    }
    draw(){
        if(this.type){
            context.drawImage(this.imgTop,this.x,this.y,this.width,this.height)
        }else{
            context.drawImage(this.imgBottom,this.x,this.y,this.width,this.height)
        }
        this.move()
    }
}
class Flappy{
    constructor(){
        this.x=150
        this.y=150
        this.width=50
        this.height=50
        this.flappyUp =  new Image()
        this.flappyMid =  new Image()
        this.flappyDown =  new Image()
        this.img = new Image()
        this.flappyUp.src =  "./images/bluebird-upflap.png"
        this.flappyMid.src =  "./images/bluebird-midflap.png"
        this.flappyDown.src =  "./images/bluebird-downflap.png"
    }
    draw(){
        this.y+=2.5
        if(frames % 2 ==0){
            this.img = animateHelper === 0 ? this.flappyUp:
                       animateHelper === 1 ? this.flappyMid:
                       animateHelper === 2 ? this.flappyDown:this.flappyMid
            if (animateHelper<5){
                animateHelper++
            }else{
                animateHelper=0
            }
        }
        context.drawImage(this.img,this.x,this.y,this.width,this.height)
    }
    up(){
        this.y-=35
    }
    isTouching(pipe){
        return this.x < pipe.x + pipe.width &&
               this.x + this.width > pipe.x &&
               this.y < pipe.y + pipe.height &&
               this.y + this.height > pipe.y
    }
}
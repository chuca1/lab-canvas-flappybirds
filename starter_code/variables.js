const  canvas = document.querySelector("#flappyCanvas")
const context = canvas.getContext("2d")

//auxiliares
let interval
let frames = 0
let pipes = []  
let animateHelper = 0
//Aqui se ejecuta el constructor Board con canvas y context
const board = new Board()
const flappy = new Flappy()
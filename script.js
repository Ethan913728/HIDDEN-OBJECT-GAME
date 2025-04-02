let object = document.getElementById("object")
let winMessage = document.getElementById("win")
let restart = document.getElementById("restart")
object.addEventListener("click", win)
restart.addEventListener("click", reset)

function win(){
    object.setAttribute("class", "hidden")
    winMessage.setAttribute("class", "")
}

function reset(){
    let x = Math.random()*300
    let y = Math.random()*300
    object.style.top = x + "px"
    object.style.left = y + "px"
    object.setAttribute("class", "")
    winMessage.setAttribute("class", "")
}




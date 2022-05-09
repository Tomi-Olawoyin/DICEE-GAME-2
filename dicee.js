let randomNumber1 = Math.floor(Math.random()* 6) + 1

let imgAttributes = "images/dice" + randomNumber1 + ".png"

let randomNumber2 = Math.floor(Math.random()* 6) + 1

let imgAttributes2 = "images/dice" + randomNumber2 + ".png"

let imgDocument = document.querySelector(".img1").setAttribute("src", imgAttributes);


let imgDocument2 = document.querySelector(".img2").setAttribute("src", imgAttributes2)

let headText = document.querySelector("h1")

if(imgAttributes === imgAttributes2){
    headText.textContent = "Draw"
}else if(imgAttributes > imgAttributes2){
    headText.textContent = "Player 1 Wins"
}else if(imgAttributes < imgAttributes2){
    headText.textContent = "Player 2 Wins"
}else{
    headText.textContent = "Refresh Me"
}


 



























































































































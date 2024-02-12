var p1 = Math.floor((Math.random())*6) +1;
var p2 = Math.floor((Math.random())*6) +1;

document.querySelector("#player1 img").setAttribute("src","./Assets/dice"+p1+".png");
document.querySelector("#player2 img").setAttribute("src","./Assets/dice"+p2+".png");

if(p1>p2){
    document.querySelector("h1").textContent = "🚩 Player 1 Wins!";
} else if(p2>p1){
    document.querySelector("h1").textContent = "Player 2 Wins! 🚩";
} else{
    document.querySelector("h1").textContent = "Draw!";
}
var PennyList = document.getElementById("pItems");
var ticker = document.getElementById("Ticker");


setTimeout(ChangeButtonColorYellow, 2000);

function ChangeButtonColorYellow(){
PennyList.style.backgroundColor="yellow";
ticker.style.color="yellow";
setTimeout(ChangeButtonColorWhite, 2000);
}

function ChangeButtonColorWhite(){
    PennyList.style.backgroundColor="white";
    ticker.style.color="white";
    setTimeout(ChangeButtonColorYellow, 2000);
}


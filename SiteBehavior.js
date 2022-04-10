var PennyList = document.getElementById("pItems");

setInterval(ChangeButtonColorYellow, 1000);
setInterval(ChangeButtonColorWhite, 2000);

function ChangeButtonColorYellow(){
PennyList.style.backgroundColor="yellow";
}

function ChangeButtonColorWhite(){
    PennyList.style.backgroundColor="white";
}


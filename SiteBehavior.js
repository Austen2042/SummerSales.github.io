var PennyList = document.getElementById("pItems");


setTimeout(ChangeButtonColorYellow, 2000);

function ChangeButtonColorYellow(){
PennyList.style.backgroundColor="yellow";
setTimeout(ChangeButtonColorWhite, 2000);
}

function ChangeButtonColorWhite(){
    PennyList.style.backgroundColor="white";
    setTimeout(ChangeButtonColorYellow, 2000);
}


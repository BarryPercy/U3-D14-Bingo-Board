window.onload = function(){
    createBingoBoard()
}
let alreadySelectedNumbers= [];
let bingoBoard = document.getElementById("bingo-board")
function createBingoBoard(){
    for(let i=1;i<=76;i++){
        newNumberDiv= document.createElement('div');
        newNumberDiv.innerHTML = "<p>"+[i]+'</p>';
        bingoBoard.appendChild(newNumberDiv);
    }
}
function generateNumber(){
    let number = Math.floor(Math.random()*76)+1;
    if(alreadySelectedNumbers.includes(number)){
        generateNumber();
    }else{}
        alreadySelectedNumbers.push(number);
        highlightBingoNumber(number);
        console.log(number);
}

function highlightBingoNumber(num){
    let numberDiv = document.querySelectorAll("#bingo-board div")[num-1];
    console.log(numberDiv);
    numberDiv.classList.add("selectedNumber");
}
window.onload = function(){
    createBingoBoard()
}
let alreadySelectedNumbers= [];
let bingoBoard = document.getElementById("bingo-board");
let userBoards = document.getElementById("user-boards");
let currentNumberOfUserBoards = 0;
function createBingoBoard(){
    for(let i=1;i<=76;i++){
        let newNumberDiv= document.createElement('div');
        newNumberDiv.innerHTML = "<p>"+[i]+'</p>';
        bingoBoard.appendChild(newNumberDiv);
    }
}

function generateNumber(){
    let number = Math.floor(Math.random()*76)+1;
    if(alreadySelectedNumbers.includes(number)){
        generateNumber();
    }else{
        alreadySelectedNumbers.push(number);
        highlightNumbers(number,"#bingo-board div");
        highlightNumbers(number,'.user-board-divs');
    }
}

function highlightNumbers(num,selector){
    let numberDivs = document.querySelectorAll(selector);
    for(i=0;i<numberDivs.length;i++){
        if(numberDivs[i].innerText==num){
            numberDivs[i].classList.add("selectedNumber");
        }
    }
    
}
const numberOfBoardsField = document.getElementById('number-of-user-boards');
let numberOfBoards;
numberOfBoardsField.addEventListener('input', function() {
    numberOfBoards = numberOfBoardsField.value;
});
function createUserBoards(){
    if(numberOfBoards===undefined){
        return;
    }
    currentNumberOfUserBoards=numberOfBoards;
    for(let i=1;i<=numberOfBoards;i++){
        createUserBoard(i);
    }
}

function createUserBoard(n){
    let userNumbers=[];
    let userBoardDiv = document.createElement('div');
    userBoards.appendChild(userBoardDiv);
    let h2 = document.createElement('h2');
    h2.innerText="User Board "+[n];
    userBoardDiv.appendChild(h2);
    for(let i=1;i<=24;i++){
        let numberChecker=true;
        newNumberDiv= document.createElement('div');
        let tempNum=0;
        while(numberChecker){
            tempNum= Math.floor(Math.random()*76+1);
            if(userNumbers.includes(tempNum)!==true){
                numberChecker=false;
                userNumbers.push(tempNum);
            }
        }
        newNumberDiv.classList.add("user-board-divs")
        newNumberDiv.innerHTML = "<p>"+[tempNum]+'</p>';
        userBoardDiv.appendChild(newNumberDiv);
    }
}
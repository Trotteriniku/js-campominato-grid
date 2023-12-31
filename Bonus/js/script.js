const btn = document.querySelector('button');

btn.addEventListener('click', function() {
    const playground = document.querySelector('.playground');
    playground.innerHTML=''
    const numSquare =document.getElementById('difficultSele').value;

    for(let i = 0 ; i < numSquare ; i++){
        const square = createSquare(i , numSquare);

        playground.append(square) ;
    }

    
})

// UTILITY LIBRARY

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}

function createSquare(squareIndex , rowSquare){
    const squareWidth = Math.sqrt(rowSquare);
    const square = document.createElement('div');

    square.classList.add('square');
    square.style.width = `calc(100% /  ${squareWidth} )`
    square.style.height = `calc(100% /  ${squareWidth} )`
    square.innerHTML = squareIndex + 1;

    square.addEventListener('click' , () => square.classList.toggle('active'));
    return square;
}
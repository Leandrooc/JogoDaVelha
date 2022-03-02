document.addEventListener('DOMContentLoaded', () => {


    let squares = document.querySelectorAll(".square");

    squares.forEach((square) => {
        square.addEventListener('click', handleClick);
    })

})

function handleClick(event) {

    let square = event.target;
    let postion = square.id;

    if (handleMove(postion)) {



        setTimeout(() => {
           alert(" O Jogo Acabou - O Vencedor foi " + symbols[playerTime] +
           ", para jogar novamente clique em OK");


           if (symbols[playerTime] == 'Ice') {
               winsi++
               wii = document.getElementById("ic")
               wii.innerHTML = `<span id="ic">Ice - <strong>${winsi}</strong></span>`
           } else {
               winsf++
               wif = document.getElementById("fir")
               wif.innerHTML = `<span id="fir">Fire - <strong>${winsf}</strong></span>`
           }
  

            if(winsi > winsf) {
                document.body.style.backgroundColor = "rgb(180, 207, 243)"
            
            } 
             else if (winsi < winsf) {
                document.body.style.backgroundColor = "rgb(170, 35, 11)"
        
            } else if (winsi == winsf) {
                document.body.style.backgroundColor = "white"
        
            }
        
         
            board = ['', '', '', '', '', '', '', '', '',]
            gameOver = false
            playerTime = 0
            const squareIndex = 9
            for(let i = 0; i < squareIndex; i++) {
                document.getElementById(i).innerHTML = `<div class=''></div>`
            }

        }, 10);

    };

    updateSquare(postion);


    if (gameOver == false && board[0] != '' && board[1] != '' && board[2] != ''
    && board[3] != '' && board[4] != '' && board[5] != '' && board[6] != '' && board[7] != ''
    && board[8] != '') {
    
            alert("Ocorreu um empate, clique em OK para jogar novamente.")
                 board = ['', '', '', '', '', '', '', '', '',]
                 gameOver = false
                 playerTime = 0
                 const squareIndex = 9
                 for(let i = 0; i < squareIndex; i++) {
                    document.getElementById(i).innerHTML = `<div class=''></div>`
                }

    }

}

function updateSquare(postion) {
    let square = document.getElementById(postion.toString());
    let symbol = board[postion];
    square.innerHTML = `<div class='${symbol}'></div>`

}


function Over(y) {
    y.style.backgroundColor = "rgb(28, 25, 206)"
}

function Out(y) {
    y.style.backgroundColor = "cornflowerblue"
}


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
            let a = document.getElementById("0")
            let b = document.getElementById("1")
            let c = document.getElementById("2")
            let d = document.getElementById("3")
            let e = document.getElementById("4")
            let f = document.getElementById("5")
            let g = document.getElementById("6")
            let h = document.getElementById("7")
            let i = document.getElementById("8")
            a.innerHTML = `<div class=''></div>`
            b.innerHTML = `<div class=''></div>`
            c.innerHTML = `<div class=''></div>`
            d.innerHTML = `<div class=''></div>`
            e.innerHTML = `<div class=''></div>`
            f.innerHTML = `<div class=''></div>`
            g.innerHTML = `<div class=''></div>`
            h.innerHTML = `<div class=''></div>`
            i.innerHTML = `<div class=''></div>`


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
                 let a = document.getElementById("0")
                 let b = document.getElementById("1")
                 let c = document.getElementById("2")
                 let d = document.getElementById("3")
                 let e = document.getElementById("4")
                 let f = document.getElementById("5")
                 let g = document.getElementById("6")
                 let h = document.getElementById("7")
                 let i = document.getElementById("8")
                 a.innerHTML = `<div class=''></div>`
                 b.innerHTML = `<div class=''></div>`
                 c.innerHTML = `<div class=''></div>`
                 d.innerHTML = `<div class=''></div>`
                 e.innerHTML = `<div class=''></div>`
                 f.innerHTML = `<div class=''></div>`
                 g.innerHTML = `<div class=''></div>`
                 h.innerHTML = `<div class=''></div>`
                 i.innerHTML = `<div class=''></div>` 

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


//object PLayer//

class Player {
    constructor(id) {
        this.id = id
        this.round = 0
        this.score = 0
    } 
}  

//Initialization//

$('document').ready(function() {
    $('p.roundScore').html('<p>0</p>')
    $('p.totalScore').html('<p>0</p>')
    $('#player1').css('color', 'red')
    $('#player2').css('color', 'rgb(235, 229, 229)')   
})

var player1 = new Player(1)
var player2 = new Player(2)
var joueur = 1

//Start new game//

$('#buttonNewGame').click(function() {
    $('#p1').html('<div>PLAYER 1</div>')
    $('#p2').html('<div>PLAYER 2</div>')
    $('p.roundScore').html('<p>0</p>')
    $('p.totalScore').html('<p>0</p>')
    $('#player1').css('color', 'red')
    $('#player2').css('color', 'rgb(235, 229, 229)') 
    $('#buttonRollDice').css('display', 'inline-block')
    $('#buttonHold').css('display', 'inline-block')
    player1 = new Player(1)
    player2 = new Player(2)
    joueur = 1
   
})

player1 = new Player(1)
player2 = new Player(2)

//to roll the dice and score//

$('#buttonRollDice').click(function() {
    let result =  Math.floor(Math.random()*6)+1
    switch (result) {
        case 1:
            $('.dice').html('<div><img src="images/1.png" id="dice"></div>')
                if(joueur === 1) {
                    player1.round = 0
                    result = 0
                    $('p.roundScore').html('<p>0</p>')
                    $('#player1').css('color', 'white')
                    $('#player2').css('color', 'red')
                    joueur = 2
                    break
                } else {
                    player2.round = 0
                    result = 0
                    $('p.roundScore').html('<p>0</p>')
                    $('#player1').css('color', 'red')
                    $('#player2').css('color', 'rgb(235, 229, 229)')
                    joueur = 1
                } break
        case 2:
            $('.dice').html('<div><img src="images/2.png" id="dice"></div>')
            break
        case 3:
            $('.dice').html('<div><img src="images/3.png" id="dice"></div>')
            break
        case 4:
            $('.dice').html('<div><img src="images/4.png" id="dice"></div>')
            break
        case 5:
            $('.dice').html('<div><img src="images/5.png" id="dice"></div>')
            break
        case 6:
            $('.dice').html('<div><img src="images/6.png" id="dice"></div>')
            break
    }
    if(joueur === 1) {
        player1.round += result
        document.getElementById("tempScore1").innerHTML = player1.round ;
    } else {
        player2.round += result
        document.getElementById("tempScore2").innerHTML = player2.round ;
    }
})


$('#buttonHold').click(function() {
    if(joueur === 1) {
        player1.score += player1.round
        document.getElementById("score1").innerHTML = player1.score ;
        player1.round = 0
            
    } else {
        player2.score += player2.round
        document.getElementById("score2").innerHTML = player2.score ;
        player2.round = 0
           
    }
    
    $('p.roundScore').html('<p>0</p>');
    joueur = (joueur===1) ? 2 : 1;
   
    if(joueur === 1) {
        $('#player1').css('color', 'red')
        $('#player2').css('color', 'rgb(235, 229, 229)')
    } else {
        $('#player1').css('color', 'white')
        $('#player2').css('color', 'red')
    }

    if(player1.score >= 100) {
        $('#p1').html('<div><b>WINNER !!!</b></div>')
        $('#score1').html('<p><b>100</b></p>')
        $('#buttonRollDice').css('display', 'none')
        $('#buttonHold').css('display', 'none')
    } 
    else if(player2.score >= 100) {
        $('#p2').html('<div><b>WINNER !!!</b></div>')
        $('#score2').html('<p><b>100</b></p>')
        $('#buttonRollDice').css('display', 'none')
        $('#buttonHold').css('display', 'none')
    }
})
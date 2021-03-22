
let guessNumber
let guessnumber = function () {
guessNumber = Math.trunc(Math.random() * 20) + 1 }
guessnumber()


let score = 20
let highscore = 0
let guess = 0



document.querySelector('.check').addEventListener('click', function () {
    guess = Number(document.querySelector('.input').value);
    
    if (!guess) {
        document.querySelector('.messg').textContent = 'Not a Number'
    } else if ( guess === guessNumber) {
        document.querySelector('.messg').textContent = '!!!!! YOU WIN !!!!!'
        document.querySelector('.guessNumber').textContent = guessNumber;
        document.querySelector('body').style.backgroundColor = '#b957ce';
        
        if (score > highscore ) {
        document.querySelector('.highscore').textContent = score 
        }

    }else if ( guess != guessNumber) {
        /*document.querySelector('.messg').textContent = 'Too Low'*/
        if (score > 1) {
        document.querySelector('.messg').textContent = guess < guessNumber? 'Too Low' : 'Too High'
        score = (score - 1)
        document.querySelector('.score').textContent = score
        
        } else {document.querySelector('.messg').textContent = 'you lose'
        score = 0
        document.querySelector('.score').textContent = score;
    }

    

    }/*else if ( guess > guessNumber) {
        document.querySelector('.messg').textContent = 'Too High'
        score = (score - 1)
        if (score === 0) {document.querySelector('.messg').textContent = 'you lose'
        document.querySelector('.score').textContent = score
        }*/
       

document.querySelector('.again').addEventListener('click', function () {
    document.querySelector('body').style.backgroundColor = '#000000 '
    document.querySelector('.messg').textContent = 'Start Guessing'
    guessnumber()
    document.querySelector('.guessNumber').textContent = "?";
    document.querySelector('.score').textContent = 20
    core = 20
})

})


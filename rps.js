let choices = document.querySelectorAll('.symbol')
let status = document.querySelector('#status')
let yscr = document.querySelector('#yscore')
let bscr = document.querySelector('#bscore')
let reset=document.querySelector('.reset')
let yourscr = 0;
let botscr = 0;
reset.addEventListener('click',()=>{
    console.log('reset was clicked')
    yourscr = 0;
    yscr.innerText = `${yourscr}`;
     botscr = 0;
     bscr.innerText = `${botscr}`;
     status.innerText="PICK YOUR MOVE";
})
choices.forEach((choice) => {
    choice.addEventListener('click', () => {
        console.log('box was clicked');
        let you = choice.getAttribute('id')
        let bot = botchance();
        console.log(`bot :${bot} you:${you}`)
        let winner = checkwinner(bot, you)
        console.log(winner)
        status.innerText = `${winner}`;
        if(winner=='YOU WON'){
            status.style.backgroundColor='#66c82d';
            status.style.color='#fff';
        }
        if(winner=='ITS A TIE')
        {
          status.style.backgroundColor='black';
          status.style.color='aqua'; 
        }
        if(winner=='BOT WON'){
            status.style.backgroundColor='#c1121f';
            status.style.color='#fff'; 
        }
        if (winner == 'YOU WON') {
            yourscr += 1;
            console.log('your score is ' + yourscr)
            yscr.innerText = `${yourscr}`
        }
        else if (winner == 'BOT WON') {
            botscr += 1;
            console.log('bot score is ' + botscr)
            bscr.innerText = `${botscr}`
        }
    })
});
function botchance() {
    let arr1 = ['stone', 'paper', 'scissor'];
    let chance = arr1[Math.floor(Math.random() * 3)];
    return chance;
}
function checkwinner(val1, val2) {
    let val;
    if (val1 == val2) {
        val = 'ITS A TIE';
    }
    else if (val1 == 'stone' && val2 == 'paper') {
        val = 'YOU WON';
    }
    else if (val1 == 'paper' && val2 == 'scissor') {
        val = 'YOU WON';
    }
    else if (val1 == 'scissor' && val2 == 'stone') {
        val = 'YOU WON';
    }
    else {
        val = 'BOT WON';
    }
    return val;
}


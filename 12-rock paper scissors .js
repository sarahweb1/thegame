
let score= JSON.parse(localStorage.getItem('score')) || { wins:0,losses:0,ties:0}
update()
/*  if (score===null){
  score={
    wins:0,losses:0,ties:0
  }*/

  document.body.addEventListener('keydown',(event)=>{
    if(event.key==='r'){functionresult('rock')}
    else if(event.key==='p'){functionresult('paper')}
    else if(event.key==='s'){functionresult('scissors')}
  })

  document.body
  .addEventListener('keydown',(event)=>{if(event.key==='a'){auto()}})
  document.body.addEventListener('keydown',(event)=>{if(event.key==='Backspace'){ reset()
  }})

  document.querySelector('.reset')
  .addEventListener('click',()=>{
    document.querySelector('.pp').innerHTML=`Are you sure you want to reset the score 
    <button class="yes"  onclick="reset();document.querySelector('pp').innerHTML='';">YES</button>
    <button class="no" onclick="document.querySelector('pp').innerHTML='';">NO</button>`
  })
  
  function computerMove(){
  const rand = Math.random();
  if (rand<1/3){  move = 'rock';} 
  else if(rand <= 2/3) { move = 'paper';}
  else  { move = 'scissors';} 
  return move ;
}

function functionresult(choice){
  const move = computerMove()
  let result = '';
  if (choice==='rock'){
    if (move==='rock'){result = 'tie.';}
    else if (move==='paper'){result = 'you lose.';}
    else {result = 'you win.';}}
    
  
  else if (choice==='paper') {
    if (move==='paper'){result = 'tie.';}
    else if (move==='scissors'){result = 'you lose.';}
    else {result = 'you win.'};}
  
  else{
    if (move==='scissors'){result = 'tie.';}
    else if (move==='rock'){result = 'you lose.';}
    else {result = 'you win.';}}
  
  if (result==='you win.'){score.wins+=1}
  else if(result==='you lose.'){score.losses+=1}
  else{score.ties+=1}

  document.querySelector('.result').innerHTML=`${result}`
  document.querySelector('.you').innerHTML=`You <img src="images/${choice}-emoji.png" > -
   <img src="images/${move}-emoji.png" > Computer `
  localStorage.setItem('score',JSON.stringify(score))
  update()}

function update(){document.querySelector('.paragraph').innerHTML=`wins:${score.wins}.losses:${score.losses}.ties:${score.ties}`}
let intervalId;
let isAuto= false;
function auto(){
  if(!isAuto){ intervalId=setInterval(function(){functionresult(computerMove())},1000);
    isAuto=true;document.querySelector('.play').innerHTML='Stop Playing'}
  else{clearInterval(intervalId); isAuto= false;document.querySelector('.play').innerHTML='Auto Play'}
  }

 

function reset(){
  score.wins=0
  score.ties=0
  score.losses=0
  localStorage.removeItem('score')
  update()
}

 





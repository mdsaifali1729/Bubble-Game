let timer=60;
let score=0;
let hitrn;

function scoreincrease(){
    score+=10;
}

function getNewHit(){
    hitrn=Math.floor(Math.random()*10);
    document.querySelector('#hit').textContent=hitrn;
}

function makebubble(){
    let current="";
    for(let i=1;i<=102;i++){
    let v=Math.floor(Math.random()*10);
    current+=`<div class="button">${v}</div>`;
}

document.querySelector('.botcon').innerHTML=current;
}

function runTimer(){
   let timer1 = setInterval(function(){
        if(timer>0){
        timer--;
        document.querySelector('#timer').textContent=timer;
        }
        else{
            clearInterval(timer1);
            document.querySelector('.botcon').innerHTML=`<h1>Game Over<h1>`;
        }
    },1000);
}

document.querySelector('.botcon').addEventListener("click",function(dets){
      let clickednum=Number(dets.target.textContent);
      if(hitrn === clickednum){
        scoreincrease();
        makebubble();
        getNewHit();
        console.log("hello");
      }
      
});

runTimer();
makebubble();
getNewHit();
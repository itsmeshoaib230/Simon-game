let gameseq=[];
let userseq=[];
let level=0;
let started=false;
let max=0;
h();
let colors=["blue","yellow","brown","white"];
//game starts karna hai jab key press hoga
let h3=document.querySelector("h3");
document.addEventListener("keypress",function(){
    if(started==false){
        started=true;
        levelup();
    }
});
function sysflash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash")
    },270);
}
function userflash(btn){
    btn.classList.add("gflash");
    setTimeout(function(){
        btn.classList.remove("gflash")
    },270);
}
function levelup(){
    userseq=[];
    level++;
    h3.innerText=`level ${level}`;
    let randidx=Math.floor(Math.random()*4);
    let randcolor=colors[randidx];
    let btn=document.querySelector(`.${randcolor}`);
    setTimeout(function(){
        sysflash(btn);
    },300);
    gameseq.push(randcolor);
};
function evol(idx){
    
    if(userseq[idx]==gameseq[idx]){
        if(userseq.length==gameseq.length){
        levelup();
    }
}
    else{
        if(level>max){
            max=level;
            h3.innerHTML=`<b>Your Score= 🕺${level}🕺 and you created highest score!</b> <br> press anykey to start again`;
        reset();
        }
        else{
            h3.innerHTML=`Better luck next time! <b>Your Score=  🙆‍♂️${level}🙆‍♂️ and  highest=${max}</b> <br> press anykey to start again`;
        reset();
        }
        reset();
    }
}
function reset(){
    userseq=[];
    gameseq=[];
    started=false;
    level=0;
}
function userse(btn){
    userflash(btn);
    let id=btn.getAttribute("id");
    userseq.push(id);
    evol(userseq.length-1);
}
let btns=document.querySelectorAll(".child");
for(let btn of btns){
    btn.addEventListener("click",function(){
        userse(btn);
});
}
let h1=document.querySelector("h1");
function colorChange(color,delay) {
    return new Promise((resolve,reject)=>{
        setTimeout((color)=>{
            h1.backgroundColor=color;
        },delay);
        
    });
}
async function h(){
    await colorChange("red",1000);
    await colorChange("green",1000);
    await colorChange("purple",1000);
    await colorChange("orange",1000);
    await colorChange("white",1000);
    await colorChange("blue",1000);
}
const hours=document.querySelector("#hours")
const minutes=document.querySelector("#minutes")
const seconds=document.querySelector("#seconds")
const section=document.querySelector("#section")

const btn=document.querySelector("#btn")

btn.addEventListener("click",()=>{
    if(btn.innerHTML==="Dark Mode"){
        btn.innerHTML="Light Mode"
        btn.style.color="black"
        btn.style.backgroundColor="white"
        document.body.style.backgroundColor="black"
      
        document.body.style.color="white"
    }
    else{
        btn.innerHTML="Dark Mode"
        btn.style.backgroundColor="black"
        btn.style.color="white"
        document.body.style.backgroundColor="white"
        document.body.style.color="black"
    }
})
const displayTime=()=>{
    let hrs=new Date().getHours()
    let min=new Date().getMinutes()
    let sec=new Date().getSeconds()

if(hrs>12){
    hrs=hrs-12
 }
if(hrs>=12){
    section.innerHTML="PM"
}
else{
    section.innerHTML="AM"
}

if(sec<10){
    sec="0"+sec
}
if(min<10){
    min="0"+min
}
if(hrs<10){
    hrs="0"+hrs
}

hours.innerHTML=hrs;
minutes.innerHTML=min;
seconds.innerHTML=sec;
}
setInterval(displayTime,10)

let eventelement=document.getElementById("btn")
let eventfun=(event)=>
    {
let countdownElement=document.getElementById("countdown");
const countdownNumbers=[10,9,8,7,6,5,4,3,2,1,"Happy Independence Day!"];
let displayCountdown=(index)=>
    {
  if(index<countdownNumbers.length){
    countdownElement.innerText=countdownNumbers[index];
    setTimeout(function(){
     displayCountdown (index+1);
    },1000);
  }
}
displayCountdown(0);}

eventelement.addEventListener("click",eventfun)
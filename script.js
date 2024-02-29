const dayn    = document.getElementById("daytext");
const hourn   = document.getElementById("hourtext");
const minuten = document.getElementById("minutetext");
const secondn = document.getElementById("secondtext");

const recentdate = new Date().getFullYear();
const expirydate = new Date(`march 30 ${recentdate} 11:30:00`);

function countdowntimer(){
    const currentdate = new Date();
    const difference  = expirydate - currentdate;
    const day         =    Math.floor(difference/1000/60/60/24);
    const hour        =    Math.floor(difference/1000/60/60)%24;
    const minute      = Math.floor(difference/1000/60)%60;
    const second      = Math.floor(difference/1000)%60;

    dayn.innerHTML   = day;
    hourn.innerHTML  = hour;
    minuten.innerHTML= minute;
    secondn.innerHTML= second;

}
setInterval(countdowntimer, 1000);


const date = new Date();
function numDay(msg){
    alert(msg.innerHTML);
}
const renderCalendar=()=>{
    date.setDate(1);
    const monthDays = document.querySelector(".days");
    const lastDay = new Date(date.getFullYear(), date.getMonth()+1,0).getDate();
    const prevLastDay =  new Date(date.getFullYear(), date.getMonth(),0).getDate();
    const firstDayIndex= date.getDay();
    const lastDayIndex = new Date(date.getFullYear(), date.getMonth()+1,0).getDay();
    const nextDays=7-lastDayIndex-1;
    
    console.log(nextDays);
    
    const months=["Janeiro",
    "Fevereiro",
    "Março",
    "Abril",
    "Maio",
    "Junho",
    "Julho",
    "Agosto",
    "Setembro",
    "Outubro",
    "Novembro",
    "Dezembro"
    ];
    console.log(months[date.getMonth()]);
    document.querySelector(".date h1").innerHTML=months[date.getMonth()];
    document.querySelector(".date p").innerHTML=date.getFullYear();
    let days = "";
    
    for(let x=firstDayIndex;x > 0;x--){
        days +=`<div class="prev-date">${prevLastDay -x+1}</div>`;
    };
    
    for(let i = 1; i<=lastDay;i++){
        
        if(i== new Date().getDate() && date.getMonth()==new Date().getMonth()&& date.getFullYear()==new Date().getFullYear()){
            days+=`<div class="today numDay" onclick='numDay(this);'>${i}</div>`;
        }else{
        days+= `<div class="numDay" onclick="numDay(this);">${i}</div>`};
    };
    for(let j= 1; j<=nextDays;j++){
        days+=`<div class="next-date" >${j}</div>`;  
    };
    monthDays.innerHTML=days;
}

document.querySelector('.prev').addEventListener('click',()=>{date.setMonth(date.getMonth()-1);
renderCalendar();});
document.querySelector('.next').addEventListener('click',()=>{date.setMonth(date.getMonth()+1);
renderCalendar();});

let boxDay = document.querySelectorAll('.days div');
console.log(boxDay);

renderCalendar();
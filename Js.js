
var body = document.querySelector('body');
let i = 0;
let j = 0;
let k = 0;
let auxLeapYear = 0;
let squareId = 1;
let dayOfYear = 0;

var squaresPerLine;
var linecontainer;
var yearcontainer;
var date = new Date();
// console.log(date.getFullYear()+'-'+(date.getMonth()+1)+'-'+date.getDate());
let startDayTS = new Date(2020, 00, 01).getTime();
let currentDayTS = new Date().getTime();
let currentDayId = Math.ceil((currentDayTS - startDayTS)/(1000*60*60*24));
console.log(startDayTS);
console.log(currentDayTS);
console.log(currentDayId);


for(k=0;k<48;k++){
    dayOfYear = 1;
    yearcontainer = document.createElement("div");
    yearcontainer.classList.add('yearcontainer');
    for(j=0; j<3; j++){
        linecontainer = document.createElement("div");
        linecontainer.classList.add('linecontainer');
        yearcontainer.appendChild(linecontainer);
        squaresPerLine = 122;
        if((auxLeapYear % 4 != 0) && (j==2)){
            squaresPerLine = 121;
        }
        
        for (i=0;i<squaresPerLine;i++){
            var square = document.createElement("div");
            square.classList.add("square");
            square.title = squareId + ' - ' + dayOfYear;



            if(squareId < currentDayId){
                square.classList.add("passedDay");
            }
            if(squareId == currentDayId){
                square.classList.add("currentDay");
            }
            linecontainer.appendChild(square);
            squareId++;
            dayOfYear++;
        }
    }
    auxLeapYear++;
    body.appendChild(yearcontainer);
}


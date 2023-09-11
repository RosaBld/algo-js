let x1=parseInt(prompt("give me the first x axis"));
let y1=parseInt(prompt("give me the first y axis"));
let x2=parseInt(prompt("give me the second x axis"));
let y2=parseInt(prompt("give me the second y axis"));

function calcDistance(x1,x2,y1,y2){
    let y=x2-x1;
    let x=y2-y1;
    return Math.sqrt((x*x)+(y*y));
}
console.log(calcDistance(x1,x2,y1,y2));
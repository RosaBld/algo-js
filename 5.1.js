let SerieName=prompt("Enter the name of your serie");
let ProductionYear=prompt("What year was it produced?");
let Cast=prompt("Casting: ");

function askTvSerie(SerieName, ProductionYear, Cast) {
    let serie={
        SerieName:SerieName,
        ProductionYear:ProductionYear,
        Cast:Cast,
    }
}

alert('The serie ' + SerieName + ' was introduced in ' + ProductionYear + ' and featured ' + Cast);

let SerieObject = {SerieName, ProductionYear, Cast};
const json = JSON.stringify(SerieObject);
console.log(json);
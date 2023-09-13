let SerieName=prompt("Enter the name of your serie");
let ProductionYear=prompt("What year was it produced?");
let CastMembers=prompt("Casting: ");
let Cast=CastMembers.split(",");

function askTvSerie(SerieName, ProductionYear, Cast) {
    let tvSerie={
        SerieName:SerieName,
        ProductionYear:ProductionYear,
        Cast:Cast,
    }
}

alert('The serie ' + SerieName + ' was introduced in ' + ProductionYear + ' and featured ' + Cast);

let SerieObject = {SerieName, ProductionYear, Cast};
const json = JSON.stringify(SerieObject);
console.log(json);

function ShuffleCast(Cast) {
    for (i=Cast.length - 1; i>0; i--) {
        const j=Math.floor(Math.random()*(i+1));
        [Cast[i], Cast[j]]=[Cast[j], Cast[i]];
    }
}

function RandomizeCast(tvSerie) {
    const Cast=tvSerie.Cast;
    ShuffleCast(Cast);
}

let tvSerie={
    SerieName:SerieName,
    ProductionYear:ProductionYear,
    Cast:Cast,
}

RandomizeCast(tvSerie);

alert('The cast you typed but random: ' + tvSerie.Cast);

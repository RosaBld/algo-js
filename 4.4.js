let inputAr=["Alexandre Vandewiele","Antoine Lansman", "Bastien Venturi","Carole Gérard","Dorian Vanden Eynde","Elisabeth Leyder","Elodie Ali","Justin Michel","Justine Frigo","Justine Leleu","Kimi Lefort","Layla","Lidwine Careme","Lucas Beauloi","Marie Tara","Mathias Barbier","Okly","Pierre Marien","Robin Piot","Rosalie Boulard","Stephane Comblez","Tim Desmet","Toms","Valentin Lefort","Vens Alexandre","Virginie Dourson"];

let n= Math.floor(Math.random()*inputAr.length);

function pickLearner(inputAr, n) {
    console.log(inputAr[(Math.floor(Math.random()*inputAr.length))]);
}
pickLearner(inputAr,n);
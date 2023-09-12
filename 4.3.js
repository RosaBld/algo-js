function rand10(min, max) {
    return Math.floor(Math.random()*10);
}

let n=rand10();

function multiRand(n) {
    const rand=[];
    for (i=0;i<n;i++) {
        rand.push(Math.floor(Math.random()*10));
    }
    return rand;
}

n=prompt("tell me how many numbers u want");
alert("there there: " + multiRand(n));

//or

/* function rand10(min, max) {
    return Math.floor(Math.random()*10);
}

let n=rand10();

function multiRand(n) {
    const rand=[];
    for (i=0;i<n;i++) {
        rand.push(rand10());
    }
    return rand;
}

n=prompt("tell me how many numbers u want");
let rand=multiRand(n);
alert("there there: " + multiRand(n));

*/
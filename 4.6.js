const a = parseInt(prompt('Enter a positive integer: '));

function factorial(a){
    if (a === 0){
        return 1;
    }
    else {
        return a * factorial(a-1);
    }
}
alert('your factorial is ' + factorial(a));
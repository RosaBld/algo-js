let min=prompt("Enter a minimum");
let current=prompt("Enter a current");
let max=prompt("Enter a max");

while ((current>min) && (current<max)) {
    alert("Good Job");
}
while (min<max) {
    alert("Current needs to be between min and max");
}
while (current<min) {
    alert("You know nothing");
}

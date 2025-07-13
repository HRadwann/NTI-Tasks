var naame = prompt("pls Enter your name:");
var birthYear = prompt("What is your birth year:");
var isStudent = confirm("are u student?");
let curruntYear = new Date().getFullYear();

let age = curruntYear - birthYear;
if (age < 13) {
    var category = "kid";
} else if (age >= 13 && age <= 17) {
    var category = "teen";
} else if (age >= 18 && age <= 59) {
    var category = "adult";
} else {
    var category = "senior";
}

let massage = `Hello ${naame}, you are ${age} years old. \nCategory: ${category}.`;
if (isStudent == true)
    massage += `\nDon't forget to study hard!`;
//alert
alert(massage);
//console
console.log(massage);
//HTML DOMdocument.getElementById("result").innerText = message;
document.getElementById("result").innerText = message;
let name = prompt("Enter your name:");
let age = parseInt(prompt("Enter your age:"));
let yearsOfExperience = parseFloat(prompt("Enter your years of experience:"));
let rating = parseInt(prompt("Rate yourself from 1 to 10:"));
let baseSalary = 50000;

let jobCategory = "";

if (yearsOfExperience < 2) {
    jobCategory = "Junior";
} else if (yearsOfExperience >= 2 && yearsOfExperience <= 5) {
    jobCategory = "Mid-Level";
} else if (yearsOfExperience > 5 && yearsOfExperience <= 10) {
    jobCategory = "Senior";
} else {
    jobCategory = "Expert";
}

let performance = "";

switch (true) {
    case (rating >= 9):
        performance = "Excellent";
        break;
    case (rating >= 7 && rating <= 8):
        performance = "Good";
        break;
    case (rating >= 5 && rating <= 6):
        performance = "Average";
        break;
    default:
        performance = "Needs Improvement";
        break;
}

let bonus = 0;

if (yearsOfExperience >= 0 && yearsOfExperience < 2) {
    bonus = 0.10 * baseSalary;
} else if (yearsOfExperience >= 2 && yearsOfExperience <= 5) {
    bonus = 0.15 * baseSalary;
} else if (yearsOfExperience > 5) {
    bonus = 0.20 * baseSalary;
}

let finalSalary = baseSalary + bonus;

let hour = new Date().getHours();
let shift = (hour >= 9 && hour < 18) ? "Day Shift" : "Night Shift";

let output = `Employee Name: ${name}
Age: ${age}
Years of Experience: ${yearsOfExperience}
Job Category: ${jobCategory}
Performance: ${performance}
Shift: ${shift}
Base Salary: $${baseSalary.toFixed(2)}
Bonus: $${bonus.toFixed(2)}
Final Salary: $${finalSalary.toFixed(2)}`;

//console
console.log(output);

//alert
alert(output);

//page
document.getElementById("result").innerText = output;

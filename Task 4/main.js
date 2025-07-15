let temperature = prompt("Please enter the current temperature in °C:");

let condition =
    temperature < 0 ? "Freezing cold" :
        temperature >= 0 && temperature <= 15 ? "Cold" :
            temperature >= 16 && temperature <= 25 ? "Mild" :
                temperature >= 26 && temperature <= 35 ? "Warm" :
                    "Hot";

let state;
if (temperature < -5 || temperature > 40) {
    state = "Dangerous temperature";
} else {
    state = "Safe temperature";
}

let advice =
    temperature >= 16 && temperature <= 25 ? "Perfect for outdoor activities!" :
        temperature > 30 ? "Stay hydrated!" :
            "";

let result = `Weather Report:
Current Temperature: ${temperature}°C
Weather Condition: ${condition}
Safety Status: ${state}
${advice ? "Advice: " + advice : ""}`;

//console
console.log(result);

//alert
alert(result);

//HTML DOM
document.getElementById('result').innerHTML = (result);
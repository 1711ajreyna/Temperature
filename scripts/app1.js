function tempConv(){
    let scale = prompt("Enter celcius or fahrenheit");

    if (scale == "celcius"){
        let c = prompt("enter temperature");
        let result = (c-32)*5/9;
        
        document.getElementById("result").innerHTML=result;
    }

    if (scale == "fahrenheit"){
        let f = prompt("enter temperature");
        let result = (f*9/5)+32;
        
        document.getElementById("result").innerHTML=result;
    }
    else{
        document.getElementById("result").innerHTML="<p class='alert-error'>invalid input<p> "
    }
}
//Create a function called convertTemperatureRange that gets from the prompt: startValue (a number), endValue (a number), and scale (a string containing either "C" for Celsius or "F" for Fahrenheit).
//Inside the function, use a for loop to iterate through the temperatures from startValue to endValue (inclusive)
//For each temperature, use an if statement to check the scale parameter. If it is "C", convert the temperature to Fahrenheit using the formula: Fahrenheit = (Celsius * 9/5) + 32. If it is "F", convert the temperature to Celsius using the formula: Celsius = (Fahrenheit - 32) * 5/9
function convertTemperatureRange(){
    let startValue = prompt("enter a start value");
    let endValue = prompt("enter a end value");
    let scale = prompt("Enter celcius or fahrenheit");

    if (scale == "celcius"){
        let c = prompt("enter temperature");
        let result = (c-32)*5/9;
        
        document.getElementById("result").innerHTML=result;
    }

    if (scale == "fahrenheit"){
        let f = prompt("enter temperature");
        let result = (f*9/5)+32;
        
        document.getElementById("result").innerHTML=result;
    }
    else{
        document.getElementById("result").innerHTML="<p class='alert-error'>invalid input<p> "
    }
    for(let i=0;i>=startValue&&i<=endValue;i++){
        document.write()
    }
}
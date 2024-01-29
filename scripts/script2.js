//fucntions
function conversion(){
    let temperature = Number(prompt("enter temp in Celcius: "));
    console.log(temperature);
    let result = temperature * 9/5 + 32;
    document.getElementById("total").innerHTML=result;
    console.log(temperature+" "+"Celcius in Farenheit is"+" "+result)
}
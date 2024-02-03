
function convertTemperatureRange(){
    let startValue = prompt("enter a start value");
    let endValue = prompt("enter a end value");
    let scale = prompt("Enter c or f");

    if (scale == "c"){
        let resultStart = (startValue-32)*5/9;
        let resultEnd = (endValue-32)*5/9;
    }

    if (scale == "f"){
        let resultStart = (startValue*9/5)+32;
        let resultEnd = (endValue*9/5)+32;
    }
    for(let result = resultStart; result<=resultEnd; result++){
        
        document.getElementById("result").innerHTML=result;
    }
}

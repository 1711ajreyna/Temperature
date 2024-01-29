//fucntions
let counter = 0;
//1) create a function
function increase(){
    counter++;
    console.log(counter);

}

function decrease(){
    counter--;
    console.log(counter);
}
//run the fucntion\
function sayHi(){
    prompt("enter your name");
    console.log("welcome ..."+ userName);
}

function conversion(){
    //1. get number from prompt
    let temperature = Number(prompt("enter temp in Celcius: "));
    console.log(temperature);
    //2. multi the number by three
    let result = temperature * 9/5 + 32;
    //3. display the result on the web page
    document.getElementById("total").innerHTML=result;
    console.log(temperature+" "+"Celcius in Farenheit is"+" "+result)
}
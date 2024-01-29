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

function multiByThree(){
    //1. get number from prompt
    let number = Number(prompt("enter number: "));
    console.log(number);
    //2. multi the number by three
    let result = number * 3;
    //3. display the result on the web page
    document.getElementById("total").innerHTML=result;
}

// create a function that adds up two numbers
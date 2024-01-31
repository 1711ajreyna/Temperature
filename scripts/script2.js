//fucntions
function conversion(){
    let temperature = Number(prompt("enter temp in Celcius: "));
    console.log(temperature);
    let result = temperature * 9/5 + 32;
    document.getElementById("total").innerHTML=result;
    console.log(temperature+" "+"Celcius in Farenheit is"+" "+result)
}

//arrays
let myArray = ["what is the meaning of life",42,Boolean(2>1)];
console.log(myArray[2]); //prints out 2

const numbers = [10,20,30,40,50];
console.log(numbers);

const months=["Jan","Feb","March","Apr","may"]
console.log(months);

//access the values in the array
console.log(numbers[0]);
console.log(numbers[1]);
console.log(numbers[2]);

//array dimensions
console.log(numbers.lenghth);

//methods for arrays
numbers.push(60,70,80);
numbers.unshift(-10,-20,-30);

console.table(numbers);

months.pop();
months.shift();

months.splice(2,1);
console.table(months);

//loops
let i;
for (i=0;i<5;i=i+1){
    console.log(i)
};


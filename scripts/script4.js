//while loop
let number=10
console.log("---while loop---");
while (number<=100){
    console.log(number);
    number=number+10;
}

//Do loop
let number2=0;
console.log("---Do loop---");
do{
    console.log(number2);
    number2=number2+10;
}while(number2<=100)

//For loop
console.log("---For loop---");
for(let i=0; i<=100; i+=10){
    console.log(i)
}

//Arrays
let myArray = ["Andrew", "George", "Ricardo", "James", "Fernanda", "Rami","Roneisha","Guillermo","phillip"];

for (let i=0;i<myArray.length;i++){
    document.write(`
    <p>${myArray[i]}</p>
    `);
}
//display numbers from 10 to 100: by sets of 10
//challenge

for (let i=0; i<=100; i++) {
    if (i%3==0 && i%5==0) {
        console.log("FizzBuzz");
    } else if(i%3==0){
        console.log("Fizz");
    } else if(i%5==0){
        console.log("Buzz");
    } else {
        console.log(i);
    }
}

function multiply(number,msg){
    document.write(`---${msg}---${number}`)
    for(let i=0;i<=10;i++){
        document.write(
            `
            <p>${i} x ${number} = ${i*number}</p>
            `);
    }
}

multiply(4,"multi");
multiply(6,"multi");


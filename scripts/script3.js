let userName="samantha";

if(userName=="Fernanda"){
    console.log("welcome to the system")
}else{
    console.log("incorrect username")
}

let number=0;
function counttoFive(num){
    if(num==5){
        console.log("5 is reached")
    }
    else{
        num++;
        counttoFive(num);
    }
}
//DB 
let userDB = "andrew";
let passDB = "test1234";

function login(){
    let userName = prompt("please enter your name");
    let userPassword = prompt("please enter your password");
    console.log(userName,userPassword);


if(userName == userDB && userPassword == passDB){
    console.log("welcome to the canvas");
    document.getElementById("notifications").innerHTML="<p>welcom to canvas</p>";
}else{
    console.log("user credentials are invalid");
    document.getElementById("notifications").innerHTML="<p class='alertError'>invalid username or password</p>";
}
}
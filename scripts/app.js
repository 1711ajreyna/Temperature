

const celciusInput = document.getElementById("celcius");
const farenheitInput = document.getElementById("fareneheit");

const inputs = document.getElementsByClassName("input");

for(let i = 0; i < inputs.length; i++){
    let input = inputs[i];

    input.addEventListener("input",function(e){
        const value = parseFloat(e.target.value);
       
        switch (e.target.name) {
            case "celcius":farenheitInput.value=(value*1.8)+32;
                break;
            case "farenheit":celciusInput.value=(value-32)/1.8;
                break;
        }
    });
};
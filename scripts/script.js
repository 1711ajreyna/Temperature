console.log("script");

var userName="George";

console.log=userName;

var employeeName="kory";
var employeeAge="27";
var employeeCountry="USA";
var employeePhone="555-555-555";
var employeeSalaryMonthly=20000;
var employeeSalaryYearly= employeeSalaryMonthly *12;

document.write(
    `
    <h3>Employee Info</h3>
    <p>Name: ${employeeName}</p>
    <p>Age: ${employeeAge}</p>
    `
);

let firstName="Roger";
let lastName="Smith";
let address="2425 S Broadway St.";
let town="Whereville";
let zip="69872";
let phone="555-555-555";
let birthDate="20040813";
let sport="Football";
let salary="1,000,000.00";
let yrsExp="2 years";
let contrTime="4 yrs";
let Goals="56";
let shotsPg="20.1";
let possPerc="61.9%";
let passPerc="88.9%";
let aerialsWon="12.4";
let country="Germany";
let tm="Bayern Munich";
let rating="70.1";
let foulsPg="20.5";
let disci="30:8";
let contRenew="yes";
 document.write(`
    <p>First Name: ${firstName}</P>
    <p>Last Name: ${lastName}</P>
    <p>Country: ${country}</P>
    <p>Team: ${tm}</P>
    <p>Address: ${address}</P>
    <p>Town: ${town}</P>
    <p>Zip Code: ${zip}</P>
    <p>Phone: ${phone}</P>
    <p>birth date: ${birthDate}</P>
    <p>sport: ${sport}</P>
    <p>Annual Salary: ${salary}</P>
    <p>Years of exp.: ${yrsExp}</P>
    <p>Contract duration: ${contrTime}</P>
    <p>Goals: ${Goals}</P>
    <p>possession %: ${possPerc}</P>
    <p>pass %: ${passPerc}</P>
    <p>Aerials Won: ${aerialsWon}</P>
    <p>rating: ${rating}</P>
    <p>Fouls per game: ${foulsPg}</P>
    <p>Discipliine: ${"30:8"}</P>
    <p>Renew Contract: ${contRenew}</P>
 `);
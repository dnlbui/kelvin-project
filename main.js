//Today's temp. in kelvin and assign in variable kelvin
const kelvin = 0;

//convert Kelvin to Celcius and assign in variable celcius
const celcius = kelvin - 273;

//calculate Celcius to Fahrenheit and round it
let fahrenheit = celcius * (9.0 / 5.0) + 32.0;

//Round down for conversion from Celcius to Fahrenheit results in a decimal and assign back to fahrenheit
fahrenheit = Math.floor(fahrenheit)

//Use console.log and display temperture by using string interpolation
console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`);


//EXTRA PRACTICE
//convert Celcius to Newton scale and assign to variable newton
const newton = Math.floor(celcius * (33 / 100));

//use console.log() and string interpolation to display value in netwon
console.log(`The temperature is ${newton} degrees Newton.`);

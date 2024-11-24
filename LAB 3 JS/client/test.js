// main.js
const { OrangeSytems, Endava, Pentalog, Payment } = require('../strategy_pattern/payment');

// Create instances of companies
const orangeSytems = new OrangeSytems();
const endava = new Endava();
const pentalog = new Pentalog();

// Create an instance of the Payment class
const paymentCalculator = new Payment();

// Create an example Employee object
const employee = {
    experience: 7,   // Experience in years
    type: 1          // Type 1 represents Developer
};

// Set company strategy and calculate payment for OrangeSytems
paymentCalculator.setStrategy(orangeSytems);
const orangePayment = paymentCalculator.calculator(employee);
console.log('OrangeSytems Payment:', orangePayment);

// Set company strategy and calculate payment for Endava
paymentCalculator.setStrategy(endava);
const endavaPayment = paymentCalculator.calculator(employee);
console.log('Endava Payment:', endavaPayment);

// Set company strategy and calculate payment for Pentalog
paymentCalculator.setStrategy(pentalog);
const pentalogPayment = paymentCalculator.calculator(employee);
console.log('Pentalog Payment:', pentalogPayment);

//DOM elements
const password = document.getElementById('password');
const lengthEL = document.getElementById('length');
const incNum = document.getElementById('numbers');
const incSym = document.getElementById('symbols');
const incUpper = document.getElementById('upper');
const incLower = document.getElementById('lower');
const generateBtn = document.getElementById('generate');
const copy = document.getElementById('copy');

// this is an object
const randomFunc = {
    lower: randomLower,
    upper: randomUpper,
    number: randomNumber,
    symbol: randomSymbol
};

// click event to generate password
generateBtn.addEventListener('click', () => {
    const length = +lengthEL.value;
    const hasNumber = incNum.checked;
    const hasSymbol = incSym.checked;
    const hasUpper = incUpper.checked;
    const hasLower = incLower.checked;

    password.innerText = generatePassword(hasNumber, hasSymbol, hasUpper, hasLower, length);
});

// password generate function
function generatePassword(hasNumber, hasSymbol, hasUpper, hasLower, length) {
    let generatedPassword = '';
    const typesCount = [hasLower + hasUpper + hasNumber + hasSymbol].length;
    
    if (typesCount === 0){
        return '';
    }
    for (let i = 0; i < length; i += typesCount){
        if (hasNumber) {
            generatedPassword += randomNumber()
        }
        if (hasSymbol){
            generatedPassword += randomSymbol()
        }
        if (hasLower){
            generatedPassword += randomLower()
        }
        if (hasUpper){
            generatedPassword += randomUpper()
        }
    }
    const finalPassword = generatedPassword.slice(0, length);
    return finalPassword;
}
 
// Generate funcitons

function randomLower() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
    // fromCharCode is built into JavaScript to use the number that corresponds to a letter. math.random gives a number between 0-26. math.floor rounds the number down to the whole number. +97 allows us to select the range from 97-122, which are all of the lowercase numbers.
}
function randomUpper() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
};
function randomNumber() {
    return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
};
function randomSymbol() {
    const symbols = '!@#$%&*_-+=|/\?';
    return symbols[Math.floor(Math.random() * symbols.length)]
    // this is how to return a random item from a string
};
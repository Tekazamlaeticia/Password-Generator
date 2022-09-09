const resultEl = document.getElementById('result')
const lengthEl = document.getElementById('length')
const clipboardEl = document.getElementById('clipboard')
const uppercaseEl = document.getElementById('uppercase')
const lowercaseEl = document.getElementById('lowercase')
const numbersEl = document.getElementById('numbers')
const symbolsEl = document.getElementById('symbols')
const generateEl = document.getElementById('generate')

function getRandomLower(){
   
    return String.fromCharCode(Math.floor(Math.random()*26) + 97);
}


function getRandomUpper(){
    return String.fromCharCode(Math.floor(Math.random()*26) + 65);
}

function getRandomNumber(){
    return String.fromCharCode(Math.floor(Math.random()*10) + 48);
}


function getRandomSymbol(){
    const symbols = '!@#$%^&*(){}[]=<>/,.'
    const i = Math.floor(Math.random()*symbols.length);
    return symbols[i];
}


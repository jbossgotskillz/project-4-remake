/*function buy() {
    const defaultNumber = document.getElementById("amount")
    const newNumber = parseInt(defaultNumber.value) - 1
    defaultNumber.value = newNumber
}

function sell() {
    const defaultNumber = document.getElementById("amount")
    const newNumber = parseInt(defaultNumber.value) + 1
    defaultNumber.value = newNumber


let counterDisplayElem = document.querySelector('.counter-display');
let counterMinusElem = document.querySelector('.counter-minus');
let counterPlusElem = document.querySelector('.counter-plus');

let count = 0;

updateDisplay();

counterPlusElem.addEventListener("click",()=>{
    count = count + 5;
    updateDisplay();
}) ;

counterMinusElem.addEventListener("click",()=>{
    count = count + 5;
    updateDisplay();
});

function updateDisplay(){
    counterDisplayElem.innerHTML = count;
};*/



//stock value

//Battlefield Mapstyles - counters

let battlefieldCounterDisplay = document.querySelector('.battlefield-counter-display');
let battlefieldCounterBuy = document.getElementById('battlefield-counter-buy');
let battlefieldCounterSell = document.getElementById('battlefield-counter-sell');

let battlefieldCount = 2607;

battlefieldUpdateDisplay();

battlefieldCounterBuy.addEventListener("click",()=>{
    battlefieldCount = battlefieldCount - 46;
    battlefieldUpdateDisplay();
}) ;

battlefieldCounterSell.addEventListener("click",()=>{
    battlefieldCount = battlefieldCount + 46;
    battlefieldUpdateDisplay();
});

function battlefieldUpdateDisplay(){
    battlefieldCounterDisplay.innerHTML = battlefieldCount;
};

//Explosives-R-Us - counters

let explosivesCounterDisplay = document.querySelector('.explosives-counter-display');
let explosivesCounterBuy = document.getElementById('explosives-counter-buy');
let explosivesCounterSell = document.getElementById('explosives-counter-sell');

let explosivesCount = 3830;

explosivesUpdateDisplay();

explosivesCounterBuy.addEventListener("click",()=>{
    explosivesCount = explosivesCount - 40;
    explosivesUpdateDisplay();
}) ;

explosivesCounterSell.addEventListener("click",()=>{
    explosivesCount = explosivesCount + 40;
    explosivesUpdateDisplay();
});

function explosivesUpdateDisplay(){
    explosivesCounterDisplay.innerHTML = explosivesCount;
};

//Guns & Ammo - counters

let gunsCounterDisplay = document.querySelector('.guns-counter-display');
let gunsCounterBuy = document.getElementById('guns-counter-buy');
let gunsCounterSell = document.getElementById('guns-counter-sell');

let gunsCount = 4162;

gunsUpdateDisplay();

gunsCounterBuy.addEventListener("click",()=>{
    gunsCount = gunsCount - 32;
    gunsUpdateDisplay();
}) ;

gunsCounterSell.addEventListener("click",()=>{
    gunsCount = gunsCount + 32;
    gunsUpdateDisplay();
});

function gunsUpdateDisplay(){
    gunsCounterDisplay.innerHTML = gunsCount;
};

//Oscar Mike Combat Wear - counters

let oscarCounterDisplay = document.querySelector('.oscar-counter-display');
let oscarCounterBuy = document.getElementById('oscar-counter-buy');
let oscarCounterSell = document.getElementById('oscar-counter-sell');

let oscarCount = 1519;

oscarUpdateDisplay();

oscarCounterBuy.addEventListener("click",()=>{
    oscarCount = oscarCount - 28;
    oscarUpdateDisplay();
}) ;

oscarCounterSell.addEventListener("click",()=>{
    oscarCount = oscarCount + 28;
    oscarUpdateDisplay();
});

function oscarUpdateDisplay(){
    oscarCounterDisplay.innerHTML = oscarCount;
};


//Transports: Land, Sea, Air - counters

let transportsCounterDisplay = document.querySelector('.transports-counter-display');
let transportsCounterBuy = document.getElementById('transports-counter-buy');
let transportsCounterSell = document.getElementById('transports-counter-sell');

let transportsCount = 2298;

transportsUpdateDisplay();

transportsCounterBuy.addEventListener("click",()=>{
    transportsCount = transportsCount - 35;
    transportsUpdateDisplay();
}) ;

transportsCounterSell.addEventListener("click",()=>{
    transportsCount = transportsCount + 35;
    transportsUpdateDisplay();
});

function transportsUpdateDisplay(){
    transportsCounterDisplay.innerHTML = transportsCount;
};




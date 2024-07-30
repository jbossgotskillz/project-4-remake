const year = [2018, 2019, 2020, 2021, 2022, 2023, 2024]
const company1 = [1782, 1340, 2876, 3672, 3295, 4113, 2607]
const company2 = [3426, 4015, 2512, 1256, 2429, 2048, 3830]
const company3 = [1963, 2748, 3875, 2232, 1190, 3504, 4162]
const company4 = [2489, 1037, 1754, 2841, 4250, 3160, 1519]    
const company5 = [3096, 1853, 2598, 3921, 1105, 1879, 2298]

new Chart("stock", {
  type: "line",
  data: {
    labels: year,
    datasets: [{
      label: "Battlefield Mapstyles",
      fill: false,
      lineTension: 0,
      backgroundColor: "rgba(255, 0, 255, 1.0)",
      borderColor: "rgba(255, 0, 255, 0.4)",
//      pointStyle: 'rect',
      data: company1
    }, {
      label: "Explosives-R-Us",
      fill: false,
      lineTension: 0,
      backgroundColor: "rgba(255, 255, 0, 1.0)",
      borderColor: "rgba(255, 255, 0, 0.4)",
      data: company2
    }, {
      label: "Guns & Ammo",
      fill: false,
      lineTension: 0,
      backgroundColor: "rgba(255, 0, 0, 1.0)",
      borderColor: "rgba(255, 0, 0, 0.4)",
      data: company3
    }, {
      label: "Oscar Mike Combat Wear",
      fill: false,
      lineTension: 0,
      backgroundColor: "rgba(0, 255, 0, 1.0)",
      borderColor: "rgba(0, 255, 0, 0.4)",
      data: company4
    }, {
      label: "Transports: Land, Sea, Air",
      fill: false,
      lineTension: 0,
      backgroundColor: "rgba(0, 0, 255, 1.0)",
      borderColor: "rgba(0, 0, 255, 0.4)",
      data: company5
    }]
  },
  options: {
    legend: {
      display: true,
      position: 'right',
      reverse: true,
      title: {
        display: true,
        text: "Companies",
        font: {size: 12, weight: 'bold'},
        padding: 20,
        color: 'black'
      },
//      labels: {
//        usePointStyle: true
//      }      
    },
    title: {
      display: true,
      text: "Proud 2 Serve Stock Exchange",
      fontSize: 24
    },        
    scales: {
        xAxes: [{
          scaleLabel: {
            display: true,
            labelString: 'Investment Year'
        }
      }],
        yAxes: [{ticks: {min: 500, max: 5000}}],
        yAxes: [{
          scaleLabel: {
            display: true,
            labelString: 'Stock Value'
        }
      }]
    }    
  }
});


        //stock value

        //Battlefield Mapstyles - counters

        let battlefieldStockCounterDisplay = document.querySelector('.battlefield-stock-counter-display');
        let battlefieldStockCounterBuy = document.getElementById('battlefield-stock-counter-buy');
        let battlefieldStockCounterSell = document.getElementById('battlefield-stock-counter-sell');
        let battlefieldQuantity = document.querySelector('.battlefield-quantity-counter');

        let battlefieldStockCount = 2607;
        let battlefieldQuantityCount = 29;

        battlefieldUpdateDisplay();

        battlefieldStockCounterBuy.addEventListener("click", () => {
            battlefieldStockCount = battlefieldStockCount - 46;
            battlefieldQuantityCount = battlefieldQuantityCount + 1;
            battlefieldUpdateDisplay();
        }) ;

        battlefieldStockCounterSell.addEventListener("click", () => {
            battlefieldStockCount = battlefieldStockCount + 46;
            battlefieldQuantityCount = battlefieldQuantityCount - 1
            battlefieldUpdateDisplay();
        });

        function battlefieldUpdateDisplay() {
            battlefieldStockCounterDisplay.innerHTML = "Stock Price: $" + battlefieldStockCount;
            battlefieldQuantity.innerHTML = "Amount of Shares: " + battlefieldQuantityCount; 
            if(battlefieldQuantityCount < 0) {
              battlefieldStockCounterDisplay.innerHTML = "Stock Price: $" + 3941;
              battlefieldQuantity.innerHTML = "Amount of Shares: " + 0;
              alert("You are out of stocks, soldier");
              battlefieldStockCount = battlefieldStockCount - 46;
              battlefieldQuantityCount = battlefieldQuantityCount + 1;
            }
        };

        //Explosives-R-Us - counters

        let explosivesStockCounterDisplay = document.querySelector('.explosives-stock-counter-display');
        let explosivesStockCounterBuy = document.getElementById('explosives-stock-counter-buy');
        let explosivesStockCounterSell = document.getElementById('explosives-stock-counter-sell');
        let explosivesQuantity = document.querySelector('.explosives-quantity-counter');

        let explosivesStockCount = 3830;
        let explosivesQuantityCount = 34;

        explosivesUpdateDisplay();

        explosivesStockCounterBuy.addEventListener("click", () => {
            explosivesStockCount = explosivesStockCount - 40;
            explosivesQuantityCount = explosivesQuantityCount + 1;
            explosivesUpdateDisplay();
        }) ;

        explosivesStockCounterSell.addEventListener("click", () => {
            explosivesStockCount = explosivesStockCount + 40;
            explosivesQuantityCount = explosivesQuantityCount - 1;
            explosivesUpdateDisplay();
        });

        function explosivesUpdateDisplay() {
            explosivesStockCounterDisplay.innerHTML = "Stock Price: $" + explosivesStockCount;
            explosivesQuantity.innerHTML = "Amount of Shares: " + explosivesQuantityCount; 
            if(explosivesQuantityCount < 0) {
              explosivesStockCounterDisplay.innerHTML = "Stock Price: $" + 5190;
              explosivesQuantity.innerHTML = "Amount of Shares: " + 0;
              alert("You are out of stocks, soldier");
              explosivesStockCount = explosivesStockCount - 40;
              explosivesQuantityCount = explosivesQuantityCount + 1;
            }
        };

        //Guns & Ammo - counters

        let gunsStockCounterDisplay = document.querySelector('.guns-stock-counter-display');
        let gunsStockCounterBuy = document.getElementById('guns-stock-counter-buy');
        let gunsStockCounterSell = document.getElementById('guns-stock-counter-sell');
        let gunsQuantity = document.querySelector('.guns-quantity-counter');

        let gunsStockCount = 4162;
        let gunsQuantityCount = 45;

        gunsUpdateDisplay();

        gunsStockCounterBuy.addEventListener("click", () => {
            gunsStockCount = gunsStockCount - 32;
            gunsQuantityCount = gunsQuantityCount + 1;
            gunsUpdateDisplay();
        }) ;

        gunsStockCounterSell.addEventListener("click", () => {
            gunsStockCount = gunsStockCount + 32;
            gunsQuantityCount = gunsQuantityCount - 1;
            gunsUpdateDisplay();
        });

        function gunsUpdateDisplay() {
            gunsStockCounterDisplay.innerHTML = "Stock Price: $" + gunsStockCount;
            gunsQuantity.innerHTML = "Amount of Shares: " + gunsQuantityCount; 
            if(gunsQuantityCount < 0) {
              gunsStockCounterDisplay.innerHTML = "Stock Price: $" + 5602;
              gunsQuantity.innerHTML = "Amount of Shares: " + 0;
              alert("You are out of stocks, soldier");
              gunsStockCount = gunsStockCount - 32;
              gunsQuantityCount = gunsQuantityCount + 1;
            }
        };

        //Oscar Mike Combat Wear - counters

        let oscarStockCounterDisplay = document.querySelector('.oscar-stock-counter-display');
        let oscarStockCounterBuy = document.getElementById('oscar-stock-counter-buy');
        let oscarStockCounterSell = document.getElementById('oscar-stock-counter-sell');
        let oscarQuantity = document.querySelector('.oscar-quantity-counter');

        let oscarStockCount = 1519;
        let oscarQuantityCount = 37;

        oscarUpdateDisplay();

        oscarStockCounterBuy.addEventListener("click", () => {
            oscarStockCount = oscarStockCount - 28;
            oscarQuantityCount = oscarQuantityCount + 1;
            oscarUpdateDisplay();
        }) ;

        oscarStockCounterSell.addEventListener("click", () => {
            oscarStockCount = oscarStockCount + 28;
            oscarQuantityCount = oscarQuantityCount - 1;
            oscarUpdateDisplay();
        });

        function oscarUpdateDisplay() {
            oscarStockCounterDisplay.innerHTML = "Stock Price: $" + oscarStockCount;
            oscarQuantity.innerHTML = "Amount of Shares: " + oscarQuantityCount; 
            if(oscarQuantityCount < 0) {
              oscarStockCounterDisplay.innerHTML = "Stock Price: $" + 2555;
              oscarQuantity.innerHTML = "Amount of Shares: " + 0;
              alert("You are out of stocks, soldier");
              oscarStockCount = oscarStockCount - 28;
              oscarQuantityCount = oscarQuantityCount + 1;
            }
        };


        //Transports: Land, Sea, Air - counters

        let transportsStockCounterDisplay = document.querySelector('.transports-stock-counter-display');
        let transportsStockCounterBuy = document.getElementById('transports-stock-counter-buy');
        let transportsStockCounterSell = document.getElementById('transports-stock-counter-sell');
        let transportsQuantity = document.querySelector('.transports-quantity-counter');

        let transportsStockCount = 2298;
        let transportsQuantityCount = 41;

        transportsUpdateDisplay();

        transportsStockCounterBuy.addEventListener("click", () => {
            transportsStockCount = transportsStockCount - 35;
            transportsQuantityCount = transportsQuantityCount + 1;
            transportsUpdateDisplay();
        }) ;

        transportsStockCounterSell.addEventListener("click", () => {
            transportsStockCount = transportsStockCount + 35;
            transportsQuantityCount = transportsQuantityCount - 1;
            transportsUpdateDisplay();
        });

        function transportsUpdateDisplay() {
            transportsStockCounterDisplay.innerHTML = "Stock Price: $" + transportsStockCount;
            transportsQuantity.innerHTML = "Amount of Shares: " + transportsQuantityCount; 
            if(transportsQuantityCount < 0) {
              transportsStockCounterDisplay.innerHTML = "Stock Price: $" + 3733;
              transportsQuantity.innerHTML = "Amount of Shares: " + 0;
              alert("You are out of stocks, soldier");
              transportsStockCount = transportsStockCount - 35
              transportsQuantityCount = transportsQuantityCount + 1
            }
        };


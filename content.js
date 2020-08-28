var USD_TO_NZD;
var EUR_TO_NZD;
var GBP_TO_NZD;
var AUD_TO_NZD;


fetch('http://data.fixer.io/api/latest?access_key=185ab81e58e51f47a9afcb917ef171e5')
.then(res => res.json())
.then((data) => {
    nzdAsBase(data);
});

function nzdAsBase(data) {
    USD_TO_NZD = data.rates.NZD/data.rates.USD;
    EUR_TO_NZD = data.rates.NZD;
    GBP_TO_NZD = data.rates.NZD/data.rates.GBP;
    AUD_TO_NZD = data.rates.NZD/data.rates.AUD;
}

document.getElementById("button").addEventListener('click', calculate);
document.getElementById("amount").addEventListener('keyup', function(e) {
    if (e.keyCode === 13) {
        calculate();
    }
})

function calculate() {
    let newPrice;
    const d = document.getElementById("currency");
    const b = document.getElementById("amount");
    let oldPrice = b.value;
    let cur = d.options[d.selectedIndex].text;
    if (cur == "USD") {
        newPrice = oldPrice*USD_TO_NZD;
    }
    else if (cur == "EUR") {
        newPrice = oldPrice*EUR_TO_NZD;
    }
    else if (cur == "GBP") {
        newPrice = oldPrice*GBP_TO_NZD;
    }
    else if (cur == "AUD") {
        newPrice = oldPrice*AUD_TO_NZD;
    }
    document.getElementById("outPut").innerHTML="";
    const div = document.createElement('div');
    div.textContent = `$${newPrice.toFixed(2)} NZD`;
    document.getElementById("outPut").appendChild(div);
}




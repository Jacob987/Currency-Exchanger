var USD_TO_NZD;
var EUR_TO_NZD;
var GBP_TO_NZD;
var AUD_TO_NZD;
let DATA;


fetch('http://data.fixer.io/api/latest?access_key=185ab81e58e51f47a9afcb917ef171e5')
.then(res => res.json())
.then((data) => {
    DATA = data;
});

document.getElementById("button").addEventListener('click', function() {
    document.getElementById("outPut").innerHTML="";
    const div = document.createElement('div');
    div.textContent = "THIS IS WORKING!!";
    document.getElementById("outPut").appendChild(div);
});


// function calculate() {
//     const d = document.getElementById("currency");
//     const b = document.getElementById("amount");
//     let amount = b.value;
//     let cur = d.options[d.selectedIndex].text;
//     alert("hello");
// }

function nzdAsBase(data) {
    USD_TO_NZD = data.rates.NZD/data.rates.USD;
    EUR_TO_NZD = data.rates.NZD;
    GBP_TO_NZD = data.rates.NZD/data.rates.GBP;
    AUD_TO_NZD = data.rates.NZD/data.rates.AUD;
}

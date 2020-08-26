const USD_TO_NZD;
const EUR_TO_NZD;
const GBP_TO_NZD;
const AUD_TO_NZD;

fetch('http://data.fixer.io/api/latest?access_key=185ab81e58e51f47a9afcb917ef171e5')
.then(res => res.json())
.then((data) => {
    nzdAsBase(data);
});

function calculate() {

}

function nzdAsBase(data) {
    USD_TO_NZD = data.rates.NZD/data.rates.USD;
    EUR_TO_NZD = data.rates.NZD;
    GBP_TO_NZD = data.rates.NZD/data.rates.GBP;
    AUD_TO_NZD = data.rates.NZD/data.rates.AUD;
}
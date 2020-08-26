fetch('http://data.fixer.io/api/latest?access_key=185ab81e58e51f47a9afcb917ef171e5')
.then(res => res.json())
.then((data) => {
    document.getElementById("p").innerHTML = data.rates.NZD/data.rates.USD;
});


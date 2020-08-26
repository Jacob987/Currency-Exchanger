$.getJSON('http://data.fixer.io/api/latest?access_key=185ab81e58e51f47a9afcb917ef171e5', function(data) {
    const nzd_base = data.rates.NZD;
    const nzd_to_eur = 1/nzd_base;
    const usd_to_eur = 1/data.rates.USD;
    alert(usd_to_eur/nzd_to_eur);
});
alert("HELLO");
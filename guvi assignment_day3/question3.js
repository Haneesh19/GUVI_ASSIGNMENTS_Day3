/*
Question3:
Use the same rest countries and print all countries names, regions, sub-region and populations
*/

const XMLHttpRequest = require('xhr2');

let xhr = new XMLHttpRequest();
xhr.open('GET', 'https://restcountries.com/v3.1/all');
xhr.send();
xhr.onload = function() {
     {
        let countries = JSON.parse(xhr.responseText);
        countries.forEach(country => {
            console.log(`Country: ${country.name.common}, Region: ${country.region}, Sub-region: ${country.subregion}, Population: ${country.population}`);
        });
    }
}

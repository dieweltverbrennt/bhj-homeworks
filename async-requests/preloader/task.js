const loader = document.querySelector(".loader");
const items = document.getElementById("items");

const xhr = new XMLHttpRequest();
xhr.open('GET', 'https://netology-slow-rest.herokuapp.com');
xhr.send();
xhr.addEventListener("load", () => {
    if(xhr.readyState === xhr.DONE && xhr.status === 200) {
        loader.classList.remove("loader_active");
        const exchangeRates = JSON.parse(xhr.responseText).response.Valute;
        for(let rate in exchangeRates) {
            let insertedExchangeRates = 
            `<div class="item">
                <div class="item__code">
                    ${exchangeRates[rate].CharCode}
                </div>
                <div class="item__value">
                    ${exchangeRates[rate].Value}
                </div>
                <div class="item__currency">
                    руб.
                </div>
            </div>`;
            items.insertAdjacentHTML('beforeend', insertedExchangeRates);
        }
    }
});

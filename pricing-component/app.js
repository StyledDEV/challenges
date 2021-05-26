import data from './prices.js'


const checkbox = document.querySelector('.toggle-price-checkbox')



const prices = data.prices

const pricesBox = document.getElementById('prices-box')
const singlePrice = isChecked => prices.map( ({ name, monthlyPrice, annuallyPrice, features }) => `
    <div class="single-price">
        <span class="price-name">${name}</span>
        <span class="price-value">${(isChecked ? monthlyPrice : annuallyPrice)}</span>
        <span class="price-storage">${features.storage} Storage</span>
        <span class="price-users">${features.users} Users Allowed</span>
        <span class="price-send-up">Send up to ${features.sendUp}</span>
        <a class="price-button" href="#">Learn more</a>
    </div>
`).join('')

if (prices.length > 0) {
    pricesBox.innerHTML = singlePrice(true)

    checkbox.addEventListener('click', () => {
        if (checkbox.checked) {
            pricesBox.innerHTML = singlePrice(false)
        } else {
            pricesBox.innerHTML = singlePrice(true)
        }
    })
} else {
    console.warn('Cannot get prices, check your prices list')
}
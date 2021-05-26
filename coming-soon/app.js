const form = document.getElementById('subscription-form'),
    email = document.querySelector('.email-input'),
    successMessage = document.querySelector('.success-message'),
    errorMessage = document.querySelector('.error-message'),
    iconError = document.querySelector('.icon-error')

const handleInput = input => {
    inputValue = input.value
    if (inputValue.length >= 6 
    && inputValue.includes('@') 
    && inputValue.includes('.')) {
        successMessage.innerHTML = 'Subscribed!'
        setInterval(
            () => successMessage.innerHTML = '',
            5000
        )
        errorMessage.innerHTML = ''
        iconError.style.display = 'none'
        form.reset()
    } else {
        errorMessage.innerHTML = 'Please, insert a valid email address.'
        iconError.style.display = 'block'
        successMessage.innerHTML = ''
    }
}

form.addEventListener('submit', e => {
    handleInput(email)
    e.preventDefault()
})
const btnElement = document.querySelector('#btn')
btnElement.addEventListener("click", (event) => {
    event.preventDefault()
    const inputElement = document.querySelector('#milha')
    const spanElement = document.querySelector('#result')
    const calc = inputElement.value * 1609.34
    spanElement.textContent = `${calc} m`
})
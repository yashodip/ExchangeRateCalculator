const country1 = document.getElementById("country_1")
const amount1 = document.getElementById("country_val_1")
const country2 = document.getElementById("country_2")
const amount2 = document.getElementById("country_val_2")

const swapBtn = document.getElementById("swap")
const exchangeRate = document.getElementById("exchange_rate")

//run on any event occurance
function calculate() {
  const country1Name = country1.value
  const country2Name = country2.value

  fetch(`https://open.er-api.com/v6/latest/${country1Name}`)
    .then((resp) => {
      return resp.json()
    })
    .then((data) => {
      amount2.value = data.rates[country2Name]
      exchangeRate.innerText = `1 ${country1Name} = ${data.rates[country2Name]} ${country2Name}`
    })
}

function swap() {
  const temp = country1.value
  country1.value = country2.value
  country2.value = temp
  calculate()
}

country1.addEventListener("change", calculate)
amount1.addEventListener("input", calculate)
country2.addEventListener("change", calculate)
amount2.addEventListener("change", calculate)
swapBtn.addEventListener("click", swap)

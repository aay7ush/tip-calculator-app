const bill = document.getElementById("bill")
const tipPercentBtn = document.querySelectorAll(".btn")
const numberOfPeople = document.getElementById("people")
const tipAmount = document.getElementById("tip")
const totalAmount = document.getElementById("total")
const errorMessage = document.getElementById("error")
const customTipPercentBtn = document.getElementById("customTip")
const resetButton = document.getElementById("reset")

tipPercentBtn.forEach((btn, index) => {
  btn.addEventListener("click", () => {
    tipPercentBtn.forEach((tip) => {
      changeBtnToDefault(tip)
    })
    changeBtnToSelected(btn)

    if (!numberOfPeople.value) {
      showError()
      numberOfPeople.addEventListener("keypress", () => {
        removeError()
      })
    } else {
      if (index == 0) {
        calculateTipPerPerson(5)
        calculateTotalPerPerson(calculateTipPerPerson(5))
        reset()
      } else if (index == 1) {
        calculateTipPerPerson(10)
        calculateTotalPerPerson(calculateTipPerPerson(10))
        reset()
      } else if (index == 2) {
        calculateTipPerPerson(15)
        calculateTotalPerPerson(calculateTipPerPerson(15))
        reset()
      } else if (index == 3) {
        calculateTipPerPerson(25)
        calculateTotalPerPerson(calculateTipPerPerson(25))
        reset()
      } else {
        calculateTipPerPerson(50)
        calculateTotalPerPerson(calculateTipPerPerson(50))
        reset()
      }
    }
  })
})

customTipPercentBtn.addEventListener("blur", (e) => {
  if (!numberOfPeople.value) {
    showError()
    numberOfPeople.addEventListener("keypress", () => {
      removeError()
    })
  } else {
    calculateTipPerPerson(e.target.value)
    calculateTotalPerPerson(calculateTipPerPerson(e.target.value))
    reset()
  }
})

const changeBtnToSelected = (button) => {
  button.classList.remove("bg-cyan-600")
  button.classList.add("bg-cyan-400")
  button.classList.remove("text-grayish-cyan-200")
  button.classList.add("text-cyan-600")
}

const changeBtnToDefault = (button) => {
  button.classList.add("bg-cyan-600")
  button.classList.remove("bg-cyan-400")
  button.classList.add("text-grayish-cyan-200")
  button.classList.remove("text-cyan-600")
}

const showError = () => {
  errorMessage.classList.remove("hidden")
  numberOfPeople.classList.add("border-2")
  numberOfPeople.classList.add("border-red-500")
  numberOfPeople.classList.add("outline-red-500")
}

const removeError = () => {
  errorMessage.classList.add("hidden")
  numberOfPeople.classList.remove("border-2")
  numberOfPeople.classList.remove("border-red-500")
  numberOfPeople.classList.remove("outline-red-500")
}

const calculateTipPerPerson = (tipPercent) => {
  const tip = (tipPercent / 100) * parseFloat(bill.value)
  const tipPerPerson = tip / parseFloat(numberOfPeople.value)
  tipAmount.innerHTML = `&dollar;${tipPerPerson.toFixed(2)}`
  return tip
}

const calculateTotalPerPerson = (tip) => {
  const total = tip + parseFloat(bill.value)
  const totalPerPerson = total / parseFloat(numberOfPeople.value)
  totalAmount.innerHTML = `&dollar;${totalPerPerson.toFixed(2)}`
}

const reset = () => {
  resetButton.classList.remove("bg-cyan-500")
  resetButton.classList.add("bg-cyan-400")

  resetButton.addEventListener("click", () => {
    tipPercentBtn.forEach((tip) => {
      changeBtnToDefault(tip)
    })
    bill.value = ""
    numberOfPeople.value = ""
    tipAmount.innerHTML = "&dollar;0.00"
    totalAmount.innerHTML = "&dollar;0.00"
    resetButton.classList.add("bg-cyan-500")
    resetButton.classList.remove("bg-cyan-400")
  })
}

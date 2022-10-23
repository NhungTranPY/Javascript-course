const defaultResult = 0;
let currentResult = defaultResult;

function getUserNumberInput() {
    return parseInt(userInput.value)
}

function add() {
    const enteredNumber = getUserNumberInput()
    const calDescription = `${currentResult} + ${enteredNumber}`
    currentResult = currentResult + enteredNumber
    outputResult(currentResult, calDescription)
}


addBtn.addEventListener('click', add) // the second argument is a func that tells JS what to execute when 'click' occured





const defaultResult = 0;
let currentResult = defaultResult;
let logEntries = []

// gets input from input field
function getUserNumberInput() {
    return parseInt(userInput.value)
}

// generate & write calculation log
function createAndWriteOutput(operator, resultBeforeCalc, calcNumber) {
    const calcDescription = `${resultBeforeCalc} ${operator} ${calcNumber}`
    outputResult(currentResult, calcDescription) // from vendor file
}

function writeToLog(operationIdentifier, prevResult, operationNumber, newResult) {
    const logEntry = {
        operation: operationIdentifier,
        prevResult: prevResult,
        number: operationNumber,
        result: newResult
    }
    logEntries.push(logEntry)
    console.log(logEntry.operation);
    console.log(logEntries);
}

function add() {
    const enteredNumber = getUserNumberInput()
    const initialResult = currentResult
    currentResult += enteredNumber // same as currentResult = currentResult + enteredNumber
    createAndWriteOutput('+', initialResult, enteredNumber)
    writeToLog('ADD', initialResult, enteredNumber, currentResult)
    // const logEntry = {
    //     operation: 'ADD',
    //     prevResult: initialResult,
    //     number: enteredNumber,
    //     result: currentResult
    // }
    // logEntries.push(logEntry)
    // console.log(logEntry.operation);
    // console.log(logEntries);
}

function subtract() {
    const enteredNumber = getUserNumberInput()
    // const calDescription = `${currentResult} - ${enteredNumber}`
    const initialResult = currentResult
    currentResult -= enteredNumber // same as currentResult = currentResult - enteredNumber
    // outputResult(currentResult, calDescription)
    createAndWriteOutput('-', initialResult, enteredNumber)
    writeToLog('SUBTRACT', initialResult, enteredNumber, currentResult)
}

function multiply() {
    const enteredNumber = getUserNumberInput()
    const initialResult = currentResult
    currentResult *= enteredNumber // same as currentResult = currentResult * enteredNumber
    createAndWriteOutput('*', initialResult, enteredNumber)
    writeToLog('MULTIPLY', initialResult, enteredNumber, currentResult)
}

function divide() {
    const enteredNumber = getUserNumberInput()
    const initialResult = currentResult
    currentResult /= currentResult / enteredNumber // same as currentResult = currentResult / enteredNumber
    createAndWriteOutput('/', initialResult, enteredNumber)
    writeToLog('DIVIDE', initialResult, enteredNumber, currentResult)
}

addBtn.addEventListener('click', add) // the second argument is a func that tells JS what to execute when 'click' occured
subtractBtn.addEventListener('click', subtract)
multiplyBtn.addEventListener('click', multiply)
divideBtn.addEventListener('click', divide)




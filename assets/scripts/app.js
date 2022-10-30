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

function calculateResult(calcalationType) {
    const enteredNumber = getUserNumberInput()
    if (
        calcalationType !== 'ADD' &&
        calcalationType !== 'SUBTRACT' &&
        calcalationType !== 'MULTIPLY' &&
        calcalationType !== 'DIVIDE' || 
        enteredNumber === 0  // or you could write: !enteredNumber
    ) {
        return;
    }
    const initialResult = currentResult
    let mathOperator;
    if (calcalationType === 'ADD') {
        currentResult += enteredNumber // same as currentResult = currentResult + enteredNumber
        mathOperator = '+'
    } else if (calcalationType === 'SUBTRACT') {
        currentResult -= enteredNumber
        mathOperator = '-'
    } else if (calcalationType === 'MULTIPLY') {
        currentResult *= enteredNumber
        mathOperator = '*'
    } else if (calcalationType === 'DIVIDE') {
        currentResult /= enteredNumber
        mathOperator = '/'
    }

    createAndWriteOutput(mathOperator, initialResult, enteredNumber)
    writeToLog(calcalationType, initialResult, enteredNumber, currentResult)
}

function add() {
    calculateResult('ADD')
}

function subtract() {
    calculateResult('SUBTRACT')
}

function multiply() {
    calculateResult('MULTIPLY')
}

function divide() {
    calculateResult('DIVIDE')
}

addBtn.addEventListener('click', add) // the second argument is a func that tells JS what to execute when 'click' occured
subtractBtn.addEventListener('click', subtract)
multiplyBtn.addEventListener('click', multiply)
divideBtn.addEventListener('click', divide)




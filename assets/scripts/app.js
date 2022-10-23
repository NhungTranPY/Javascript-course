const defaultResult = 0
let currentResult = defaultResult

function add(num1, num2) {
    const result = num1 + num2
    // alert(`The result is ${result}`)
    // alert('The result is' + result) // same as above, different syntax (written)
    return result
}

// const additionResult = add(1, 4)
// currentResult = additionResult 
// 2 dong tren co the viet nhu sau:
currentResult = add(1, 4)

outputResult(currentResult, '')


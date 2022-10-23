const defaultResult = 0
let currentResult = defaultResult

function add(num1, num2) {
    const result = num1 + num2
    alert(`The result is ${result}`)
    // alert('The result is' + result) // same as above, different syntax (written)
}

add(1, 4)
add(4, 7)

currentResult = (currentResult + 10) * 3 / 2 - 1

let calculationDescription = '(currentResult + 10) * 3 / 2 - 1'

let calculationDescription2 = '(' + defaultResult + ' 10) * 3 / 2 - 1'

let calculationDescription3 = `( ${defaultResult} + 10) * 3 / 2 - 1` // same result as calculationDescription2
let errorMessage = 'An error occured'

outputResult(currentResult, calculationDescription3)


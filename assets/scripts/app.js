const defaultResult = 0

let currentResult = defaultResult

currentResult = (currentResult + 10) * 3 / 2 - 1

let calculationDescription = '(currentResult + 10) * 3 / 2 - 1'

let calculationDescription2 = '(' + defaultResult + ' 10) * 3 / 2 - 1'

let calculationDescription3 = `( ${defaultResult} + 10) * 3 / 2 - 1` // same result as calculationDescription2
let errorMessage = 'An error occured'

outputResult(currentResult, calculationDescription3)
const defaultResult = 0;
let currentResult = defaultResult;

function add() {
    currentResult = currentResult + parseInt(userInput.value)
    outputResult(currentResult, '')
    // alert(`The result is ${result}`)
    // alert('The result is' + result) // same as above, different syntax (written)
    // return result
    // the return statement ends the funtion execution, which means code thereafter isn't executed
    // alert('Hi there') // this line of code won't be executed
    // return // if return alone like this that means returns nothing, just to cancel function execution

}

// const additionResult = add(1, 4)
// currentResult = additionResult 
// 2 dong tren co the viet nhu sau:
// currentResult = add(1, 4)


addBtn.addEventListener('click', add) // the second argument is a func that tells JS what to execute when 'click' occured





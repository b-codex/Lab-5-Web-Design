// Selectors
const squareRoot = document.querySelector('#squareRoot')
const factorial = document.querySelector("#factorial")
const clear = document.querySelector("#clear")
const backspace = document.querySelector("#backspace")

const equal = document.querySelector('#equals')
const result = document.querySelector("#result")

// Functions

equal.addEventListener('click', () => {
    var x = result.innerText.replace(/÷/g, '/')
    var y = eval(x)
    result.innerHTML = y

    // result.innerHTML = eval(result.innerText)
})

squareRoot.addEventListener('click', () => {
    var x = result.innerText.replace(/÷/g, '/')
    var y = Math.sqrt(x)
    result.innerHTML = y
})

factorial.addEventListener('click', () => {
    var x = result.innerText.replace(/÷/g, '/')

    let answer = 1;
    if(x === '') result.innerHTML = ''
    else if (x === 0 || x === 1) {
        result.innerHTML = answer
    } else {
        for (var i = x; i >= 1; i--) {
            answer *= i
        }
        result.innerHTML = answer
    }

})

clear.addEventListener('click', () => {
    result.innerHTML = ''
})


backspace.addEventListener('click', () => {
    result.innerHTML = result.innerText.slice(0, -1)
})
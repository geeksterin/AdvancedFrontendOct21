// Async
const total = getTotal();
const percent = getPercent()
const average = getAverage()

// Callback hell arsies when we have nested functions accepting callback fn
// The output of other callback / function depands of result of previous one
const compute = () => {
    computeTotal(total, () => {
        computePercent(percent, () => {
            computeAverage(percent, () => {
                
            })
        })
    })
}


// How to avoid callback hell
// 1. Comment what code does
// 2. Desturcture functions into independent one
// 3. Promises
// 4. Async / await

const compute = () => {
    computeTotal().then((data) => {})
    .then((data) => {})
}

const compute = async () => {
    total = await computeTotal()
    persent = await computePercent(total, () => {})
}


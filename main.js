const btn = document.querySelector('.btn-primary');
const evenList = document.querySelector('.even_list');
const oddList = document.querySelector('.odd_list');

let numbersArr = [];
let evenArr = [];
let oddArr = [];

function renderNumbers (arr, selector) {
    arr.sort((a, b) => a - b).forEach(el => {
        const newLi = document.createElement('li');
        newLi.innerText = el;
        newLi.style.listStyle = 'none';
        selector.append(newLi);
    });
}

btn.addEventListener('click', () => {
    const min = 1;
    const max = 100;

    for (let i=0; i<20; i++) {
        numbersArr.push(Math.floor(Math.random() * (max - min + 1)) + min)
    }

    numbersArr.forEach(el => {
        if (el % 2 === 0) {
            evenArr.push(el)
        } else {
            oddArr.push(el)
        }
    });

    renderNumbers(evenArr, evenList);
    renderNumbers(oddArr, oddList);
})

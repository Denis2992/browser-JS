const btn = document.querySelector('.btn-primary');
const erase = document.querySelector('.erase');
const evenList = document.querySelector('.even_list');
const oddList = document.querySelector('.odd_list');



function renderNumbers (arr, selector) {
   selector.innerText = arr.sort((a, b) => a - b).join('\n');

}

btn.addEventListener('click', () => {
    let numbersArr = [];
    let evenArr = [];
    let oddArr = [];
    const min = 1;
    const max = 100;

    for (let i=0; i<20; i++) {
        numbersArr.push(Math.floor(Math.random() * (max - min + 1)) + min);
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
    
});


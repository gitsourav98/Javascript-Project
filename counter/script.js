counter = document.getElementById('counter')
const incrementBtn = document.getElementById('increment')
const resetBtn = document.getElementById('reset')
const decrementBtn = document.getElementById('decrement')

let counterValue = 0;
incrementBtn.addEventListener('click',function(event) {
     counterValue += 1;
     counter.innerHTML = counterValue;
})
decrementBtn.addEventListener('click',function(event) {
    counterValue -= 1;
    counter.innerHTML = counterValue;
})
resetBtn.addEventListener('click',function(event) {
    counterValue =0;
    counter.innerHTML = counterValue;
})

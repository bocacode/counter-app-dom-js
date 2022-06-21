const counterEl = document.getElementById('counter')
const totalCount = document.getElementById('total')
let count = 0

function increase() {
  // count = count + 1 
  count += 1 // this shorthand for the line before
  counterEl.innerHTML = count
}

function decrease(){
  // count = count - 1
  count -= // this shorthand for the line before
  counterEl.innerText = count
}

function printTotal(){
  let countStr = count + ' - '
  totalCount.innerHTML += countStr
}

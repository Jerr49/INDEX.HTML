let header = document.querySelector('h1');
let dec = document.querySelector('.dec');
let inc = document.querySelector('.inc');
let res = document.querySelector('.res');
let brg = document.body;


// decrease
function decrease(){
    header.textContent--;
    if (header.textContent < 0) {
        brg.style.backgroundColor = 'yellow';
    }
}

dec.addEventListener('click', decrease);

function Increase(){
    header.textContent++;
    if (header.textContent == 0) {
        brg.style.backgroundColor = 'green';
    }
}
inc.addEventListener('click', Increase);


function reset(){
header.textContent = 0;
if (header.textContent > 0) {
    brg.style.backgroundColor = 'green';
}
}
res.addEventListener('click', reset);




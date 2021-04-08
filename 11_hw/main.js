const btnEls = [
    document.getElementById('btn1'),
    document.getElementById('btn2'),
    document.getElementById('btn3')
];

btnEls.forEach(e => {
    e.addEventListener('click', fibonachi(e));
});


function fibonachi(e) {
    let next = 0;
    let prev = 1;
    return function() {
        next = prev + next;
        prev = next - prev;
        e.nextElementSibling.innerText = prev;
        return e; 
    };
};
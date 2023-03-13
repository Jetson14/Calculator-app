let screen = document.querySelector('.screen');
let buttons = document.querySelectorAll('.btns');
let clear = document.querySelector('.clear');
let equal = document.querySelector('.equal');

buttons.forEach(btn => {
    btn.addEventListener('click', e => {
        screen.value += e.target.value;
    });
});

equal.addEventListener('click', e =>{
    if(!screen.value){
        screen.value = "NA"
    }
    else{
        screen.value = eval(screen.value);
    }
});

clear.addEventListener('click', e =>{
    screen.value = '';
});
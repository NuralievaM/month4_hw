// инициализация DOM-элементов
const gmailInput = document.querySelector('#gmail_input');
const gmailButton = document.querySelector('#gmail_button');
const gmailResult = document.querySelector('#gmail_result');
const childBlock = document.querySelector('.child_block');
const parentBlock=document.querySelector('.parent_block');
const secondsDisplay=document.querySelector('#seconds');
const startButton=document.querySelector('#start');
const stopButton=document.querySelector('#stop');
const resetButton=document.querySelector('#reset');


//---ДЗ 1.1 (REGULAR EXPRESSIONS)---//

const gmailRegex = /^[a-zA-Z0-9._-]+@gmail\.com$/;

gmailButton.addEventListener('click', () => {
    const value = gmailInput.value.trim();

    if (gmailRegex.test(value)) {
        gmailResult.innerText = 'Valid gmail';
        gmailResult.style.color = 'green';
    } else {
        gmailResult.innerText = 'Invalid gmail';
        gmailResult.style.color = 'red';
    }
});

//---ДЗ 1.2 (RECURSION)---ДЗ 2.1 (RECURSIVE ANIMATION LOOP)---//
let positionX = 0;
let positionY=0;
let moveX=parentBlock.clientWidth-childBlock.offsetWidth;
let moveY=parentBlock.clientHeight-childBlock.offsetHeight;

const moveBlock = () => {
    requestAnimationFrame(moveBlock);
    childBlock.style.left = positionX + 'px';
    childBlock.style.top=positionY + 'px';

    if (positionX < moveX && positionY === 0) positionX++
    else if (positionX === moveX && positionY < moveY) positionY++
    else if (positionY === moveY && positionX > 0) positionX--
    else if (positionX === 0 && positionY > 0) positionY--
}

moveBlock();

//---ДЗ 2.2---(SETINTERVAL)---//

let seconds=0;
let interval=null;

startButton.addEventListener('click', ()=>{
    if (interval!==null) return;

    interval=setInterval(()=>{
        seconds++;
        secondsDisplay.innerText=seconds;
    }, 1000);
});

stopButton.addEventListener('click', ()=>{
    clearInterval(interval);
    interval=null;
});

resetButton.addEventListener('click', ()=>{
    clearInterval(interval);
    interval=null;
    seconds=0;
    secondsDisplay.innerText=seconds;
});
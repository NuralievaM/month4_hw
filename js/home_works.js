//---ДЗ 1.1 (REGULAR EXPRESSIONS)---//

// инициализация DOM-элементов
const gmailInput=document.querySelector('#gmail_input');
const gmailButton=document.querySelector('#gmail_button');
const gmailResult=document.querySelector('#gmail_result');
const childBlock=document.querySelector('.child_block');


const gmailRegex = /^[a-zA-Z0-9._-]+@gmail\.com$/;

gmailButton.addEventListener('click', ()=>{
    const value=gmailInput.value.trim();

    if (gmailRegex.test(value)){
        gmailResult.innerText='Valid gmail';
        gmailResult.style.color='green';
    } else {
        gmailResult.innerText='Invalid gmail';
        gmailResult.style.color='red';
    }
});

//---ДЗ 1.2 (RECURSION)---//
let position=0;

const moveBlock=()=>{
    if (position>=450) return;
    position++
    childBlock.style.left=position+'px';

    requestAnimationFrame(moveBlock);
}

moveBlock();
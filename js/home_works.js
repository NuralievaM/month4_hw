// инициализация DOM-элементов
const gmailInput = document.querySelector('#gmail_input');
const gmailButton = document.querySelector('#gmail_button');
const gmailResult = document.querySelector('#gmail_result');
const childBlock = document.querySelector('.child_block');
const parentBlock = document.querySelector('.parent_block');
const secondsDisplay = document.querySelector('#seconds');
const startButton = document.querySelector('#start');
const stopButton = document.querySelector('#stop');
const resetButton = document.querySelector('#reset');
const charactersList = document.querySelector('.characters-list')


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
let positionY = 0;
let moveX = parentBlock.clientWidth - childBlock.offsetWidth;
let moveY = parentBlock.clientHeight - childBlock.offsetHeight;

const moveBlock = () => {
    requestAnimationFrame(moveBlock);
    childBlock.style.left = positionX + 'px';
    childBlock.style.top = positionY + 'px';

    if (positionX < moveX && positionY === 0) positionX++
    else if (positionX === moveX && positionY < moveY) positionY++
    else if (positionY === moveY && positionX > 0) positionX--
    else if (positionX === 0 && positionY > 0) positionY--
}

moveBlock();

//---ДЗ 2.2---(SETINTERVAL)---//

let seconds = 0;
let interval = null;

startButton.addEventListener('click', () => {
    if (interval !== null) return;

    interval = setInterval(() => {
        seconds++;
        secondsDisplay.innerText = seconds;
    }, 1000);
});

stopButton.addEventListener('click', () => {
    clearInterval(interval);
    interval = null;
});

resetButton.addEventListener('click', () => {
    clearInterval(interval);
    interval = null;
    seconds = 0;
    secondsDisplay.innerText = seconds;
});

//---ДЗ 4.1 (RENDER JSON )---//
const DEFAULT_IMAGE = 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxIHBhUSBxAWFhUVFRgYExUXFRAQEhYSFRgXFhUWExUdICggGBolGxUVJTUhJSkrLi4uFx8zODMsNygtLisBCgoKBQUFDgUFDisZExkrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrK//AABEIAOEA4QMBIgACEQEDEQH/xAAbAAEAAgMBAQAAAAAAAAAAAAAABQYCAwQBB//EADQQAQABAgIHBAgHAQAAAAAAAAABAgMEEQUSITFBUXETMmGRFCKBoaKx0eEjMzRCUsHwgv/EABQBAQAAAAAAAAAAAAAAAAAAAAD/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwD6IAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAM7dqq7P4dMz0iZdFOjLtX7fOaQcg7J0Zdj9vvpc92xVa/MpmOsbPMGsAAAAAAAAAAAAAAAAAAAAAAHtuiblcRRGczuB7atzdrytxnMpnCaKptxnf9aeX7Y+rpwOEjC29m+d88/s6QeU0xTGVMZPQAeTGe96A4MVoui9Gdv1Z8N3thC4ixVh7mV2PpPRaWnFYenE2srnsnjE84BWBsxFmcPdmm5w98c2sAAAAAAAAAAAAAAAAAABMaEw2VM11cdkdOM/7kh4jOdi1WbfZWopjhGQMwAAAAAAAR+l8N2uH1qd9O32cUEtkxnG1Vr9vsr008pmAYAAAAAAA8mcoB6NvoF3+XwyA1AAAAAAAA24SNbFUZ/wAo+a0KthqtTE0zPCqPmtIAAAAAAAACuaVjLH1ez5QsauaUq1sfV7I8ogHKAAAAAAxr7rJjX3QW8AFSAAAAAAAB4tOFu9vh4qjjG3rx96rpTQuJ1atSvjtp68YBMgAAAAAAAxrqiiiZq3RtlVrlfaXJmeMzPml9NYnVt6lG+d/T7oYAAAAAABjX3WTGvugt4AKkAAAAAAAAROU7ABPaOx8YinVud75+MO9UonKdiTwmlpojLExnHON/t5gmhps4qi/+VVE+G6fJuABqu4imzH4tUR8/IG1yY/GxhaOdXCP7nwceK0vsyw0f9T/UfVFV1TXVnXOczvkC5XNyuZrnOZ3vAAAAAAAAY3NlE9GTGuM6J6AsnpEjj9I8Pe9BEAAAAAAAAAAAztWar0/hUzPSNnmDW2U3qqY9WqqOkzDst6JuVd/KPfPub6dC/wArnw/cEbVfrq71dXnLWl50LyufD92i5oiunuTE+cSCPG29hq7H5tMx48PNqAAAAAAAAAeTuegOn0uj+cebxH+iU+IDoAAAAAAAAbcPhqsTVlajrO6I6y68Bo2b/rXtlPCOM/SE3btxaoyojKI4A4MLoqi3tvetPw+XFIU0xTGVMPQAAAACdu9w4nRlF7uRqzzjd7YdwCs4rB14afXjZzjd9mhbKo1oyqQ+P0Xq+tho2cafp9ARYAAAAAAAAAAAAAAACT0Xo/tMq78bP2xz8Z8GnReD9Ju5192PfPJPxGW4HoAAAAAAAAAAAIvSmj9eJrsRt4xz8Y8UKtyF0vg+zq17cbJ70cp5gjAAAAAAAAAAAAGVq3N25FNG+ZYpXQdjOZrq6R/YJTD2YsWYpo4f7NsAAAAAAAAAAAAABjcoi5RMVbp3sgFXxdicNfmmfZ4xwak3puxr2YrjfTv6T90IAAAAAAAAAAAs2BtdjhaY8NvWdsq5h6O0v0xzqiPetUAAAAAAAAAAAAAAAAAwu24u25irjEx5qtVTq1TE8Ni2K3pKjUx1XXPzjMHMAAAAAAAAADo0f+to6wsoAAAAAAAAAAAAAAAAAK/pj9dPSPkAOIAAAAAH/9k='
const charactersRequest = new XMLHttpRequest()

charactersRequest.open('GET', '../data/characters.json')

charactersRequest.send()

charactersRequest.onload = () => {

    const data = JSON.parse(charactersRequest.responseText)

    data.forEach(character => {

        const card = document.createElement('div')
        card.classList.add('character-card')

        const image = character.person_photo || DEFAULT_IMAGE

        card.innerHTML = `
            <div class="character-photo">
                <img src="${image}" alt="${character.name}">
            </div>

            <h4>${character.name}</h4>

            <p>Age: ${character.age}</p>
        `
        charactersList.append(card)
    })
}

//---ДЗ 4.2 (XMLHTTPREQUEST JSON CONSOLE)---//
const bioRequest = new XMLHttpRequest()

bioRequest.open('GET', '../data/bio.json')

bioRequest.send()

bioRequest.onload = () => {
    const data = JSON.parse(bioRequest.responseText)

    console.log(`HOMEWORK 4.2 - BIO DATA:`, data)
}
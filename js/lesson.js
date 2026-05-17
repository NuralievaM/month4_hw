const tabBlocks = document.querySelectorAll('.tab_content_block');
const tabs = document.querySelectorAll('.tab_content_item');
const tabsParent = document.querySelector('.tab_content_items');


let currentIndex = 0; //---ДЗ 3.1 (INFINITE SLIDER)---//

const selectTab = (index) => {
    tabBlocks.forEach((item, i) => item.classList.toggle('active', index === i))
    tabs.forEach((item, i) => item.classList.toggle('active', index === i))

    currentIndex = index;
}

tabsParent.onclick = (event) => {
    const selectedTab = event.target.closest('.tab_content_item')
    if (!selectedTab) return;

    const indexTab = [...tabs].indexOf(selectedTab);
    selectTab(indexTab);
}

setInterval(() => {
    let nextIndex = currentIndex + 1;

    if (nextIndex >= tabs.length) {
        nextIndex = 0;
    }

    selectTab(nextIndex);
}, 5000);

const somInput = document.querySelector('#som');
const usdInput = document.querySelector('#usd');
const eurInput = document.querySelector('#eur');
const error = document.querySelector('#error');

const converter = (element) => {
    element.addEventListener('input', () => {
        const request = new XMLHttpRequest();
        request.open('GET', '../data/converter.json');
        request.setRequestHeader('Content-Type', 'application/json');
        request.send();
        request.onload = () => {
            if (request.status === 200) {
                const data = JSON.parse(request.response);
                if (element.value == '') {    
                    somInput.value = '';              
                    usdInput.value = '';
                    eurInput.value = ''; //---ДЗ 5 (CURRENCY CONVERTER)---//
                    return;
                }
                if (element.id == 'som') {
                    usdInput.value = (element.value / data.usd).toFixed(2);
                    eurInput.value = (element.value / data.eur).toFixed(2);
                } else if (element.id == 'usd') {
                    somInput.value = (data.usd * element.value).toFixed(2);
                    eurInput.value = ((data.usd* element.value)/data.eur).toFixed(2);
                } else if (element.id == 'eur') {
                    somInput.value = (data.eur * element.value).toFixed(2);
                    usdInput.value = ((data.eur* element.value)/data.usd).toFixed(2);
                }
            } else {
                error.style.color = 'red';
                error.innerHTML = 'Произошла ошибка'
            }
        }
    })
}
converter(somInput);
converter(usdInput);
converter(eurInput);


//---ДЗ 6 (FETCH REQUESTS)---//
const card = document.querySelector('.card');
const btnNext = document.querySelector('#btn-next');
const btnPrev = document.querySelector('#btn-prev');

let cardId = 1;
const maxCardId = 200; 

const renderCard = () => {
    fetch(`https://jsonplaceholder.typicode.com/todos/${cardId}`)
    .then(response =>{
        if (response.status !== 200) {
            throw new Error('Произошла ошибка на сервере');
        }
        else {
            return response.json();
        }
    })
    .then(data => {
        const {id, title, completed} = data;
        const color = completed ? 'green' : 'red';
        card.style.borderColor = color;
        card.innerHTML = `
        <p>${id}</p>
        <p>${title}</p>
        <p>${completed ? 'Completed' : 'Not completed'}</p>
        `
    })
    .catch(error => {
        card.style.color = 'red';
        card.innerHTML = error.message;
    })
}
btnNext.onclick = () => {
    if (cardId < maxCardId) {
        cardId++;
        renderCard();
    } else if (cardId === maxCardId) {
        cardId = 1;
        renderCard();
    }
}

btnPrev.onclick = () => {
    if (cardId > 1) {
        cardId--;
        renderCard();
    } else if (cardId === 1) {
        cardId = maxCardId;
        renderCard();
    }
}

renderCard(cardId);

const fetchPosts = () => {
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => {
        if (response.status !== 200) {
            throw new Error('Произошла ошибка на сервере');
        }
        else {
            return response.json();
        }
    })
    .then(data => {
        console.log(data);
    })
    .catch(error => {
        console.error(error.message);
    })
}

fetchPosts();


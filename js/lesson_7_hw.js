const loading = document.querySelector('.loading');
const cardsBlock = document.querySelector('.cards_block');

const DEFAULT_IMAGE = 'https://i.pinimg.com/1200x/0c/65/cf/0c65cf7ead3f03678f60319ef3af8648.jpg';

const getPosts = async () => {
    try {
        loading.style.display = 'block';
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        data.forEach(post => {
            renderPost(post);
        });
        loading.style.display = 'none';
    } catch (error) {
        console.error('There was a problem with the fetch operation:', error);
    }
}


const renderPost = (post) => {
    const card = document.createElement('div');
    card.classList.add('card');

    card.innerHTML = `
        <div class="card_image">
            <img src="${DEFAULT_IMAGE}" alt="">
        </div>

        <h4 class="card_title">${post.title}</h4>

        <p class="card_description">${post.body}</p>
    `;

    const imageWrapper = card.querySelector('.card_image');
    const img = card.querySelector('img');

    img.onload = () => {
        imageWrapper.classList.add('loaded');
    };
    cardsBlock.append(card);
};

getPosts();


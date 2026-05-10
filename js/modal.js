const btnOpen = document.querySelector('#btn-get');
const modal = document.querySelector('.modal');
const btnClose = document.querySelector('.modal_close');

const showModal = () => {
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
}
const closeModal = () => {
    modal.style.display = 'none'
    document.body.style.overflow = '';
}

modal.onclick = (event) =>{
    if (event.target == modal){
        closeModal()
    }
}

btnOpen.onclick = showModal;
btnClose.onclick = closeModal;

//---ДЗ 3.3 (TIMED MODAL)---//
// setTimeout(showModal, 10000);
// //---ДЗ 3.2 (SHOW MODAL AT PAGE BOOTOM)---//
// const showModalByScroll = () =>{
//     const scrollPosition=window.scrollY+window.innerHeight;
//     const pageHeight=document.documentElement.scrollHeight;

//     if (scrollPosition>=pageHeight-5){
//         showModal();

//         window.removeEventListener('scroll', showModalByScroll)
//     }
// };

// window.addEventListener('scroll', showModalByScroll);
const tabBlocks = document.querySelectorAll('.tab_content_block');
const tabs = document.querySelectorAll('.tab_content_item');
const tabsParent = document.querySelector('.tab_content_items');


let currentIndex=0; //---ДЗ 3.1 (INFINITE SLIDER)---//

const selectTab = (index) =>{
    tabBlocks.forEach((item, i) => item.classList.toggle('active', index ===i ))
    tabs.forEach((item, i) => item.classList.toggle('active', index === i ))

    currentIndex=index;
}

tabsParent.onclick = (event) => {
    const selectedTab = event.target.closest('.tab_content_item')
    if (!selectedTab) return;

    const indexTab = [...tabs].indexOf(selectedTab);
    selectTab(indexTab);
}

setInterval(() => {
    let nextIndex=currentIndex+1;

    if (nextIndex>=tabs.length){
        nextIndex=0;
    }

    selectTab(nextIndex);
}, 5000);
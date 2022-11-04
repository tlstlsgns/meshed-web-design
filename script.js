const main_box = document.querySelector('div.main_box');
const menu_bar = document.querySelector('div.menu_bar');
const viewer_box = document.querySelector('div.view_box');
const menu_box = document.querySelector('div.menu_box');

const chat_header = document.querySelector('div.chat_header');
const chat_updn = document.querySelector('.chat_title #pointer');

if (document.fullscreenElement) {
    document.querySelector('button i').style.display = 'none';
}

viewer_box.addEventListener('dblclick', () => {
    if (!document.fullscreenElement) {
        main_box.requestFullscreen();
    } else {
        document.exitFullscreen();
    }
});

menu_bar.addEventListener('click', (event) => {
    if (menu_box.style.display === 'flex'){
        menu_box.style.display = 'none';
    } else {
        menu_box.style.display = 'flex';
    }
});

chat_updn.addEventListener('click', () => {
    if (document.querySelector('.chat_box').style.height === '1.5rem') {
    
        document.querySelector('.chat_box').style.height='28rem';
        chat_updn.style.transform ="rotate(180deg)";
    } else {
        document.querySelector('.chat_box').style.height='1.5rem';
        chat_updn.style.transform ="rotate(0deg)";
    }
});

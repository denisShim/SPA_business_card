const nav = document.querySelector('#nav');
const navBtn = document.querySelector('#nav-btn');
const navBtnImg = document.querySelector('#nav-btn-img');
const navList = document.querySelector('.nav-list');

navBtn.onclick = () => {
    if (nav.classList.toggle('open')) {
        navBtnImg.src = "./src/nav-close.svg";
    } else {
        navBtnImg.src = './src/nav-open.svg';
    }
}

navList.onclick = function(event) {
    let target = event.target;
    if(target.tagName != 'A') return;
    nav.classList.remove('open');
    navBtnImg.src = './src/nav-open.svg';
}

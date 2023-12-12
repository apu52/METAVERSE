const navitems=document.querySelector('.nav__items');
const openNavBtn=document.querySelector('#open__nav-btn');
const closeNavBtn=document.querySelector('#close__nav-btn');

// opens nav menu
const openNav=()=>{
    navitems.style.display='flex';
    openNavBtn.style.display='none';
    openNavBtn.style.zIndex='60';
    closeNavBtn.style.display='inline-block';
}
// close nav menu
const closeNav=()=>{
    navitems.style.display='none';
    openNavBtn.style.display='inline-block';
    closeNavBtn.style.display='none';
}

openNavBtn.addEventListener('click', openNav);
closeNavBtn.addEventListener('click', closeNav);
const menu_btn = document.querySelector('.hamburger');
const menu_down = document.querySelector('.homebar');

menu_btn.addEventListener('click', function(){
    menu_btn.classList.toggle('active');
    menu_down.classList.toggle('active')
});
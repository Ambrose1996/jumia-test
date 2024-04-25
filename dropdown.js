
const dropdowns = document.querySelectorAll('.dropdown');

dropdowns.forEach(dropdown =>{
    const select = dropdown.querySelector('.select');
    const arrow = dropdown.querySelector('.arrow');
    const menu = dropdown.querySelector('.menu');
    const options = dropdown.querySelectorAll('.menu li');

    select.addEventListener('click', () =>{
        select.classList.toggle('select-clicked');
        arrow.classList.toggle('arrow-rotate');
        menu.classList.toggle('menu-open');
    });
    options.forEach(options => {
        options.addEventListener('click', () => {
            selected.innerText = option.innerText;
            select.classList.remove('select-clicked');
            arrow.classList.remove('arrow-rotate');
            menu.classList.remove('menu-open');

            option.forEach(option => {
                option.classList.remove('active');
            });
            option.classlist.add('active');
        });
    });
});
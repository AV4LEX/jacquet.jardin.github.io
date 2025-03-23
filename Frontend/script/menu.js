document.querySelector('.burger-menu').addEventListener('click', function() {
    const menu = document.querySelector('.sticky-menu ul');
    menu.classList.toggle('visible');
});

document.querySelectorAll('.sticky-menu li').forEach(item => {
    item.addEventListener('click', function() {
        const menu = document.querySelector('.sticky-menu ul');
        menu.classList.remove('visible');
    });
});
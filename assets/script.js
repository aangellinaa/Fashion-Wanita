document.addEventListener('DOMContentLoaded', () => {
    const dropdownToggle = document.querySelector('.dropdown-toggle');
    const dropdownMenu = document.querySelector('.dropdown-menu');

    dropdownToggle.addEventListener('click', (e) => {
        e.preventDefault();
        dropdownMenu.style.display = dropdownMenu.style.display === 'block' ? 'none' : 'block';
    });

    document.addEventListener('click', (e) => {
        if (!e.target.closest('.dropdown')) {
            dropdownMenu.style.display = 'none';
        }
    });

    const selectModelButtons = document.querySelectorAll('.select-model-btn');
    selectModelButtons.forEach((button) => {
        button.addEventListener('click', () => {
            alert('Happy Shopping');
        });
    });

    const aboutLink = document.querySelector('.about-link');
    aboutLink.addEventListener('click', (e) => {
        e.preventDefault(); 
        alert('Kami Menyediakan Fashion Comelita');
    });
});

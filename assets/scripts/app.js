'use strict';

const openPage = document.querySelector('.open');
const overlay = document.querySelector('.overlay')
const close = document.querySelector('.x')

openPage.addEventListener('click', () => {
    overlay.style.display = 'grid'
})

close.addEventListener('click', () => {
    overlay.style.display = 'none'
})
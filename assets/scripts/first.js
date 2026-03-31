'use strict';

const openPage = document.querySelector('.open');
const overlay = document.querySelector('.overlay');
const close = document.querySelector('.x');
const input = document.querySelectorAll('input');
const signIn = document.querySelector('.submit-btn')

openPage.addEventListener('click', () => {
    overlay.style.display = 'grid'
});

close.addEventListener('click', () => {
    overlay.style.display = 'none';
    input.forEach(input => input.value = '');
});


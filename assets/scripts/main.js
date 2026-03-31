'use strict';

const openCart = document.querySelector('.cart-icon');
const overLay = document.querySelector('.overlay');
const cartBody = document.querySelector('.cart');

// Buttons
const blackTee = document.querySelector('#black-tee');
const blackJeans = document.querySelector('#black-jeans');
const greyHoodie = document.querySelector('#grey-hoodie');
const greySweats = document.getElementById('grey-sweats');
const blackHoodie = document.getElementById('black-hoodie');
const blueHoodie = document.getElementById('blue-hoodie');
const blackSweats = document.getElementById('black-sweats');
const stoneWash = document.getElementById('stone-jeans');


openCart.addEventListener('click', () => {
    overLay.style.display = 'flex'
})

overLay.addEventListener('click', (a) => {
    if (a.target === cartBody) return; 
    else {
    overLay.style.display = 'none';
    }
})

// Cart functions

blackTee.addEventListener('click', () => {
    const cartItem = document.createElement('div');
    cartItem.classList.add('carted');
    const blackTeeQuantity = document.querySelector('#quantity-1').value
    cartItem.innerHTML = `
    <img src="./assets/media/black-shirt.jpg" class="selected-img">
    <div class="order">
        <p class="order-txt">URBAN FPI BLACK TEE</p>
        <p class="order-txt">Quantity: ${blackTeeQuantity}</p>
        <p class="order-txt">Price: $${(blackTeeQuantity * 40.86).toFixed(2)}</p>
    </div>`
    cartBody.appendChild(cartItem)
});


blackJeans.addEventListener('click', () => {
    const cartItem = document.createElement('div');
    cartItem.classList.add('carted');

    const blackJeansQuantity = document.querySelector('#quantity-3').value

    cartItem.innerHTML = `
    <img src="./assets/media/black-raw-denim Background Removed.png" class="selected-img">
    <div class="order">
        <p class="order-txt">URBAN FPI RAW DENIM BLACK JEANS</p>
        <p class="order-txt">Quantity: ${blackJeansQuantity}</p>
        <p class="order-txt">Price: $${(blackJeansQuantity * 80.42).toFixed(2)}</p>
    </div>`
    cartBody.appendChild(cartItem)
});


greyHoodie.addEventListener('click', () => {
    const cartItem = document.createElement('div');
    cartItem.classList.add('carted');

    const greyHoodieQuantity = document.querySelector('#quantity-2').value

    cartItem.innerHTML = `
    <img src="./assets/media/grey_h Background Removed.png" class="selected-img">
    <div class="order">
        <p class="order-txt">URBAN FPI GREY HOODIE</p>
        <p class="order-txt">Quantity: ${greyHoodieQuantity}</p>
        <p class="order-txt">Price: $${(greyHoodieQuantity * 70.14).toFixed(2)}</p>
    </div>`
    cartBody.appendChild(cartItem)
});


greySweats.addEventListener('click', () => {
    const cartItem = document.createElement('div');
    cartItem.classList.add('carted');

    const greySweatsQuantity = document.querySelector('#quantity-4').value

    cartItem.innerHTML = `
    <img src="./assets/media/grey-sweats.jpg?v=2" class="selected-img">
    <div class="order">
        <p class="order-txt">URBAN FPI GREY BAGGY SWEATPANTS</p>
        <p class="order-txt">Quantity: ${greySweatsQuantity}</p>
        <p class="order-txt">Price: $${(greySweatsQuantity * 60.23).toFixed(2)}</p>
    </div>`
    cartBody.appendChild(cartItem)
});


blackHoodie.addEventListener('click', () => {
    const cartItem = document.createElement('div');
    cartItem.classList.add('carted');

    const blackHoodieQuantity = document.querySelector('#quantity-5').value

    cartItem.innerHTML = `
    <img src="./assets/media/black-hoodie Background Removed.png" class="selected-img">
    <div class="order">
        <p class="order-txt">URBAN FPI BLACK HOODIE</p>
        <p class="order-txt">Quantity: ${blackHoodieQuantity}</p>
        <p class="order-txt">Price: $${(blackHoodieQuantity * 74.14).toFixed(2)}</p>
    </div>`
    cartBody.appendChild(cartItem)
});


blueHoodie.addEventListener('click', () => {
    const cartItem = document.createElement('div');
    cartItem.classList.add('carted');

    const blueHoodieQuantity = document.querySelector('#quantity-6').value

    cartItem.innerHTML = `
    <img src="./assets/media/blue-hoodie Background Removed.png" class="selected-img">
    <div class="order">
        <p class="order-txt">URBAN FPI BLUE BOXY HOODIE</p>
        <p class="order-txt">Quantity: ${blueHoodieQuantity}</p>
        <p class="order-txt">Price: $${(blueHoodieQuantity * 67.23).toFixed(2)}</p>
    </div>`
    cartBody.appendChild(cartItem)
});


blackSweats.addEventListener('click', () => {
    const cartItem = document.createElement('div');
    cartItem.classList.add('carted');

    const blackSweatsQuantity = document.querySelector('#quantity-7').value

    cartItem.innerHTML = `
    <img src="./assets/media/black-sweats Background Removed.png" class="selected-img">
    <div class="order">
        <p class="order-txt">URBAN FPI BAGGY BLACK SWEATPANTS</p>
        <p class="order-txt">Quantity: ${blackSweatsQuantity}</p>
        <p class="order-txt">Price: $${(blackSweatsQuantity * 40.86).toFixed(2)}</p>
    </div>`
    cartBody.appendChild(cartItem)
});


stoneWash.addEventListener('click', () => {
    const cartItem = document.createElement('div');
    cartItem.classList.add('carted');

    const stoneWashQuantity = document.querySelector('#quantity-8').value

    cartItem.innerHTML = `
    <img src="./assets/media/black-jeans Background Removed.png?v=2" class="selected-img">
    <div class="order">
        <p class="order-txt">URBAN FPI STONE WASH BLACK JEANS</p>
        <p class="order-txt">Quantity: ${stoneWashQuantity}</p>
        <p class="order-txt">Price: $${(stoneWashQuantity * 80.42).toFixed(2)}</p>
    </div>`
    cartBody.appendChild(cartItem)
});

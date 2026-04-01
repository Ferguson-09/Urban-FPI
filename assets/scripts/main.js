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
const blackQz = document.getElementById('black-qz');
const beigeHoodie = document.getElementById('beige-hoodie');
const beigePants = document.getElementById('beige-pants');
const beigeCargo = document.getElementById('cargopants');
const plaidShirt = document.getElementById('plaid-shirt');
const whiteSweater = document.getElementById('white-sweater');
const greenCargo = document.getElementById('green-cargo');
const blackDress = document.getElementById('black-trousers');


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
    <img src="./assets/media/blue-hoodie Background Removed.png" class="selected-img blue">
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

blackQz.addEventListener('click', () => {
    const cartItem = document.createElement('div');
    cartItem.classList.add('carted');

    const blackQzQuantity = document.querySelector('#quantity-9').value

    cartItem.innerHTML = `
    <img src="./assets/media/zipped-black-sweatshirt-01.jpg" class="selected-img">
    <div class="order">
        <p class="order-txt">URBAN FPI BLACK QUARTER-ZIP</p>
        <p class="order-txt">Quantity: ${blackQzQuantity}</p>
        <p class="order-txt">Price: $${(blackQzQuantity * 50.75).toFixed(2)}</p>
    </div>`
    cartBody.appendChild(cartItem)
});

beigeHoodie.addEventListener('click', () => {
    const cartItem = document.createElement('div');
    cartItem.classList.add('carted');

    const beigeHoodieQuantity = document.querySelector('#quantity-10').value

    cartItem.innerHTML = `
    <img src="./assets/media/hoodie-02.jpg" class="selected-img">
    <div class="order">
        <p class="order-txt">URBAN FPI BEIGE HOODIE</p>
        <p class="order-txt">Quantity: ${beigeHoodieQuantity}</p>
        <p class="order-txt">Price: $${(beigeHoodieQuantity * 75.55).toFixed(2)}</p>
    </div>`
    cartBody.appendChild(cartItem)
});


beigePants.addEventListener('click', () => {
    const cartItem = document.createElement('div');
    cartItem.classList.add('carted');

    const beigePantsQuantity = document.querySelector('#quantity-11').value

    cartItem.innerHTML = `
    <img src="./assets/media/beige-pants-01.jpg" class="selected-img">
    <div class="order">
        <p class="order-txt">URBAN FPI BEIGE PANTS</p>
        <p class="order-txt">Quantity: ${beigePantsQuantity}</p>
        <p class="order-txt">Price: $${(beigePantsQuantity * 60.45).toFixed(2)}</p>
    </div>`
    cartBody.appendChild(cartItem)
});


beigeCargo.addEventListener('click', () => {
    const cartItem = document.createElement('div');
    cartItem.classList.add('carted');

    const beigeCargoQuantity = document.querySelector('#quantity-12').value

    cartItem.innerHTML = `
    <img src="./assets/media/cargopants-02 Background Removed.png" class="selected-img">
    <div class="order">
        <p class="order-txt">URBAN FPI BEIGE CARGOPANTS</p>
        <p class="order-txt">Quantity: ${beigeCargoQuantity}</p>
        <p class="order-txt">Price: $${(beigeCargoQuantity * 60.25).toFixed(2)}</p>
    </div>`
    cartBody.appendChild(cartItem)
});

plaidShirt.addEventListener('click', () => {
    const cartItem = document.createElement('div');
    cartItem.classList.add('carted');

    const plaidShirtQuantity = document.querySelector('#quantity-13').value

    cartItem.innerHTML = `
    <img src="./assets/media/plaid-shirt-03.jpg" class="selected-img">
    <div class="order">
        <p class="order-txt">URBAN FPI PLAID SHIRT</p>
        <p class="order-txt">Quantity: ${plaidShirtQuantity}</p>
        <p class="order-txt">Price: $${(plaidShirtQuantity * 45.85).toFixed(2)}</p>
    </div>`
    cartBody.appendChild(cartItem)
});


whiteSweater.addEventListener('click', () => {
    const cartItem = document.createElement('div');
    cartItem.classList.add('carted');

    const whiteSweaterQuantity = document.querySelector('#quantity-14').value

    cartItem.innerHTML = `
    <img src="./assets/media/Cable Knit Crew Neck Sweater.jpg" class="selected-img">
    <div class="order">
        <p class="order-txt">URBAN FPI WHITE SWEATER</p>
        <p class="order-txt">Quantity: ${whiteSweaterQuantity}</p>
        <p class="order-txt">Price: $${(whiteSweaterQuantity * 65.80).toFixed(2)}</p>
    </div>`
    cartBody.appendChild(cartItem)
});


greenCargo.addEventListener('click', () => {
    const cartItem = document.createElement('div');
    cartItem.classList.add('carted');

    const greenCargoQuantity = document.querySelector('#quantity-15').value

    cartItem.innerHTML = `
    <img src="./assets/media/green-cargo-03 Background Removed.png" class="selected-img">
    <div class="order">
        <p class="order-txt">URBAN FPI BAGGY GREEN CARGOPANTS</p>
        <p class="order-txt">Quantity: ${greenCargoQuantity}</p>
        <p class="order-txt">Price: $${(greenCargoQuantity * 60.85).toFixed(2)}</p>
    </div>`
    cartBody.appendChild(cartItem)
});


blackDress.addEventListener('click', () => {
    const cartItem = document.createElement('div');
    cartItem.classList.add('carted');

    const blackDressQuantity = document.querySelector('#quantity-15').value

    cartItem.innerHTML = `
    <img src="./assets/media/black-dress-pants.jpg" class="selected-img">
    <div class="order">
        <p class="order-txt">URBAN FPI BLACK DRESS PANTS</p>
        <p class="order-txt">Quantity: ${blackDressQuantity}</p>
        <p class="order-txt">Price: $${(blackDressQuantity * 75.45).toFixed(2)}</p>
    </div>`
    cartBody.appendChild(cartItem)
});




const cartBtn = document.getElementById('cartBtn');
const modalContainer = document.querySelector('.modal-container');
const closeBtn = document.querySelector('.close-btn');
const totalValue = document.querySelector('.total-value');


cartBtn.addEventListener('click', () => {
  modalContainer.classList.add('show');
});

  closeBtn.addEventListener('click', () => {
  modalContainer.classList.remove('show');
});

//Añadir al carrito
const addToCartBtns = document.querySelectorAll('.add-to-cart-btn');
const cartItemsContainer = document.querySelector('.cart-items');

let totalPrice = 0;

addToCartBtns.forEach(addToCartBtn => {
  addToCartBtn.addEventListener('click', () => {
    const product = addToCartBtn.parentNode;
    const productTitle = product.querySelector('h3').textContent;
    const productPrice = product.querySelector('.menu-item-price').textContent;
    const productImage = product.querySelector('.image').src;

    const cartItem = document.createElement('div');
    cartItem.classList.add('cart-item');
    cartItem.innerHTML = `
      <img src="${productImage}" alt="${productTitle}">
      <span>${productTitle}</span>
      <span>${productPrice}</span>
      <button class="remove-btn">&times;</button>
    `;
    
    cartItemsContainer.appendChild(cartItem);
    
    //Borrar del carrito
    const removeBtns = cartItem.querySelectorAll('.remove-btn');

    removeBtns.forEach(removeBtn => {
      removeBtn.addEventListener('click', () => {
        const cartItem = removeBtn.parentNode;
        cartItem.remove();

        totalPrice -= parseFloat(productPrice.substring(1));
        totalValue.textContent = `$${totalPrice.toFixed(2)}`;
      });
    });

    totalPrice += parseFloat(productPrice.substring(1));
    totalValue.textContent = `$${totalPrice.toFixed(2)}`;
  });
});
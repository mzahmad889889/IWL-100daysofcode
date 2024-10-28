const buttons = document.querySelectorAll('.button')

const Div = document.createElement('div')
Div.className = 'cartDetail'
Div.id = 'products'

buttons.forEach(function(button){
    button.addEventListener('click', function(){
    const productElement = button.closest('.product'); 
    const title = productElement.getAttribute('data-title');
    const price = productElement.getAttribute('data-price');
    const image = productElement.getAttribute('data-image');
    // Create a product object
    const product = { title, price, image };

    // Get the existing cart from localStorage
    let cart = JSON.parse(localStorage.getItem('cart')) || [];

    // Add the product to the cart
    cart.push(product);

    // Save the updated cart to localStorage
    localStorage.setItem('cart', JSON.stringify(cart));

    updateCartQuantity();

    });
});
function updateCartQuantity() {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const cartQuantity = document.querySelector('.quantity');
    cartQuantity.textContent = cart.length; // Update the cart quantity count
}
updateCartQuantity();

// Select all product boxes
const productBoxes = document.querySelectorAll('.box-content');

// Select the cart element
const cartNav = document.querySelector('.nav-cart');
let cartCount = 0;

// Function to update cart display
const updateCartDisplay = () => {
    cartNav.innerHTML = `<i class="fa-solid fa-cart-shopping"></i> Cart (${cartCount})`;
};

// Add "Add to Cart" buttons to each product
productBoxes.forEach((box) => {
    // Create button
    const btn = document.createElement('button');
    btn.innerText = 'Add to Cart';
    btn.className = 'add-to-cart-btn';

    // Style the button (or you could add this to CSS)
    Object.assign(btn.style, {
        backgroundColor: '#ffd814',
        border: '1px solid #fcd200',
        borderRadius: '20px',
        padding: '5px 15px',
        cursor: 'pointer',
        marginTop: '10px',
        fontWeight: 'bold',
        width: '100%',
        marginBottom: '10px'
    });

    // Add click event
    btn.addEventListener('click', (e) => {
        // Stop propagation if necessary, though it is outside the anchor tag usually
        e.stopPropagation();
        cartCount++;
        updateCartDisplay();
        alert('Item added to cart!');
    });

    // Append button to the box content
    box.appendChild(btn);
});

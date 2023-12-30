import  {products,newArrivals}  from "./mockdata.js";

const productsList = document.getElementById('products-list');
const newArrivalsList = document.getElementById('new-arrivals-list');
const cartList = document.getElementById('cart-list');

{/* <div class="product">
                <img class="product-img" src="./img/products/f9.webp" alt="producto de la tienda">
                <div class="description">
                    <span>adidas</span>
                    <h5>Cartoon Astronaut T-Shirts</h5>
                    <div class="stars">
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                    </div>
                    <h4>$78</h4>
                    <div class="btn btn-cart">
                        <a href="#"><i class="fas fa-shopping-cart"></i></a>
                        <p>Add to the cart</p>
                    </div>
                </div>
            </div> */}

const createProduct = (product) => {
    const productElement = document.createElement('div');
    productElement.classList.add('product');
    productElement.innerHTML = `
        <img class="product-img" src="${product.image}" alt="producto de la tienda">
        <div class="description">
            <span>${product?.brand || ' '}</span>
            <h5>${product.name}</h5>
            <div class="stars">
                ${product.stars}
            </div>
            <h4>$${product.price}</h4>
            <div class="btn btn-cart">
                <a href="#"><i class="fas fa-shopping-cart"></i></a>
                <p>Add to the cart</p>
            </div>
        </div>
    `;
    return productElement;
}
for (const product of products) {
    const productElement = createProduct(product);
    productsList.appendChild(productElement);
}

const createNewArrival = (product) => {
    const productElement = document.createElement('div');
    productElement.classList.add('product');
    productElement.innerHTML = `
        <img class="product-img" src="${product.image}" alt="producto de la tienda">
        <div class="description">
            <span>${product?.brand || ' '}</span>
            <h5>${product.name}</h5>
            <div class="stars">
                ${product.stars}
            </div>
            <h4>$${product.price}</h4>
            <div class="btn btn-cart">
                <a href="#"><i class="fas fa-shopping-cart"></i></a>
                <p>Add to the cart</p>
            </div>
        </div>
    `;
    return productElement;
}

for (const product of newArrivals) {
    const productElement = createNewArrival(product);
    newArrivalsList.appendChild(productElement);
}

const iconBurger = document.getElementById('icon-burger');
const menu = document.getElementById('menu-links');
iconBurger.addEventListener('click', () => {
    menu.classList.toggle('show');
    iconBurger.classList.toggle('show');
})
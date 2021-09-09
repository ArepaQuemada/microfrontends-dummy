import faker from "faker";

let products = '';

for (let i = 0 ; i < 3; i ++) {
    products += `<div>${faker.commerce.productName()}</div>`
}

const mount = (el) => {
    el.innerHTML = products
}

const productsDev = document.querySelector('#dev-products')

if (productsDev) {
    mount(productsDev)
}

export { mount }
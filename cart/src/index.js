const template = `
    <div>You have ${(Math.floor(Math.random() * 10 + 1))} items in your cart</div>
`

const mount = (el) => {
    el.innerHTML = template
}

const cartDev = document.querySelector('#dev-cart')

if (cartDev) {
    mount(cartDev)
}

export { mount }
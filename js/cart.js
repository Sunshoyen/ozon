const cart = () => {
    const cartBtn = document.getElementById('cart')
    const cartModal = document.querySelector('.cart')
    const cartClosedBtn = cartModal.querySelector('.cart-close')

    const openCart = () => {
        cartModal.style.display = 'flex'
    }

    const closeCart = () => {
        cartModal.style.display = ''
    }

    cartBtn.addEventListener('click', openCart)
    cartClosedBtn.addEventListener('click', closeCart)

}

cart()
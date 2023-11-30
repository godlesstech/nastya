function toggleCartStatus() {
    

    const cartWrapper = document.querySelector('.cart-wrapper');
    const cartEmptyBadge = document.querySelector('[data-cart-empty]');
    

    const oderForm = document.querySelector('#order-form');
    // console.log(oderForm);
 

    if(cartWrapper.children.length > 0){
        cartEmptyBadge.classList.add('none');
        oderForm.classList.remove('none');
    }else {
        console.log('empty');
        cartEmptyBadge.classList.remove('none');
        oderForm.classList.add('none');
    }
}
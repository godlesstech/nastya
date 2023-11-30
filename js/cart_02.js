
window.addEventListener('click', function(event){

    const cartWrapper = document.querySelector('.cart-wrapper');

    if(event.target.hasAttribute('data-cart')){
        const card = event.target.closest('.card');
        // console.log(card);
        // console.log(event.target.closest('.card'));
        // console.log(event.target.closest('.card').dataset.id);
        // console.log(card.dataset.id);
        // console.log(+card.querySelector('[data-counter]').textContent);

        const productInfo = {
            id : card.dataset.id,
            imgScr : card.querySelector('.product-img').src,
            title : card.querySelector('.item-title').textContent,
            items : card.querySelector('[data-items-in-box]').textContent,
            price : card.querySelector('.price__currency').textContent,
            weigth : card.querySelector('.price__weight').textContent,
            counter : card.querySelector('[data-counter]').textContent,
        }
        
        //we chak do we have already had this item in catr or nor with id
        const itemInCart = cartWrapper.querySelector(`[data-id="${productInfo.id}"]`);

        // console.log(itemInCart);

        if(itemInCart){
           const counterElement = itemInCart.querySelector('[data-counter]');
            counterElement.innerText = parseInt(counterElement.innerText) + parseInt(productInfo.counter);
            
        }
        else {
                const cartItenHTML = `<div class="cart-item" data-id="${productInfo.id}">
                <div class="cart-item__top">
                    <div class="cart-item__img">
                        <img src="${productInfo.imgScr}" alt="${productInfo.items}">
                    </div>
                    <div class="cart-item__desc">
                        <div class="cart-item__title">${productInfo.title}</div>
                        <div class="cart-item__weight">${productInfo.items} / ${productInfo.weigth}</div>

                        <!-- cart-item__details -->
                        <div class="cart-item__details">

                            <div class="items items--small counter-wrapper">
                                <div class="items__control" data-action="minus">-</div>
                                <div class="items__current" data-counter="">${productInfo.counter}</div>
                                <div class="items__control" data-action="plus">+</div>
                            </div>

                            <div class="price">
                                <div class="price__currency">${productInfo.price}</div>
                            </div>

                        </div>
                        <!-- // cart-item__details -->

                    </div>
                </div>
            </div>`;

         
        cartWrapper.insertAdjacentHTML('beforeend', cartItenHTML);

        
        }

        //cbrasywaem sczetcik na 1
        card.querySelector('[data-counter]').textContent = 1;

        //otobrazenije statusa korziny
        toggleCartStatus();
        calcCartPriceAndDelivery()
        
    
    }
});
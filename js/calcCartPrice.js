

function calcCartPriceAndDelivery() {
    const cartItems = document.querySelectorAll('.cart-item');
    let totalPrice = 0;
    const totalPriceEl = document.querySelector('.total-price');
    const deliveryCost = document.querySelector('.delivery-cost');
    const cartDelivery = document.querySelector('[data-cart-delivery]');
    const diference = document.querySelector('[data-delevery-price-diferens]');
    let diferencePrice;
    const dataTextDiference = document.querySelector('[data-delivery-price-diferencs-infotext]');
    const dataPriceOderInfo = document.querySelector('[data-price-oder-info]');
    


    cartItems.forEach(function (item) {
        const amountEl = item.querySelector('[data-counter]').textContent;
        const priceEl = item.querySelector('.price__currency').textContent;

        const currentPrice = parseInt(amountEl) * parseInt(priceEl);
        // console.log(currentPrice);
        totalPrice = totalPrice + currentPrice;
        


    })
    console.log(totalPrice);
    totalPriceEl.textContent = totalPrice;

    let result = 600 - totalPrice;
    if(totalPrice > 0){
        cartDelivery.classList.remove('none');
        if(result >= 0 && result <= 600){
            
            diference.textContent = result;
        }else {
        dataTextDiference.classList.add('none');
        dataPriceOderInfo.classList.add('none');
        }
    }

    if( totalPrice >= 600){
        deliveryCost.classList.add('free');
        deliveryCost.textContent = 'FREE';
    } else {
        deliveryCost.classList.remove('free');
        deliveryCost.textContent = '250 P';
    }
}





//again

// function calcCartPriceAndDelivery() {
//     const cartItem = document.querySelectorAll('.cart-item');
//     const outTotalPrice = document.querySelector('.total-price');
//     let totalPrice = 0;

//     cartItem.forEach(function (item) {
//         // console.log(item);

//         const currencyPrice = item.querySelector('.price__currency').textContent;
//         const currencyCounter = item.querySelector('[data-counter]').textContent;
        
//         const currencyTotalPrice = parseInt(currencyPrice) * parseInt(currencyCounter);
        
//         totalPrice = totalPrice + currencyTotalPrice;
//     });

    
//     outTotalPrice.textContent = totalPrice;
//     // console.log(totalPrice);
// }
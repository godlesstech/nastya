// window.addEventListener('click', function(event) {
//     // console.log('click window');
//     // console.log(event.target);
//     // console.log(event.target.dataset.action)
//     let counter;

//     if(event.target.dataset.action === 'plus' || event.target.dataset.action === 'minus'){

//     const counterWrapper = event.target.closest('.counter-wrapper');
//     counter = counterWrapper.querySelector('[data-counter]');
//     }

//     if(event.target.dataset.action === 'plus'){
        
//         counter.innerText = ++counter.innerText;
//     }

//     if(event.target.dataset.action === 'minus'){
//         if(parseInt(counter.innerText) > 1){
//             counter.innerText = --counter.innerText;
//         }
//     }
    
// });


//again all
// console.time('str')
// const btnsMinus = document.querySelectorAll('[data-action="minus"]');
// const btnsPlus = document.querySelectorAll('[data-action="plus"]');
// const counters = document.querySelectorAll('[data-counter]');

// for(let i = 0; i < btnsPlus.length; i++){
//     btnsPlus[i].addEventListener('click', function(){
//         counters[i].innerText = ++counters[i].innerText; 
//     })
// }


// for(let i = 0; i < btnsMinus.length; i++){
//     btnsMinus[i].addEventListener('click', function(){
//         if(parseInt(counters[i].innerText) > 1){
//             counters[i].innerText = --counters[i].innerText;
//         } 
//     })
// }
// console.timeEnd('str')

// again event





window.addEventListener('click', function(event){
    let counter;
    if(event.target.dataset.action === 'plus' || event.target.dataset.action === 'minus'){
        const counterWrapper = event.target.closest('.counter-wrapper');
        counter = counterWrapper.querySelector('[data-counter]');
    }
    
    if(event.target.dataset.action === 'plus'){
        counter.innerText = ++counter.innerText;
        
    }

  

    if(event.target.dataset.action === 'minus'){
        if(parseInt(counter.innerText) > 1){
            counter.innerText = --counter.innerText;
            
        }
        else if (event.target.closest('.cart-wrapper') && parseInt(counter.innerText) === 1){
            event.target.closest('.cart-item').remove();
            // console.log('remove');
            toggleCartStatus();

            calcCartPriceAndDelivery()
            
        }
    } 

    if(event.target.hasAttribute('data-action') && event.target.closest('.cart-wrapper')){
        calcCartPriceAndDelivery()
    }

});
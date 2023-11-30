
// //find our elements on page
// const btnMinus = document.querySelector('[data-action="minus"]');
// const btnPlus = document.querySelector('[data-action="plus"]');
// const counter = document.querySelector('[data-counter]');


// // react on click btn minnus
// btnMinus.addEventListener('click', function(){
//     console.log('click minus');

//     //chack if our counter more than 1
//     if(parseInt(counter.innerText) > 1){
//         counter.innerText = --counter.innerHTML;
//     }
// });

// // react on click btn plus
// btnPlus.addEventListener('click', function(){
//     console.log('click plus');
//     counter.innerText = ++counter.innerText;

// });

const btnMinus = document.querySelector('[data-action="minus"]');
const btnPlus = document.querySelector('[data-action="plus"]');
const counter = document.querySelector('[data-counter]');
// const counterValue = 1;

btnPlus.addEventListener('click', function() {
    counter.textContent = ++counter.textContent;
    // counter.innerText = parseInt(counter.innerText) + counterValue;
    // console.log(+counter.innerText);
});



btnMinus.addEventListener('click', function() {
    if(+counter.innerText > 1){
        counter.innerText = --counter.innerText;
    }
})
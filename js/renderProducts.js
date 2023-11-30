const productsContainer = document.querySelector('#products-container');

async function getProducts() {
    const responce = await fetch('./js/product.json', {
        // method: "GET", // *GET, POST, PUT, DELETE, etc.
        mode: "no-cors", // no-cors, *cors, same-origin
        
        
        headers: {
          "Content-Type": "application/json",
        //   'Content-Type': 'application/x-www-form-urlencoded',
        },
        
    });
    console.log(responce);

    const productsArray = await responce.json();
    // const productsArray = await JSON.parse(responce);
    console.log(productsArray);

}

getProducts();

function renderProducts(productsArray) {
    productsArray.forEach(function (item) {
        console.log(item);
        const ptoductHTML = `<div class="col-md-6">
        <div class="card mb-4" data-id="01">
            <img class="product-img" src="img/roll/philadelphia.jpg" alt="">
            <div class="card-body text-center">
                <h4 class="item-title">Филадельфия хит ролл</h4>
                <p><small data-items-in-box class="text-muted">6 шт.</small></p>

                <div class="details-wrapper">
                    <div class="items counter-wrapper">
                        <div class="items__control" data-action="minus">-</div>
                        <div class="items__current" data-counter>1</div>
                        <div class="items__control" data-action="plus">+</div>
                    </div>

                    <div class="price">
                        <div class="price__weight">180г.</div>
                        <div class="price__currency">300 ₽</div>
                    </div>
                </div>

                <button data-cart type="button" class="btn btn-block btn-outline-warning">+ в корзину</button>

            </div>
        </div>
    </div>`;


    productsContainer.insertAdjacentHTML('beforeend', ptoductHTML);

    });
}

getProducts();
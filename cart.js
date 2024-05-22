document.addEventListener('DOMContentLoaded', () => {
    let iconCart = document.querySelector('.icon-cart');
    let closeCart = document.querySelector('#closeCart');
    let body = document.querySelector('body');
    let listCatHTML = document.querySelector('.listCat');

    let listCats = [];


    if (iconCart) {
        iconCart.addEventListener('click', () => {
            body.classList.toggle('showCart');
            console.log('Cart icon clicked');
        });
    } else {
        console.error('iconCart element not found');
    }

        if (closeCart) {
            closeCart.addEventListener('click', () => {
                body.classList.toggle('showCart');
                console.log('Close Cart button clicked');
            });
        } else {
            console.error('closeCart element not found');
        }
    });


    const initApp = () => {
        fetch('cats.json')
        .then(response => response.json())
        .then(data => {
            listCats = data;
            console.log(listCats);
            addDataToHTML();
        })

    }
    initApp();

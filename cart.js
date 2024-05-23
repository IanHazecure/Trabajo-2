document.addEventListener('DOMContentLoaded', () => {
    let iconCart = document.querySelector('.icon-cart');
    let closeCart = document.querySelector('#closeCart');
    let body = document.querySelector('body');
    let list = document.querySelector('.list');
    let listCard = document.querySelector('.listCard');

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


let products = [

    {
        "id": 1,
        "name": "Harry",
        "description": "Gets mad easily, likes Churus and very sleepy",
        "image": "https://www.vidavetcare.com/wp-content/uploads/sites/234/2022/04/mixed-breed-cat-breed-info.jpeg"
    
    },
    {
    
        "id": 2,
        "name": "Mr Big",
        "description": "Curious, playful and surly",
        "image": "https://images.pexels.com/photos/19902540/pexels-photo-19902540/free-photo-of-norwegian-forest-cat.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
    
    
    },
    {
    
        "id": 3,
        "name": "Oreo",
        "description": "Chill, quite and likes solarbeams",
        "image": "https://inaturalist-open-data.s3.amazonaws.com/photos/369973353/medium.jpg"
    
    
    },
    {
    
        "id": 4,
        "name": "Chip",
        "description": "Adorable, friendly and playful. He is deafs",
        "image": "https://inaturalist-open-data.s3.amazonaws.com/photos/369973353/medium.jpg"
    
    
    },
    {
    
        "id": 5,
        "name": "Tunita",
        "description": "Serial Meower, playful and early risers",
        "image": "https://inaturalist-open-data.s3.amazonaws.com/photos/369973353/medium.jpg"
    
    
    },
    {
    
        "id": 6,
        "name": "Susy",
        "description": "Sociable, sweet and relaxed",
        "image": "https://inaturalist-open-data.s3.amazonaws.com/photos/369973353/medium.jpg"
    
    
    },
    {
    
        "id": 7,
        "name": "Dorito",
        "description": "Restless, playful and very annoying",
        "image": "https://inaturalist-open-data.s3.amazonaws.com/photos/369973353/medium.jpg"
    
    
    },
    {
    
        "id": 8,
        "name": "Gumball",
        "description": "Sleepy, relaxed and very cute. Need a dedicated bed ",
        "image": "https://inaturalist-open-data.s3.amazonaws.com/photos/369973353/medium.jpg"
    
    
    },
    {
    
        "id": 9,
        "name": "Pucca",
        "description": "Insect hunter, energetic and playful ",
        "image": "https://inaturalist-open-data.s3.amazonaws.com/photos/369973353/medium.jpg"
    
    
    },
    {
    
        "id": 10,
        "name": "Cocada",
        "description": "Mysterious, curious and scary",
        "image": "https://inaturalist-open-data.s3.amazonaws.com/photos/369973353/medium.jpg"
    
    
    },
    {
    
        "id": 11,
        "name": "Bigotes",
        "description": "Round, generous and sociable",
        "image": "https://inaturalist-open-data.s3.amazonaws.com/photos/369973353/medium.jpg"
    
    
    },
    {
    
        "id": 12,
        "name": "Coliflor",
        "description": "Meowing, gluttonous, playful and affectionate ",
        "image": "https://inaturalist-open-data.s3.amazonaws.com/photos/369973353/medium.jpg"
    
    
    }
    ];

    let ListCards = [];
    function initApp(){
        products.forEach((value, key)=>{
            let newDiv = document.createElement('div');
            newDiv.innerHTML = `
            <img src="${value.image}"/>
            <div class="name">${value.name}</div>
            <div class="description">${value.description}</div>
            <button onclick="addToCart(${value.id})">Add to Cart</button>
            `;
        })

    }
    initApp();
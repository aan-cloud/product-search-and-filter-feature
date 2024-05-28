let produk = {
    data: [{
        productName: 'apple watch',
        price: 30,
        category: 'watch',
        image: '/assets/smartwatch-screen-digital-device.jpg'
    }, {
        productName: 'under wear',
        price: 15,
        category: 'underwear',
        image: '/assets/underwear.jpg'
    }, {
        productName: 't-shirt',
        price: 45,
        category: 'upperwear',
        image: '/assets/tshirt-white.jpg'
    }, {
        productName: 'jacket',
        price: 45,
        category: 'jacket',
        image: '/assets/jacket.jpg'
    }]
};


for (let i of produk.data) {
    // create card
    let card = document.createElement('div');
    card.classList.add('card', i.category, 'hide');
    // create image 
    let imageContainer = document.createElement('div')
    imageContainer.classList.add('image-container')

    let image = document.createElement('img');
    image.setAttribute('src', i.image);

    document.querySelector('.product').appendChild(card);
    card.appendChild(imageContainer);
    imageContainer.appendChild(image);
    // create description
    let container = document.createElement('div');
    container.classList.add('container');
    card.appendChild(container)

    let header = document.createElement('h5');
    header.classList.add('product-name')
    header.innerText = i.productName;
    container.appendChild(header);

    let price = document.createElement('h5');
    price.classList.add('price')
    price.innerText = '$' + i.price;
    container.appendChild(price)

}

// function to hide or display product

function filterProduct (value) {
    // buttons select
    let buttons = document.querySelectorAll('.button-value');
    // loop
    buttons.forEach(button => {
        // if statement 
        if (value.toUpperCase() == button.innerText.toUpperCase()) {
            button.classList.add('active');
        } else {
            button.classList.remove('active');
        };
    });
    // elements
    let elements = document.querySelectorAll('.card');
    // loop 
    elements.forEach(element => {
        // check value ada pada element atau tidak
        if (value == 'all') {
            element.classList.remove('hide');
        } else {
            // jika value dari class kategori ada 
            // .contains(): Ini adalah metode pada objek classList yang memeriksa 
            // apakah kelas tertentu ada dalam daftar kelas.
            if (element.classList.contains(value)) {
                element.classList.remove('hide');
            } else {
                element.classList.add('hide')
            }
        }
    });

};

// Search 
document.getElementById('search').addEventListener('click', () => {
    // .value harus di panggil di dalam function
    let searchValue = document.getElementById('search-input').value;
    //elements dari nama produk
    let elements = document.querySelectorAll('.product-name');
    // element dari masing masing card
    let cards = document.querySelectorAll('.card')

    // loop 
    // index berfungsi untuk cek index
    // Index (Optional): This is the index (position) 
    // of the current element within the array (starting from 0). 
    // You can choose to include or omit this parameter in your callback function.
    elements.forEach((element,index) => {
        if (element.innerText.includes(searchValue)) {
            cards[index].classList.remove('hide');
        } else {
            cards[index].classList.add('hide');
        }
    });
})





window.onload = () => {
    filterProduct('all')
};
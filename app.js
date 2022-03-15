// Locl Items:
const menu = [
    {
        id: 1,
        title: 'buttermilk pancakes',
        category: "breakfast",
        price: 15.99,
        img: './images/menu-01.jpeg',
        desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed.`,
    },
    {
        id: 2,
        title: 'diner double',
        category: "lunch",
        price: 13.99,
        img: './images/menu-02.jpeg',
        desc: `vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats.`,
    },
    {
        id: 3,
        title: 'godzilla milkshake',
        category: "shakes",
        price: 6.99,
        img: './images/menu-03.jpeg',
        desc: `ombucha's chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.`,
    },
    {
        id: 4,
        title: 'Country Delight',
        category: "lunch",
        price: 19.99,
        img: './images/menu-04.jpeg',
        desc: `Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut.`,
    },
    {
        id: 5,
        title: 'egg attack',
        category: "breakfast",
        price: 17.99,
        img: './images/menu-05.jpeg',
        desc: `Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday.`,
    },
    {
        id: 6,
        title: 'oreo dream',
        category: "shakes",
        price: 8.99,
        img: './images/menu-06.jpeg',
        desc: `carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird.`,
    },
    {
        id: 7,
        title: 'burger classic',
        category: "lunch",
        price: 10.99,
        img: './images/menu-07.jpeg',
        desc: `on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaugk.`,
    },
    {
        id: 8,
        title: 'cheesecake overflow',
        category: "shakes",
        price: 22.99,
        img: './images/menu-08.jpeg',
        desc: `I'm jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird.`,
    },
    {
        id: 9,
        title: 'green salad',
        category: "lunch",
        price: 7.99,
        img: './images/menu-09.jpeg',
        desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
    },
    {
        id: 10,
        title: 'melted steak',
        category: "lunch",
        price: 29.99,
        img: './images/menu-10.jpeg',
        desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
    },
];

//seting varibels:
const sectionCenter = document.querySelector(".section-center-9");
const container = document.querySelector(".btn_container");

//start load the items
window.addEventListener("DOMContentLoaded", function () {
    displayMemuItem(menu);
    displayMemuButtons();
});

// main function for creating items
function displayMemuItem(menuItem) {
    //for craiting the items of food
    let displayMenu = menuItem.map(function (item) {
        return `<article class="menu-item">
        <img src=${item.img} class="food" alt=${item.title} />
        <div class="item-info">
        <header>
            <h4>${item.title}</h4>
            <h4 class="price">$${item.price}</h4>
        </header>
        <p class="item-text-9">
            ${item.desc}
        </p>
        </div>
    </article>`;
    });
    displayMenu = displayMenu.join("");
    sectionCenter.innerHTML = displayMenu;
}

// the second function for the buttons:
function displayMemuButtons() {
    const categories = menu.reduce(
        function (values, item) {
            //we want the oppiest
            if (!values.includes(item.category)) {
                values.push(item.category);//here for clicking and get the item;
            }
            return values;
        },
        ["all"]    
    );
    const categoryBtns = categories.map(
        function (category) {
            return `<button class="filter-btn" type="button" data-id=${category}>${category}</button>`;
        })
        .join("");
    container.innerHTML = categoryBtns;
    const filterBtns = container.querySelectorAll(".filter-btn");
    //filter items:
    filterBtns.forEach(function (btn) {
        btn.addEventListener("click", function (e) {
            const category = e.currentTarget.dataset.id;
            const menuCategory = menu.filter(function (menuItem) {
                if (menuItem.category === category) {
                    return menuItem;
                }
            });
            if (category === "all") {
                displayMemuItem(menu);
            } else {
                displayMemuItem(menuCategory);
            }
        });
    });
}
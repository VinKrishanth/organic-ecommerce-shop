const pathMain = '/organic-ecommerce-shop/';


const InfoItems  = [
    {
        Title: 'My Account',
        Pages: [
            {
                ID: 1,
                pageTitle: 'My Account',
                sourceURL: `${pathMain}my-account`,
            },
            {
                ID: 2,
                pageTitle: 'Order History',
                sourceURL: `${pathMain}my-account/order-history`,
            },
            {
                ID: 3,
                pageTitle: 'Shopping Car',
                sourceURL: `${pathMain}my-account/shopping-cart`,
            },
            {
                ID: 4,
                pageTitle: 'Wishlist',
                sourceURL: `${pathMain}my-account/wishlist`,
            },
        ]
    },
    {
        Title: 'Helps',
        Pages: [
            {
                ID: 1,
                pageTitle: 'Contact',
                sourceURL: `${pathMain}contact`,
            },
            {
                ID: 2,
                pageTitle: 'Faqs',
                sourceURL: `${pathMain}helps/faqs`,
            },
            {
                ID: 3,
                pageTitle: 'Teems & Condition',
                sourceURL: `${pathMain}helps/terms-and-condition`,
            },
            {
                ID: 4,
                pageTitle: 'Privacy Policy',
                sourceURL: `${pathMain}helps/privacy-policy`,
            },
        ]
    },
    {
        Title: 'Proxy',
        Pages: [
            {
                ID: 1,
                pageTitle: 'About',
                sourceURL: `${pathMain}about`,
            },
            {
                ID: 2,
                pageTitle: 'Shop',
                sourceURL: `${pathMain}shop`,
            },
            {
                ID: 3,
                pageTitle: 'Product',
                sourceURL: `${pathMain}product`,
            },
            {
                ID: 4,
                pageTitle: 'Track Order',
                sourceURL: `${pathMain}categories/track-order`,
            },
        ]
    },
    {
        Title: 'Categories',
        Pages: [
            {
                ID: 1,               
                pageTitle: 'Fruit & Vegetables',
                sourceURL: `${pathMain}fruit-vegetable`,
            },
            {
                ID: 2,
                pageTitle: 'Meat & Fish',
                sourceURL: `${pathMain}meat-and-fish`,
            },
            {
                ID: 3,
                pageTitle: 'Bread & Bakery',
                sourceURL: `${pathMain}bread-and-bakery`,
            },
            {
                ID: 4,
                pageTitle: 'Beauty & Health',
                sourceURL: `${pathMain}beauty-and-health`,
            },
        ]
    },
]

export default InfoItems
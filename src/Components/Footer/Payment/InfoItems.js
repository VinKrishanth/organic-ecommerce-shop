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
                ID: 5,
                pageTitle: 'Contact',
                sourceURL: `${pathMain}contact`,
            },
            {
                ID: 6,
                pageTitle: 'Faqs',
                sourceURL: `${pathMain}helps/faqs`,
            },
            {
                ID: 7,
                pageTitle: 'Teems & Condition',
                sourceURL: `${pathMain}helps/terms-and-condition`,
            },
            {
                ID: 8,
                pageTitle: 'Privacy Policy',
                sourceURL: `${pathMain}helps/privacy-policy`,
            },
        ]
    },
    {
        Title: 'Proxy',
        Pages: [
            {
                ID: 9,
                pageTitle: 'About',
                sourceURL: `${pathMain}about`,
            },
            {
                ID: 10,
                pageTitle: 'Shop',
                sourceURL: `${pathMain}shop`,
            },
            {
                ID: 11,
                pageTitle: 'Product',
                sourceURL: `${pathMain}product`,
            },
            {
                ID: 12,
                pageTitle: 'Track Order',
                sourceURL: `${pathMain}categories/track-order`,
            },
        ]
    },
    {
        Title: 'Categories',
        Pages: [
            {
                ID: 13,               
                pageTitle: 'Fruit & Vegetables',
                sourceURL: `${pathMain}fruit-vegetable`,
            },
            {
                ID: 14,
                pageTitle: 'Meat & Fish',
                sourceURL: `${pathMain}meat-and-fish`,
            },
            {
                ID: 15,
                pageTitle: 'Bread & Bakery',
                sourceURL: `${pathMain}bread-and-bakery`,
            },
            {
                ID: 16,
                pageTitle: 'Beauty & Health',
                sourceURL: `${pathMain}beauty-and-health`,
            },
        ]
    },
]

export default InfoItems
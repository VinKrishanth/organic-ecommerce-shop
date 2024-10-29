import productData from './productData';

const validProducts = [];

export const handleClickCard = (Price, cardTitle, cardSourceURL, productID) => {
    console.log(` ${Price} - ${cardTitle} - ${cardSourceURL} - ${productID}`);

    const product = productData.find(p => p.id === productID);

    if (Price && cardTitle && cardSourceURL && product) {
        validProducts.push(product);
        console.log('Product added:', product);
    } else {
        console.log('Invalid product data');
    }
};

export const handleClickSale = () => {
    console.log('Click sale');
};

export const handleClickWishlist = () => {
    console.log('Click wishlist');
};

export const handleClickQuickView = () => {
    console.log('Click Quick-view');
};

  
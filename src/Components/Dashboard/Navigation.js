import {
    dashboardHover, dashboardNormal,
    logoutHover, logoutNormal,
    orderHover, orderNormal, 
    settingHover, settingNormal,
    shoppingHover, shoppingNormal, 
    wishlistHover, wishlistNormal
} from '../../assets/Dashboard/index.js'

const nav = `/organic-ecommerce-shop/my-account`;
const Navigation = [
    {
        ID: 'navID1',
        sourceNormal: dashboardNormal,
        sourceHover: dashboardHover,
        sourceAlt: 'The Navigation Dashboard icon',
        NavigationName: 'Dashboard',
        NavigationURL: `${nav}`,
    },
    {
        ID: 'navID2',
        sourceNormal: orderNormal,
        sourceHover: orderHover,
        sourceAlt: 'The Navigation Dashboard icon',
        NavigationName: 'Order History',
        NavigationURL: `${nav}/order-history`,
    },
    {
        ID: 'navID3',
        sourceNormal: wishlistNormal,
        sourceHover: wishlistHover,
        sourceAlt: 'The Navigation Wishlist icon',
        NavigationName: 'Wishlist',
        NavigationURL: `${nav}/wishlist`,
    },
    {
        ID: 'navID4',
        sourceNormal: shoppingNormal,
        sourceHover: shoppingHover,
        sourceAlt: 'The Navigation Shopping Cart icon',
        NavigationName: 'Shopping Cart',
        NavigationURL: `${nav}/shopping-cart`,
    },
    {
        ID: 'navID5',
        sourceNormal: settingNormal,
        sourceHover: settingHover,
        sourceAlt: 'The Navigation Settings icon',
        NavigationName: 'Settings',
        NavigationURL: `${nav}/setting`,
    },
    {
        ID: 'navID6',
        sourceNormal: logoutNormal,
        sourceHover: logoutHover,
        sourceAlt: 'The Navigation Log-out icon',
        NavigationName: 'Log-out',
        NavigationURL: `/organic-ecommerce-shop/my-account/sign-in`,
    },
]

export default Navigation

import {
    dashboardHover, dashboardNormal,
    logoutHover, logoutNormal,
    orderHover, orderNormal, 
    settingHover, settingNormal,
    shoppingHover, shoppingNormal, 
    wishlistHover, wishlistNormal
} from '../../assets/Dashboard/index.js'

const Navigation = [
    {
        ID: 'navID1',
        sourceNormal: dashboardNormal,
        sourceHover: dashboardHover,
        sourceAlt: 'The Navigation Dashboard icon',
        NavigationName: 'Dashboard',
    },
    {
        ID: 'navID2',
        sourceNormal: orderNormal,
        sourceHover: orderHover,
        sourceAlt: 'The Navigation Dashboard icon',
        NavigationName: 'Order History',
    },
    {
        ID: 'navID3',
        sourceNormal: wishlistNormal,
        sourceHover: wishlistHover,
        sourceAlt: 'The Navigation Wishlist icon',
        NavigationName: 'Wishlist',
    },
    {
        ID: 'navID4',
        sourceNormal: shoppingNormal,
        sourceHover: shoppingHover,
        sourceAlt: 'The Navigation Shopping Cart icon',
        NavigationName: 'Shopping Cart',
    },
    {
        ID: 'navID5',
        sourceNormal: settingNormal,
        sourceHover: settingHover,
        sourceAlt: 'The Navigation Settings icon',
        NavigationName: 'Settings',
    },
    {
        ID: 'navID6',
        sourceNormal: logoutNormal,
        sourceHover: logoutHover,
        sourceAlt: 'The Navigation Log-out icon',
        NavigationName: 'Log-out',
    },
]

export default Navigation

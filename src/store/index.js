import { configureStore } from '@reduxjs/toolkit' 
import authSlice from '../reducer/auth-slice';
import accountSettingSlice from '../reducer/account-setting-slice';
import cartSlice from '../reducer/cart-slice';

const store = configureStore({
    reducer : {
        auth: authSlice.reducer,
        accountSetting: accountSettingSlice.reducer,
        cart: cartSlice.reducer
    }
})

export default store;
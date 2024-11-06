import { configureStore } from '@reduxjs/toolkit' 
import authSlice from '../reducer/auth-slice';
import accountSettingSlice from '../reducer/account-setting-slice';

const store = configureStore({
    reducer : {
        auth: authSlice.reducer,
        accountSetting: accountSettingSlice.reducer
    }
})

export default store;
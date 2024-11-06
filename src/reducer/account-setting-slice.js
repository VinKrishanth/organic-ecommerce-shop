import { createSlice } from "@reduxjs/toolkit";

const accountSettingSlice = createSlice({
    name: 'accountSettingSlice',
    initialState: {
        firstName: '',
        lastName: '',
        email: '',
        phoneNumber: ''
    },
    reducers: {

    }
})

export const accountActions = accountSettingSlice.actions;
export default accountSettingSlice

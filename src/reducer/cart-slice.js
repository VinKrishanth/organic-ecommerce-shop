import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        itemsList: [],
        cartTotalPrice: 0,
        totalQuantity: 0
    },
    reducers: {
        addToCart(state, action){
            const newItem = action.payload;
            const existingItems = state.itemsList.find(item => item.id === newItem.id);

            if(existingItems){
              existingItems.cartTotalPrice += newItem.Price;
              existingItems.quantity++;
              existingItems.totalPrice += existingItems.Price;
            }else{
              state.itemsList.push({
                name: newItem.name,
                price: newItem.Price,
                id: newItem.id,
                stock: newItem.stock,
                sourceURL: newItem.sourceURL,
                quantity: 1,
                totalPrice: newItem.Price
              });
              state.totalQuantity++;
              state.cartTotalPrice += newItem.Price;
            }
        },
        removerFormCart(state, action){

        }
    }
});

export const cartActions = cartSlice.actions;
export default cartSlice;
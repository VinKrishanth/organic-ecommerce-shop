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
              existingItems.quantity++;
              existingItems.totalPrice = (existingItems.price * existingItems.quantity);
              state.cartTotalPrice += existingItems.price;
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
          const id = action.payload;
          const existingItems = state.itemsList.find((item) => item.id === id);

          if(existingItems.quantity === 1){
            state.cartTotalPrice -= existingItems.price;
            state.itemsList = state.itemsList.filter((item) => item.id !== id);
          }else{
            existingItems.quantity--;
            existingItems.totalPrice = (existingItems.price * existingItems.quantity);
            state.cartTotalPrice -= existingItems.price;
          }

        },
        deleteFormCart(state, action){
          const id = action.payload;
          const existingItems = state.itemsList.find((item) => item.id === id);
          if(existingItems){
            state.cartTotalPrice -= (existingItems.quantity * existingItems.price);
            state.itemsList = state.itemsList.filter((item) => item.id !== id);
          }
        }
    }
});

export const cartActions = cartSlice.actions;
export default cartSlice;
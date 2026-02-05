import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CartItem, CartState } from "./cart.type";
const initialState: CartState = {
    items: [],
    totalQuantity: 0,
    totalPrice: 0,
}
const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart(state, action: PayloadAction<Omit<CartItem, 'Quantity' | 'totalPrice'>>) {
            const newItem = action.payload
            const existedItem = state.items.find((item) => item.id === newItem.id)
            state.totalQuantity++
            if (!existedItem) {
                state.items.push({ ...newItem, Quantity: 1, totalPrice: newItem.price })
            } else {
                existedItem.Quantity++
                existedItem.totalPrice += newItem.price
            }
            state.totalPrice += newItem.price

        }
    }
})
export const { addToCart } = cartSlice.actions
export default cartSlice.reducer
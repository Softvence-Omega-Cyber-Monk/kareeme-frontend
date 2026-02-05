import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CartItem, CartState } from "./cart.type";
import { AppRootState } from "@/redux/store";
const initialState: CartState = {
    items: [],
    totalQuantity: 0,
    totalPrice: 0,
}
const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart(state, action: PayloadAction<Omit<CartItem, 'quantity' | 'totalPrice'>>) {
            const newItem = action.payload
            const existedItem = state.items.find((item) => item.id === newItem.id)
            state.totalQuantity++
            if (!existedItem) {
                state.items.push({ ...newItem, quantity: 1, totalPrice: newItem.price })
            } else {
                existedItem.quantity++
                existedItem.totalPrice += newItem.price
            }
            state.totalPrice += newItem.price

        },
        removeFromCart(state, action: PayloadAction<string | number>) {
            const itemId = action.payload
            const existedItem = state.items.find((item) => item.id === itemId)
            if (!existedItem) return
            state.totalQuantity -= existedItem.quantity
            state.totalPrice -= existedItem.totalPrice
            state.items = state.items.filter((item) => item.id !== itemId)
        },
        decreaseQuantity(state, action: PayloadAction<string | number>) {
            const itemId = action.payload
            const existedItem = state.items.find((item) => item.id === itemId)
            if (!existedItem || existedItem.quantity <= 1) {
                if (existedItem && existedItem.quantity <= 1) {
                    state.items = state.items.filter((item) => item.id !== itemId)
                    state.totalQuantity--
                    state.totalPrice -= existedItem.totalPrice
                }
                return
            }
            existedItem.quantity--
            existedItem.totalPrice -= existedItem.price
            state.totalQuantity--
            state.totalPrice -= existedItem.price
        },
        increaseQuantity(state, action: PayloadAction<string | number>) {
            const itemId = action.payload
            const existedItem = state.items.find((item) => item.id === itemId)
            if (!existedItem) return
            existedItem.quantity++
            existedItem.totalPrice += existedItem.price
            state.totalQuantity++
            state.totalPrice += existedItem.price
        }
    }
})
export const selectCart = (state: AppRootState) => state.cart
export const { addToCart, removeFromCart, decreaseQuantity, increaseQuantity } = cartSlice.actions
export default cartSlice.reducer
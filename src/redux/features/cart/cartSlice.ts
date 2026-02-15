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
        addToCart(state, action: PayloadAction<Omit<CartItem, 'totalPrice'>>) {
            const newItem = action.payload
            const existedItem = state.items.find((item) => item.id === newItem.id)
            const quantityToAdd = newItem.quantity ?? 1
            const priceToAdd = newItem.price * quantityToAdd
            state.totalQuantity += quantityToAdd
            state.totalPrice += priceToAdd
            if (!existedItem) {
                state.items.push({ ...newItem, quantity: quantityToAdd, totalPrice: priceToAdd })
            } else {
                existedItem.quantity = (existedItem.quantity ?? 0) + quantityToAdd
                existedItem.totalPrice = (existedItem.totalPrice ?? 0) + priceToAdd
            }

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
                    state.totalQuantity -= existedItem.quantity
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
        },
        clearCart(state) {
            state.items = []
            state.totalQuantity = 0
            state.totalPrice = 0
        }
    }
})
export const selectCart = (state: AppRootState) => state.cart
export const { addToCart, removeFromCart, decreaseQuantity, increaseQuantity, clearCart } = cartSlice.actions
export default cartSlice.reducer
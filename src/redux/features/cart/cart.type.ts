export interface CartItem {
    id: string | number;
    title: string;
    image: string;
    price: number;
    quantity: number;
    totalPrice: number

}
export interface CartState {
    items: CartItem[],
    totalQuantity: number,
    totalPrice: number
}


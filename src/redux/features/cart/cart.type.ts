export interface CartItem {
    id: string | number;
    title: string;
    image: string;
    price: number;
    Quantity: number;
    totalPrice: number

}
export interface CartState {
    items: CartItem[],
    totalQuantity: number,
    totalPrice: number
}


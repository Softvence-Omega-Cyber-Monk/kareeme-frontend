import React, { useState } from "react";
import { Minus, Plus, Trash2, X } from "lucide-react";

interface CartItem {
  id: number;
  image: string;
  title: string;
  price: number;
  quantity: number;
}

const CartModal: React.FC<{ onClose: () => void }> = ({ onClose }) => {
  const [cartItems, setCartItems] = useState<CartItem[]>([
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=100&h=100&fit=crop",
      title: '"The Rhythm" Essential Tee',
      price: 99,
      quantity: 1,
    },
  ]);
  const [discountCode, setDiscountCode] = useState("");

  const handleQuantityChange = (id: number, type: "increase" | "decrease") => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id
          ? {
            ...item,
            quantity: type === "increase" ? item.quantity + 1 : Math.max(item.quantity - 1, 1),
          }
          : item
      )
    );
  };

  const handleRemoveItem = (id: number) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  const subtotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const shipping = 15;
  const discount = discountCode ? 10 : 0;
  const total = subtotal + shipping - discount;

  return (
    <div className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-4">
      <div className="bg-[#1a1f2e] w-full max-w-md rounded-lg shadow-2xl overflow-hidden text-white">
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-gray-700">
          <h2 className="text-lg font-semibold">My Cart</h2>
          <button onClick={onClose} className="text-gray-400 hover:text-white">
            <X size={20} />
          </button>
        </div>

        {/* Cart Items */}
        <div className="p-4 space-y-4 max-h-[300px] overflow-y-auto">
          {cartItems.map((item) => (
            <div key={item.id} className="flex items-center justify-between gap-2">
              <img src={item.image} alt={item.title} className="w-16 h-16 object-cover rounded" />
              <div className="flex-1 flex flex-col justify-between">
                <span className="text-sm">{item.title}</span>
                <span className="text-green-500 font-semibold">${item.price}</span>
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => handleQuantityChange(item.id, "decrease")}
                  className="bg-gray-800 p-1 rounded hover:bg-gray-700"
                >
                  <Minus size={14} />
                </button>
                <span>{item.quantity}</span>
                <button
                  onClick={() => handleQuantityChange(item.id, "increase")}
                  className="bg-gray-800 p-1 rounded hover:bg-gray-700"
                >
                  <Plus size={14} />
                </button>
              </div>
              <button onClick={() => handleRemoveItem(item.id)} className="text-red-500 hover:text-red-400">
                <Trash2 size={18} />
              </button>
            </div>
          ))}
        </div>

        {/* Discount Code */}
        <div className="p-4 border-t border-gray-700">
          <div className="flex gap-2">
            <input
              type="text"
              value={discountCode}
              onChange={(e) => setDiscountCode(e.target.value)}
              placeholder="Discount code"
              className="flex-1 bg-gray-800 px-3 py-2 rounded text-white text-sm placeholder-gray-400 focus:outline-none"
            />
            <button className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded text-white text-sm">Apply</button>
          </div>
        </div>

        {/* Summary */}
        <div className="p-4 space-y-1 text-sm">
          <div className="flex justify-between">
            <span>Subtotal</span>
            <span>${subtotal}</span>
          </div>
          <div className="flex justify-between">
            <span>Shipping</span>
            <span>${shipping}</span>
          </div>
          <div className="flex justify-between">
            <span>Discount</span>
            <span>${discount}</span>
          </div>
          <div className="flex justify-between font-semibold text-white border-t border-gray-700 pt-2">
            <span>Total</span>
            <span>${total}</span>
          </div>
        </div>

        {/* Checkout */}
        <div className="p-4">
          <button className="w-full bg-blue-600 hover:bg-blue-700 py-3 rounded text-white font-semibold text-base">
            Check Out
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartModal;

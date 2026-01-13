import React, { useState, useEffect } from "react";
import { motion, Variants } from "framer-motion";
import { Minus, Plus, X, Trash2, ShoppingCart } from "lucide-react";
import { Link } from "react-router-dom";
import {
  getCartItems,
  updateCartQuantity,
  removeFromCart,
  getCartTotal,
} from "@/utils/cartUtils";

interface CartItem {
  id: number;
  image: string;
  title: string;
  price: number;
  quantity: number;
}

interface CartModalProps {
  onClose: () => void;
}

const CartModal: React.FC<CartModalProps> = ({ onClose }) => {
  const [cartItems, setCartItems] = useState<CartItem[]>(getCartItems());
  const [discountCode, setDiscountCode] = useState("");
  const [appliedDiscount, setAppliedDiscount] = useState(0);

  // Listen for cart updates
  useEffect(() => {
    const handleCartUpdate = () => {
      setCartItems(getCartItems());
    };

    window.addEventListener("cartUpdated", handleCartUpdate);
    return () => window.removeEventListener("cartUpdated", handleCartUpdate);
  }, []);

  const handleQuantityChange = (id: number, newQuantity: number) => {
    updateCartQuantity(id, newQuantity);
  };

  const handleRemoveItem = (id: number) => {
    removeFromCart(id);
  };

  const handleApplyDiscount = () => {
    if (discountCode.toLowerCase() === "save10") {
      setAppliedDiscount(10);
    } else {
      setAppliedDiscount(0);
      alert("Invalid discount code");
    }
  };

  const subtotal = getCartTotal();
  const shipping = cartItems.length > 0 ? 15 : 0;
  const total = subtotal + shipping - appliedDiscount;

  const overlayVariants: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.3 } },
  };

  const modalVariants: Variants = {
    hidden: { opacity: 0, x: 100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.4, ease: "easeOut" },
    },
  };

  return (
    <motion.div
      className="fixed inset-0 bg-black/70 z-50 flex items-center justify-end"
      variants={overlayVariants}
      initial="hidden"
      animate="visible"
      exit="hidden"
      onClick={onClose}
    >
      <motion.div
        className="bg-[#0C1022] w-full sm:max-w-md h-full shadow-2xl overflow-hidden border-l border-blue-900/30 flex flex-col"
        variants={modalVariants}
        initial="hidden"
        animate="visible"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-4 sm:p-5 border-b border-gray-800">
          <h2 className="text-lg sm:text-xl font-semibold text-white">
            My Cart ({cartItems.length} items)
          </h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-white transition-colors cursor-pointer"
          >
            <X size={24} />
          </button>
        </div>

        {/* Cart Items - Scrollable */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-5">
          {cartItems.length === 0 ? (
            <div className="text-center text-gray-400 py-12">
              <ShoppingCart size={48} className="mx-auto mb-4 opacity-50" />
              <p className="text-lg mb-4">Your cart is empty</p>
              <Link to="/shop">
                <button
                  onClick={onClose}
                  className="px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-full 
                    text-white font-medium transition-colors cursor-pointer"
                >
                  Continue Shopping
                </button>
              </Link>
            </div>
          ) : (
            <div className="space-y-4">
              {cartItems.map((item) => (
                <div
                  key={item.id}
                  className="flex items-start gap-3 sm:gap-4 bg-gray-900/40 p-3 sm:p-4 
                    rounded-lg border border-gray-800 hover:border-gray-700 transition-colors"
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-16 h-16 sm:w-20 sm:h-20 object-cover rounded-lg flex-shrink-0"
                  />
                  <div className="flex-1 min-w-0">
                    <h3 className="text-white text-xs sm:text-sm font-medium mb-2 line-clamp-2">
                      {item.title}
                    </h3>
                    <p className="text-emerald-400 font-semibold text-sm mb-3">
                      ${item.price.toFixed(2)}
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center bg-gray-800 rounded-full border border-gray-700">
                        <button
                          onClick={() =>
                            handleQuantityChange(item.id, item.quantity - 1)
                          }
                          className="w-8 h-8 flex items-center justify-center text-blue-400 
                            hover:text-white hover:bg-gray-700 rounded-l-full transition-colors cursor-pointer"
                        >
                          <Minus size={16} />
                        </button>
                        <span className="text-white text-sm w-10 text-center">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() =>
                            handleQuantityChange(item.id, item.quantity + 1)
                          }
                          className="w-8 h-8 flex items-center justify-center text-blue-400 
                            hover:text-white hover:bg-gray-700 rounded-r-full transition-colors cursor-pointer"
                        >
                          <Plus size={16} />
                        </button>
                      </div>
                      <button
                        onClick={() => handleRemoveItem(item.id)}
                        className="text-red-400 hover:text-red-300 transition-colors cursor-pointer p-2"
                      >
                        <Trash2 size={18} />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Bottom Section - Fixed */}
        {cartItems.length > 0 && (
          <div className="border-t border-gray-800">
            {/* Discount Code */}
            <div className="p-4 sm:p-5 pb-3 sm:pb-4">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={discountCode}
                  onChange={(e) => setDiscountCode(e.target.value)}
                  placeholder="Discount code"
                  className="flex-1 bg-gray-900/60 border rounded-[33px] border-gray-800 
                    px-3 sm:px-4 py-2 sm:py-3 text-white text-xs sm:text-sm 
                    placeholder-gray-500 focus:outline-none focus:border-blue-500 
                    transition-colors"
                />
                <button
                  onClick={handleApplyDiscount}
                  className="bg-[#152844] rounded-[20px] hover:bg-blue-700 px-4 sm:px-6 
                    py-2 sm:py-3 text-white text-xs sm:text-sm font-medium 
                    transition-colors whitespace-nowrap cursor-pointer"
                >
                  Apply
                </button>
              </div>
            </div>

            {/* Summary */}
            <div className="px-4 sm:px-5 pb-3 sm:pb-4 space-y-2 sm:space-y-3">
              <div className="flex justify-between text-gray-400 text-xs sm:text-sm">
                <span>Subtotal</span>
                <span className="text-white">${subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-gray-400 text-xs sm:text-sm">
                <span>Shipping</span>
                <span className="text-white">${shipping.toFixed(2)}</span>
              </div>
              {appliedDiscount > 0 && (
                <div className="flex justify-between text-emerald-400 text-xs sm:text-sm">
                  <span>Discount</span>
                  <span>-${appliedDiscount.toFixed(2)}</span>
                </div>
              )}
              <div className="flex justify-between text-white font-semibold text-base sm:text-lg pt-2 sm:pt-3 border-t border-gray-800">
                <span>Total</span>
                <span>${total.toFixed(2)}</span>
              </div>
            </div>

            {/* Checkout Button */}
            <div className="p-4 sm:p-5 pt-0">
              <Link to="/checkout" onClick={onClose}>
                <button
                  className="w-full text-white font-semibold py-4 rounded-[29.455px]
                    flex items-center justify-center gap-[10px] transition duration-300 
                    ease-in-out shadow-[0_0_180px_rgba(58,92,181,0.6)]
                    bg-[radial-gradient(50%_50%_at_50%_50%,#7B92FF_0%,#2941B5_100%)]
                    hover:shadow-[0_0_200px_rgba(58,92,181,0.8)] cursor-pointer"
                >
                  Proceed to Checkout
                </button>
              </Link>

              <button
                onClick={onClose}
                className="w-full mt-3 py-3 text-gray-400 hover:text-white 
                  transition-colors cursor-pointer"
              >
                Continue Shopping
              </button>
            </div>
          </div>
        )}
      </motion.div>
    </motion.div>
  );
};

export default CartModal;

// import React, { useState } from "react";
// import { Minus, Plus, Trash2, X } from "lucide-react";

// interface CartItem {
//   id: number;
//   image: string;
//   title: string;
//   price: number;
//   quantity: number;
// }

// const CartModal: React.FC<{ onClose: () => void }> = ({ onClose }) => {
//   const [cartItems, setCartItems] = useState<CartItem[]>([
//     {
//       id: 1,
//       image: "https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=100&h=100&fit=crop",
//       title: '"The Rhythm" Essential Tee',
//       price: 99,
//       quantity: 1,
//     },
//   ]);
//   const [discountCode, setDiscountCode] = useState("");

//   const handleQuantityChange = (id: number, type: "increase" | "decrease") => {
//     setCartItems((prev) =>
//       prev.map((item) =>
//         item.id === id
//           ? {
//             ...item,
//             quantity: type === "increase" ? item.quantity + 1 : Math.max(item.quantity - 1, 1),
//           }
//           : item
//       )
//     );
//   };

//   const handleRemoveItem = (id: number) => {
//     setCartItems((prev) => prev.filter((item) => item.id !== id));
//   };

//   const subtotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
//   const shipping = 15;
//   const discount = discountCode ? 10 : 0;
//   const total = subtotal + shipping - discount;

//   return (
//     <div className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-4">
//       <div className="bg-[#1a1f2e] w-full max-w-md rounded-lg shadow-2xl overflow-hidden text-white">
//         {/* Header */}
//         <div className="flex items-center justify-between p-4 border-b border-gray-700">
//           <h2 className="text-lg font-semibold">My Cart</h2>
//           <button onClick={onClose} className="text-gray-400 hover:text-white">
//             <X size={20} />
//           </button>
//         </div>

//         {/* Cart Items */}
//         <div className="p-4 space-y-4 max-h-[300px] overflow-y-auto">
//           {cartItems.map((item) => (
//             <div key={item.id} className="flex items-center justify-between gap-2">
//               <img src={item.image} alt={item.title} className="w-16 h-16 object-cover rounded" />
//               <div className="flex-1 flex flex-col justify-between">
//                 <span className="text-sm">{item.title}</span>
//                 <span className="text-green-500 font-semibold">${item.price}</span>
//               </div>
//               <div className="flex items-center gap-2">
//                 <button
//                   onClick={() => handleQuantityChange(item.id, "decrease")}
//                   className="bg-gray-800 p-1 rounded hover:bg-gray-700"
//                 >
//                   <Minus size={14} />
//                 </button>
//                 <span>{item.quantity}</span>
//                 <button
//                   onClick={() => handleQuantityChange(item.id, "increase")}
//                   className="bg-gray-800 p-1 rounded hover:bg-gray-700"
//                 >
//                   <Plus size={14} />
//                 </button>
//               </div>
//               <button onClick={() => handleRemoveItem(item.id)} className="text-red-500 hover:text-red-400">
//                 <Trash2 size={18} />
//               </button>
//             </div>
//           ))}
//         </div>

//         {/* Discount Code */}
//         <div className="p-4 border-t border-gray-700">
//           <div className="flex gap-2">
//             <input
//               type="text"
//               value={discountCode}
//               onChange={(e) => setDiscountCode(e.target.value)}
//               placeholder="Discount code"
//               className="flex-1 bg-gray-800 px-3 py-2 rounded text-white text-sm placeholder-gray-400 focus:outline-none"
//             />
//             <button className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded text-white text-sm">Apply</button>
//           </div>
//         </div>

//         {/* Summary */}
//         <div className="p-4 space-y-1 text-sm">
//           <div className="flex justify-between">
//             <span>Subtotal</span>
//             <span>${subtotal}</span>
//           </div>
//           <div className="flex justify-between">
//             <span>Shipping</span>
//             <span>${shipping}</span>
//           </div>
//           <div className="flex justify-between">
//             <span>Discount</span>
//             <span>${discount}</span>
//           </div>
//           <div className="flex justify-between font-semibold text-white border-t border-gray-700 pt-2">
//             <span>Total</span>
//             <span>${total}</span>
//           </div>
//         </div>

//         {/* Checkout */}
//         <div className="p-4">
//           <button className="w-full bg-blue-600 hover:bg-blue-700 py-3 rounded text-white font-semibold text-base">
//             Check Out
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CartModal;

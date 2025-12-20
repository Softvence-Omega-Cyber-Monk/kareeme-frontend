
import React, { useState } from 'react';
import { motion, Variants } from 'framer-motion';
import { Minus, Plus, ChevronLeft, ChevronRight, X, Trash2 } from 'lucide-react';
import img from "@/assets/image44.png";

interface Product {
  id: number;
  image: string;
  title: string;
  price: number;
}

interface CartItem {
  id: number;
  image: string;
  title: string;
  price: number;
  quantity: number;
}

// Cart Modal Component
const CartModal: React.FC<{ onClose: () => void }> = ({ onClose }) => {
  const [cartItems, setCartItems] = useState<CartItem[]>([
    {
      id: 1,
      image: img,
      title: '"The Rhythm" Essential Tee',
      price: 99,
      quantity: 1,
    },
  ]);
  const [discountCode, setDiscountCode] = useState("");
  const [appliedDiscount, setAppliedDiscount] = useState(0);

  const handleQuantityChange = (id: number, newQuantity: number) => {
    if (newQuantity < 1) return;
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const handleRemoveItem = (id: number) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  const handleApplyDiscount = () => {
    if (discountCode.toLowerCase() === "save10") {
      setAppliedDiscount(10);
    }
  };

  const subtotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const shipping = 15;
  const total = subtotal + shipping - appliedDiscount;

  const overlayVariants: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.3 } }
  };

  const modalVariants: Variants = {
    hidden: { opacity: 0, x: 100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.4, ease: "easeOut" }
    }
  };

  return (
    <motion.div
      className="fixed inset-0 bg-black/70 z-50 flex items-center justify-end "
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
          <h2 className="text-lg sm:text-xl font-semibold text-white">My Cart</h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-white transition-colors"
          >
            <X size={24} />
          </button>
        </div>

        {/* Cart Items - Scrollable */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-5">
          {cartItems.length === 0 ? (
            <div className="text-center text-gray-400 py-12">
              Your cart is empty
            </div>
          ) : (
            <div className="space-y-4">
              {cartItems.map((item) => (
                <div
                  key={item.id}
                  className="flex items-start gap-3 sm:gap-4 bg-gray-900/40 p-3 sm:p-4 rounded-lg border border-gray-800"
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
                    <div className="flex items-center justify-center bg-gray-800 rounded-full p-1 border border-gray-700 w-[120px] sm:w-auto]">
                      <button
                        onClick={() => handleQuantityChange(item.id, item.quantity - 1)}
                        className="w-6 h-6 flex items-center justify-center text-[#3A5CFF] rounded  text-sm transition-colors cursor-pointer"
                      >
                        <Minus></Minus>
                      </button>
                      <span className="text-white text-sm w-10 sm:w-8 text-center">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => handleQuantityChange(item.id, item.quantity + 1)}
                        className="w-6 h-6 text-[Blue] flex items-center justify-center  rounded  text-sm transition-colors cursor-pointer"
                      >
                        <Plus></Plus>
                      </button>
                    </div>
                  </div>
                  <div className="flex flex-col items-end gap-2 flex-shrink-0">
                    <span className="text-emerald-400 font-semibold text-base sm:text-lg">
                      ${item.price}
                    </span>
                    <button
                      onClick={() => handleRemoveItem(item.id)}
                      className="text-red-400 hover:text-red-300 transition-colors cursor-pointer"
                    >
                      <Trash2 size={16} className="sm:w-[18px] sm:h-[18px]" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Bottom Section - Fixed */}
        <div className="border-t border-gray-800">
          {/* Discount Code */}
          <div className="p-4 sm:p-5 pb-3 sm:pb-4">
            <div className="flex gap-2">
              <input
                type="text"
                value={discountCode}
                onChange={(e) => setDiscountCode(e.target.value)}
                placeholder="Discount code"
                className="flex-1 bg-gray-900/60 border rounded-[33px] border-gray-800 px-3 sm:px-4 py-2 sm:py-3  text-white text-xs sm:text-sm placeholder-gray-500 focus:outline-none focus:border-white transition-colors"
              />
              <button
                onClick={handleApplyDiscount}
                className="bg-[#152844] cursor-pointer rounded-[20px] hover:bg-blue-700 px-4 sm:px-6  sm:py-3  text-white text-xs sm:text-sm font-medium transition-colors whitespace-nowrap"
              >
                Apply
              </button>
            </div>
          </div>

          {/* Summary */}
          <div className="px-4 sm:px-5 pb-3 sm:pb-4 space-y-2 sm:space-y-3">
            <div className="flex justify-between text-gray-400 text-xs sm:text-sm">
              <span>Subtotal</span>
              <span className="text-white">${subtotal}</span>
            </div>
            <div className="flex justify-between text-gray-400 text-xs sm:text-sm">
              <span>Shipping</span>
              <span className="text-white">${shipping}</span>
            </div>
            <div className="flex justify-between text-gray-400 text-xs sm:text-sm">
              <span>Discount</span>
              <span className="text-white">${appliedDiscount}</span>
            </div>
            <div className="flex justify-between text-white font-semibold text-base sm:text-lg pt-2 sm:pt-3 border-t border-gray-800">
              <span>Total</span>
              <span>${total}</span>
            </div>
          </div>

          {/* Checkout Button */}
          {/* <div className="p-4 sm:p-5 pt-0">
            <button className="w-full bg-blue-600 hover:bg-blue-700 py-3 sm:py-4 rounded-lg text-white font-semibold text-sm sm:text-base transition-colors shadow-lg shadow-blue-600/20">
              Check Out
            </button>
          </div> */}
              <span className=" text-white font-semibold mb-5 m-2
          px-[50px] py-[13px]
          rounded-[29.455px]
          flex items-center justify-center gap-[10px]
          transition duration-300 ease-in-out
          shadow-[0_0_180px_rgba(58,92,181,0.6)]
          bg-[radial-gradient(50%_50%_at_50%_50%,#7B92FF_0%,#2941B5_100%)]
          whitespace-nowrap cursor-pointer">
              <p>Check Out</p>
            </span>
        </div>
      </motion.div>
    </motion.div>
  );
};

// Shipping Dialog Component
const ShippingDialog: React.FC<{ onClose: () => void }> = ({ onClose }) => {
  const overlayVariants: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.3 } }
  };

  const dialogVariants: Variants = {
    hidden: { opacity: 0, scale: 0.9, y: 20 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { duration: 0.4, ease: "easeOut" }
    }
  };

  return (
    <motion.div
      className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4"
      variants={overlayVariants}
      initial="hidden"
      animate="visible"
      exit="hidden"
      onClick={onClose}
    >
      <motion.div
        className="bg-[#1a1f2e] rounded-lg max-w-md w-full shadow-2xl overflow-hidden"
        variants={dialogVariants}
        initial="hidden"
        animate="visible"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-start justify-between p-4 sm:p-6 border-b border-gray-700">
          <h2 className="text-white text-base sm:text-lg font-semibold">Shipping & Returns</h2>
          <button onClick={onClose} className="text-gray-400 hover:text-white transition-colors">
            <X size={20} />
          </button>
        </div>

        <div className="p-4 sm:p-6 border-b border-gray-700">
          <div className="mb-4">
            <span className="text-white text-xs sm:text-sm font-medium">
              Standard / 3-5 Business Days / Estimated cost: $15.00
            </span>
            <p className="text-gray-400 text-xs mt-1 leading-relaxed">
              Reliable and affordable, our Standard shipping option ensures your items reach your doorstep within 3 to 5 business days.
            </p>
          </div>
          <div>
            <span className="text-white text-xs sm:text-sm font-medium">
              Express / 1-2 Business Days / Estimated cost: $40.00
            </span>
            <p className="text-gray-400 text-xs mt-1 leading-relaxed">
              Need it fast? Opt for Express shipping and receive your order within 1 to 2 business days.
            </p>
          </div>
        </div>

        <div className="p-4 sm:p-6">
          <h3 className="text-white text-base sm:text-lg font-semibold mb-2">Exchange & Returns</h3>
          <p className="text-gray-400 text-xs leading-relaxed">
            Request a hassle-free return through your account, and we'll handle the rest. Home Returns are always free, and we offer an extended 100 days delivery confirmation date to send back your items.
          </p>
        </div>
      </motion.div>
    </motion.div>
  );
};

const ProductDetailPage: React.FC = () => {
  const [quantity, setQuantity] = useState(1);
  const [isShippingDialogOpen, setIsShippingDialogOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const mainProduct: Product = {
    id: 1,
    image: img,
    title: '"THE RHYTHM" ESSENTIAL TEE',
    price: 99,
  };

  const relatedProducts: Product[] = [
    { id: 2, image: 'https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=400&h=400&fit=crop', title: '"The Rhythm" Essential Tee', price: 99 },
    { id: 3, image: 'https://images.unsplash.com/photo-1562157873-818bc0726f68?w=400&h=400&fit=crop', title: '"The Rhythm" Essential Tee', price: 99 },
    { id: 4, image: 'https://images.unsplash.com/photo-1554568218-0f1715e72254?w=400&h=400&fit=crop', title: '"The Rhythm" Essential Tee', price: 99 },
  ];

  const imageVariants: Variants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.7, ease: "easeOut" }
    }
  };

  const infoVariants: Variants = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.7, ease: "easeOut" }
    }
  };

  const relatedSectionVariants: Variants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  const cardVariants: Variants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5 }
    }
  };

  const handleQuantityChange = (type: 'increase' | 'decrease') => {
    if (type === 'increase') setQuantity(prev => prev + 1);
    else if (type === 'decrease' && quantity > 1) setQuantity(prev => prev - 1);
  };

  return (
 <div className='w-full mx-auto'>
   <div className='max-w-7xl mx-auto'>
      <div className=" text-white mt-10 p-4">
      {/* Product Details Section */}
      <div className="flex flex-col lg:flex-row gap-6 sm:gap-8 lg:gap-4  mx-auto mb-8 sm:mb-12 lg:mb-16">
        {/* Left: Main Product Image */}
        <motion.div
          className=" rounded-lg justify-center"
          variants={imageVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <img
            src={mainProduct.image}
            alt={mainProduct.title}
            className="w-[708px] h-[500px] max-w-sm sm:max-w-md lg:max-w-lg object-contain rounded-md"
          />
        </motion.div>

        {/* Right: Product Info */}
        <motion.div
          className="flex-1 flex flex-col justify-center"
          variants={infoVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-2 sm:mb-3">
            {mainProduct.title}
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl font-semibold text-green-700 mb-4 sm:mb-6">
            ${mainProduct.price}
          </p>
          <p className="text-xs sm:text-sm md:text-base text-gray-400 mb-6 sm:mb-8 leading-relaxed">
            Lorem ipsum dolor sit amet consectetur. Ut tellus tortor a aliquet id dolor. Semper donec volutpat aenean cursus eu odio. Dictum sit fringilla vel dui in mauris egestas ullamcorper. Et tristique eget imperdiet ac euismod.
          </p>

          {/* Quantity and Add to Cart */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
            <div className="flex items-center justify-center bg-gray-800 rounded-full p-1 border border-gray-700 w-full sm:w-auto">
              <button 
                onClick={() => handleQuantityChange('decrease')} 
                className="p-2 px-4 sm:px-5 rounded-full hover:bg-gray-700 transition-colors text-blue-500 cursor-pointer"
              >
                <Minus size={16} className="sm:w-[18px] sm:h-[18px]" />
              </button>
              <span className="px-4 sm:px-6 text-base sm:text-lg font-semibold">{quantity}</span>
              <button 
                onClick={() => handleQuantityChange('increase')} 
                className="p-2 px-4 sm:px-5 rounded-full hover:bg-gray-700 transition-colors text-blue-500 cursor-pointer"
              >
                <Plus size={16} className="sm:w-[18px] sm:h-[18px]" />
              </button>
            </div>

            <button
              onClick={() => setIsCartOpen(true)}
              className="text-white font-semibold w-full sm:flex-1 lg:max-w-sm
                px-6 sm:px-8 lg:px-12 py-3 sm:py-3.5
                rounded-full
                flex items-center justify-center gap-2
                transition duration-300 ease-in-out
                shadow-[0_0_120px_rgba(58,92,181,0.5)] sm:shadow-[0_0_150px_rgba(58,92,181,0.55)] lg:shadow-[0_0_180px_rgba(58,92,181,0.6)]
                bg-[radial-gradient(50%_50%_at_50%_50%,#7B92FF_0%,#2941B5_100%)]
                whitespace-nowrap cursor-pointer text-sm sm:text-base hover:shadow-[0_0_200px_rgba(58,92,181,0.7)]"
            >
              Add To Cart
            </button>
          </div>

          <button
            onClick={() => setIsShippingDialogOpen(true)}
            className="text-xs sm:text-sm text-gray-500 hover:text-gray-400 transition-colors text-left underline cursor-pointer"
          >
            Shipping, Exchange and Returns
          </button>
        </motion.div>
      </div>

      {/* Related Products Section */}
      <div className=''>
        <motion.div
          className=""
          variants={relatedSectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <div className="flex justify-between items-center mb-4 sm:mb-6">
            <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold">RELATED PRODUCTS</h2>
            <div className="flex gap-2">
              <button className="p-1.5 sm:p-2 rounded-full hover:bg-gray-700 transition-colors border border-gray-700 cursor-pointer">
                <ChevronLeft size={20} className="sm:w-6 sm:h-6" />
              </button>
              <button className="p-1.5 sm:p-2 rounded-full hover:bg-gray-700 transition-colors border border-gray-700 cursor-pointer">
                <ChevronRight size={20} className="sm:w-6 sm:h-6" />
              </button>
            </div>
          </div>

          <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 lg:gap-6">
            {relatedProducts.map((product, index) => (
              <motion.div
                key={product.id}
                className="group cursor-pointer"
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="overflow-hidden rounded-lg">
                  <img 
                    src={product.image} 
                    alt={product.title} 
                    className="w-full h-64 sm:h-80 lg:h-96 object-cover object-center transition-transform duration-300 group-hover:scale-105" 
                  />
                </div>
                <div className="mt-3 sm:mt-4 lg:mt-5 flex justify-between items-start gap-2">
                  <h3 className="text-sm sm:text-base lg:text-lg font-semibold line-clamp-2 flex-1">
                    {product.title}
                  </h3>
                  <p className="text-white text-sm sm:text-base lg:text-lg font-semibold whitespace-nowrap">
                    ${product.price}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Modals */}
      {isShippingDialogOpen && <ShippingDialog onClose={() => setIsShippingDialogOpen(false)} />}
      {isCartOpen && <CartModal onClose={() => setIsCartOpen(false)} />}
    </div>
  </div>
 </div>
  );
};

export default ProductDetailPage;














// import React, { useState } from 'react';
// import { motion, Variants } from 'framer-motion';
// import { Minus, Plus, ChevronLeft, ChevronRight, X, Trash2 } from 'lucide-react';
// import img from "@/assets/image44.png";

// interface Product {
//   id: number;
//   image: string;
//   title: string;
//   price: number;
// }

// interface CartItem {
//   id: number;
//   image: string;
//   title: string;
//   price: number;
//   quantity: number;
// }

// // Cart Modal Component
// const CartModal: React.FC<{ onClose: () => void }> = ({ onClose }) => {
//   const [cartItems, setCartItems] = useState<CartItem[]>([
//     {
//       id: 1,
//       image: img,
//       title: '"The Rhythm" Essential Tee',
//       price: 99,
//       quantity: 1,
//     },
//   ]);
//   const [discountCode, setDiscountCode] = useState("");
//   const [appliedDiscount, setAppliedDiscount] = useState(0);

//   const handleQuantityChange = (id: number, newQuantity: number) => {
//     if (newQuantity < 1) return;
//     setCartItems((prev) =>
//       prev.map((item) =>
//         item.id === id ? { ...item, quantity: newQuantity } : item
//       )
//     );
//   };

//   const handleRemoveItem = (id: number) => {
//     setCartItems((prev) => prev.filter((item) => item.id !== id));
//   };

//   const handleApplyDiscount = () => {
//     if (discountCode.toLowerCase() === "save10") {
//       setAppliedDiscount(10);
//     }
//   };

//   const subtotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
//   const shipping = 15;
//   const total = subtotal + shipping - appliedDiscount;

//   const overlayVariants: Variants = {
//     hidden: { opacity: 0 },
//     visible: { opacity: 1, transition: { duration: 0.3 } }
//   };

//   const modalVariants: Variants = {
//     hidden: { opacity: 0, x: 100 },
//     visible: {
//       opacity: 1,
//       x: 0,
//       transition: { duration: 0.4, ease: "easeOut" }
//     }
//   };

//   return (
//     <motion.div
//       className="fixed inset-0 bg-black/70 z-50 flex items-center justify-end"
//       variants={overlayVariants}
//       initial="hidden"
//       animate="visible"
//       exit="hidden"
//       onClick={onClose}
//     >
//       <motion.div
//         className="bg-[#0C1022] w-full max-w-md h-full shadow-2xl overflow-hidden border-l border-blue-900/30 flex flex-col"
//         variants={modalVariants}
//         initial="hidden"
//         animate="visible"
//         onClick={(e) => e.stopPropagation()}
//       >
//         {/* Header */}
//         <div className="flex items-center justify-between p-5 border-b border-gray-800">
//           <h2 className="text-xl font-semibold text-white">My Cart</h2>
//           <button
//             onClick={onClose}
//             className="text-gray-400 hover:text-white transition-colors"
//           >
//             <X size={24} />
//           </button>
//         </div>

//         {/* Cart Items - Scrollable */}
//         <div className="flex-1 overflow-y-auto p-5">
//           {cartItems.length === 0 ? (
//             <div className="text-center text-gray-400 py-12">
//               Your cart is empty
//             </div>
//           ) : (
//             <div className="space-y-4">
//               {cartItems.map((item) => (
//                 <div
//                   key={item.id}
//                   className="flex items-start gap-4 bg-gray-900/40 p-4 rounded-lg border border-gray-800"
//                 >
//                   <img
//                     src={item.image}
//                     alt={item.title}
//                     className="w-20 h-20 object-cover rounded-lg"
//                   />
//                   <div className="flex-1">
//                     <h3 className="text-white text-sm font-medium mb-2">
//                       {item.title}
//                     </h3>
//                     <div className="flex items-center gap-3 mb-2">
//                       <button
//                         onClick={() => handleQuantityChange(item.id, item.quantity - 1)}
//                         className="w-6 h-6 flex items-center justify-center bg-gray-800 hover:bg-gray-700 rounded text-white text-sm transition-colors"
//                       >
//                         −
//                       </button>
//                       <span className="text-white text-sm w-8 text-center">
//                         {item.quantity}
//                       </span>
//                       <button
//                         onClick={() => handleQuantityChange(item.id, item.quantity + 1)}
//                         className="w-6 h-6 flex items-center justify-center bg-gray-800 hover:bg-gray-700 rounded text-white text-sm transition-colors"
//                       >
//                         +
//                       </button>
//                     </div>
//                   </div>
//                   <div className="flex flex-col items-end gap-2">
//                     <span className="text-emerald-400 font-semibold text-lg">
//                       ${item.price}
//                     </span>
//                     <button
//                       onClick={() => handleRemoveItem(item.id)}
//                       className="text-red-400 hover:text-red-300 transition-colors"
//                     >
//                       <Trash2 size={18} />
//                     </button>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           )}
//         </div>

//         {/* Bottom Section - Fixed */}
//         <div className="border-t border-gray-800">
//           {/* Discount Code */}
//           <div className="p-5 pb-4">
//             <div className="flex gap-2">
//               <input
//                 type="text"
//                 value={discountCode}
//                 onChange={(e) => setDiscountCode(e.target.value)}
//                 placeholder="Discount code"
//                 className="flex-1 bg-gray-900/60 border border-gray-800 px-4 py-3 rounded-lg text-white text-sm placeholder-gray-500 focus:outline-none focus:border-blue-600 transition-colors"
//               />
//               <button
//                 onClick={handleApplyDiscount}
//                 className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg text-white text-sm font-medium transition-colors"
//               >
//                 Apply
//               </button>
//             </div>
//           </div>

//           {/* Summary */}
//           <div className="px-5 pb-4 space-y-3">
//             <div className="flex justify-between text-gray-400 text-sm">
//               <span>Subtotal</span>
//               <span className="text-white">${subtotal}</span>
//             </div>
//             <div className="flex justify-between text-gray-400 text-sm">
//               <span>Shipping</span>
//               <span className="text-white">${shipping}</span>
//             </div>
//             <div className="flex justify-between text-gray-400 text-sm">
//               <span>Discount</span>
//               <span className="text-white">${appliedDiscount}</span>
//             </div>
//             <div className="flex justify-between text-white font-semibold text-lg pt-3 border-t border-gray-800">
//               <span>Total</span>
//               <span>${total}</span>
//             </div>
//           </div>

//           {/* Checkout Button */}
//           <div className="p-5 pt-0">
//             <button className="w-full bg-blue-600 hover:bg-blue-700 py-4 rounded-lg text-white font-semibold text-base transition-colors shadow-lg shadow-blue-600/20">
//               Check Out
//             </button>
//           </div>
//         </div>
//       </motion.div>
//     </motion.div>
//   );
// };

// // Shipping Dialog Component
// const ShippingDialog: React.FC<{ onClose: () => void }> = ({ onClose }) => {
//   const overlayVariants: Variants = {
//     hidden: { opacity: 0 },
//     visible: { opacity: 1, transition: { duration: 0.3 } }
//   };

//   const dialogVariants: Variants = {
//     hidden: { opacity: 0, scale: 0.9, y: 20 },
//     visible: {
//       opacity: 1,
//       scale: 1,
//       y: 0,
//       transition: { duration: 0.4, ease: "easeOut" }
//     }
//   };

//   return (
//     <motion.div
//       className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4"
//       variants={overlayVariants}
//       initial="hidden"
//       animate="visible"
//       exit="hidden"
//     >
//       <motion.div
//         className="bg-[#1a1f2e] rounded-lg max-w-md w-full shadow-2xl overflow-hidden"
//         variants={dialogVariants}
//         initial="hidden"
//         animate="visible"
//       >
//         <div className="flex items-start justify-between p-6 border-b border-gray-700">
//           <h2 className="text-white text-lg font-semibold">Shipping & Returns</h2>
//           <button onClick={onClose} className="text-gray-400 hover:text-white transition-colors">
//             <X size={20} />
//           </button>
//         </div>

//         <div className="p-6 border-b border-gray-700">
//           <div className="mb-4">
//             <span className="text-white text-sm font-medium">
//               Standard / 3-5 Business Days / Estimated cost: $15.00
//             </span>
//             <p className="text-gray-400 text-xs mt-1">
//               Reliable and affordable, our Standard shipping option ensures your items reach your doorstep within 3 to 5 business days.
//             </p>
//           </div>
//           <div>
//             <span className="text-white text-sm font-medium">
//               Express / 1-2 Business Days / Estimated cost: $40.00
//             </span>
//             <p className="text-gray-400 text-xs mt-1">
//               Need it fast? Opt for Express shipping and receive your order within 1 to 2 business days.
//             </p>
//           </div>
//         </div>

//         <div className="p-6">
//           <h3 className="text-white text-lg font-semibold mb-2">Exchange & Returns</h3>
//           <p className="text-gray-400 text-xs leading-relaxed">
//             Request a hassle-free return through your account, and we'll handle the rest. Home Returns are always free, and we offer an extended 100 days delivery confirmation date to send back your items.
//           </p>
//         </div>
//       </motion.div>
//     </motion.div>
//   );
// };

// const ProductDetailPage: React.FC = () => {
//   const [quantity, setQuantity] = useState(1);
//   const [isShippingDialogOpen, setIsShippingDialogOpen] = useState(false);
//   const [isCartOpen, setIsCartOpen] = useState(false);

//   const mainProduct: Product = {
//     id: 1,
//     image: img,
//     title: '"THE RHYTHM" ESSENTIAL TEE',
//     price: 99,
//   };

//   const relatedProducts: Product[] = [
//     { id: 2, image: 'https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=400&h=400&fit=crop', title: '"The Rhythm" Essential Tee', price: 99 },
//     { id: 3, image: 'https://images.unsplash.com/photo-1562157873-818bc0726f68?w=400&h=400&fit=crop', title: '"The Rhythm" Essential Tee', price: 99 },
//     { id: 4, image: 'https://images.unsplash.com/photo-1554568218-0f1715e72254?w=400&h=400&fit=crop', title: '"The Rhythm" Essential Tee', price: 99 },
//   ];

//   const imageVariants: Variants = {
//     hidden: { opacity: 0, x: -50 },
//     visible: {
//       opacity: 1,
//       x: 0,
//       transition: { duration: 0.7, ease: "easeOut" }
//     }
//   };

//   const infoVariants: Variants = {
//     hidden: { opacity: 0, x: 50 },
//     visible: {
//       opacity: 1,
//       x: 0,
//       transition: { duration: 0.7, ease: "easeOut" }
//     }
//   };

//   const relatedSectionVariants: Variants = {
//     hidden: { opacity: 0, y: 50 },
//     visible: {
//       opacity: 1,
//       y: 0,
//       transition: { duration: 0.6, ease: "easeOut" }
//     }
//   };

//   const cardVariants: Variants = {
//     hidden: { opacity: 0, scale: 0.9 },
//     visible: {
//       opacity: 1,
//       scale: 1,
//       transition: { duration: 0.5 }
//     }
//   };

//   const handleQuantityChange = (type: 'increase' | 'decrease') => {
//     if (type === 'increase') setQuantity(prev => prev + 1);
//     else if (type === 'decrease' && quantity > 1) setQuantity(prev => prev - 1);
//   };

//   return (
//     <div className="w-full text-white p-4 sm:p-6 md:p-8  ">
//       {/* Product Details Section */}
//       <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 w-7xl mx-auto mb-5">
//         {/* Left: Main Product Image */}
//         <motion.div
//           className="flex-1 rounded-lg flex items-center justify-center mt-5"
//           variants={imageVariants}
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true, amount: 0.3 }}
//         >
//           <img
//             src={mainProduct.image}
//             alt={mainProduct.title}
//             className="w-full h-auto max-w-sm md:max-w-md lg:max-w-lg object-contain rounded-md"
//           />
//         </motion.div>

//         {/* Right: Product Info */}
//         <motion.div
//           className=" w-2/3 flex-1 flex flex-col justify-center"
//           variants={infoVariants}
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true, amount: 0.3 }}
//         >
//           <h1 className="text-xl sm:text-2xl md:text-3xl font-bold mb-2">{mainProduct.title}</h1>
//           <p className="text-lg sm:text-xl font-semibold text-green-700 mb-4">${mainProduct.price}</p>
//           <p className="text-sm text-gray-400 mb-6 leading-relaxed">
//             Lorem ipsum dolor sit amet consectetur. Ut tellus tortor a <br /> aliquet id dolor. Semper donec volutpat aenean cursus eu <br /> odio. Dictum sit fringilla vel dui in mauris egestas ullamcorper. <br /> Et tristique eget imperdiet ac euismod.
//           </p>

//           {/* Quantity and Add to Cart */}
//           <div className="flex flex-col sm:flex-row items-center gap-4 mb-6 w-full">
//             <div className="flex items-center bg-gray-800 rounded-full p-1 border border-gray-700">
//               <button onClick={() => handleQuantityChange('decrease')} className="p-2 px-4 rounded-full hover:bg-gray-700 transition-colors w-1/3 text-[Blue]">
//                 <Minus size={18} />
//               </button>
//               <span className="px-4 text-lg font-semibold">{quantity}</span>
//               <button onClick={() => handleQuantityChange('increase')} className="p-2 rounded-full hover:bg-gray-700 transition-colors  text-[Blue]">
//                 <Plus size={18} />
//               </button>
//             </div>

//             <button
//               onClick={() => setIsCartOpen(true)}
//               className=" text-white font-semibold w-[384px]
//           px-[54px] py-[13px]
//           rounded-[29.455px]
//           flex items-center justify-center gap-[10px]
//           transition duration-300 ease-in-out
//           shadow-[0_0_180px_rgba(58,92,181,0.6)]
//           bg-[radial-gradient(50%_50%_at_50%_50%,#7B92FF_0%,#2941B5_100%)]
//           whitespace-nowrap cursor-pointer"
//             >
//               Add To Cart
//             </button>
//           </div>

//           <button
//             onClick={() => setIsShippingDialogOpen(true)}
//             className="text-xs text-gray-500 hover:text-gray-400 transition-colors text-left underline"
//           >
//             Shipping, Exchange and Returns
//           </button>
//         </motion.div>
//       </div>

//       {/* Related Products Section */}
// <div className='w-full mx-auto'>
//         <motion.div
//         className=" w-7xl  mx-auto"
//         variants={relatedSectionVariants}
//         initial="hidden"
//         whileInView="visible"
//         viewport={{ once: true, amount: 0.2 }}
//       >
//         <div className="flex justify-between items-center mb-6">
//           <h2 className="text-xl sm:text-2xl md:text-3xl font-bold">RELATED PRODUCTS</h2>
//           <div className="flex gap-2">
//             <button className="p-2 rounded-full  hover:bg-gray-700 transition-colors border border-gray-700">
//               <ChevronLeft size={24} />
//             </button>
//             <button className="p-2 rounded-full  hover:bg-gray-700 transition-colors border border-gray-700">
//               <ChevronRight size={24} />
//             </button>
//           </div>
//         </div>

//         <div className="w-full   grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
//           {relatedProducts.map((product, index) => (
//             <motion.div
//               key={product.id}
//               className=""
//               variants={cardVariants}
//               initial="hidden"
//               whileInView="visible"
//               viewport={{ once: true, amount: 0.3 }}
//               transition={{ delay: index * 0.1 }}
//             >
//               <img src={product.image} alt={product.title} className="w-full h-[420px] object-cover object-center" />
//               <div className=" mt-5 flex justify-between ">
//                 <h3 className="text-md sm:text-lg font-semibold truncate">{product.title}</h3>
//                 <p className="text-white mt-1">${product.price}</p>
//               </div>
//             </motion.div>
//           ))}
//         </div>
//       </motion.div>
// </div>

//       {/* Modals */}
//       {isShippingDialogOpen && <ShippingDialog onClose={() => setIsShippingDialogOpen(false)} />}
//       {isCartOpen && <CartModal onClose={() => setIsCartOpen(false)} />}
//     </div>
//   );
// };

// export default ProductDetailPage;


// import React, { useState } from 'react';
// import { motion, Variants } from 'framer-motion';
// import { Minus, Plus, ChevronLeft, ChevronRight, X } from 'lucide-react';
// import img from "@/assets/image44.png"
// interface Product {
//   id: number;
//   image: string;
//   title: string;
//   price: number;
// }

// // Shipping Dialog Component with Animation
// const ShippingDialog: React.FC<{ onClose: () => void }> = ({ onClose }) => {
//   const overlayVariants: Variants = {
//     hidden: { opacity: 0 },
//     visible: { opacity: 1, transition: { duration: 0.3 } }
//   };

//   const dialogVariants: Variants = {
//     hidden: { opacity: 0, scale: 0.9, y: 20 },
//     visible: {
//       opacity: 1,
//       scale: 1,
//       y: 0,
//       transition: { duration: 0.4, ease: "easeOut" }
//     }
//   };

//   return (
//     <motion.div
//       className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4"
//       variants={overlayVariants}
//       initial="hidden"
//       animate="visible"
//       exit="hidden"
//     >
//       <motion.div
//         className="bg-[#1a1f2e] rounded-lg max-w-md w-full shadow-2xl overflow-hidden"
//         variants={dialogVariants}
//         initial="hidden"
//         animate="visible"
//       >
//         {/* Header */}
//         <div className="flex items-start justify-between p-6 border-b border-gray-700">
//           <h2 className="text-white text-lg font-semibold">Shipping & Returns</h2>
//           <button onClick={onClose} className="text-gray-400 hover:text-white transition-colors">
//             <X size={20} />
//           </button>
//         </div>

//         {/* Shipping Options */}
//         <div className="p-6 border-b border-gray-700">
//           <div className="mb-4">
//             <span className="text-white text-sm font-medium">
//               Standard / 3-5 Business Days / Estimated cost: $15.00
//             </span>
//             <p className="text-gray-400 text-xs mt-1">
//               Reliable and affordable, our Standard shipping option ensures your items reach your doorstep within 3 to 5 business days.
//             </p>
//           </div>
//           <div>
//             <span className="text-white text-sm font-medium">
//               Express / 1-2 Business Days / Estimated cost: $40.00
//             </span>
//             <p className="text-gray-400 text-xs mt-1">
//               Need it fast? Opt for Express shipping and receive your order within 1 to 2 business days.
//             </p>
//           </div>
//         </div>

//         {/* Exchange & Returns */}
//         <div className="p-6">
//           <h3 className="text-white text-lg font-semibold mb-2">Exchange & Returns</h3>
//           <p className="text-gray-400 text-xs leading-relaxed">
//             Request a hassle-free return through your account, and we'll handle the rest. Home Returns are always free, and we offer an extended 100 days delivery confirmation date to send back your items.
//           </p>
//         </div>
//       </motion.div>
//     </motion.div>
//   );
// };

// const ProductDetailPage: React.FC = () => {
//   const [quantity, setQuantity] = useState(1);
//   const [isDialogOpen, setIsDialogOpen] = useState(false);

//   const mainProduct: Product = {
//     id: 1,
//     image: img,
//     title: '"THE RHYTHM" ESSENTIAL TEE',
//     price: 99,
//   };

//   const relatedProducts: Product[] = [
//     { id: 2, image: 'https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=400&h=400&fit=crop', title: '"The Rhythm" Essential Tee', price: 99 },
//     { id: 3, image: 'https://images.unsplash.com/photo-1562157873-818bc0726f68?w=400&h=400&fit=crop', title: '"The Rhythm" Essential Tee', price: 99 },
//     { id: 4, image: 'https://images.unsplash.com/photo-1554568218-0f1715e72254?w=400&h=400&fit=crop', title: '"The Rhythm" Essential Tee', price: 99 },
//   ];

//   // Animation Variants
//   const imageVariants: Variants = {
//     hidden: { opacity: 0, x: -50 },
//     visible: {
//       opacity: 1,
//       x: 0,
//       transition: { duration: 0.7, ease: "easeOut" }
//     }
//   };

//   const infoVariants: Variants = {
//     hidden: { opacity: 0, x: 50 },
//     visible: {
//       opacity: 1,
//       x: 0,
//       transition: { duration: 0.7, ease: "easeOut" }
//     }
//   };

//   const relatedSectionVariants: Variants = {
//     hidden: { opacity: 0, y: 50 },
//     visible: {
//       opacity: 1,
//       y: 0,
//       transition: { duration: 0.6, ease: "easeOut" }
//     }
//   };

//   const cardVariants: Variants = {
//     hidden: { opacity: 0, scale: 0.9 },
//     visible: {
//       opacity: 1,
//       scale: 1,
//       transition: { duration: 0.5 }
//     }
//   };

//   const handleQuantityChange = (type: 'increase' | 'decrease') => {
//     if (type === 'increase') setQuantity(prev => prev + 1);
//     else if (type === 'decrease' && quantity > 1) setQuantity(prev => prev - 1);
//   };

//   return (
//     <div className="min-h-screen bg-black/30 text-white p-4 sm:p-6 md:p-8 lg:p-12">
//       {/* Product Details Section */}
//       <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 max-w-7xl mx-auto mb-16">
//         {/* Left: Main Product Image */}
//         <motion.div
//           className="flex-1 rounded-lg flex items-center justify-center"
//           variants={imageVariants}
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true, amount: 0.3 }}
//         >
//           <img
//             src={mainProduct.image}
//             alt={mainProduct.title}
//             className="w-full h-auto max-w-sm md:max-w-md lg:max-w-lg object-contain rounded-md"
//           />
//         </motion.div>

//         {/* Right: Product Info */}
//         <motion.div
//           className="flex-1 flex flex-col justify-center"
//           variants={infoVariants}
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true, amount: 0.3 }}
//         >
//           <h1 className="text-xl sm:text-2xl md:text-3xl font-bold mb-2">{mainProduct.title}</h1>
//           <p className="text-lg sm:text-xl font-semibold text-green-700 mb-4">${mainProduct.price}</p>
//           <p className="text-sm text-gray-400 mb-6 leading-relaxed">
//             Lorem ipsum dolor sit amet consectetur. Ut tellus tortor a aliquet id dolor. Semper donec volutpat aenean cursus eu odio. Dictum sit fringilla vel dui in mauris egestas ullamcorper. Et tristique eget imperdiet ac euismod.
//           </p>

//           {/* Quantity and Add to Cart */}
//           <div className="flex flex-col sm:flex-row items-center gap-4 mb-6 w-full">
//             <div className="flex items-center bg-gray-800 rounded-full p-1 border border-gray-700">
//               <button onClick={() => handleQuantityChange('decrease')} className="p-2 rounded-full hover:bg-gray-700 transition-colors">
//                 <Minus size={18} />
//               </button>
//               <span className="px-4 text-lg font-semibold">{quantity}</span>
//               <button onClick={() => handleQuantityChange('increase')} className="p-2 rounded-full hover:bg-gray-700 transition-colors">
//                 <Plus size={18} />
//               </button>
//             </div>

//             <button
//               onClick={() => setIsDialogOpen(true)}
//               className="flex-grow sm:flex-grow-0 w-full sm:w-auto bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-700 hover:to-blue-900 text-white font-semibold py-3 px-8 rounded-full transition-all duration-300 shadow-lg"
//             >
//               Add To Cart
//             </button>
//           </div>

//           <button
//             onClick={() => setIsDialogOpen(true)}
//             className="text-xs text-gray-500 hover:text-gray-400 transition-colors text-left underline"
//           >
//             Shipping, Exchange and Returns
//           </button>
//         </motion.div>
//       </div>

//       {/* Related Products Section */}
//       <motion.div
//         className="max-w-7xl mx-auto"
//         variants={relatedSectionVariants}
//         initial="hidden"
//         whileInView="visible"
//         viewport={{ once: true, amount: 0.2 }}
//       >
//         <div className="flex justify-between items-center mb-6">
//           <h2 className="text-xl sm:text-2xl md:text-3xl font-bold">RELATED PRODUCTS</h2>
//           <div className="flex gap-2">
//             <button className="p-2 rounded-full bg-gray-800 hover:bg-gray-700 transition-colors border border-gray-700">
//               <ChevronLeft size={24} />
//             </button>
//             <button className="p-2 rounded-full bg-gray-800 hover:bg-gray-700 transition-colors border border-gray-700">
//               <ChevronRight size={24} />
//             </button>
//           </div>
//         </div>

//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//           {relatedProducts.map((product, index) => (
//             <motion.div
//               key={product.id}
//               className="bg-gray-900 rounded-lg overflow-hidden border border-gray-800"
//               variants={cardVariants}
//               initial="hidden"
//               whileInView="visible"
//               viewport={{ once: true, amount: 0.3 }}
//               transition={{ delay: index * 0.1 }}
//             >
//               <img src={product.image} alt={product.title} className="w-full h-64 object-cover object-center" />
//               <div className="p-4 bg-gray-800">
//                 <h3 className="text-md sm:text-lg font-semibold truncate">{product.title}</h3>
//                 <p className="text-gray-400 mt-1">${product.price}</p>
//               </div>
//             </motion.div>
//           ))}
//         </div>
//       </motion.div>

//       {/* Shipping Dialog */}
//       {isDialogOpen && <ShippingDialog onClose={() => setIsDialogOpen(false)} />}
//     </div>
//   );
// };

// export default ProductDetailPage;
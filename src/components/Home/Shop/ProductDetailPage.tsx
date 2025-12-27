import React, { useState, useRef, useEffect } from "react";
import { motion, Variants } from "framer-motion";
import { Minus, Plus, ChevronLeft, ChevronRight, ShoppingCart } from "lucide-react";
import { Link } from "react-router-dom";
import img from "@/assets/image44.png";
import ShippingDialog from "@/components/ShippingDialog";
import { addToCart } from "@/utils/cartUtils";
import { useCart } from "@/contexts/CartContext";

interface Product {
  id: number;
  image: string;
  title: string;
  price: number;
}

const ProductDetailPage: React.FC = () => {
  const [quantity, setQuantity] = useState(1);
  const [isShippingDialogOpen, setIsShippingDialogOpen] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const { openCart } = useCart();
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [visibleItems, setVisibleItems] = useState(3); // Default 3 items visible

  const mainProduct: Product = {
    id: 1,
    image: img,
    title: '"THE RHYTHM" ESSENTIAL TEE',
    price: 99,
  };

  const relatedProducts: Product[] = [
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=400&h=400&fit=crop",
      title: 'Classic Black Tee',
      price: 89,
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1562157873-818bc0726f68?w=400&h=400&fit=crop",
      title: 'Urban Street Hoodie',
      price: 129,
    },
    {
      id: 4,
      image: "https://images.unsplash.com/photo-1554568218-0f1715e72254?w=400&h=400&fit=crop",
      title: ' White Shirt',
      price: 79,
    },
    {
      id: 5,
      image: "https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=400&h=400&fit=crop",
      title: 'Sporty Red Jacket',
      price: 149,
    },
    {
      id: 6,
      image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=400&h=400&fit=crop",
      title: 'Casual Blue Jeans',
      price: 69,
    },
    {
      id: 7,
      image: "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?w=400&h=400&fit=crop",
      title: 'Green Summer Dress',
      price: 119,
    },
  ];

  // Calculate items per slide based on screen size
  useEffect(() => {
    const updateVisibleItems = () => {
      if (window.innerWidth < 640) { // mobile
        setVisibleItems(1);
      } else if (window.innerWidth < 1024) { // tablet
        setVisibleItems(2);
      } else { // desktop
        setVisibleItems(3);
      }
    };

    updateVisibleItems();
    window.addEventListener('resize', updateVisibleItems);
    return () => window.removeEventListener('resize', updateVisibleItems);
  }, []);

  const handleAddToCart = () => {
    // Add to cart multiple times based on quantity
    for (let i = 0; i < quantity; i++) {
      addToCart(mainProduct);
    }
    openCart(); // Open cart modal after adding
  };

  const handleQuantityChange = (type: "increase" | "decrease") => {
    if (type === "increase") setQuantity((prev) => prev + 1);
    else if (type === "decrease" && quantity > 1)
      setQuantity((prev) => prev - 1);
  };

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const cardWidth = container.children[0]?.clientWidth || 300;
      const gap = 24; // gap-6 = 1.5rem = 24px
      const scrollAmount = (cardWidth + gap) * visibleItems;
      container.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
      setCurrentSlide(prev => Math.max(0, prev - 1));
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const cardWidth = container.children[0]?.clientWidth || 300;
      const gap = 24; // gap-6 = 1.5rem = 24px
      const scrollAmount = (cardWidth + gap) * visibleItems;
      container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
      setCurrentSlide(prev => {
        const maxSlides = Math.ceil(relatedProducts.length / visibleItems) - 1;
        return Math.min(maxSlides, prev + 1);
      });
    }
  };

  const goToSlide = (slideIndex: number) => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const cardWidth = container.children[0]?.clientWidth || 300;
      const gap = 24; // gap-6 = 1.5rem = 24px
      const scrollAmount = (cardWidth + gap) * visibleItems * slideIndex;
      container.scrollTo({ left: scrollAmount, behavior: 'smooth' });
      setCurrentSlide(slideIndex);
    }
  };

  const imageVariants: Variants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.7, ease: "easeOut" },
    },
  };

  const infoVariants: Variants = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.7, ease: "easeOut" },
    },
  };

  const relatedSectionVariants: Variants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const cardVariants: Variants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5 },
    },
  };

  const totalSlides = Math.ceil(relatedProducts.length / visibleItems);
  const showLeftArrow = currentSlide > 0;
  const showRightArrow = currentSlide < totalSlides - 1;

  // Calculate card width based on visible items
  const cardWidthClass = `w-full ${visibleItems === 1 ? 'sm:w-full' : visibleItems === 2 ? 'sm:w-1/2 lg:w-1/2' : 'sm:w-1/2 lg:w-1/3'}`;

  return (
    <div className="w-full mx-auto px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto py-8 sm:py-12">
        {/* Product Details Section */}
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 mb-12 lg:mb-20">
          {/* Left: Main Product Image */}
          <motion.div
            className="lg:w-1/2"
            variants={imageVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <div className="bg-gray-900/50 text-gray-400 rounded-2xl p-4 sm:p-8 relative group">
              <img
                src={mainProduct.image}
                alt={mainProduct.title}
                className="w-full h-auto max-h-[500px] object-contain rounded-lg"
              />
              
              {/* Cart Icon on Image Hover */}
              <div className="absolute inset-0 flex items-center justify-center bg-black/0 group-hover:bg-black/50 transition-all duration-300 rounded-lg opacity-0 group-hover:opacity-100">
                <button
                  onClick={handleAddToCart}
                  className="p-4 bg-blue-600 cursor-pointer hover:bg-blue-700 rounded-full transform scale-0 group-hover:scale-100 transition-all duration-300 "
                  title="Add To Cart"
                >
                  <ShoppingCart size={32} className="text-white" />
                </button>
              </div>
            </div>
          </motion.div>

          {/* Right: Product Info */}
          <motion.div
            className="lg:w-1/2"
            variants={infoVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <div className="sticky top-24">
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-3 text-gray-400">
                {mainProduct.title}
              </h1>
              <p className="text-xl sm:text-2xl font-semibold text-emerald-400 mb-6">
                ${mainProduct.price.toFixed(2)}
              </p>
              
              <div className="mb-8">
                <h3 className="text-lg font-semibold mb-3 text-gray-400">Description</h3>
                <p className="text-gray-400 leading-relaxed">
                  Experience ultimate comfort and style with our premium essential tee. 
                  Made from 100% organic cotton, this tee features a modern fit and 
                  sustainable construction. Perfect for everyday wear or special occasions.
                </p>
              </div>

              <div className="mb-8">
                <h3 className="text-lg text-gray-400 font-semibold mb-3">Features</h3>
                <ul className="text-gray-400 space-y-2">
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-emerald-400 rounded-full"></span>
                    Premium organic cotton fabric
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-emerald-400 rounded-full"></span>
                    Sustainable and eco-friendly
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-emerald-400 rounded-full"></span>
                    Modern tailored fit
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-emerald-400 rounded-full"></span>
                    Machine washable
                  </li>
                </ul>
              </div>

              {/* Quantity and Add to Cart */}
              <div className="mb-8">
                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-6">
                  <div className="flex items-center justify-center bg-gray-800 rounded-full p-1 border border-gray-700 w-full sm:w-auto">
                    <button
                      onClick={() => handleQuantityChange("decrease")}
                      className="p-3 rounded-full hover:bg-gray-700 transition-colors text-blue-400 cursor-pointer"
                    >
                      <Minus size={20} />
                    </button>
                    <span className="px-6 text-lg font-semibold min-w-[60px] text-gray-400 text-center">
                      {quantity}
                    </span>
                    <button
                      onClick={() => handleQuantityChange("increase")}
                      className="p-3 rounded-full hover:bg-gray-700 transition-colors text-blue-400 cursor-pointer"
                    >
                      <Plus size={20} />
                    </button>
                  </div>

                  <button
                    onClick={handleAddToCart}
                    className="text-white cursor-pointer font-semibold w-full sm:flex-1
                      px-8 py-4 rounded-full flex items-center justify-center gap-3
                      transition duration-300 ease-in-out
                      shadow-[0_0_180px_rgba(58,92,181,0.6)]
                      bg-[radial-gradient(50%_50%_at_50%_50%,#7B92FF_0%,#2941B5_100%)]
                      hover:shadow-[0_0_200px_rgba(58,92,181,0.8)]
                      active:scale-95 "
                  >
                    Add To Cart
                  </button>
                </div>

                <button
                  onClick={() => setIsShippingDialogOpen(true)}
                  className="text-sm text-gray-500 hover:text-gray-300 transition-colors underline cursor-pointer"
                >
                  Shipping, Exchange and Returns Policy
                </button>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Related Products Section */}
        <motion.div
          variants={relatedSectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-400">
              RELATED PRODUCTS
            </h2>
            <div className="flex gap-2">
              <button
                onClick={scrollLeft}
                disabled={!showLeftArrow}
                className={`p-2 rounded-full transition-colors border border-gray-700 cursor-pointer flex items-center justify-center
                  ${showLeftArrow 
                    ? 'bg-blue-600 hover:bg-blue-700 text-white' 
                    : 'bg-gray-400 cursor-not-allowed text-gray-600'
                  }`}
                style={{ width: '40px', height: '40px' }}
              >
                <ChevronLeft size={24} />
              </button>
              <button
                onClick={scrollRight}
                disabled={!showRightArrow}
                className={`p-2 rounded-full transition-colors border border-gray-700 cursor-pointer flex items-center justify-center
                  ${showRightArrow 
                    ? 'bg-blue-600 hover:bg-blue-700 text-white' 
                    : 'bg-gray-400 cursor-not-allowed text-gray-600'
                  }`}
                style={{ width: '40px', height: '40px' }}
              >
                <ChevronRight size={24} />
              </button>
            </div>
          </div>

          {/* Scrollable Container */}
          <div className="relative">
            <div 
              ref={scrollContainerRef}
              className="  flex gap-6 overflow-x-auto scrollbar-hide pb-2"
              style={{ scrollBehavior: 'smooth' }}
            >
              {relatedProducts.map((product, index) => (
                <motion.div
                  key={`${product.id}-${index}`}
                  className={`group cursor-pointer relative flex-shrink-0 ${cardWidthClass}`}
                  variants={cardVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link to={`/product/${product.id}`}>
                    <div className="overflow-hidden rounded-2xl bg-gray-900/50 relative">
                      <img
                        src={product.image}
                        alt={product.title}
                        className="w-full h-64 sm:h-80 object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      
                      {/* Cart Icon on Related Products Image Hover */}
                      <div className="absolute inset-0 flex items-center justify-center bg-black/0 group-hover:bg-black/50 transition-all duration-300 rounded-2xl opacity-0 group-hover:opacity-100">
                        <button
                          onClick={(e) => {
                            e.preventDefault();
                            addToCart(product);
                            openCart();
                          }}
                          className="p-3 bg-blue-600 hover:bg-blue-700 rounded-full transform scale-0 group-hover:scale-100 transition-all duration-300 cursor-pointer"
                          title="Add To Cart"
                        >
                          <ShoppingCart size={28} className="text-white" />
                        </button>
                      </div>
                    </div>
                    <div className="mt-4 p-2 w-full">
                      <div className="flex flex-row  items-center">
                        <h3 className="  w-2/6   text-lg font-semibold mb-2 line-clamp-1 text-white flex-1 mr-4">
                          {product.title}
                        </h3>
                        <p className="text-emerald-400 w-2/6 font-semibold text-lg whitespace-nowrap">
                          ${product.price.toFixed(2)}
                        </p>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>

            {/* Scroll Indicators */}
            {totalSlides > 1 && (
              <div className="flex justify-center gap-2 mt-6">
                {Array.from({ length: totalSlides }).map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToSlide(index)}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      currentSlide === index 
                        ? 'bg-blue-600 w-8' 
                        : 'bg-gray-600 w-2 hover:bg-gray-500'
                    }`}
                  />
                ))}
              </div>
            )}
          </div>
        </motion.div>
      </div>

      {/* Shipping Dialog */}
      {isShippingDialogOpen && (
        <ShippingDialog onClose={() => setIsShippingDialogOpen(false)} />
      )}

      {/* Custom CSS for hiding scrollbar */}
      <style >{`
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </div>
  );
};

export default ProductDetailPage;










// import React, { useState } from "react";
// import { motion, Variants } from "framer-motion";
// import { Minus, Plus, ChevronLeft, ChevronRight, ShoppingCart } from "lucide-react";
// import { Link } from "react-router-dom";
// import img from "@/assets/image44.png";
// import ShippingDialog from "@/components/ShippingDialog";
// import { addToCart } from "@/utils/cartUtils";
// import { useCart } from "@/contexts/CartContext";

// interface Product {
//   id: number;
//   image: string;
//   title: string;
//   price: number;
// }

// const ProductDetailPage: React.FC = () => {
//   const [quantity, setQuantity] = useState(1);
//   const [isShippingDialogOpen, setIsShippingDialogOpen] = useState(false);
//   const { openCart } = useCart();

//   const mainProduct: Product = {
//     id: 1,
//     image: img,
//     title: '"THE RHYTHM" ESSENTIAL TEE',
//     price: 99,
//   };

//   const relatedProducts: Product[] = [
//     {
//       id: 2,
//       image: "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=400&h=400&fit=crop",
//       title: 'Classic Black Tee',
//       price: 89,
//     },
//     {
//       id: 3,
//       image: "https://images.unsplash.com/photo-1562157873-818bc0726f68?w=400&h=400&fit=crop",
//       title: 'Urban Street Hoodie',
//       price: 129,
//     },
//     {
//       id: 4,
//       image: "https://images.unsplash.com/photo-1554568218-0f1715e72254?w=400&h=400&fit=crop",
//       title: 'Premium White Shirt',
//       price: 79,
//     },
//       {
//       id: 4,
//       image: "https://images.unsplash.com/photo-1554568218-0f1715e72254?w=400&h=400&fit=crop",
//       title: 'Premium White Shirt',
//       price: 79,
//     },
//   ];

//   const handleAddToCart = () => {
//     // Add to cart multiple times based on quantity
//     for (let i = 0; i < quantity; i++) {
//       addToCart(mainProduct);
//     }
//     openCart(); // Open cart modal after adding
//   };

//   const handleQuantityChange = (type: "increase" | "decrease") => {
//     if (type === "increase") setQuantity((prev) => prev + 1);
//     else if (type === "decrease" && quantity > 1)
//       setQuantity((prev) => prev - 1);
//   };

//   const imageVariants: Variants = {
//     hidden: { opacity: 0, x: -50 },
//     visible: {
//       opacity: 1,
//       x: 0,
//       transition: { duration: 0.7, ease: "easeOut" },
//     },
//   };

//   const infoVariants: Variants = {
//     hidden: { opacity: 0, x: 50 },
//     visible: {
//       opacity: 1,
//       x: 0,
//       transition: { duration: 0.7, ease: "easeOut" },
//     },
//   };

//   const relatedSectionVariants: Variants = {
//     hidden: { opacity: 0, y: 50 },
//     visible: {
//       opacity: 1,
//       y: 0,
//       transition: { duration: 0.6, ease: "easeOut" },
//     },
//   };

//   const cardVariants: Variants = {
//     hidden: { opacity: 0, scale: 0.9 },
//     visible: {
//       opacity: 1,
//       scale: 1,
//       transition: { duration: 0.5 },
//     },
//   };

//   return (
//     <div className="w-full mx-auto px-4 sm:px-6 lg:px-8">
//       <div className="max-w-7xl mx-auto py-8 sm:py-12">
//         {/* Product Details Section */}
//         <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 mb-12 lg:mb-20">
//           {/* Left: Main Product Image */}
//           <motion.div
//             className="lg:w-1/2"
//             variants={imageVariants}
//             initial="hidden"
//             whileInView="visible"
//             viewport={{ once: true, amount: 0.3 }}
//           >
//             <div className="bg-gray-900/50  text-gray-400 rounded-2xl p-4 sm:p-8 relative group flex">
//               <img
//                 src={mainProduct.image}
//                 alt={mainProduct.title}
//                 className="w-full h-auto max-h-[500px] object-contain rounded-lg"
//               />
              
//               {/* Cart Icon on Image Hover */}
//               <div className="absolute inset-0 flex items-center justify-center bg-black/0 group-hover:bg-black/50 transition-all duration-300 rounded-lg opacity-0 group-hover:opacity-100">
//                 <button
//                   onClick={handleAddToCart}
//                   className="p-4 bg-blue-600 hover:bg-blue-700 rounded-full transform scale-0 group-hover:scale-100 transition-all duration-300 cursor-pointer"
//                   title="Add to Cart"
//                 >
//                   <ShoppingCart size={32} className="text-white" />
//                 </button>
//               </div>
//             </div>
//           </motion.div>

//           {/* Right: Product Info */}
//           <motion.div
//             className="lg:w-1/2"
//             variants={infoVariants}
//             initial="hidden"
//             whileInView="visible"
//             viewport={{ once: true, amount: 0.3 }}
//           >
//             <div className="sticky top-24">
//               <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-3 text-gray-400">
//                 {mainProduct.title}
//               </h1>
//               <p className="text-xl sm:text-2xl font-semibold text-emerald-400 mb-6">
//                 ${mainProduct.price.toFixed(2)}
//               </p>
              
//               <div className="mb-8">
//                 <h3 className="text-lg font-semibold mb-3 text-gray-400">Description</h3>
//                 <p className="text-gray-400 leading-relaxed">
//                   Experience ultimate comfort and style with our premium essential tee. 
//                   Made from 100% organic cotton, this tee features a modern fit and 
//                   sustainable construction. Perfect for everyday wear or special occasions.
//                 </p>
//               </div>

//               <div className="mb-8">
//                 <h3 className="text-lg  text-gray-400 font-semibold mb-3">Features</h3>
//                 <ul className="text-gray-400 space-y-2">
//                   <li className="flex items-center gap-2">
//                     <span className="w-2 h-2 bg-emerald-400 rounded-full"></span>
//                     Premium organic cotton fabric
//                   </li>
//                   <li className="flex items-center gap-2">
//                     <span className="w-2 h-2 bg-emerald-400 rounded-full"></span>
//                     Sustainable and eco-friendly
//                   </li>
//                   <li className="flex items-center gap-2">
//                     <span className="w-2 h-2 bg-emerald-400 rounded-full"></span>
//                     Modern tailored fit
//                   </li>
//                   <li className="flex items-center gap-2">
//                     <span className="w-2 h-2 bg-emerald-400 rounded-full"></span>
//                     Machine washable
//                   </li>
//                 </ul>
//               </div>

//               {/* Quantity and Add to Cart */}
//               <div className="mb-8">
//                 <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-6">
//                   <div className="flex items-center justify-center bg-gray-800 rounded-full p-1 border border-gray-700 w-full sm:w-auto">
//                     <button
//                       onClick={() => handleQuantityChange("decrease")}
//                       className="p-3 rounded-full hover:bg-gray-700 transition-colors text-blue-400 cursor-pointer"
//                     >
//                       <Minus size={20} />
//                     </button>
//                     <span className="px-6 text-lg font-semibold min-w-[60px] text-gray-400 text-center">
//                       {quantity}
//                     </span>
//                     <button
//                       onClick={() => handleQuantityChange("increase")}
//                       className="p-3 rounded-full hover:bg-gray-700 transition-colors text-blue-400 cursor-pointer"
//                     >
//                       <Plus size={20} />
//                     </button>
//                   </div>

//                   <button
//                     onClick={handleAddToCart}
//                     className="text-white font-semibold w-full sm:flex-1
//                       px-8 py-4 rounded-full flex items-center justify-center gap-3
//                       transition duration-300 ease-in-out
//                       shadow-[0_0_180px_rgba(58,92,181,0.6)]
//                       bg-[radial-gradient(50%_50%_at_50%_50%,#7B92FF_0%,#2941B5_100%)]
//                       hover:shadow-[0_0_200px_rgba(58,92,181,0.8)]
//                       active:scale-95 cursor-pointer"
//                   >
//                     Add To Cart
//                   </button>
//                 </div>

//                 <button
//                   onClick={() => setIsShippingDialogOpen(true)}
//                   className="text-sm text-gray-500 hover:text-gray-300 transition-colors underline cursor-pointer"
//                 >
//                   Shipping, Exchange and Returns Policy
//                 </button>
//               </div>
//             </div>
//           </motion.div>
//         </div>

//         {/* Related Products Section */}
//         <motion.div
//           variants={relatedSectionVariants}
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true, amount: 0.2 }}
//         >
//           <div className="flex justify-between items-center mb-8">
//             <h2 className="text-2xl sm:text-3xl font-bold text-gray-400">
//               RELATED PRODUCTS
//             </h2>
//             <div className="flex gap-2 ">
//               <button className="p-2 rounded-full bg-gray-400 hover:bg-gray-100 transition-colors border border-gray-700 cursor-pointer">
//                 <ChevronLeft size={24} />
//               </button>
//               <button className="p-2 rounded-full bg-gray-400 hover:bg-gray-100 transition-colors border border-gray-700 cursor-pointer">
//                 <ChevronRight size={24} />
//               </button>
//             </div>
//           </div>

//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
//             {relatedProducts.map((product, index) => (
//               <motion.div
//                 key={product.id}
//                 className="group cursor-pointer relative"
//                 variants={cardVariants}
//                 initial="hidden"
//                 whileInView="visible"
//                 viewport={{ once: true, amount: 0.3 }}
//                 transition={{ delay: index * 0.1 }}
//               >
//                 <Link to={`/product/${product.id}`}>
//                   <div className="overflow-hidden rounded-2xl bg-gray-900/50 relative">
//                     <img
//                       src={product.image}
//                       alt={product.title}
//                       className="w-full h-64 sm:h-80 object-cover transition-transform duration-500 group-hover:scale-110"
//                     />
                    
//                     {/* Cart Icon on Related Products Image Hover */}
//                     <div className="absolute inset-0 flex items-center justify-center bg-black/0 group-hover:bg-black/50 transition-all duration-300 rounded-2xl opacity-0 group-hover:opacity-100">
//                       <button
//                         onClick={(e) => {
//                           e.preventDefault();
//                           addToCart(product);
//                           openCart();
//                         }}
//                         className="p-3 bg-blue-600 hover:bg-blue-700 rounded-full transform scale-0 group-hover:scale-100 transition-all duration-300 cursor-pointer"
//                         title="Add to Cart"
//                       >
//                         <ShoppingCart size={28} className="text-white" />
//                       </button>
//                     </div>
//                   </div>
//                   <div className="mt-4 p-2">
                    
//                     <div className="flex flex-row justify-between items-center">
//                            <h3 className="text-lg font-semibold mb-2 line-clamp-1 text-white">
//                       {product.title}
//                     </h3>
//                       <p className="text-emerald-400 font-semibold text-lg">
//                         ${product.price.toFixed(2)}
//                       </p>
                 
//                       {/* <button
//                         onClick={(e) => {
//                           e.preventDefault();
//                           addToCart(product);
//                           openCart();
//                         }}
//                         className="px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-full 
//                           text-sm font-medium transition-colors cursor-pointer"
//                       >
//                         Add to Cart
//                       </button> */}
//                     </div>
//                   </div>
//                 </Link>
//               </motion.div>
//             ))}
//           </div>
//         </motion.div>
//       </div>

//       {/* Shipping Dialog */}
//       {isShippingDialogOpen && (
//         <ShippingDialog onClose={() => setIsShippingDialogOpen(false)} />
//       )}
//     </div>
//   );
// };

// export default ProductDetailPage;


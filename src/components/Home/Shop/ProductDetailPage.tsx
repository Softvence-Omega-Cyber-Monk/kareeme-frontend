import React, { useState } from 'react';
import { motion, Variants } from 'framer-motion';
import { Minus, Plus, ChevronLeft, ChevronRight, X } from 'lucide-react';
import img from "@/assets/image44.png"
interface Product {
  id: number;
  image: string;
  title: string;
  price: number;
}

// Shipping Dialog Component with Animation
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
    >
      <motion.div 
        className="bg-[#1a1f2e] rounded-lg max-w-md w-full shadow-2xl overflow-hidden"
        variants={dialogVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Header */}
        <div className="flex items-start justify-between p-6 border-b border-gray-700">
          <h2 className="text-white text-lg font-semibold">Shipping & Returns</h2>
          <button onClick={onClose} className="text-gray-400 hover:text-white transition-colors">
            <X size={20} />
          </button>
        </div>

        {/* Shipping Options */}
        <div className="p-6 border-b border-gray-700">
          <div className="mb-4">
            <span className="text-white text-sm font-medium">
              Standard / 3-5 Business Days / Estimated cost: $15.00
            </span>
            <p className="text-gray-400 text-xs mt-1">
              Reliable and affordable, our Standard shipping option ensures your items reach your doorstep within 3 to 5 business days.
            </p>
          </div>
          <div>
            <span className="text-white text-sm font-medium">
              Express / 1-2 Business Days / Estimated cost: $40.00
            </span>
            <p className="text-gray-400 text-xs mt-1">
              Need it fast? Opt for Express shipping and receive your order within 1 to 2 business days.
            </p>
          </div>
        </div>

        {/* Exchange & Returns */}
        <div className="p-6">
          <h3 className="text-white text-lg font-semibold mb-2">Exchange & Returns</h3>
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
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const mainProduct: Product = {
    id: 1,
    image:img,
    title: '"THE RHYTHM" ESSENTIAL TEE',
    price: 99,
  };

  const relatedProducts: Product[] = [
    { id: 2, image: 'https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=400&h=400&fit=crop', title: '"The Rhythm" Essential Tee', price: 99 },
    { id: 3, image: 'https://images.unsplash.com/photo-1562157873-818bc0726f68?w=400&h=400&fit=crop', title: '"The Rhythm" Essential Tee', price: 99 },
    { id: 4, image: 'https://images.unsplash.com/photo-1554568218-0f1715e72254?w=400&h=400&fit=crop', title: '"The Rhythm" Essential Tee', price: 99 },
  ];

  // Animation Variants
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
    <div className="min-h-screen bg-black/30 text-white p-4 sm:p-6 md:p-8 lg:p-12">
      {/* Product Details Section */}
      <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 max-w-7xl mx-auto mb-16">
        {/* Left: Main Product Image */}
        <motion.div 
          className="flex-1 rounded-lg flex items-center justify-center"
          variants={imageVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <img
            src={mainProduct.image}
            alt={mainProduct.title}
            className="w-full h-auto max-w-sm md:max-w-md lg:max-w-lg object-contain rounded-md"
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
          <h1 className="text-xl sm:text-2xl md:text-3xl font-bold mb-2">{mainProduct.title}</h1>
          <p className="text-lg sm:text-xl font-semibold text-green-700 mb-4">${mainProduct.price}</p>
          <p className="text-sm text-gray-400 mb-6 leading-relaxed">
            Lorem ipsum dolor sit amet consectetur. Ut tellus tortor a aliquet id dolor. Semper donec volutpat aenean cursus eu odio. Dictum sit fringilla vel dui in mauris egestas ullamcorper. Et tristique eget imperdiet ac euismod.
          </p>

          {/* Quantity and Add to Cart */}
          <div className="flex flex-col sm:flex-row items-center gap-4 mb-6 w-full">
            <div className="flex items-center bg-gray-800 rounded-full p-1 border border-gray-700">
              <button onClick={() => handleQuantityChange('decrease')} className="p-2 rounded-full hover:bg-gray-700 transition-colors">
                <Minus size={18} />
              </button>
              <span className="px-4 text-lg font-semibold">{quantity}</span>
              <button onClick={() => handleQuantityChange('increase')} className="p-2 rounded-full hover:bg-gray-700 transition-colors">
                <Plus size={18} />
              </button>
            </div>

            <button
              onClick={() => setIsDialogOpen(true)}
              className="flex-grow sm:flex-grow-0 w-full sm:w-auto bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-700 hover:to-blue-900 text-white font-semibold py-3 px-8 rounded-full transition-all duration-300 shadow-lg"
            >
              Add To Cart
            </button>
          </div>

          <button 
            onClick={() => setIsDialogOpen(true)}
            className="text-xs text-gray-500 hover:text-gray-400 transition-colors text-left underline"
          >
            Shipping, Exchange and Returns
          </button>
        </motion.div>
      </div>

      {/* Related Products Section */}
      <motion.div 
        className="max-w-7xl mx-auto"
        variants={relatedSectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold">RELATED PRODUCTS</h2>
          <div className="flex gap-2">
            <button className="p-2 rounded-full bg-gray-800 hover:bg-gray-700 transition-colors border border-gray-700">
              <ChevronLeft size={24} />
            </button>
            <button className="p-2 rounded-full bg-gray-800 hover:bg-gray-700 transition-colors border border-gray-700">
              <ChevronRight size={24} />
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {relatedProducts.map((product, index) => (
            <motion.div 
              key={product.id} 
              className="bg-gray-900 rounded-lg overflow-hidden border border-gray-800"
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: index * 0.1 }}
            >
              <img src={product.image} alt={product.title} className="w-full h-64 object-cover object-center" />
              <div className="p-4 bg-gray-800">
                <h3 className="text-md sm:text-lg font-semibold truncate">{product.title}</h3>
                <p className="text-gray-400 mt-1">${product.price}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Shipping Dialog */}
      {isDialogOpen && <ShippingDialog onClose={() => setIsDialogOpen(false)} />}
    </div>
  );
};

export default ProductDetailPage;
import React, { useState } from 'react';
import { motion, Variants } from 'framer-motion';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';
import img from "@/assets/Frame 1321317894.png"

interface Product {
  id: number;
  image: string;
  title: string;
}

const ProductGallery: React.FC = () => {
  const products: Product[] = [
    { id: 1, image: 'https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=400&h=400&fit=crop', title: 'Black Graphic Tee' },
    { id: 2, image: 'https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=400&h=400&fit=crop', title: 'White Print Tee' },
    { id: 3, image: 'https://images.unsplash.com/photo-1562157873-818bc0726f68?w=400&h=400&fit=crop', title: 'Dark Graphic Tee' },
    { id: 4, image: 'https://images.unsplash.com/photo-1554568218-0f1715e72254?w=400&h=400&fit=crop', title: 'White Sneakers' },
    { id: 5, image: 'https://images.unsplash.com/photo-1622445275463-afa2ab738c34?w=400&h=400&fit=crop', title: 'Baseball Tee' },
    { id: 6, image: 'https://images.unsplash.com/photo-1618354691373-d851c5c3a990?w=400&h=400&fit=crop', title: 'Pink Lifestyle' },
    { id: 7, image: 'https://images.unsplash.com/photo-1593032338166-51d2f7062ecb?w=400&h=400&fit=crop', title: 'Dark Hoodie' },
    { id: 8, image: 'https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=400&h=400&fit=crop', title: 'White Print Tee 2' },
  ];

  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  // Animation variants
  const headerVariants: Variants = {
    hidden: { opacity: 0, y: -30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  const rowVariants: Variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.7, 
        ease: "easeOut",
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };

  const bannerVariants: Variants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  const handleImageClick = (image: string) => {
    setSelectedImage(image);
  };

  const handleClose = () => {
    setSelectedImage(null);
  };

  const navigateImage = (direction: 'prev' | 'next') => {
    if (!selectedImage) return;
    const currentIndex = products.findIndex(p => p.image === selectedImage);
    const productLength = products.length;
    let newIndex;
    if (direction === 'prev') {
      newIndex = currentIndex === 0 ? productLength - 1 : currentIndex - 1;
    } else {
      newIndex = currentIndex === productLength - 1 ? 0 : currentIndex + 1;
    }
    setSelectedImage(products[newIndex].image);
  };

  return (
    <div className="w-full max-w-7xl xl:max-w-[1350px] bg-black/70 mx-auto mt-5 rounded-lg shadow-2xl">
      {/* Header with Animation */}
      <motion.div 
        className="pt-8 pb-6 px-4 md:px-8"
        variants={headerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <h1 className="text-white text-xs md:text-sm font-light tracking-[0.3em] mb-1 uppercase">Browse Our</h1>
        <h2 className="text-white text-lg md:text-2xl font-bold tracking-[0.2em] uppercase">Product Line Up</h2>
      </motion.div>

      {/* First Row - 3 Products */}
      <motion.div 
        className="px-4 md:px-8 py-3"
        variants={rowVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-5">
          {products.slice(0, 3).map((product) => (
            <motion.div
              key={product.id}
              variants={itemVariants}
              className="aspect-square bg-gray-900 rounded-lg overflow-hidden cursor-pointer transform transition duration-300 hover:scale-[1.02] hover:opacity-90"
              onClick={() => handleImageClick(product.image)}
            >
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-full object-cover"
              />
            </motion.div>
          ))}
        </div>
        <h1 className='text-white mt-1'>"The Rhythm" Essential Tee</h1>
      </motion.div>

      {/* Second Row - 3 Products */}
      <motion.div 
        className="px-4 md:px-8 py-3 w-full"
        variants={rowVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-5">
          {products.slice(3, 6).map((product) => (
            <motion.div
              key={product.id}
              variants={itemVariants}
              className="aspect-square bg-gray-900 rounded-lg overflow-hidden cursor-pointer transform transition duration-300 hover:scale-[1.02] hover:opacity-90"
              onClick={() => handleImageClick(product.image)}
            >
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-full object-cover"
              />
            </motion.div>
          ))}
        </div>
        <h1 className='text-white mt-1'>"The Rhythm" Essential Tee</h1>
      </motion.div>

      {/* Third Row - 2 Products (Left aligned) */}
      <motion.div 
        className="px-4 md:px-8 py-3"
        variants={rowVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className="grid grid-cols-2 gap-3 md:gap-5">
          {products.slice(0, 2).map((product) => (
            <motion.div
              key={`row3-${product.id}`}
              variants={itemVariants}
              className="aspect-square rounded-lg overflow-hidden cursor-pointer transform transition duration-300 hover:scale-[1.02] hover:opacity-90"
              onClick={() => handleImageClick(product.image)}
            >
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-full object-cover"
              />
            </motion.div>
          ))}
        </div>
        <h1 className='text-white mt-1'>"The Rhythm" Essential Tee</h1>
      </motion.div>

      {/* Hero Banner with Animation */}
      <motion.div 
        className="relative w-full aspect-[4/3] md:aspect-[21/9] lg:aspect-[16/5] rounded-lg overflow-hidden my-8"
        variants={bannerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <img
          src={img}
          alt="Hero"
          className="w-full h-full object-cover blur-sm"
        />
        <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center p-4">
          <h3 className="text-white text-2xl md:text-5xl lg:text-7xl font-black uppercase text-center leading-tight">
            New Drops <br /> Arrived
          </h3>
        </div>
      </motion.div>

      {/* Fourth Row - 3 Products */}
      <motion.div 
        className="px-4 md:px-8 py-3"
        variants={rowVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-5">
          {products.slice(0, 3).map((product) => (
            <motion.div
              key={`row4-${product.id}`}
              variants={itemVariants}
              className="aspect-square bg-gray-900 rounded-lg overflow-hidden cursor-pointer transform transition duration-300 hover:scale-[1.02] hover:opacity-90"
              onClick={() => handleImageClick(product.image)}
            >
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-full object-cover"
              />
            </motion.div>
          ))}
        </div>
        <h1 className='text-white mt-1'>"The Rhythm" Essential Tee</h1>
      </motion.div>

      {/* Fifth Row - 3 Products */}
      <motion.div 
        className="px-4 md:px-8 py-3"
        variants={rowVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-5">
          {products.slice(0, 3).map((product) => (
            <motion.div
              key={`row5-${product.id}`}
              variants={itemVariants}
              className="aspect-square bg-gray-900 rounded-lg overflow-hidden cursor-pointer transform transition duration-300 hover:scale-[1.02] hover:opacity-90"
              onClick={() => handleImageClick(product.image)}
            >
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-full object-cover"
              />
            </motion.div>
          ))}
        </div>
        <h1 className='text-white mt-1'>"The Rhythm" Essential Tee</h1>
      </motion.div>

      {/* Footer Section */}
      <div className="h-16 mt-6"></div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4">
          <button
            onClick={handleClose}
            className="absolute top-4 right-4 text-white text-3xl hover:text-red-500 transition-colors z-50"
          >
            <X size={32} />
          </button>
          
          <button
            onClick={() => navigateImage('prev')}
            className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors z-40"
          >
            <ChevronLeft size={32} className="md:size-48" />
          </button>

          <div className="max-w-4xl max-h-[90vh]">
            <img
              src={selectedImage}
              alt="Selected product"
              className="w-full h-full object-contain rounded-lg shadow-2xl"
            />
          </div>

          <button
            onClick={() => navigateImage('next')}
            className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors z-40"
          >
            <ChevronRight size={32} className="md:size-48" />
          </button>
        </div>
      )}
    </div>
  );
};

export default ProductGallery;






// import React, { useState } from 'react';
// import { ChevronLeft, ChevronRight, X } from 'lucide-react'; // X icon যোগ করা হলো
// import img from "@/assets/Frame 1321317894.png"

// interface Product {
//   id: number;
//   image: string;
//   title: string;
// }

// const ProductGallery: React.FC = () => {
//   const products: Product[] = [
//     { id: 1, image: 'https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=400&h=400&fit=crop', title: 'Black Graphic Tee' },
//     { id: 2, image: 'https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=400&h=400&fit=crop', title: 'White Print Tee' },
//     { id: 3, image: 'https://images.unsplash.com/photo-1562157873-818bc0726f68?w=400&h=400&fit=crop', title: 'Dark Graphic Tee' },
//     { id: 4, image: 'https://images.unsplash.com/photo-1554568218-0f1715e72254?w=400&h=400&fit=crop', title: 'White Sneakers' },
//     { id: 5, image: 'https://images.unsplash.com/photo-1622445275463-afa2ab738c34?w=400&h=400&fit=crop', title: 'Baseball Tee' },
//     { id: 6, image: 'https://images.unsplash.com/photo-1618354691373-d851c5c3a990?w=400&h=400&fit=crop', title: 'Pink Lifestyle' },
    
//     // অতিরিক্ত ডামি প্রোডাক্ট যোগ করা হয়েছে যাতে স্লাইস কলগুলি কাজ করতে পারে
//     { id: 7, image: 'https://images.unsplash.com/photo-1593032338166-51d2f7062ecb?w=400&h=400&fit=crop', title: 'Dark Hoodie' },
//     { id: 8, image: 'https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=400&h=400&fit=crop', title: 'White Print Tee 2' },
//   ];

//   const [selectedImage, setSelectedImage] = useState<string | null>(null);

//   const handleImageClick = (image: string) => {
//     setSelectedImage(image);
//   };

//   const handleClose = () => {
//     setSelectedImage(null);
//   };

//   const navigateImage = (direction: 'prev' | 'next') => {
//     if (!selectedImage) return;
//     const currentIndex = products.findIndex(p => p.image === selectedImage);
//     const productLength = products.length;
//     let newIndex;
//     if (direction === 'prev') {
//       newIndex = currentIndex === 0 ? productLength - 1 : currentIndex - 1;
//     } else {
//       newIndex = currentIndex === productLength - 1 ? 0 : currentIndex + 1;
//     }
//     setSelectedImage(products[newIndex].image);
//   };

//   return (
//     // রেসপনসিভ কন্টেইনার: max-width সহ
//     <div className="w-full max-w-7xl xl:max-w-[1350px] bg-black/70 mx-auto mt-5 rounded-lg shadow-2xl">
//       {/* Header - রেসপনসিভ ফন্ট সাইজ ও প্যাডিং */}
//       <div className="pt-8 pb-6 px-4 md:px-8">
//         <h1 className="text-white text-xs md:text-sm font-light tracking-[0.3em] mb-1 uppercase">Browse Our</h1>
//         <h2 className="text-white text-lg md:text-2xl font-bold tracking-[0.2em] uppercase">Product Line Up</h2>
//       </div>

  

//       {/* First Row - 3 Products */}
//       <div className="px-4 md:px-8 py-3">
//         {/* ছোট স্ক্রিনের জন্য grid-cols-2 বা 1, এবং বড় স্ক্রিনের জন্য grid-cols-3 */}
//         <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-5">
//           {products.slice(0, 3).map((product) => (
//             <div
//               key={product.id}
//               className="aspect-square bg-gray-900 rounded-lg overflow-hidden cursor-pointer transform transition duration-300 hover:scale-[1.02] hover:opacity-90"
//               onClick={() => handleImageClick(product.image)}
//             >
//               <img
//                 src={product.image}
//                 alt={product.title}
//                 className="w-full h-full object-cover"
//               />
//             </div>
//           ))}
//         </div>
//          <h1 className='text-white mt-1'>"The Rhythm" Essential Tee</h1>
//       </div>

//       {/* Second Row - 3 Products */}
//       <div className="px-4 md:px-8 py-3 w-full">
//         <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-5">
//           {products.slice(3, 6).map((product) => (
//             <div
//               key={product.id}
//               className="aspect-square bg-gray-900 rounded-lg overflow-hidden cursor-pointer transform transition duration-300 hover:scale-[1.02] hover:opacity-90"
//               onClick={() => handleImageClick(product.image)}
//             >
//               <img
//                 src={product.image}
//                 alt={product.title}
//                 className="w-full h-full object-cover"
//               />
//             </div>
//           ))}
//         </div>
//          <h1 className='text-white mt-1'>"The Rhythm" Essential Tee</h1>
//       </div>

//       {/* Third Row - 2 Products (Left aligned) */}
//       <div className="px-4 md:px-8 py-3">
//         {/* grid-cols-2 রাখা হয়েছে */}
//         <div className="grid grid-cols-2 gap-3 md:gap-5">
//           {products.slice(0, 2).map((product,) => (
//             <div
//               key={`row3-${product.id}`}
//               className="aspect-square rounded-lg overflow-hidden cursor-pointer transform transition duration-300 hover:scale-[1.02] hover:opacity-90"
//               onClick={() => handleImageClick(product.image)}
//             >
//               <img
//                 src={product.image}
//                 alt={product.title}
//                 className="w-full h-full object-cover"
//               />
//             </div>
//           ))}
         
//         </div>
//          <h1 className='text-white mt-1'>"The Rhythm" Essential Tee</h1>
//       </div>

//       {/* Hero Banner - স্থির w ও h এর পরিবর্তে রেসপনসিভ aspect ratio */}
//       <div className="relative w-full aspect-[4/3] md:aspect-[21/9] lg:aspect-[16/5] rounded-lg overflow-hidden my-8">
//         <img
//           src={img}
//           alt="Hero"
//           className="w-full h-full object-cover blur-sm"
//         />
//         {/* Overlay content যোগ করা হলো */}
//         <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center p-4">
//             <h3 className="text-white text-2xl md:text-5xl lg:text-7xl font-black uppercase text-center leading-tight">
//                 New Drops <br /> Arrived
//             </h3>
//         </div>
//       </div>

//       {/* Fourth Row - 3 Products */}
//       <div className="px-4 md:px-8 py-3">
//         <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-5">
//           {products.slice(0, 3).map((product) => (
//             <div
//               key={`row4-${product.id}`}
//               className="aspect-square bg-gray-900 rounded-lg overflow-hidden cursor-pointer transform transition duration-300 hover:scale-[1.02] hover:opacity-90"
//               onClick={() => handleImageClick(product.image)}
//             >
//               <img
//                 src={product.image}
//                 alt={product.title}
//                 className="w-full h-full object-cover"
//               />
//             </div>
//           ))}
//         </div>
//          <h1 className='text-white mt-1'>"The Rhythm" Essential Tee</h1>
//       </div>
//             {/* Fifthth Row - 3 Products */}
//       <div className="px-4 md:px-8 py-3">
//         <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-5">
//           {products.slice(0, 3).map((product) => (
//             <div
//               key={`row4-${product.id}`}
//               className="aspect-square bg-gray-900 rounded-lg overflow-hidden cursor-pointer transform transition duration-300 hover:scale-[1.02] hover:opacity-90"
//               onClick={() => handleImageClick(product.image)}
//             >
//               <img
//                 src={product.image}
//                 alt={product.title}
//                 className="w-full h-full object-cover"
              
//               />
            
//             </div>
//           ))}
//         </div>
//           <h1 className='text-white mt-1'>"The Rhythm" Essential Tee</h1>
//       </div>

//       {/* Footer Section */}
//       <div className="h-16 mt-6"></div> 

//       {/* Lightbox Modal  */}
//       {selectedImage && (
//         <div className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4">
//           <button
//             onClick={handleClose}
//             className="absolute top-4 right-4 text-white text-3xl hover:text-red-500 transition-colors z-50"
//           >
//             <X size={32} />
//           </button>
          
//           <button
//             onClick={() => navigateImage('prev')}
//             className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors z-40"
//           >
//             <ChevronLeft size={32} className="md:size-48" />
//           </button>

//           <div className="max-w-4xl max-h-[90vh]">
//             <img
//               src={selectedImage}
//               alt="Selected product"
//               className="w-full h-full object-contain rounded-lg shadow-2xl"
//             />
//           </div>

//           <button
//             onClick={() => navigateImage('next')}
//             className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors z-40"
//           >
//             <ChevronRight size={32} className="md:size-48" />
//           </button>
//         </div>
//       )}
//     </div>
//   );
// };

// export default ProductGallery;
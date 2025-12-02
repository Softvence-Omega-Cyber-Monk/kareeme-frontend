

import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';
import img from "@/assets/Frame 1321317894.png";
import img1 from "@/assets/comp1.png";
import img2 from "@/assets/comp2.png";
import img3 from "@/assets/comp3.png";
import img4 from "@/assets/comp4.png";
import img5 from "@/assets/comp5.png";
import img6 from "@/assets/comp6.png";
import img7 from "@/assets/comp9.png";
import img8 from "@/assets/comp8.png";


interface Product {
  id: number;
  image: string;
  title: string;
  price: string;
}

const ProductGallery: React.FC = () => {
  const products: Product[] = [
    { id: 1, image: img1, title: 'Black Graphic Tee', price: '$25' },
    { id: 2, image: img2, title: 'White Print Tee', price: '$22' },
    { id: 3, image: img3, title: 'Dark Graphic Tee', price: '$30' },
    { id: 4, image: img4, title: 'White Sneakers', price: '$60' },
    { id: 5, image: img5, title: 'Baseball Tee', price: '$28' },
    { id: 6, image: img6, title: 'Pink Lifestyle', price: '$35' },
    { id: 7, image: img7, title: 'Dark Hoodie', price: '$45' },
    { id: 8, image: img8, title: 'White Print Tee 2', price: '$22' },
  ];

  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const handleImageClick = (image: string) => setSelectedImage(image);
  const handleClose = () => setSelectedImage(null);

  const navigateImage = (direction: 'prev' | 'next') => {
    if (!selectedImage) return;
    const currentIndex = products.findIndex(p => p.image === selectedImage);
    const productLength = products.length;
    const newIndex = direction === 'prev'
      ? currentIndex === 0 ? productLength - 1 : currentIndex - 1
      : currentIndex === productLength - 1 ? 0 : currentIndex + 1;
    setSelectedImage(products[newIndex].image);
  };

  const renderProducts = (sliceStart: number, sliceEnd: number, cols: number) => (
    <div className="px-4 md:px-8 py-3">
      <div className={`grid grid-cols-2 md:grid-cols-${cols} gap-3 md:gap-5`}>
        {products.slice(sliceStart, sliceEnd).map((product) => (
          <div
            key={product.id}
            className="cursor-pointer transform transition duration-300 hover:scale-[1.02] hover:opacity-90"
            onClick={() => handleImageClick(product.image)}
          >
            <div className="aspect-square bg-gray-900 rounded-lg overflow-hidden">
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex justify-between items-center mt-2 px-1">
              <h1 className="text-white text-sm">{product.title}</h1>
              <p className="text-gray-400 text-sm">{product.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <div className="w-full max-w-7xl xl:max-w-[1350px] bg-black/70 mx-auto mt-5 rounded-lg shadow-2xl">
      {/* Header */}
      <div className="pt-8 pb-6 px-4 md:px-8">
        <h1 className="text-white text-xs md:text-sm font-light tracking-[0.3em] mb-1 uppercase">Browse Our</h1>
        <h2 className="text-white text-lg md:text-2xl font-bold tracking-[0.2em] uppercase">Product Line Up</h2>
      </div>

      {/* Product Rows */}
      {renderProducts(0, 3, 3)}
      {renderProducts(3, 6, 3)}
      {renderProducts(0, 2, 2)}

      {/* Hero Banner */}
      <div className="relative w-full aspect-[4/3] md:aspect-[21/9] lg:aspect-[16/5] rounded-lg overflow-hidden my-8">
        <img src={img} alt="Hero" className="w-full h-full object-cover blur-sm" />
        <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center p-4">
          {/* <h3 className="text-white text-2xl md:text-5xl lg:text-7xl font-black uppercase text-center leading-tight">
            New Drops <br /> Arrived
          </h3> */}
        </div>
      </div>


      {renderProducts(0, 3, 3)}
      {renderProducts(0, 3, 3)}




      {/* Footer spacing */}
      <div className="h-16 mt-6"></div>

      {/* Lightbox */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4">
          <button onClick={handleClose} className="absolute top-4 right-4 text-white text-3xl hover:text-red-500 transition-colors z-50">
            <X size={32} />
          </button>
          <button onClick={() => navigateImage('prev')} className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors z-40">
            <ChevronLeft size={32} />
          </button>
          <div className="max-w-4xl max-h-[90vh]">
            <img src={selectedImage} alt="Selected product" className="w-full h-full object-contain rounded-lg shadow-2xl" />
          </div>
          <button onClick={() => navigateImage('next')} className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors z-40">
            <ChevronRight size={32} />
          </button>
        </div>
      )}
    </div>
  );
};

export default ProductGallery;

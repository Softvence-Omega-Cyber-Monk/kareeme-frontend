import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ShoppingCart } from "lucide-react";
import img from "@/assets/Frame 1321317894.png";
import img1 from "@/assets/sart1.png";
import img2 from "@/assets/sart2.png";
import img3 from "@/assets/comp3.png";
import img4 from "@/assets/comp4.png";
import img5 from "@/assets/comp5.png";
import img6 from "@/assets/comp6.png";
import img7 from "@/assets/comp9.png";
import img8 from "@/assets/comp8.png";
import { addToCart as add } from "@/utils/cartUtils"; // Import from cartUtils
import { useAppDispatch } from "@/redux/hooks/redux-hook";
import { addToCart } from "@/redux/features/cart/cartSlice";

interface Product {
  id: number;
  image: string;
  title: string;
  price: number;
}

const ProductGallery: React.FC = () => {
  const navigate = useNavigate();
  const [hoveredProduct, setHoveredProduct] = useState<number | null>(null);
  const [showFeedback, setShowFeedback] = useState<number | null>(null);
  const dispatch = useAppDispatch();

  const products: Product[] = [
    { id: 1, image: img1, title: "Black Graphic Tee", price: 25 },
    { id: 2, image: img2, title: "White Print Tee", price: 22 },
    { id: 3, image: img3, title: "Dark Graphic Tee", price: 30 },
    { id: 4, image: img4, title: "White Sneakers", price: 60 },
    { id: 5, image: img5, title: "Baseball Tee", price: 28 },
    { id: 6, image: img6, title: "Pink Lifestyle", price: 35 },
    { id: 7, image: img7, title: "Dark Hoodie", price: 45 },
    { id: 8, image: img8, title: "White Print Tee 2", price: 22 },
  ];

  const handleAddToCart = (e: React.MouseEvent, product: Product) => {
    e.stopPropagation();

    // Add to cart using cartUtils
    add(product);
    dispatch(addToCart(product));

    // Show feedback
    setShowFeedback(product.id);
    setTimeout(() => {
      setShowFeedback(null);
    }, 1000);
  };

  const renderProducts = (
    sliceStart: number,
    sliceEnd: number,
    cols: number,
  ) => (
    <div className="px-4 md:px-8 py-3">
      <div className={`grid grid-cols-2 md:grid-cols-${cols} gap-2 md:gap-5`}>
        {products.slice(sliceStart, sliceEnd).map((product) => (
          <div
            key={product.id}
            className="relative cursor-pointer group"
            onMouseEnter={() => setHoveredProduct(product.id)}
            onMouseLeave={() => setHoveredProduct(null)}
          >
            {/* Product Image Container */}
            <div
              onClick={() => navigate(`/details/${product.id}`)}
              className="aspect-square bg-gray-900 rounded-lg overflow-hidden transition-transform duration-300 hover:scale-[1.03] relative"
            >
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-full object-cover"
              />

              {/* Add to Cart Button (Shows on hover) */}
              {(hoveredProduct === product.id ||
                showFeedback === product.id) && (
                <button
                  onClick={(e) => handleAddToCart(e, product)}
                  className={`absolute bottom-4 left-1/2 transform -translate-x-1/2 
                    ${showFeedback === product.id ? "bg-green-600" : "bg-blue-600 hover:bg-blue-700"} 
                    text-white px-4 py-2 rounded-full flex cursor-pointer items-center gap-2 text-sm font-medium
                    transition-all duration-300 z-10 shadow-lg`}
                >
                  <ShoppingCart size={16} />
                  {showFeedback === product.id ? "Added!" : "Add To Cart"}
                </button>
              )}
            </div>

            <div className="flex justify-between mt-2 px-1">
              <h1 className="text-white text-sm">{product.title}</h1>
              <p className="text-white text-sm">${product.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <div className="max-w-7xl mx-auto mt-5">
      {/* Header */}
      <div className="px-4 md:px-8 mb-6">
        <h1 className="text-white tracking-[0.2em] uppercase text-xl">
          Browse Our
        </h1>
        <h2 className="text-white text-2xl font-bold tracking-[0.2em] uppercase">
          Product Line Up
        </h2>
      </div>

      {renderProducts(0, 3, 3)}
      {renderProducts(3, 6, 3)}

      {/* Banner */}
      <div className="my-8">
        <img src={img} className="w-full rounded-xl" alt="Hero" />
      </div>

      {renderProducts(0, 3, 3)}
    </div>
  );
};

export default ProductGallery;

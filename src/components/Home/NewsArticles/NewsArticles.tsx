import React from "react";

// Import images (adjust paths as needed)
import pic1 from "@/assets/pic1.png";
import pic2 from "@/assets/pic2.png";
import pic3 from "@/assets/pic3.png";
import pic4 from "@/assets/pic4.png";
import pic5 from "@/assets/pic5.png";
import pic6 from "@/assets/pic6.png";
import pic7 from "@/assets/pic7.png";
import pic8 from "@/assets/pic8.png";
import pic9 from "@/assets/pic9.png";
import pic10 from "@/assets/pic10.png";
import pic11 from "@/assets/pic11.png";
import pic12 from "@/assets/pic12.png";

interface Article {
  id: number;
  title: string;
  date: string;
  image: string;
}

const NewsArticles: React.FC = () => {
  const articles: Article[] = [
    {
      id: 1,
      title:
        "OneiSlone Entertainment: Redefining the Rhythm of Tomorrow's Hits",
      date: "25 Oct, 2025",
      image: pic1,
    },
    {
      id: 2,
      title:
        "OneiSlone Entertainment: Redefining the Rhythm of Tomorrow's Hits",
      date: "25 Oct, 2025",
      image: pic2,
    },
    {
      id: 3,
      title:
        "OneiSlone Entertainment: Redefining the Rhythm of Tomorrow's Hits",
      date: "25 Oct, 2025",
      image: pic3,
    },
    {
      id: 4,
      title:
        "OneiSlone Entertainment: Redefining the Rhythm of Tomorrow's Hits",
      date: "25 Oct, 2025",
      image: pic4,
    },
    {
      id: 5,
      title:
        "OneiSlone Entertainment: Redefining the Rhythm of Tomorrow's Hits",
      date: "25 Oct, 2025",
      image: pic5,
    },
    {
      id: 6,
      title:
        "OneiSlone Entertainment: Redefining the Rhythm of Tomorrow's Hits",
      date: "25 Oct, 2025",
      image: pic6,
    },
    {
      id: 7,
      title:
        "OneiSlone Entertainment: Redefining the Rhythm of Tomorrow's Hits",
      date: "25 Oct, 2025",
      image: pic7,
    },
    {
      id: 8,
      title:
        "OneiSlone Entertainment: Redefining the Rhythm of Tomorrow's Hits",
      date: "25 Oct, 2025",
      image: pic8,
    },
    {
      id: 9,
      title:
        "OneiSlone Entertainment: Redefining the Rhythm of Tomorrow's Hits",
      date: "25 Oct, 2025",
      image: pic9,
    },
    {
      id: 10,
      title:
        "OneiSlone Entertainment: Redefining the Rhythm of Tomorrow's Hits",
      date: "25 Oct, 2025",
      image: pic10,
    },
    {
      id: 11,
      title:
        "OneiSlone Entertainment: Redefining the Rhythm of Tomorrow's Hits",
      date: "25 Oct, 2025",
      image: pic11,
    },
    {
      id: 12,
      title:
        "OneiSlone Entertainment: Redefining the Rhythm of Tomorrow's Hits",
      date: "25 Oct, 2025",
      image: pic12,
    },
  ];

  return (
    <>
      <style>{`
        @keyframes pulseSlow {
          0%, 100% {
            transform: scale(1);
            opacity: 0.2;
          }
          50% {
            transform: scale(1.1);
            opacity: 0.3;
          }
        }

        @keyframes gridDown {
          0% {
            transform: translateY(0);
          }
          100% {
            transform: translateY(50px);
          }
        }

        @keyframes gridRight {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(50px);
          }
        }

        @keyframes floatUp {
          0% {
            transform: translate(0, 0) rotate(0deg);
            opacity: 0;
          }
          10% {
            opacity: 0.3;
          }
          90% {
            opacity: 0.3;
          }
          100% {
            transform: translate(100px, -100vh) rotate(360deg);
            opacity: 0;
          }
        }

        @keyframes scanVertical {
          0% {
            top: -2%;
            opacity: 0;
          }
          10% {
            opacity: 1;
          }
          90% {
            opacity: 1;
          }
          100% {
            top: 102%;
            opacity: 0;
          }
        }

        .animate-pulse-slow {
          animation: pulseSlow ease-in-out infinite;
        }

        .animate-grid-down {
          animation: gridDown 20s linear infinite;
        }

        .animate-grid-right {
          animation: gridRight 25s linear infinite;
        }

        .animate-float-up {
          animation: floatUp linear infinite;
        }

        .animate-scan {
          animation: scanVertical 8s ease-in-out infinite;
        }
      `}</style>

      <div className="min-h-screen bg-black/50 relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {/* Gradient Orbs with Pulse Animation */}
          <div
            className="absolute w-[500px] h-[500px] rounded-full blur-3xl opacity-20 animate-pulse-slow"
            style={{
              top: "20%",
              left: "10%",
              background:
                "radial-gradient(circle, rgba(16, 185, 129, 0.4) 0%, transparent 70%)",
              animationDuration: "6s",
            }}
          />
          <div
            className="absolute w-[600px] h-[600px] rounded-full blur-3xl opacity-20 animate-pulse-slow"
            style={{
              bottom: "10%",
              right: "10%",
              background:
                "radial-gradient(circle, rgba(168, 85, 247, 0.4) 0%, transparent 70%)",
              animationDuration: "8s",
              animationDelay: "1s",
            }}
          />
          <div
            className="absolute w-[450px] h-[450px] rounded-full blur-3xl opacity-20 animate-pulse-slow"
            style={{
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              background:
                "radial-gradient(circle, rgba(59, 130, 246, 0.4) 0%, transparent 70%)",
              animationDuration: "7s",
              animationDelay: "2s",
            }}
          />

          {/* Moving Grid Lines */}
          <div className="absolute inset-0 opacity-10">
            <div
              className="absolute inset-0 animate-grid-down"
              style={{
                backgroundImage:
                  "linear-gradient(0deg, transparent 24%, rgba(16, 185, 129, 0.3) 25%, rgba(16, 185, 129, 0.3) 26%, transparent 27%, transparent 74%, rgba(16, 185, 129, 0.3) 75%, rgba(16, 185, 129, 0.3) 76%, transparent 77%, transparent)",
                backgroundSize: "50px 50px",
              }}
            />
            <div
              className="absolute inset-0 animate-grid-right"
              style={{
                backgroundImage:
                  "linear-gradient(90deg, transparent 24%, rgba(16, 185, 129, 0.3) 25%, rgba(16, 185, 129, 0.3) 26%, transparent 27%, transparent 74%, rgba(16, 185, 129, 0.3) 75%, rgba(16, 185, 129, 0.3) 76%, transparent 77%, transparent)",
                backgroundSize: "50px 50px",
              }}
            />
          </div>

          {/* Floating Particles */}
          {[...Array(25)].map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full bg-emerald-400 animate-float-up"
              style={{
                width: `${2 + Math.random() * 3}px`,
                height: `${2 + Math.random() * 3}px`,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                opacity: 0.3,
                animationDuration: `${15 + Math.random() * 15}s`,
                animationDelay: `${Math.random() * 5}s`,
              }}
            />
          ))}

          {/* Scanning Lines Effect */}
          <div className="absolute w-full h-px bg-gradient-to-r from-transparent via-emerald-500/50 to-transparent animate-scan" />
        </div>

        {/* Content */}
        <div className="text-white py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative z-10">
          {/* Header Section */}
          <div className="text-center mb-12">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 tracking-tight">
              NEWS & ARTICLES
            </h1>
            <p className="text-gray-400 text-sm sm:text-base max-w-3xl mx-auto leading-relaxed">
              At OneiSlone Entertainment, we believe in the power of stories to
              inspire, connect, and entertain. Dive into our News & Articles for
              the latest insights, trends, and behind-the-scenes glimpses of the
              entertainment world, where every tale matters and every voice
              counts.
            </p>
          </div>

          {/* Articles Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {articles.map((article) => (
              <div key={article.id} className="group cursor-pointer">
                {/* Image Container - Rectangle */}
                <div className="relative overflow-hidden rounded-lg mb-6 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-emerald-500/20">
                  <div className="relative aspect-[16/9] overflow-hidden bg-gray-900">
                    <img
                      src={article.image}
                      alt={article.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    {/* Overlay on hover */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  {/* Hover Border Effect */}
                  <div className="absolute inset-0 border-2 border-transparent group-hover:border-emerald-500/50 rounded-lg transition-all duration-300 pointer-events-none" />
                </div>

                {/* Content - Separate Box */}
                <div>
                  <h3 className="text-base sm:text-lg font-semibold mb-3 line-clamp-2 group-hover:text-emerald-400 transition-colors duration-300">
                    {article.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-500 group-hover:text-gray-400 transition-colors duration-300">
                    {article.date}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default NewsArticles;

///import { useEffect, useRef, useState } from 'react';

// // Import images
// import pic1 from "@/assets/pic1.png";
// import pic2 from "@/assets/pic2.png";
// import pic3 from "@/assets/pic3.png";
// import pic4 from "@/assets/pic4.png";
// import pic5 from "@/assets/pic5.png";
// import pic6 from "@/assets/pic6.png";
// import pic7 from "@/assets/pic7.png";
// import pic8 from "@/assets/pic8.png";
// import pic9 from "@/assets/pic9.png";
// import pic10 from "@/assets/pic10.png";
// import pic11 from "@/assets/pic11.png";
// import pic12 from "@/assets/pic12.png";

// interface Article {
//   id: number;
//   title: string;
//   date: string;
//   image: string;
// }

// const NewsArticles = () => {
//   const [visibleCards, setVisibleCards] = useState<boolean[]>(new Array(12).fill(false));
//   const sectionRef = useRef<HTMLDivElement>(null);
//   const canvasRef = useRef<HTMLCanvasElement>(null);

//   const articles: Article[] = [
//     { id: 1, title: "OneiSlone Entertainment: Redefining the Rhythm of Tomorrow's Hits", date: "25 Oct, 2025", image: pic1 },
//     { id: 2, title: "OneiSlone Entertainment: Redefining the Rhythm of Tomorrow's Hits", date: "25 Oct, 2025", image: pic2 },
//     { id: 3, title: "OneiSlone Entertainment: Redefining the Rhythm of Tomorrow's Hits", date: "25 Oct, 2025", image: pic3 },
//     { id: 4, title: "OneiSlone Entertainment: Redefining the Rhythm of Tomorrow's Hits", date: "25 Oct, 2025", image: pic4 },
//     { id: 5, title: "OneiSlone Entertainment: Redefining the Rhythm of Tomorrow's Hits", date: "25 Oct, 2025", image: pic5 },
//     { id: 6, title: "OneiSlone Entertainment: Redefining the Rhythm of Tomorrow's Hits", date: "25 Oct, 2025", image: pic6 },
//     { id: 7, title: "OneiSlone Entertainment: Redefining the Rhythm of Tomorrow's Hits", date: "25 Oct, 2025", image: pic7 },
//     { id: 8, title: "OneiSlone Entertainment: Redefining the Rhythm of Tomorrow's Hits", date: "25 Oct, 2025", image: pic8 },
//     { id: 9, title: "OneiSlone Entertainment: Redefining the Rhythm of Tomorrow's Hits", date: "25 Oct, 2025", image: pic9 },
//     { id: 10, title: "OneiSlone Entertainment: Redefining the Rhythm of Tomorrow's Hits", date: "25 Oct, 2025", image: pic10 },
//     { id: 11, title: "OneiSlone Entertainment: Redefining the Rhythm of Tomorrow's Hits", date: "25 Oct, 2025", image: pic11 },
//     { id: 12, title: "OneiSlone Entertainment: Redefining the Rhythm of Tomorrow's Hits", date: "25 Oct, 2025", image: pic12 }
//   ];

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((entry) => {
//           if (entry.isIntersecting) {
//             articles.forEach((_, index) => {
//               setTimeout(() => {
//                 setVisibleCards((prev) => {
//                   const newState = [...prev];
//                   newState[index] = true;
//                   return newState;
//                 });
//               }, index * 100);
//             });
//             observer.unobserve(entry.target);
//           }
//         });
//       },
//       { threshold: 0.1 }
//     );

//     if (sectionRef.current) {
//       observer.observe(sectionRef.current);
//     }

//     return () => {
//       if (sectionRef.current) {
//         observer.unobserve(sectionRef.current);
//       }
//     };
//   }, []);

//   useEffect(() => {
//     const canvas = canvasRef.current;
//     if (!canvas) return;

//     const ctx = canvas.getContext('2d');
//     if (!ctx) return;

//     let animationFrameId: number;
//     let particles: Particle[] = [];

//     const resizeCanvas = () => {
//       canvas.width = canvas.offsetWidth;
//       canvas.height = canvas.offsetHeight;
//     };

//     resizeCanvas();
//     window.addEventListener('resize', resizeCanvas);

//     class Particle {
//       x: number;
//       y: number;
//       size: number;
//       speedX: number;
//       speedY: number;
//       opacity: number;
//       canvas: HTMLCanvasElement;
//       ctx: CanvasRenderingContext2D;
//       hue: number;

//       constructor(canvas: HTMLCanvasElement, ctx: CanvasRenderingContext2D) {
//         this.canvas = canvas;
//         this.ctx = ctx;
//         this.x = Math.random() * this.canvas.width;
//         this.y = Math.random() * this.canvas.height;
//         this.size = Math.random() * 2.5 + 1;
//         this.speedX = Math.random() * 0.6 - 0.3;
//         this.speedY = Math.random() * 0.6 - 0.3;
//         this.opacity = Math.random() * 0.5 + 0.15;
//         this.hue = Math.random() * 60 + 140; // Green to cyan range
//       }

//       update() {
//         this.x += this.speedX;
//         this.y += this.speedY;

//         if (this.x > this.canvas.width) this.x = 0;
//         if (this.x < 0) this.x = this.canvas.width;
//         if (this.y > this.canvas.height) this.y = 0;
//         if (this.y < 0) this.y = this.canvas.height;
//       }

//       draw() {
//         this.ctx.fillStyle = `hsla(${this.hue}, 70%, 50%, ${this.opacity})`;
//         this.ctx.beginPath();
//         this.ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
//         this.ctx.fill();
//       }
//     }

//     const init = () => {
//       particles = [];
//       const particleCount = Math.floor((canvas.width * canvas.height) / 12000);
//       for (let i = 0; i < particleCount; i++) {
//         particles.push(new Particle(canvas, ctx));
//       }
//     };

//     const animate = () => {
//       ctx.fillStyle = 'rgba(0, 0, 0, 0.06)';
//       ctx.fillRect(0, 0, canvas.width, canvas.height);

//       particles.forEach(particle => {
//         particle.update();
//         particle.draw();
//       });

//       particles.forEach((particleA, indexA) => {
//         particles.slice(indexA + 1).forEach(particleB => {
//           const dx = particleA.x - particleB.x;
//           const dy = particleA.y - particleB.y;
//           const distance = Math.sqrt(dx * dx + dy * dy);

//           if (distance < 130) {
//             const avgHue = (particleA.hue + particleB.hue) / 2;
//             ctx.strokeStyle = `hsla(${avgHue}, 70%, 50%, ${0.18 * (1 - distance / 130)})`;
//             ctx.lineWidth = 1;
//             ctx.beginPath();
//             ctx.moveTo(particleA.x, particleA.y);
//             ctx.lineTo(particleB.x, particleB.y);
//             ctx.stroke();
//           }
//         });
//       });

//       animationFrameId = requestAnimationFrame(animate);
//     };

//     init();
//     animate();

//     return () => {
//       window.removeEventListener('resize', resizeCanvas);
//       cancelAnimationFrame(animationFrameId);
//     };
//   }, []);

//   return (
//     <div className="min-h-screen bg-black relative overflow-hidden" ref={sectionRef}>
//       {/* Canvas Motion Background */}
//       <canvas
//         ref={canvasRef}
//         className="absolute inset-0 w-full h-full"
//         style={{ zIndex: 0 }}
//       />

//       {/* Content */}
//       <div className="text-white py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative z-10">
//         {/* Header Section */}
//         <div className="text-center mb-12">
//           <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 tracking-tight">
//             NEWS & ARTICLES
//           </h1>
//           <p className="text-gray-400 text-sm sm:text-base max-w-3xl mx-auto leading-relaxed">
//             At OneiSlone Entertainment, we believe in the power of stories to inspire, connect, and entertain.
//             Dive into our News & Articles for the latest insights, trends, and behind-the-scenes glimpses of
//             the entertainment world, where every tale matters and every voice counts.
//           </p>
//         </div>

//         {/* Articles Grid */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
//           {articles.map((article, index) => (
//             <div
//               key={article.id}
//               className={`group cursor-pointer transition-all duration-500 ${
//                 visibleCards[index]
//                   ? 'opacity-100 translate-y-0'
//                   : 'opacity-0 translate-y-10'
//               }`}
//             >
//               {/* Image Container */}
//               <div className="relative overflow-hidden rounded-lg mb-6 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-emerald-500/20">
//                 <div className="relative aspect-[16/9] overflow-hidden bg-gray-900">
//                   <img
//                     src={article.image}
//                     alt={article.title}
//                     className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
//                   />
//                   {/* Overlay on hover */}
//                   <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
//                 </div>
//                 {/* Hover Border Effect */}
//                 <div className="absolute inset-0 border-2 border-transparent group-hover:border-emerald-500/50 rounded-lg transition-all duration-300 pointer-events-none" />
//               </div>

//               {/* Content */}
//               <div>
//                 <h3 className="text-base sm:text-lg font-semibold mb-3 line-clamp-2 group-hover:text-emerald-400 transition-colors duration-300">
//                   {article.title}
//                 </h3>
//                 <p className="text-xs sm:text-sm text-gray-500 group-hover:text-gray-400 transition-colors duration-300">
//                   {article.date}
//                 </p>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default NewsArticles;

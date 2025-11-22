import brand from '../../../assets/brand.png';
import education from '../../../assets/education.png';
import marketing from '../../../assets/marketing.png';

const SupportSection = () => {
  const supportFeatures = [
    { icon: brand, title: 'Brand Development' },
    { icon: education, title: 'Educational Workshops' },
    { icon: marketing, title: 'Marketing & PR Assistance' }
  ];

  return (
    <div className="bg-gray-900 py-12 sm:py-16 md:py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white/20 mb-6 sm:mb-8 text-center">
          <span className="text-white">COMPREHENSIVE ARTIST SUPPORT</span>
        </h2>
        
        <p className="text-gray-400 text-base sm:text-lg max-w-5xl mx-auto mb-12 sm:mb-16 text-center px-4">
          Our dedicated team is here to support you at every stage of your career. We offer personalized guidance, workshops, and resources to help you navigate the complexities of the music industry.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 justify-items-center">
          {supportFeatures.map((feature, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-gray-800 to-gray-900 p-6 sm:p-8 rounded-2xl hover:scale-105 transition-transform duration-300 border border-gray-700 hover:border-green-500 cursor-pointer w-full max-w-[320px]"
            >
              <div className="flex items-center gap-3">
                <img 
                  src={feature.icon} 
                  alt={feature.title}
                  className="w-10 h-10 sm:w-12 sm:h-12 object-contain flex-shrink-0"
                />
                <h3 
                  className="text-[#F2F2F2] font-medium leading-[130%]"
                  style={{
                    fontFamily: 'Montserrat, sans-serif',
                    fontSize: '16px',
                    fontWeight: 500,
                    lineHeight: '130%'
                  }}
                >
                  {feature.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SupportSection;



// //import { useEffect, useRef, useState } from 'react';
// import brand from '../../../assets/brand.png';
// import education from '../../../assets/education.png';
// import marketing from '../../../assets/marketing.png';

// const SupportSection = () => {
//   const [visibleCards, setVisibleCards] = useState<boolean[]>([false, false, false]);
//   const sectionRef = useRef<HTMLDivElement>(null);
//   const canvasRef = useRef<HTMLCanvasElement>(null);

//   const supportFeatures = [
//     { icon: brand, title: 'Brand Development' },
//     { icon: education, title: 'Educational Workshops' },
//     { icon: marketing, title: 'Marketing & PR Assistance' }
//   ];

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((entry) => {
//           if (entry.isIntersecting) {
//             supportFeatures.forEach((_, index) => {
//               setTimeout(() => {
//                 setVisibleCards((prev) => {
//                   const newState = [...prev];
//                   newState[index] = true;
//                   return newState;
//                 });
//               }, index * 250);
//             });
//             observer.unobserve(entry.target);
//           }
//         });
//       },
//       { threshold: 0.2 }
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

//       constructor(canvas: HTMLCanvasElement, ctx: CanvasRenderingContext2D) {
//         this.canvas = canvas;
//         this.ctx = ctx;
//         this.x = Math.random() * this.canvas.width;
//         this.y = Math.random() * this.canvas.height;
//         this.size = Math.random() * 2 + 1;
//         this.speedX = Math.random() * 0.5 - 0.25;
//         this.speedY = Math.random() * 0.5 - 0.25;
//         this.opacity = Math.random() * 0.4 + 0.1;
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
//         this.ctx.fillStyle = `rgba(34, 197, 94, ${this.opacity})`;
//         this.ctx.beginPath();
//         this.ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
//         this.ctx.fill();
//       }
//     }

//     const init = () => {
//       particles = [];
//       const particleCount = Math.floor((canvas.width * canvas.height) / 15000);
//       for (let i = 0; i < particleCount; i++) {
//         particles.push(new Particle(canvas, ctx));
//       }
//     };

//     const animate = () => {
//       ctx.fillStyle = 'rgba(17, 24, 39, 0.05)';
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

//           if (distance < 150) {
//             ctx.strokeStyle = `rgba(34, 197, 94, ${0.15 * (1 - distance / 150)})`;
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
//     <div className="bg-gray-900 py-12 sm:py-16 md:py-20 px-4 relative overflow-hidden" ref={sectionRef}>
//       {/* Canvas Motion Background */}
//       <canvas
//         ref={canvasRef}
//         className="absolute inset-0 w-full h-full"
//         style={{ zIndex: 0 }}
//       />

//       <div className="max-w-7xl mx-auto relative z-10">
//         <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white/20 mb-6 sm:mb-8 text-center">
//           <span className="text-white">COMPREHENSIVE ARTIST SUPPORT</span>
//         </h2>
        
//         <p className="text-gray-400 text-base sm:text-lg max-w-5xl mx-auto mb-12 sm:mb-16 text-center px-4">
//           Our dedicated team is here to support you at every stage of your career. We offer personalized guidance, workshops, and resources to help you navigate the complexities of the music industry.
//         </p>

//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 justify-items-center">
//           {supportFeatures.map((feature, index) => (
//             <div
//               key={index}
//               className={`bg-gradient-to-br from-gray-800 to-gray-900 p-6 sm:p-8 rounded-2xl border border-gray-700 hover:border-green-500 cursor-pointer w-full max-w-[320px] transition-all duration-500 ${
//                 visibleCards[index]
//                   ? 'opacity-100 translate-y-0'
//                   : 'opacity-0 translate-y-10'
//               } hover:scale-105`}
//             >
//               <div className="flex items-center gap-3">
//                 <img 
//                   src={feature.icon} 
//                   alt={feature.title}
//                   className="w-10 h-10 sm:w-12 sm:h-12 object-contain flex-shrink-0"
//                 />
//                 <h3 
//                   className="text-[#F2F2F2] font-medium leading-[130%]"
//                   style={{
//                     fontFamily: 'Montserrat, sans-serif',
//                     fontSize: '16px',
//                     fontWeight: 500,
//                     lineHeight: '130%'
//                   }}
//                 >
//                   {feature.title}
//                 </h3>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default SupportSection;
import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Sun, Moon } from 'lucide-react';

export default function OrbitCarousel() {
  const [isDark, setIsDark] = useState(false);
  const [rotation, setRotation] = useState(0);
  const [isHovering, setIsHovering] = useState(false);
  const containerRef = useRef(null);

  const speed = 100;
  const zDepth = 350;
  const imageSize = 175;
  const borderRadius = 12;
  const backfaceVisible = false;
  const pauseOnHover = true;

  const images = [
    { id: 1, url: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=400&fit=crop', label: 'Mountains' },
    { id: 2, url: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=400&h=400&fit=crop', label: 'Ocean' },
    { id: 3, url: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=400&fit=crop', label: 'Beach' },
    { id: 4, url: 'https://images.unsplash.com/photo-1519904981063-b0cf448d479e?w=400&h=400&fit=crop', label: 'Sunset' },
    { id: 5, url: 'https://images.unsplash.com/photo-1760341332217-e6c24d1e142c?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&h=400', label: 'Mountain Tree' },
    { id: 6, url: 'https://images.unsplash.com/photo-1495567720989-cebdbdd97913?w=400&h=400&fit=crop', label: 'Stars' },
  ];

  const numImages = images.length;
  const angleSlice = 360 / numImages;

  React.useEffect(() => {
    if (isHovering && pauseOnHover) return;

    const interval = setInterval(() => {
      setRotation(prev => (prev + 0.5) % 360);
    }, 50);

    return () => clearInterval(interval);
  }, [isHovering, pauseOnHover]);

  const handleImageClick = (index) => {
    const targetRotation = -index * angleSlice;
    setRotation(targetRotation % 360);
  };

  return (
    <div className={`w-full min-h-screen transition-colors duration-300 ${isDark ? 'bg-gray-900' : 'bg-gray-50'}`}>
      {/* Orthogonal Grid Background */}
      <div className="fixed inset-0 opacity-30 pointer-events-none">
        <svg width="100%" height="100%">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke={isDark ? '#fff' : '#000'} strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      {/* Theme Toggle */}
      <button
        onClick={() => setIsDark(!isDark)}
        className={`fixed top-6 right-6 z-50 p-3 rounded-full transition-all ${
          isDark
            ? 'bg-gray-800 text-yellow-400 hover:bg-gray-700'
            : 'bg-white text-gray-800 hover:bg-gray-100 shadow-lg'
        }`}
      >
        {isDark ? <Sun size={24} /> : <Moon size={24} />}
      </button>

      <div className="relative w-full h-screen flex flex-col items-center justify-center overflow-hidden">
        {/* 3D Carousel Container */}
        <div
          ref={containerRef}
          className="relative w-full h-full flex items-center justify-center"
          style={{ perspective: '1200px' }}
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
        >
          {/* Rotating Group */}
          <motion.div
            className="relative"
            style={{
              width: imageSize * 2,
              height: imageSize * 2,
              transformStyle: 'preserve-3d',
            }}
            animate={{ rotateY: rotation }}
            transition={{ type: 'tween', duration: 0.5, ease: 'easeOut' }}
          >
            {images.map((image, index) => {
              const angle = (index * angleSlice * Math.PI) / 180;
              const x = Math.cos(angle) * zDepth;
              const z = Math.sin(angle) * zDepth;

              return (
                <motion.div
                  key={image.id}
                  className="absolute cursor-pointer"
                  style={{
                    width: imageSize,
                    height: imageSize,
                    left: '50%',
                    top: '50%',
                    marginLeft: -imageSize / 2,
                    marginTop: -imageSize / 2,
                    transformStyle: 'preserve-3d',
                    backfaceVisibility: backfaceVisible ? 'visible' : 'hidden',
                  }}
                  animate={{
                    x,
                    z,
                    rotateY: -rotation,
                  }}
                  transition={{ type: 'tween', duration: 0.5, ease: 'easeOut' }}
                  onClick={() => handleImageClick(index)}
                  whileHover={{ scale: 1.15 }}
                >
                  {/* Image Card */}
                  <div
                    className={`w-full h-full rounded-lg shadow-2xl overflow-hidden cursor-pointer transition-transform ${
                      isDark ? 'ring-2 ring-gray-700' : 'ring-2 ring-white'
                    }`}
                    style={{ borderRadius: `${borderRadius}px` }}
                  >
                    {/* Image */}
                    <img
                      src={image.url}
                      alt={image.label}
                      className="w-full h-full object-cover"
                    />

                    {/* Overlay Label */}
                    <div className="absolute inset-0 bg-black/30 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                      <div className="text-white text-center font-bold text-lg drop-shadow-lg">
                        {image.label}
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>

      {/* Tip Footer */}
      <div className="fixed bottom-8 left-8">
        <p className={`text-sm font-medium ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
          💡 Click any image to snap it to the front • Hover to pause
        </p>
      </div>
    </div>
  );
}

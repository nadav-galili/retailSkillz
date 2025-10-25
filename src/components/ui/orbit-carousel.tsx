import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import hrDashboard from "@/assets/images/hr_dashboard.png";
import dashboardExp from "@/assets/images/dashboard_exp.png";
import usersTable from "@/assets/images/users_table_exm.png";
import coursesExm from "@/assets/images/courses_exm.png";
import foodRegExm from "@/assets/images/food_reg_exm.png";

export default function OrbitCarousel() {
  const [rotation, setRotation] = useState(0);
  const [isHovering, setIsHovering] = useState(false);
  const containerRef = useRef(null);

  const zDepth = 450;
  const imageSize = 350;
  const borderRadius = 12;
  const backfaceVisible = false;
  const pauseOnHover = true;

  const images = [
    { id: 1, url: hrDashboard, label: "HR Dashboard" },
    { id: 2, url: dashboardExp, label: "Dashboard Experience" },
    { id: 3, url: foodRegExm, label: "Food Registration Example" },
    { id: 4, url: coursesExm, label: "Courses Example" },
    {
      id: 5,
      url: usersTable,
      label: "Users Table Example",
    },
  ];

  const numImages = images.length;
  const angleSlice = 360 / numImages;

  React.useEffect(() => {
    if (isHovering && pauseOnHover) return;

    const interval = setInterval(() => {
      setRotation((prev) => (prev + 0.5) % 360);
    }, 50);

    return () => clearInterval(interval);
  }, [isHovering, pauseOnHover]);

  const handleImageClick = (index: number) => {
    const targetRotation = -index * angleSlice;
    setRotation(targetRotation % 360);
  };

  return (
    <div className="relative w-full h-[550px] flex flex-col items-center justify-center overflow-hidden">
      <div
        ref={containerRef}
        className="relative w-full h-full flex items-center justify-center"
        style={{ perspective: "1200px" }}
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}>
        <motion.div
          className="relative"
          style={{
            width: imageSize * 2,
            height: imageSize * 2,
            transformStyle: "preserve-3d",
          }}
          animate={{ rotateY: rotation }}
          transition={{ type: "tween", duration: 0.5, ease: "easeOut" }}>
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
                  left: "50%",
                  top: "50%",
                  marginLeft: -imageSize / 2,
                  marginTop: -imageSize / 2,
                  transformStyle: "preserve-3d",
                  backfaceVisibility: backfaceVisible ? "visible" : "hidden",
                }}
                animate={{
                  x,
                  z,
                  rotateY: -rotation,
                }}
                transition={{ type: "tween", duration: 0.5, ease: "easeOut" }}
                onClick={() => handleImageClick(index)}
                whileHover={{ scale: 1.15 }}>
                <div
                  className={`w-full h-full rounded-lg shadow-2xl overflow-hidden cursor-pointer transition-transform ring-2 ring-white`}
                  style={{ borderRadius: `${borderRadius}px` }}>
                  <img
                    src={image.url}
                    alt={image.label}
                    className="w-full h-full object-cover"
                  />

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
  );
}

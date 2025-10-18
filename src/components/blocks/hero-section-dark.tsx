import * as React from "react";
import { cn } from "@/lib/utils";
import hrDashboard from "@/assets/images/hr_dashboard.png";
import { motion, useReducedMotion } from "motion/react";

// Professional animation variants with enhanced visual impact for B2B SaaS
const heroAnimations = {
  container: {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.12,
        delayChildren: 0.1,
      },
    },
  },
  // Enhanced title animation with professional slide-up effect
  titleMain: {
    hidden: {
      opacity: 0,
      y: 40,
      scale: 0.96,
      filter: "blur(4px)",
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      filter: "blur(0px)",
      transition: {
        duration: 0.9,
      },
    },
  },
  // Special gradient text animation with shimmer effect
  gradientText: {
    hidden: {
      opacity: 0,
      y: 20,
      scale: 0.98,
      backgroundPosition: "200% center",
      filter: "blur(2px)",
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      backgroundPosition: "0% center",
      filter: "blur(0px)",
      transition: {
        duration: 1.4,
        delay: 0.2,
      },
    },
  },
  // Description with fade-in and slight movement
  description: {
    hidden: {
      opacity: 0,
      y: 25,
      scale: 0.98,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        delay: 0.1,
      },
    },
  },
  // Enhanced CTA button with professional hover states
  ctaButton: {
    hidden: {
      opacity: 0,
      y: 30,
      scale: 0.92,
      rotateX: 15,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      rotateX: 0,
      transition: {
        duration: 0.8,
        delay: 0.15,
      },
    },
    hover: {
      scale: 1.02,
      y: -2,
      rotateX: -2,
      transition: {
        duration: 0.3,
      },
    },
    tap: {
      scale: 0.98,
      y: 0,
      transition: {
        duration: 0.15,
      },
    },
  },
  // Enhanced image animation with depth
  image: {
    hidden: {
      opacity: 0,
      y: 60,
      scale: 0.92,
      rotateX: 25,
      filter: "blur(8px)",
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      rotateX: 0,
      filter: "blur(0px)",
      transition: {
        duration: 1.2,
        delay: 0.4,
      },
    },
  },
  // Floating animation for the image
  imageFloat: {
    y: [-5, 5, -5],
    transition: {
      duration: 6,
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
};

interface HeroSectionProps extends React.HTMLAttributes<HTMLDivElement> {
  title?: string;
  subtitle?: {
    regular: string;
    gradient: string;
  };
  description?: string;
  ctaText?: string;
  ctaHref?: string;
  bottomImage?: {
    light: string;
    dark: string;
  };
  gridOptions?: {
    angle?: number;
    cellSize?: number;
    opacity?: number;
    lightLineColor?: string;
    darkLineColor?: string;
  };
}

const RetroGrid = ({
  angle = 65,
  cellSize = 60,
  opacity = 0.5,
  lightLineColor = "gray",
  darkLineColor = "gray",
}) => {
  const gridStyles = {
    "--grid-angle": `${angle}deg`,
    "--cell-size": `${cellSize}px`,
    "--opacity": opacity,
    "--light-line": lightLineColor,
    "--dark-line": darkLineColor,
  } as React.CSSProperties;

  return (
    <div
      className={cn(
        "pointer-events-none absolute size-full overflow-hidden [perspective:200px]",
        `opacity-[var(--opacity)]`
      )}
      style={gridStyles}>
      <div className="absolute inset-0 [transform:rotateX(var(--grid-angle))]">
        <div className="animate-grid [background-image:linear-gradient(to_right,var(--light-line)_1px,transparent_0),linear-gradient(to_bottom,var(--light-line)_1px,transparent_0)] [background-repeat:repeat] [background-size:var(--cell-size)_var(--cell-size)] [height:300vh] [inset:0%_0px] [margin-left:-200%] [transform-origin:100%_0_0] [width:600vw] dark:[background-image:linear-gradient(to_right,var(--dark-line)_1px,transparent_0),linear-gradient(to_bottom,var(--dark-line)_1px,transparent_0)]" />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-white to-transparent to-90% dark:from-black" />
    </div>
  );
};

const HeroSection = React.forwardRef<HTMLDivElement, HeroSectionProps>(
  (
    {
      className,
      subtitle = {
        regular: "מערכת למידה מבוססת ענן - ",
        gradient: "גישה מכל מקום, בכל זמן, ללא התקנות והטמעות",
      },
      description = "פלטפורמת Retail-Skillz מאפשרת לכם לנהל הכשרות עובדים ברמה הגבוהה ביותר: דשבורד בזמן אמת, ניתוחי AI, אבטחת מידע מתקדמת ותמיכה טלפונית . המערכת פועלת מכל מכשיר עם סיסמא מאובטחת",
      ctaText = "קבלו הצעת מחיר בהתאמה אישית",
      ctaHref = "#contact",
      bottomImage = {
        light: hrDashboard,
        dark: hrDashboard,
      },
      gridOptions,
      ...props
    },
    ref
  ) => {
    const shouldReduceMotion = useReducedMotion();

    // Simplified animations for users who prefer reduced motion - accessibility first
    const animations = shouldReduceMotion
      ? {
          container: {
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { duration: 0.3, staggerChildren: 0.1 },
            },
          },
          titleMain: {
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { duration: 0.3 } },
          },
          gradientText: {
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { duration: 0.3 } },
          },
          description: {
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { duration: 0.3 } },
          },
          ctaButton: {
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { duration: 0.3 } },
          },
          image: {
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { duration: 0.3 } },
          },
          imageFloat: {},
        }
      : heroAnimations;
    return (
      <div className={cn("relative", className)} ref={ref} {...props}>
        <div className="absolute top-0 z-[0] h-screen w-screen bg-purple-950/10 dark:bg-purple-950/10 bg-[radial-gradient(ellipse_20%_80%_at_50%_-20%,rgba(120,119,198,0.15),rgba(255,255,255,0))] dark:bg-[radial-gradient(ellipse_20%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]" />
        <section className="relative max-w-full mx-auto z-1">
          <RetroGrid {...gridOptions} />
          <div className="max-w-screen-xl z-10 mx-auto px-4 py-28 gap-12 md:px-8">
            <motion.div
              className="space-y-5 max-w-4xl leading-0 lg:leading-5 mx-auto text-center"
              dir="rtl"
              initial="hidden"
              animate="visible"
              variants={animations.container}>
              <motion.h2
                className="text-4xl tracking-tighter font-geist bg-clip-text text-transparent mx-auto md:text-6xl bg-[linear-gradient(180deg,_#000_0%,_rgba(0,_0,_0,_0.75)_100%)] dark:bg-[linear-gradient(180deg,_#FFF_0%,_rgba(255,_255,_255,_0.00)_202.08%)]"
                variants={animations.titleMain}>
                {subtitle.regular}
                <motion.span
                  className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-500 dark:from-purple-300 dark:to-orange-200 bg-[length:200%_100%] inline-block"
                  variants={animations.gradientText}
                  style={{ backgroundSize: "200% 100%" }}>
                  {subtitle.gradient}
                </motion.span>
              </motion.h2>
              <motion.p
                className="max-w-3xl mx-auto text-gray-600 dark:text-gray-300 text-lg leading-relaxed"
                variants={animations.description}>
                {description}
              </motion.p>
              <motion.div
                className="items-center justify-center gap-x-3 space-y-3 sm:flex sm:space-y-0"
                variants={animations.ctaButton}
                whileHover={!shouldReduceMotion ? "hover" : undefined}
                whileTap={!shouldReduceMotion ? "tap" : undefined}>
                <span className="relative inline-block overflow-hidden rounded-full p-[1.5px]">
                  <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
                  <div className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-white dark:bg-gray-950 text-xs font-medium backdrop-blur-3xl">
                    <a
                      href={ctaHref}
                      className="inline-flex rounded-full text-center group items-center w-full justify-center bg-gradient-to-tr from-zinc-300/20 via-purple-400/30 to-transparent dark:from-zinc-300/5 dark:via-purple-400/20 text-gray-900 dark:text-white border-input border-[1px] hover:bg-gradient-to-tr hover:from-zinc-300/30 hover:via-purple-400/40 hover:to-transparent dark:hover:from-zinc-300/10 dark:hover:via-purple-400/30 transition-all sm:w-auto py-4 px-10 text-lg font-semibold">
                      {ctaText}
                    </a>
                  </div>
                </span>
              </motion.div>
            </motion.div>
            {bottomImage && (
              <motion.div
                className="mt-20 mx-10 relative z-10 perspective-1000"
                initial="hidden"
                animate="visible"
                variants={animations.image}>
                <motion.div
                  className="relative"
                  animate={
                    !shouldReduceMotion ? animations.imageFloat : undefined
                  }>
                  <motion.img
                    src={bottomImage.light}
                    className="w-full shadow-2xl rounded-lg border border-gray-200 dark:hidden transform-gpu"
                    alt="מערכת ניהול סרטוני למידה עם דשבורד מתקדם"
                    whileHover={
                      !shouldReduceMotion
                        ? {
                            scale: 1.03,
                            y: -8,
                            rotateX: -2,
                            boxShadow: "0 35px 60px -12px rgba(0, 0, 0, 0.3)",
                            transition: {
                              duration: 0.4,
                            },
                          }
                        : undefined
                    }
                    style={{
                      transformStyle: "preserve-3d",
                    }}
                  />
                  <motion.img
                    src={bottomImage.dark}
                    className="hidden w-full shadow-2xl rounded-lg border border-gray-800 dark:block transform-gpu"
                    alt="מערכת ניהול סרטוני למידה עם דשבורד מתקדם"
                    whileHover={
                      !shouldReduceMotion
                        ? {
                            scale: 1.03,
                            y: -8,
                            rotateX: -2,
                            boxShadow: "0 35px 60px -12px rgba(0, 0, 0, 0.4)",
                            transition: {
                              duration: 0.4,
                            },
                          }
                        : undefined
                    }
                    style={{
                      transformStyle: "preserve-3d",
                    }}
                  />

                  {/* Subtle glow effect for premium feel */}
                  <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-purple-500/10 to-pink-500/10 opacity-0 transition-opacity duration-300 hover:opacity-100 pointer-events-none" />
                </motion.div>
              </motion.div>
            )}
          </div>
        </section>
      </div>
    );
  }
);
HeroSection.displayName = "HeroSection";

export { HeroSection };

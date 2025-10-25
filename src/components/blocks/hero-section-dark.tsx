import * as React from "react";
import { cn } from "@/lib/utils";
import hrDashboard from "@/assets/images/hr_dashboard.png";
import dashboardExp from "@/assets/images/dashboard_exp.png";
import lighthouse from "@/assets/images/lighthouse.png";
import retailSkillz from "@/assets/images/retailSkillz.png";
import { motion, useReducedMotion } from "motion/react";
import mixpanel from "mixpanel-browser";
import OrbitCarousel from "../ui/orbit-carousel";

// Enhanced mobile detection with performance optimization
const useIsMobile = () => {
  const [isMobile, setIsMobile] = React.useState(false);

  React.useEffect(() => {
    const checkMobile = () => {
      const mobile =
        window.innerWidth < 768 ||
        /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
          navigator.userAgent
        );
      setIsMobile(mobile);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile, { passive: true });
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return isMobile;
};

// Hook for managing will-change properties to prevent memory leaks
const useWillChange = (isMobile: boolean, isAnimating: boolean) => {
  React.useEffect(() => {
    if (isMobile) {
      const elements = document.querySelectorAll("[data-will-change]");
      elements.forEach((element) => {
        const htmlElement = element as HTMLElement;
        if (isAnimating) {
          htmlElement.style.willChange = "transform, opacity";
        } else {
          // Clean up will-change after animation completes
          setTimeout(() => {
            htmlElement.style.willChange = "auto";
          }, 500);
        }
      });
    }
  }, [isMobile, isAnimating]);
};

// Professional animation variants optimized for better performance
const heroAnimations = {
  container: {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.7,
        staggerChildren: 0.1,
        delayChildren: 0.08,
      },
    },
  },
  // Enhanced title animation with optimized blur usage
  titleMain: {
    hidden: {
      opacity: 0,
      y: 30,
      scale: 0.98,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        type: "tween",
      },
    },
  },
  // Optimized gradient text animation
  gradientText: {
    hidden: {
      opacity: 0,
      y: 16,
      scale: 0.99,
      backgroundPosition: "150% center", // Reduced range for better performance
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      backgroundPosition: "0% center",
      transition: {
        duration: 1.1,
        delay: 0.15,
      },
    },
  },
  // Simplified description animation
  description: {
    hidden: {
      opacity: 0,
      y: 20,
      scale: 0.99,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.7,
        delay: 0.08,
      },
    },
  },
  // Optimized CTA button with reduced 3D effects
  ctaButton: {
    hidden: {
      opacity: 0,
      y: 25,
      scale: 0.95,
      rotateX: 8, // Reduced rotation for better performance
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      rotateX: 0,
      transition: {
        duration: 0.7,
        delay: 0.12,
      },
    },
    hover: {
      scale: 1.02,
      y: -2,
      transition: {
        duration: 0.25,
      },
    },
    tap: {
      scale: 0.98,
      y: 0,
      transition: {
        duration: 0.12,
      },
    },
  },
  // Optimized image animation with reduced blur
  image: {
    hidden: {
      opacity: 0,
      y: 40,
      scale: 0.95,
      rotateX: 15, // Reduced rotation
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      rotateX: 0,
      transition: {
        duration: 1.0,
        delay: 0.3,
      },
    },
  },
  // Optimized floating animation with longer duration and smaller range
  imageFloat: {
    y: [-3, 3, -3], // Reduced range for subtlety
    transition: {
      duration: 8, // Longer duration for smoother animation
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
};

// Mobile-optimized animations - ultra-lightweight to prevent flickering
const mobileAnimations = {
  container: {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.5,
        staggerChildren: 0.06,
        delayChildren: 0.02,
      },
    },
  },
  // Ultra-simple title animation - opacity + minimal transform
  titleMain: {
    hidden: {
      opacity: 0,
      y: 12,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  },
  // Minimal gradient text - only opacity and tiny movement
  gradientText: {
    hidden: {
      opacity: 0,
      y: 8,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        delay: 0.08,
      },
    },
  },
  // Simple description fade-in - minimal movement
  description: {
    hidden: {
      opacity: 0,
      y: 8,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        delay: 0.06,
      },
    },
  },
  // Minimal CTA button animation - just fade in
  ctaButton: {
    hidden: {
      opacity: 0,
      y: 10,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        delay: 0.1,
      },
    },
    // Extremely minimal hover effects for mobile
    hover: {
      transition: {
        duration: 0.15,
      },
    },
    tap: {
      scale: 0.98,
      transition: {
        duration: 0.08,
      },
    },
  },
  // Ultra-simple image animation - just opacity
  image: {
    hidden: {
      opacity: 0,
      y: 15,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        delay: 0.15,
      },
    },
  },
  // Completely disabled floating animation on mobile
  imageFloat: {},
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
}

const HeroSection = React.forwardRef<HTMLDivElement, HeroSectionProps>(
  (
    {
      className,
      subtitle = {
        regular: "מערכת למידה דיגיטילית לעולם הקמעונאות - ",
        gradient: "גישה מכל מקום, בכל זמן, ללא התקנות והטמעות",
      },
      description = "פלטפורמת Retail-Skillz מאפשרת לכם לנהל הכשרות עובדים בעולם הקמעונאות ברמה הגבוהה ביותר: דשבורד בזמן אמת, ניתוחי AI, אבטחת מידע מתקדמת ותמיכה טלפונית . המערכת פועלת מכל מכשיר עם סיסמא מאובטחת",
      ctaText = "קבלו הצעת מחיר בהתאמה אישית",
      ctaHref = "#contact",
      ...props
    },
    ref
  ) => {
    const shouldReduceMotion = useReducedMotion();
    const isMobile = useIsMobile();
    const [isAnimating, setIsAnimating] = React.useState(true);

    // Manage will-change properties for better mobile performance
    useWillChange(isMobile, isAnimating);

    // Clean up animations after initial load
    React.useEffect(() => {
      const timer = setTimeout(() => {
        setIsAnimating(false);
      }, 3000); // Clean up after animations should be complete

      return () => clearTimeout(timer);
    }, []);

    // Choose animations based on device and user preferences
    const animations = React.useMemo(() => {
      if (shouldReduceMotion) {
        // Minimal animations for accessibility
        return {
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
        };
      }

      // Use mobile-optimized animations on mobile devices
      return isMobile ? mobileAnimations : heroAnimations;
    }, [shouldReduceMotion, isMobile]);

    const handleCTAClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
      e.preventDefault();
      mixpanel.track("Hero CTA Click", {
        button_text: ctaText,
        target_section: ctaHref,
      });

      const element = document.querySelector(ctaHref);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    };

    return (
      <div className={cn("relative", className)} ref={ref} {...props}>
        <div
          className={cn(
            "absolute top-0 z-[0] h-screen w-screen",
            // Highly optimized gradients for mobile - simpler and more performant
            isMobile
              ? "bg-gradient-to-b from-purple-50/20 via-transparent to-transparent dark:from-purple-900/10 dark:via-transparent dark:to-transparent"
              : "bg-[radial-gradient(ellipse_20%_80%_at_50%_-20%,rgba(120,119,198,0.12),rgba(255,255,255,0))] dark:bg-[radial-gradient(ellipse_20%_80%_at_50%_-20%,rgba(120,119,198,0.25),rgba(255,255,255,0))]",
            // Add hardware acceleration hint for mobile
            isMobile && "transform-gpu will-change-auto"
          )}
        />
        <section className="relative max-w-full mx-auto z-1">
          <div className="max-w-screen-xl z-10 mx-auto px-4 py-12 sm:py-20 md:py-28 gap-12 md:px-8">
            <motion.div
              className="space-y-5 max-w-4xl leading-0 lg:leading-5 mx-auto text-center"
              dir="rtl"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={animations.container}
              data-will-change={isMobile ? "true" : undefined}>
              <motion.h2
                className={cn(
                  "text-3xl sm:text-4xl md:text-5xl lg:text-6xl tracking-tighter font-geist bg-clip-text text-transparent mx-auto",
                  // Simplified gradients for mobile performance
                  isMobile
                    ? "bg-gradient-to-b from-gray-900 to-gray-600 dark:from-white dark:to-gray-300"
                    : "bg-[linear-gradient(180deg,_#000_0%,_rgba(0,_0,_0,_0.75)_100%)] dark:bg-[linear-gradient(180deg,_#FFF_0%,_rgba(255,_255,_255,_0.00)_202.08%)]",
                  // Optimized hardware acceleration
                  isMobile &&
                    "transform-gpu will-change-transform backface-hidden"
                )}
                variants={animations.titleMain}
                data-will-change={isMobile ? "true" : undefined}
                style={
                  isMobile
                    ? {
                        transform: "translate3d(0, 0, 0)",
                        WebkitFontSmoothing: "antialiased",
                        MozOsxFontSmoothing: "grayscale",
                      }
                    : undefined
                }>
                {subtitle.regular}
                <motion.span
                  className={cn(
                    "text-transparent bg-clip-text inline-block",
                    // Ultra-simplified gradient for mobile to prevent flickering
                    isMobile
                      ? "bg-gradient-to-r from-purple-600 to-pink-500 dark:from-purple-300 dark:to-orange-300 transform-gpu will-change-transform backface-hidden"
                      : "bg-gradient-to-r from-purple-600 to-pink-500 dark:from-purple-300 dark:to-orange-200 bg-[length:200%_100%]"
                  )}
                  variants={animations.gradientText}
                  data-will-change={isMobile ? "true" : undefined}
                  style={
                    isMobile
                      ? {
                          transform: "translate3d(0, 0, 0)",
                          WebkitBackfaceVisibility: "hidden",
                          backfaceVisibility: "hidden",
                        }
                      : {
                          backgroundSize: "200% 100%",
                        }
                  }>
                  {subtitle.gradient}
                </motion.span>
              </motion.h2>
              <motion.p
                className="max-w-3xl mx-auto text-sm sm:text-base md:text-lg text-gray-600 dark:text-gray-300 leading-relaxed"
                variants={animations.description}>
                {description}
              </motion.p>
              <motion.div
                className="flex flex-col sm:flex-row items-center justify-center gap-x-3 space-y-3 sm:space-y-0"
                variants={animations.ctaButton}
                data-will-change={isMobile ? "true" : undefined}
                whileHover={!shouldReduceMotion ? "hover" : undefined}
                whileTap={!shouldReduceMotion ? "tap" : undefined}>
                <span className="relative inline-block overflow-hidden rounded-full p-[1.5px]">
                  <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
                  <div className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-white dark:bg-gray-950 text-xs sm:text-sm font-medium backdrop-blur-3xl">
                    <a
                      href={ctaHref}
                      onClick={handleCTAClick}
                      className="inline-flex rounded-full text-center group items-center w-full justify-center bg-gradient-to-tr from-zinc-300/20 via-purple-400/30 to-transparent dark:from-zinc-300/5 dark:via-purple-400/20 text-gray-900 dark:text-white border-input border-[1px] hover:bg-gradient-to-tr hover:from-zinc-300/30 hover:via-purple-400/40 hover:to-transparent dark:hover:from-zinc-300/10 dark:hover:via-purple-400/30 transition-all sm:w-auto py-3 sm:py-4 px-6 sm:px-10 text-base sm:text-lg font-semibold">
                      {ctaText}
                    </a>
                  </div>
                </span>
              </motion.div>
            </motion.div>
            <motion.div
              className="mt-12 sm:mt-16 md:mt-20 mx-4 sm:mx-10 relative z-10"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={animations.image}
              data-will-change={isMobile ? "true" : undefined}>
              <OrbitCarousel />
            </motion.div>
          </div>
        </section>
      </div>
    );
  }
);
HeroSection.displayName = "HeroSection";

export { HeroSection };

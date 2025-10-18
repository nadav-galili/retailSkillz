import React from "react";
import { motion } from "motion/react";
import { ArrowRight, Mail, Calendar, Zap } from "lucide-react";
import { cn } from "@/lib/utils";

interface CTASectionProps extends React.HTMLAttributes<HTMLDivElement> {
  title?: string;
  subtitle?: string;
  primaryCTA?: {
    text: string;
    href?: string;
  };
  secondaryCTA?: {
    text: string;
    href?: string;
  };
}

const benefits = [
  {
    icon: Zap,
    text: "הפחתת זמן הכשרה ב-60%",
  },
  {
    icon: ArrowRight,
    text: "שיפור משמעותי בשימור עובדים",
  },
  {
    icon: Zap,
    text: "עליה מדידה בביצועי הצוות",
  },
];

const CTASection = React.forwardRef<HTMLDivElement, CTASectionProps>(
  (
    {
      className,
      title = "מוכנים להפוך את ההכשרות לנשק התחרותי שלכם?",
      subtitle = "הצטרפו למאות קמעונאים בישראל שכבר משפרים את ביצועי הצוות עם retailSkillz",
      primaryCTA = {
        text: "התחילו בניסיון חינמי",
        href: "#signup",
      },
      secondaryCTA = {
        text: "קבעו פגישת הדגמה",
        href: "#demo",
      },
      ...props
    },
    ref
  ) => {
    const containerVariants = {
      hidden: { opacity: 0 },
      visible: {
        opacity: 1,
        transition: {
          staggerChildren: 0.1,
          delayChildren: 0.2,
        },
      },
    };

    const itemVariants = {
      hidden: { opacity: 0, y: 10 },
      visible: {
        opacity: 1,
        y: 0,
        transition: {
          duration: 0.5,
          ease: "easeOut",
        },
      },
    };

    return (
      <div
        ref={ref}
        className={cn("relative py-24 px-4 sm:px-6 lg:px-8", className)}
        {...props}>
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary-50 via-accent-50/30 to-secondary-50/20 dark:from-primary-950/30 dark:via-accent-950/20 dark:to-secondary-950/10 pointer-events-none" />

        {/* Animated background elements */}
        <div className="absolute top-20 right-0 w-96 h-96 bg-gradient-to-br from-primary-400/10 to-accent-400/5 rounded-full blur-3xl -z-10" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-accent-400/10 to-secondary-400/5 rounded-full blur-3xl -z-10" />

        {/* Animated border accent */}
        <motion.div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-px bg-gradient-to-r from-transparent via-primary-500 to-transparent"
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 3, repeat: Infinity }}
        />

        <div className="relative z-10 max-w-4xl mx-auto" dir="rtl">
          {/* Header */}
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}>
            <motion.h2
              className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary-600 via-accent-600 to-secondary-600 dark:from-primary-400 dark:via-accent-400 dark:to-secondary-400"
              initial={{ scale: 0.95 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}>
              {title}
            </motion.h2>
            <motion.p
              className="text-xl text-gray-600 dark:text-gray-300"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}>
              {subtitle}
            </motion.p>
          </motion.div>

          {/* Benefits */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-6 mb-12">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="flex items-center justify-center gap-3 p-4 rounded-lg bg-white/50 dark:bg-gray-900/50 border border-gray-200 dark:border-gray-800 backdrop-blur-sm">
                  <Icon className="w-5 h-5 text-primary-500 dark:text-primary-400 flex-shrink-0" />
                  <span className="text-gray-700 dark:text-gray-300 font-medium">
                    {benefit.text}
                  </span>
                </motion.div>
              );
            })}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}>
            {/* Primary CTA */}
            <motion.a
              href={primaryCTA.href}
              className="relative group overflow-hidden rounded-full px-8 py-4 font-semibold text-white text-center"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}>
              {/* Background with gradient */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary-600 to-accent-600 group-hover:from-primary-700 group-hover:to-accent-700 transition-all duration-300" />

              {/* Shine effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                animate={{ x: ["100%", "-100%"] }}
                transition={{ duration: 2, repeat: Infinity }}
              />

              {/* Shadow */}
              <div className="absolute inset-0 shadow-lg group-hover:shadow-xl group-hover:shadow-primary-500/50 transition-all duration-300 rounded-full" />

              {/* Content */}
              <div className="relative z-10 flex items-center justify-center gap-2">
                {primaryCTA.text}
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300 rotate-180" />
              </div>
            </motion.a>

            {/* Secondary CTA */}
            <motion.a
              href={secondaryCTA.href}
              className="relative group overflow-hidden rounded-full px-8 py-4 font-semibold text-gray-900 dark:text-white text-center border-2 border-gray-300 dark:border-gray-700 hover:border-primary-500 dark:hover:border-primary-400 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}>
              {/* Hover background */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary-50 to-accent-50 dark:from-primary-950/30 dark:to-accent-950/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              {/* Content */}
              <div className="relative z-10 flex items-center justify-center gap-2">
                <Calendar className="w-5 h-5" />
                {secondaryCTA.text}
              </div>
            </motion.a>
          </motion.div>

          {/* Contact Options */}
          <motion.div
            className="grid md:grid-cols-2 gap-4 p-6 rounded-xl bg-white dark:bg-gray-900/50 border border-gray-200 dark:border-gray-800 backdrop-blur-sm"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}>
            {/* Email */}
            <motion.div
              className="flex items-center gap-4 p-4"
              whileHover={{ x: 4 }}
              transition={{ duration: 0.2 }}>
              <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-primary-100 dark:bg-primary-950/30">
                <Mail className="w-6 h-6 text-primary-600 dark:text-primary-400" />
              </div>
              <div>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  יש שאלות?
                </p>
                <a
                  href="mailto:nadav@retailskillz.com"
                  className="font-semibold text-gray-900 dark:text-white hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
                  nadav@retailskillz.com
                </a>
              </div>
            </motion.div>

            {/* Calendar */}
            <motion.div
              className="flex items-center gap-4 p-4"
              whileHover={{ x: 4 }}
              transition={{ duration: 0.2 }}>
              <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-accent-100 dark:bg-accent-950/30">
                <Calendar className="w-6 h-6 text-accent-600 dark:text-accent-400" />
              </div>
              <div>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  קבעו פגישת הדגמה
                </p>
                <a
                  href="#demo"
                  className="font-semibold text-gray-900 dark:text-white hover:text-accent-600 dark:hover:text-accent-400 transition-colors">
                  בחרו זמן נוח
                </a>
              </div>
            </motion.div>
          </motion.div>

          {/* Trust indicators */}
          <motion.p
            className="text-center text-sm text-gray-600 dark:text-gray-400 mt-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}>
            מהימן על ידי מאות עסקי קמעונאות בישראל • ניסיון חינמי למשך 14 יום • ללא צורך בכרטיס אשראי
          </motion.p>
        </div>
      </div>
    );
  }
);

CTASection.displayName = "CTASection";

export { CTASection };
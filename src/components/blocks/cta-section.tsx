import React from "react";
import { motion } from "motion/react";
import { Mail, Calendar } from "lucide-react";
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

const CTASection = React.forwardRef<HTMLDivElement, CTASectionProps>(
  ({ className, ...props }, ref) => {
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
                  nadavg@retailskillz.online
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
        </div>
      </div>
    );
  }
);

CTASection.displayName = "CTASection";

export { CTASection };

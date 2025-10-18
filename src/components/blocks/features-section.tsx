import React from "react";
import { motion } from "motion/react";
import {
  BookOpen,
  BarChart3,
  CheckSquare,
  Smartphone,
  TrendingUp,
  Users,
} from "lucide-react";
import { cn } from "@/lib/utils";

interface FeaturesSectionProps extends React.HTMLAttributes<HTMLDivElement> {
  title?: string;
  subtitle?: string;
}

const features = [
  {
    title: "פורטל הכשרות מותאם אישית",
    description:
      "בנו את פורטל ההכשרות שלכם לפי העיצוב והמותג שלכם, עם תוכן מותאם לכל מחלקה וסניף",
    icon: BookOpen,
    color: "from-blue-500 to-cyan-500",
    bgColor: "bg-blue-50 dark:bg-blue-950/20",
  },
  {
    title: "דשבורד מנהלים מתקדם",
    description:
      "נתוני ביצועים מפורטים, דוחות התקדמות בזמן אמת ואנליטיקות מעמיקות לכל מחלקה וסניף",
    icon: BarChart3,
    color: "from-purple-500 to-pink-500",
    bgColor: "bg-purple-50 dark:bg-purple-950/20",
  },
  {
    title: "מערכת בחינות ואימות ידע",
    description:
      "בחינות אינטראקטיביות, תרגילי סימולציה וכלים למדידת רמת השליטה בחומר הלימוד",
    icon: CheckSquare,
    color: "from-green-500 to-emerald-500",
    bgColor: "bg-green-50 dark:bg-green-950/20",
  },
  {
    title: "נגישות מכל מכשיר",
    description:
      "המערכת פועלת בצורה מושלמת על מחשבים, טאבלטים וטלפונים - עובדים יכולים ללמוד בכל מקום",
    icon: Smartphone,
    color: "from-orange-500 to-red-500",
    bgColor: "bg-orange-50 dark:bg-orange-950/20",
  },
  {
    title: "מעקב התקדמות מפורט",
    description:
      "צפו בהתקדמות כל עובד, זהו פערי ידע ועקבו אחר שיפור הביצועים לאורך זמן",
    icon: TrendingUp,
    color: "from-indigo-500 to-blue-500",
    bgColor: "bg-indigo-50 dark:bg-indigo-950/20",
  },
  {
    title: "ניהול משתמשים וגישות",
    description:
      "ניהול הרשאות מתקדם, קבוצות משתמשים ושליטה מלאה על מי רואה מה במערכת",
    icon: Users,
    color: "from-rose-500 to-pink-500",
    bgColor: "bg-rose-50 dark:bg-rose-950/20",
  },
];

const FeaturesSection = React.forwardRef<HTMLDivElement, FeaturesSectionProps>(
  (
    {
      className,
      title = "יכולות רבות עוצמה שמביאות תוצאות",
      subtitle = "כל מה שאתם צריכים כדי ליצור, לנהל ולמדוד הכשרות עובדים ברמה הגבוהה ביותר",
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

    const cardVariants = {
      hidden: { opacity: 0, y: 20 },
      visible: {
        opacity: 1,
        y: 0,
        transition: {
          duration: 0.5,
        },
      },
      hover: {
        y: -8,
        transition: {
          duration: 0.3,
        },
      },
    };

    return (
      <div
        ref={ref}
        className={cn("relative py-20 px-4 sm:px-6 lg:px-8", className)}
        {...props}>
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-gray-50 via-white to-blue-50/20 dark:from-gray-950 dark:via-gray-900 dark:to-blue-950/20 pointer-events-none" />

        {/* Animated background elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-primary-500/10 to-accent-500/5 rounded-full blur-3xl -z-10 opacity-40" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-secondary-500/10 to-primary-500/5 rounded-full blur-3xl -z-10 opacity-40" />

        <div className="relative z-10 max-w-7xl mx-auto" dir="rtl">
          {/* Header */}
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-primary-500 bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-300">
              {title}
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              {subtitle}
            </p>
          </motion.div>

          {/* Features Grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={index}
                  variants={cardVariants}
                  whileHover="hover"
                  className="group relative overflow-hidden rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900/50 backdrop-blur-sm transition-all duration-300 hover:border-gray-300 dark:hover:border-gray-700 shadow-sm hover:shadow-xl">
                  {/* Background gradient on hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-transparent dark:from-gray-800/50 dark:to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  {/* Gradient accent background */}
                  <div
                    className={cn(
                      "absolute top-0 right-0 w-32 h-32 rounded-full blur-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-300",
                      `bg-gradient-to-br ${feature.color}`
                    )}
                  />

                  {/* Content */}
                  <div className="relative z-10 p-6">
                    {/* Icon container */}
                    <div
                      className={cn(
                        "mb-4 inline-flex rounded-lg p-3",
                        feature.bgColor
                      )}>
                      <Icon
                        className={cn(
                          "w-6 h-6 bg-clip-text text-transparent bg-gradient-to-br",
                          feature.color
                        )}
                      />
                    </div>

                    {/* Title and description */}
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-primary-600 group-hover:to-accent-600 transition-all duration-300">
                      {feature.title}
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                      {feature.description}
                    </p>

                    {/* Hover accent line */}
                    <motion.div
                      className={cn(
                        "absolute bottom-0 left-0 h-1 bg-gradient-to-r w-0 group-hover:w-full transition-all duration-300",
                        feature.color
                      )}
                    />
                  </div>
                </motion.div>
              );
            })}
          </motion.div>

          {/* CTA Section */}
          <motion.div
            className="mt-16 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}>
            <p className="text-gray-600 dark:text-gray-400 mb-6 max-w-2xl mx-auto">
              מוכנים לחולל מהפכה בהכשרת העובדים שלכם? המערכת שלנו מותאמת לגדול
              איתכם ולהתאים לצרכים הייחודיים שלכם.
            </p>
            <button className="relative inline-flex items-center justify-center px-8 py-3 rounded-full font-semibold text-white bg-gradient-to-r from-primary-600 to-accent-600 hover:from-primary-700 hover:to-accent-700 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105">
              התחילו עוד היום
            </button>
          </motion.div>
        </div>
      </div>
    );
  }
);

FeaturesSection.displayName = "FeaturesSection";

export { FeaturesSection };

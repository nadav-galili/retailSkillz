import React from "react";
import { motion } from "motion/react";
import {
  BookOpen,
  BarChart3,
  Smartphone,
  Users,
  Headphones,
  FileSpreadsheet,
  Brain,
  Palette,
  Cloud,
} from "lucide-react";
import { cn } from "@/lib/utils";

interface FeaturesSectionProps extends React.HTMLAttributes<HTMLDivElement> {
  title?: string;
  subtitle?: string;
}

const features = [
  {
    title: "מערכת ניהול למידה מרכזית",
    description:
      "הקמת קורסים וסרטונים במערכת, מבחני ידע אינטראקטיביים וניהול כל תהליכי ההכשרה במקום אחד",
    icon: BookOpen,
    color: "from-blue-500 to-cyan-500",
    bgColor: "bg-blue-50 dark:bg-blue-950/20",
  },
  {
    title: "דשבורד בזמן אמת עם דוחות מותאמים",
    description:
      "מעקב מלא אחר התקדמות הלומדים, דוחות מותאמים לצרכי הארגון ויצוא נתונים לאקסל בקלות",
    icon: BarChart3,
    color: "from-purple-500 to-pink-500",
    bgColor: "bg-purple-50 dark:bg-purple-950/20",
  },
  {
    title: "ניתוחי AI מתקדמים",
    description:
      "אפשרות לשילוב ניתוחי בינה מלאכותית במעקב אחר הלומדים לזיהוי דפוסי למידה ופערי ידע",
    icon: Brain,
    color: "from-green-500 to-emerald-500",
    bgColor: "bg-green-50 dark:bg-green-950/20",
  },
  {
    title: "גישה מכל מכשיר עם אבטחה גבוהה",
    description:
      "גישה פשוטה מכל מכשיר - מחשב, טאבלט או נייד עם סיסמא מאובטחת ואבטחת מידע ברמה הגבוהה ביותר",
    icon: Smartphone,
    color: "from-orange-500 to-red-500",
    bgColor: "bg-orange-50 dark:bg-orange-950/20",
  },
  {
    title: "מיתוג מותאם אישית",
    description:
      "התאמה מלאה של המערכת לעיצוב והמותג שלכם - לוגו, צבעוניות וממשק בהתאמה אישית",
    icon: Palette,
    color: "from-indigo-500 to-blue-500",
    bgColor: "bg-indigo-50 dark:bg-indigo-950/20",
  },
  {
    title: "ניהול משתמשים והרשאות מתקדם",
    description:
      "ניהול הרשאות משתמשים מפורט, יצירת קבוצות והגדרת רמות גישה שונות לפי צרכים",
    icon: Users,
    color: "from-rose-500 to-pink-500",
    bgColor: "bg-rose-50 dark:bg-rose-950/20",
  },
  {
    title: "פלטפורמת ענן ללא התקנות",
    description:
      "מערכת מבוססת ענן - אין צורך בהתקנות או הטמעות. ניתן ללמוד מכל מקום בכל זמן",
    icon: Cloud,
    color: "from-teal-500 to-green-500",
    bgColor: "bg-teal-50 dark:bg-teal-950/20",
  },
  {
    title: "תמיכה טלפונית ",
    description:
      "צוות תמיכה מקצועי זמין טלפונית תוך 12 שעות לכל שאלה או בעיה טכנית",
    icon: Headphones,
    color: "from-violet-500 to-purple-500",
    bgColor: "bg-violet-50 dark:bg-violet-950/20",
  },
  {
    title: "יצוא נתונים ודוחות לאקסל",
    description:
      "אפשרות יצוא מלא של כל הנתונים והדוחות לקבצי אקסל לניתוח ושימוש נוסף",
    icon: FileSpreadsheet,
    color: "from-emerald-500 to-teal-500",
    bgColor: "bg-emerald-50 dark:bg-emerald-950/20",
  },
];

const FeaturesSection = React.forwardRef<HTMLDivElement, FeaturesSectionProps>(
  (
    {
      className,
      title = "כל מה שאתם צריכים למערכת הכשרות מתקדמת",
      subtitle = "פלטפורמת Retail-Skillz מספקת פתרון מקיף עם כל הכלים והיכולות הדרושים לניהול הכשרות עובדים ברמה הגבוהה ביותר",
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
        id="features"
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
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
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
                          "w-6 h-6",
                          feature.color.includes("blue") &&
                            "text-blue-600 dark:text-blue-400",
                          feature.color.includes("purple") &&
                            "text-purple-600 dark:text-purple-400",
                          feature.color.includes("green") &&
                            "text-green-600 dark:text-green-400",
                          feature.color.includes("orange") &&
                            "text-orange-600 dark:text-orange-400",
                          feature.color.includes("indigo") &&
                            "text-indigo-600 dark:text-indigo-400",
                          feature.color.includes("rose") &&
                            "text-rose-600 dark:text-rose-400"
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

          {/* Additional Services Section */}
          <motion.div
            className="mt-16 text-center bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-950/20 dark:to-indigo-950/20 rounded-2xl p-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              שירותים נוספים זמינים
            </h3>
            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              <div className="text-right bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm">
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  שירות העלאת תכנים
                </h4>
                <p className="text-gray-600 dark:text-gray-400 mb-3">
                  העלאת קורסים ומבחנים למערכת (כל קורס כולל עד 4 סרטונים)
                </p>
              </div>
              <div className="text-right bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm">
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  ניהול משתמשים והרשאות
                </h4>
                <p className="text-gray-600 dark:text-gray-400 mb-3">
                  שיוך משתמשים, הגדרת הרשאות וניהול סיסמאות כניסה למערכת
                </p>
              </div>
            </div>
            <p className="mt-6 text-sm text-gray-600 dark:text-gray-400">
              * על כל העלויות יגבה מע"מ כחוק | תנאי תשלום: שוטף+30
            </p>
          </motion.div>

          {/* CTA Section */}
          <motion.div
            className="mt-16 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}>
            <p className="text-gray-600 dark:text-gray-400 mb-6 max-w-2xl mx-auto">
              מוכנים לחולל מהפכה בהכשרת העובדים שלכם? פלטפורמת Retail-Skillz
              מתאימה לגדול איתכם ולהתאים לצרכים הייחודיים שלכם.
            </p>
            <a href="#contact">
              <button className="relative inline-flex items-center justify-center px-8 py-3 rounded-full font-semibold text-white bg-gradient-to-r from-primary-600 to-accent-600 hover:from-primary-700 hover:to-accent-700 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105">
                בואו נתחיל - קבלו הצעת מחיר
              </button>
            </a>
          </motion.div>
        </div>
      </div>
    );
  }
);

FeaturesSection.displayName = "FeaturesSection";

export { FeaturesSection };

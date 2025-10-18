import React from "react";
import { motion } from "motion/react";
import { CheckCircle2, AlertCircle } from "lucide-react";
import { cn } from "@/lib/utils";

interface ProblemSolutionProps extends React.HTMLAttributes<HTMLDivElement> {
  title?: string;
  subtitle?: string;
}

const problems = [
  {
    title: "הכשרות לא אחידות וללא מעקב מרכזי",
    description:
      "כל סניף מכשיר עובדים בצורה שונה, קשה לוודא שהמידע מועבר באופן אחיד ואין דרך למעקב אחר ההתקדמות",
    icon: AlertCircle,
  },
  {
    title: "עלויות הכשרה גבוהות וצריכת זמן רבה",
    description:
      "הכשרות פנים אל פנים דורשות הקדשת משאבי אנוש יקרים, במיוחד כשצריך לחזור על החומר לכל עובד חדש",
    icon: AlertCircle,
  },
  {
    title: "קשה למדוד יעילות ההכשרות",
    description:
      "אין דרך לדעת אם העובדים באמת הבינו את החומר או זוכרים אותו, וקשה לזהות פערי ידע",
    icon: AlertCircle,
  },
  {
    title: "אובדן ידע כשעובדים עוזבים",
    description:
      "כשעובד מנוסה עוזב, כל הידע והניסיון שלו הולכים איתו - אין דרך לשמר ולהעביר את המידע לאחרים",
    icon: AlertCircle,
  },
];

const solutions = [
  {
    title: "פלטפורמת ענן מרכזית לכל הארגון",
    description:
      "מערכת אחידה לכל הסניפים עם גישה מאובטחת מכל מכשיר - מחשב, טאבלט או נייד, ללא צורך בהתקנות",
    icon: CheckCircle2,
  },
  {
    title: "דשבורד מנהלים עם מעקב בזמן אמת",
    description:
      "דוחות מפורטים על התקדמות כל עובד, ניתוחי AI לזיהוי פערים ויצוא נתונים לאקסל לניתוח נוסף",
    icon: CheckCircle2,
  },
  {
    title: "מערכת בחינות ומבחני ידע אינטראקטיביים",
    description:
      "וידוא שהעובדים באמת הבינו את החומר באמצעות מבחנים מותאמים ומעקב אחר שיפור הביצועים",
    icon: CheckCircle2,
  },
  {
    title: "מיתוג מותאם ותמיכה מקצועית",
    description: "המערכת מותאמת לעיצוב והמותג שלכם, עם תמיכה טלפונית לכל בעיה",
    icon: CheckCircle2,
  },
];

const ProblemSolutionSection = React.forwardRef<
  HTMLDivElement,
  ProblemSolutionProps
>(
  (
    {
      className,
      title = "מהאתגרים בהכשרת עובדים לפתרון מקצועי ומתקדם",
      subtitle = "הופכים את ההכשרות מעומס יקר לכלי אסטרטגי שמשפר ביצועים, מפחית עלויות ומבטיח עקביות בכל הארגון",
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
          delayChildren: 0.1,
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
    };

    return (
      <div
        ref={ref}
        className={cn("relative py-20 px-4 sm:px-6 lg:px-8", className)}
        {...props}>
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-white via-blue-50/30 to-white dark:from-gray-950 dark:via-blue-950/20 dark:to-gray-950 pointer-events-none" />

        <div className="relative z-10 max-w-6xl mx-auto" dir="rtl">
          {/* Header */}
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}>
            <h2 className="text-4xl text-primary-500 md:text-5xl font-bold mb-4 bg-clip-text  bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-300">
              {title}
            </h2>
            <p className="text-lg text-secondary-500 dark:text-gray-400 max-w-3xl mx-auto">
              {subtitle}
            </p>
          </motion.div>

          {/* Problems & Solutions Grid */}
          <div className="grid lg:grid-cols-2 gap-8 items-start">
            {/* Problems Section */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="space-y-4">
              <h3 className="text-2xl font-semibold text-primary-700 dark:text-primary-400 mb-6">
                האתגרים שבעלי רשתות קמעונאות מכירים
              </h3>
              {problems.map((problem, index) => {
                const Icon = problem.icon;
                return (
                  <motion.div
                    key={index}
                    variants={cardVariants}
                    className="group relative overflow-hidden rounded-lg border border-red-200 dark:border-red-900/50 bg-white dark:bg-gray-900 p-5 hover:shadow-lg transition-all duration-300">
                    <div className="absolute inset-0 bg-gradient-to-r from-red-50 to-transparent dark:from-red-950/20 dark:to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="relative z-10 flex gap-4">
                      <Icon className="w-6 h-6 text-red-500 dark:text-red-400 flex-shrink-0 mt-1" />
                      <div>
                        <h4 className="font-semibold text-gray-900 dark:text-white mb-1">
                          {problem.title}
                        </h4>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                          {problem.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>

            {/* Solutions Section */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="space-y-4">
              <h3 className="text-2xl font-semibold text-primary-700 dark:text-white mb-6">
                הפתרונות של מערכת Retail-Skillz
              </h3>
              {solutions.map((solution, index) => {
                const Icon = solution.icon;
                return (
                  <motion.div
                    key={index}
                    variants={cardVariants}
                    className="group relative overflow-hidden rounded-lg border border-green-200 dark:border-green-900/50 bg-white dark:bg-gray-900 p-5 hover:shadow-lg transition-all duration-300">
                    <div className="absolute inset-0 bg-gradient-to-r from-green-50 to-transparent dark:from-green-950/20 dark:to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="relative z-10 flex gap-4">
                      <Icon className="w-6 h-6 text-green-500 dark:text-green-400 flex-shrink-0 mt-1" />
                      <div>
                        <h4 className="font-semibold text-gray-900 dark:text-white mb-1">
                          {solution.title}
                        </h4>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                          {solution.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>

          {/* Value Proposition Section */}
          <motion.div
            className="mt-16 grid md:grid-cols-3 gap-8 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}>
            <div className="bg-white dark:bg-gray-800/50 rounded-lg p-6 shadow-sm">
              <div className="text-3xl font-bold text-green-600 dark:text-green-400 mb-2">
                80%
              </div>
              <p className="text-gray-600 dark:text-gray-400">
                חיסכון בעלויות הכשרה
              </p>
            </div>
            <div className="bg-white dark:bg-gray-800/50 rounded-lg p-6 shadow-sm">
              <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">
                24/7
              </div>
              <p className="text-gray-600 dark:text-gray-400">
                למידה זמינה בכל עת
              </p>
            </div>
            <div className="bg-white dark:bg-gray-800/50 rounded-lg p-6 shadow-sm">
              <div className="text-3xl font-bold text-purple-600 dark:text-purple-400 mb-2">
                100%
              </div>
              <p className="text-gray-600 dark:text-gray-400">
                עקביות בין כל הסניפים
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    );
  }
);

ProblemSolutionSection.displayName = "ProblemSolutionSection";

export { ProblemSolutionSection };

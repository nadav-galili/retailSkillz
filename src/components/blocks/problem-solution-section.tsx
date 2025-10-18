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
    title: "הכשרות לא אחידות וללא מעקב",
    description:
      "כל סניף מכשיר עובדים בצורה שונה, ללא תקן מוגדר או מעקב אחר התקדמות והישגים",
    icon: AlertCircle,
  },
  {
    title: "עלויות הכשרה גבוהות וזמן רב",
    description:
      "הכשרות פנים אל פנים דורשות משאבי זמן ואנוש יקרים, במיוחד בעונות לחץ",
    icon: AlertCircle,
  },
  {
    title: "חוסר נתונים על ביצועי עובדים",
    description: "קשה לדעת איזה עובדים זקוקים לחיזוק נוסף או מי מצטיין בתפקידו",
    icon: AlertCircle,
  },
  {
    title: "קושי בהעברת ידע בין עובדים",
    description:
      "כשעובד מנוסה עוזב, הידע והניסיון שלו הולכים איתו - אין דרך לשמר אותם",
    icon: AlertCircle,
  },
];

const solutions = [
  {
    title: "פלטפורמת למידה מרכזית ואחידה",
    description:
      "כל ההכשרות במקום אחד, גישה מכל מכשיר, תוכן מעודכן ותקינה קבועה לכל העובדים",
    icon: CheckCircle2,
  },
  {
    title: "מערכת בחינות וסימולציות חכמה",
    description:
      "עובדים עוברים בחינות אינטראקטיביות שמבטיחות הבנה ושליטה בחומר הלימוד",
    icon: CheckCircle2,
  },
  {
    title: "דשבורד מנהלים מתקדם",
    description:
      "מעקב מלא על התקדמות העובדים, זיהוי פערים ואפשרות לבצע התערבות יעילה",
    icon: CheckCircle2,
  },
  {
    title: "אוטומציה מלאה וחיסכון בזמן",
    description:
      "המערכת מנהלת בעצמה את כל תהליכי ההכשרה - מנהלים יכולים להתמקד בניהול העסק",
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
      title = "האתגרים בהכשרת עובדים בקמעונאות והפתרון שלנו",
      subtitle = "הופכים את ההכשרות מעומס לכלי תחרותי שמשפר את הביצועים ומפחית עלויות",
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
                האתגרים הקיימים
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
                הפתרונות של retailSkillz
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
        </div>
      </div>
    );
  }
);

ProblemSolutionSection.displayName = "ProblemSolutionSection";

export { ProblemSolutionSection };

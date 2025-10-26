import React from "react";
import { motion } from "motion/react";
import {
  BarChart3,
  CloudCog,
  GraduationCap,
  Target,
  Zap,
  Sparkles,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface ProblemSolutionProps extends React.HTMLAttributes<HTMLDivElement> {
  title?: string;
  subtitle?: string;
}

const accentStyles = {
  emerald: {
    card: "border-emerald-200/60 dark:border-emerald-900/40",
    glow: "from-emerald-400/20 via-emerald-300/10 to-transparent",
    icon: "bg-emerald-500/10 text-emerald-500 dark:text-emerald-300",
    userPanel:
      "border-emerald-200/70 bg-emerald-50/70 dark:bg-emerald-950/30 dark:border-emerald-900/40",
    orgPanel:
      "border-emerald-200/70 bg-white/70 dark:bg-gray-950/40 dark:border-emerald-900/40",
    userBadge:
      "border-emerald-200/80 bg-emerald-100/70 text-emerald-700 dark:bg-emerald-900/40 dark:text-emerald-200",
    orgBadge:
      "border-emerald-200/80 bg-white/60 text-emerald-700 dark:bg-emerald-950/40 dark:text-emerald-100",
  },
  sky: {
    card: "border-sky-200/60 dark:border-sky-900/40",
    glow: "from-sky-400/20 via-sky-300/10 to-transparent",
    icon: "bg-sky-500/10 text-sky-500 dark:text-sky-300",
    userPanel:
      "border-sky-200/70 bg-sky-50/70 dark:bg-sky-950/30 dark:border-sky-900/40",
    orgPanel:
      "border-sky-200/70 bg-white/70 dark:bg-gray-950/40 dark:border-sky-900/40",
    userBadge:
      "border-sky-200/80 bg-sky-100/70 text-sky-700 dark:bg-sky-900/40 dark:text-sky-200",
    orgBadge:
      "border-sky-200/80 bg-white/60 text-sky-700 dark:bg-sky-950/40 dark:text-sky-100",
  },
  amber: {
    card: "border-amber-200/60 dark:border-amber-900/40",
    glow: "from-amber-400/25 via-amber-300/10 to-transparent",
    icon: "bg-amber-500/10 text-amber-500 dark:text-amber-300",
    userPanel:
      "border-amber-200/70 bg-amber-50/70 dark:bg-amber-950/20 dark:border-amber-900/40",
    orgPanel:
      "border-amber-200/70 bg-white/70 dark:bg-gray-950/40 dark:border-amber-900/40",
    userBadge:
      "border-amber-200/80 bg-amber-100/70 text-amber-700 dark:bg-amber-900/40 dark:text-amber-200",
    orgBadge:
      "border-amber-200/80 bg-white/60 text-amber-700 dark:bg-amber-950/40 dark:text-amber-100",
  },
  violet: {
    card: "border-violet-200/60 dark:border-violet-900/40",
    glow: "from-violet-400/25 via-violet-300/10 to-transparent",
    icon: "bg-violet-500/10 text-violet-500 dark:text-violet-300",
    userPanel:
      "border-violet-200/70 bg-violet-50/70 dark:bg-violet-950/30 dark:border-violet-900/40",
    orgPanel:
      "border-violet-200/70 bg-white/70 dark:bg-gray-950/40 dark:border-violet-900/40",
    userBadge:
      "border-violet-200/80 bg-violet-100/70 text-violet-700 dark:bg-violet-900/40 dark:text-violet-200",
    orgBadge:
      "border-violet-200/80 bg-white/60 text-violet-700 dark:bg-violet-950/40 dark:text-violet-100",
  },
  fuchsia: {
    card: "border-fuchsia-200/60 dark:border-fuchsia-900/40",
    glow: "from-fuchsia-400/25 via-fuchsia-300/10 to-transparent",
    icon: "bg-fuchsia-500/10 text-fuchsia-500 dark:text-fuchsia-300",
    userPanel:
      "border-fuchsia-200/70 bg-fuchsia-50/70 dark:bg-fuchsia-950/30 dark:border-fuchsia-900/40",
    orgPanel:
      "border-fuchsia-200/70 bg-white/70 dark:bg-gray-950/40 dark:border-fuchsia-900/40",
    userBadge:
      "border-fuchsia-200/80 bg-fuchsia-100/70 text-fuchsia-700 dark:bg-fuchsia-900/40 dark:text-fuchsia-200",
    orgBadge:
      "border-fuchsia-200/80 bg-white/60 text-fuchsia-700 dark:bg-fuchsia-950/40 dark:text-fuchsia-100",
  },
} as const;

interface SolutionItem {
  title: string;
  icon: LucideIcon;
  accent: keyof typeof accentStyles;
  userBenefit: string;
  orgBenefit: string;
}

const solutions: SolutionItem[] = [
  {
    title: " פלטפורמה ענן מרכזית לכל הארגון",
    icon: CloudCog,
    accent: "emerald",
    userBenefit:
      "גישה נוחה מכל מכשיר – מחשב, טאבלט או נייד. כל התכנים והלימודים שלך זמינים בכל מקום ובכל זמן, בלי להתקין אפליקציות.",
    orgBenefit:
      "חיסכון משמעותי בתשתיות IT ותחזוקה. עדכונים אוטומטיים וניהול מרכזי של כל התכנים והנתונים במקום אחד.",
  },
  {
    title: " דשבורד מתקדם עם מעקב בזמן אמת",
    icon: BarChart3,
    accent: "sky",
    userBenefit:
      "רואה בבירור את ההתקדמות שלך, משימות ממתינות, והישגים אישיים. מוטיבציה מובנית להמשיך להתפתח.",
    orgBenefit:
      "שליטה מלאה בתהליכי ההכשרה – זיהוי מיידי של פערים, מעקב אחר שיעורי השלמה, וקבלת תובנות לקבלת החלטות מבוססות נתונים.",
  },
  {
    title: " מערכת בחינות ומבחני ידע אינטראקטיביים",
    icon: GraduationCap,
    accent: "amber",
    userBenefit:
      "למידה מעניינת ומגוונת באמצעות מבחנים אינטראקטיביים. קבלת משוב מיידי שעוזר לך להבין את החומר ולזכור אותו לאורך זמן.",
    orgBenefit:
      "אימות ידע אמיתי של העובדים, הפחתת טעויות בשטח, ושיפור רמת השירות והמכירות. בניית צוות מיומן ובטוח יותר.",
  },
  {
    title: " התקנה מהירה ללא אינטגרציה מורכבת",
    icon: Zap,
    accent: "violet",
    userBenefit:
      "התחלה מיידית ללא המתנות ותקלות טכניות. נכנסים למערכת ומתחילים ללמוד – פשוט וחלק.",
    orgBenefit:
      "אפס צורך באינטגרציה עם מערכות המידע הקיימות. יישום מהיר תוך ימים ספורים, ללא עלויות פיתוח נוספות, סיכונים טכניים או עומס על צוות ה-IT. התחילו להכשיר עובדים עוד היום.",
  },
  {
    title: " מיתוג מותאם ותמיכה מקצועית",
    icon: Target,
    accent: "fuchsia",
    userBenefit:
      "חווית משתמש מוכרת וידידותית עם לוק אנד פיל של החברה שלך. תחושת שייכות ומקצועיות.",
    orgBenefit:
      "מיתוג מלא של המערכת בצבעים, לוגו וסגנון הארגון. תמיכה טכנית מסורה שמבטיחה המשכיות עסקית ושביעות רצון גבוהה.",
  },
  {
    title: "ניתוח AI חכם של ביצועי עובדים",
    icon: Sparkles, // או Sparkles / BotMessageSquare / Cpu
    accent: "violet",
    userBenefit:
      "קבלת המלצות אישיות מבוססות AI לשיפור הלמידה שלך. המערכת מזהה את נקודות החוזק והחולשה שלך ומציעה תכנים ממוקדים שיעזרו לך להצליח.",
    orgBenefit:
      "ניתוח אוטומטי מתקדם של תשובות העובדים במבחנים - זיהוי דפוסי טעויות נפוצים, פערי ידע קריטיים וחיזוי עובדים בסיכון. קבלת תובנות מעמיקות והמלצות מבוססות נתונים לשיפור תוכניות ההכשרה.",
  },
];

const ProblemSolutionSection = React.forwardRef<
  HTMLDivElement,
  ProblemSolutionProps
>(
  (
    {
      className,
      title = "ניהול הכשרות עובדים בקמעונאות - בדרך חכמה , מדידה ומבוססת דאטה",
      subtitle = "עלות ההכשרות יורדת בכ-80% והפכת לכלי אסטרטגי שמשפר ביצועים ומבטיח עקביות.",
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
        id="problem-solution"
        ref={ref}
        className={cn("relative py-20 px-4 sm:px-6 lg:px-8", className)}
        {...props}>
        {/* Background gradient */}
        <div className="absolute inset-0 bg-linear-to-b from-white via-blue-50/30 to-white dark:from-gray-950 dark:via-blue-950/20 dark:to-gray-950 pointer-events-none" />

        <div className="relative z-10 max-w-6xl mx-auto" dir="rtl">
          {/* Header */}
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}>
            <h2 className="text-4xl text-primary-500 md:text-5xl font-bold mb-4 bg-clip-text  bg-linear-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-300">
              {title}
            </h2>
            <p className="text-lg text-secondary-500 dark:text-gray-400 max-w-3xl mx-auto">
              {subtitle}
            </p>
          </motion.div>

          {/* Problems & Solutions Grid */}
          <div className="grid lg:grid-cols-1 gap-8">
            {/* Problems Section */}

            {/* Solutions Section */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="space-y-10">
              <div className="space-y-3 text-right">
                <span className="inline-flex items-center justify-center rounded-full bg-primary-500/10 px-4 py-1 text-xs font-semibold text-primary-600 dark:text-primary-200">
                  במה אנחנו שונים
                </span>
                <h3 className="text-3xl font-bold text-gray-900 dark:text-white">
                  הפתרונות של Retail-Skillz מעצימים עובדים ומנהלים בו זמנית
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  מדגיש את היתרון התחרותי הכי גדול שלכם – פשטות ומהירות ביישום,
                  בלי להעמיס על צוות ה-IT.
                </p>
              </div>
              <div className="grid gap-6 md:grid-cols-2">
                {solutions.map((solution, index) => {
                  const Icon = solution.icon;
                  const accent = accentStyles[solution.accent];

                  return (
                    <motion.div key={index} variants={cardVariants}>
                      <Card
                        className={cn(
                          "group relative overflow-hidden border bg-white/80 text-right shadow-xl backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl dark:bg-gray-900/60",
                          accent.card
                        )}>
                        <div
                          className={cn(
                            "absolute inset-x-0 top-0 h-1 bg-linear-to-r opacity-80 transition-opacity duration-500 group-hover:opacity-100",
                            accent.glow
                          )}
                        />
                        <div
                          className={cn(
                            "pointer-events-none absolute inset-0 bg-linear-to-br opacity-0 transition-opacity duration-500 group-hover:opacity-40",
                            accent.glow
                          )}
                        />
                        <CardHeader className="relative z-10 flex flex-col gap-4 pb-0">
                          <div className="flex items-start gap-4">
                            <span
                              className={cn(
                                "flex h-12 w-12 items-center justify-center rounded-2xl border text-lg font-semibold",
                                accent.icon
                              )}>
                              <Icon className="h-5 w-5" />
                            </span>
                            <CardTitle className="text-xl font-semibold leading-snug text-primary-500 dark:text-white">
                              {solution.title}
                            </CardTitle>
                          </div>
                        </CardHeader>
                        <CardContent className="relative z-10 space-y-4 pt-4">
                          <div
                            className={cn(
                              "rounded-2xl border p-4 text-sm leading-6 shadow-sm transition-colors duration-300",
                              accent.userPanel
                            )}>
                            <Badge
                              variant="outline"
                              className={cn(
                                "mb-2 inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold",
                                accent.userBadge
                              )}>
                              לעובד
                            </Badge>
                            <p className="text-gray-700 dark:text-gray-200">
                              {solution.userBenefit}
                            </p>
                          </div>
                          <div
                            className={cn(
                              "rounded-2xl border p-4 text-sm leading-6 shadow-sm transition-colors duration-300",
                              accent.orgPanel
                            )}>
                            <Badge
                              variant="outline"
                              className={cn(
                                "mb-2 inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold",
                                accent.orgBadge
                              )}>
                              לארגון
                            </Badge>
                            <p className="text-gray-700 dark:text-gray-200">
                              {solution.orgBenefit}
                            </p>
                          </div>
                        </CardContent>
                      </Card>
                    </motion.div>
                  );
                })}
              </div>
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

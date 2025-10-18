import React, { useState } from "react";
import { motion } from "motion/react";

import { cn } from "@/lib/utils";

interface DashboardsShowcaseProps extends React.HTMLAttributes<HTMLDivElement> {
  title?: string;
  subtitle?: string;
}

// Dashboard 1: Employee Training Progress - Refactored
const employeeTrainingData = {
  employee: {
    name: "דנה כהן",
    role: "מחלקת מוצרי חלב",
    location: "סניף ירושלים עובדת מאז יוני 2023",
    badge: "ד.כ",
    badgeColor: "bg-green-500",
  },
  activeCourses: [
    {
      title: "בטיחות מזון ושמירה על רצף קירור",
      status: "הושלם",
      statusColor: "bg-green-500",
      percentage: 100,
      progress: "8 פרקים",
    },
    {
      title: "זיהוי מוצרי חלב ותאריכי תפוגה",
      status: "בתהליך",
      statusColor: "bg-blue-500",
      percentage: 65,
      progress: "5 מתוך 8 פרקים",
    },
    {
      title: "קורס מתקדם - שלב שלישי",
      status: "לא התחיל",
      statusColor: "bg-gray-400",
      percentage: 0,
      progress: "0 מתוך 10 פרקים",
    },
  ],
};

// Dashboard 1 Component (Refactored)
const Dashboard1 = () => (
  <div className="space-y-6" dir="rtl">
    {/* Employee Card */}
    <div className="flex items-center justify-between p-6 bg-gray-50 dark:bg-gray-800/50 rounded-lg border border-gray-200 dark:border-gray-700">
      <div className="text-right">
        <h4 className="text-2xl font-bold text-gray-900 dark:text-white">
          {employeeTrainingData.employee.name}
        </h4>
        <p className="text-sm text-gray-600 dark:text-gray-400">
          {employeeTrainingData.employee.role}
        </p>
        <p className="text-xs text-gray-500 dark:text-gray-500">
          סניף {employeeTrainingData.employee.location}
        </p>
      </div>
      <div
        className={`flex items-center justify-center w-16 h-16 rounded-full text-white text-xl font-bold ${employeeTrainingData.employee.badgeColor}`}>
        {employeeTrainingData.employee.badge}
      </div>
    </div>

    {/* Active Courses Section */}
    <div>
      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
        קורסים פעילים
      </h3>
      <div className="space-y-4">
        {employeeTrainingData.activeCourses.map((course, idx) => (
          <div
            key={idx}
            className="p-4 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700">
            {/* Course Title and Status */}
            <div className="flex items-center justify-between mb-3">
              <h4 className="text-sm font-medium text-gray-900 dark:text-white">
                {course.title}
              </h4>
              <span
                className={`px-3 py-1 rounded-full text-xs font-semibold text-white ${course.statusColor}`}>
                {course.status}
              </span>
            </div>

            {/* Progress Bar */}
            <div className="mb-2">
              <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3 overflow-hidden">
                <motion.div
                  className={`h-full ${course.statusColor} rounded-full`}
                  initial={{ width: 0 }}
                  animate={{ width: `${course.percentage}%` }}
                  transition={{ duration: 1, delay: 0.2 }}
                />
              </div>
            </div>

            {/* Progress Info */}
            <div className="flex items-center justify-between text-xs">
              <span className="text-gray-500 dark:text-gray-400">
                {course.progress}
              </span>
              <span className="font-semibold text-gray-900 dark:text-white">
                {course.percentage}%
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>

    {/* Stats Footer */}
    <div className="grid grid-cols-3 gap-4 pt-4 border-t border-gray-200 dark:border-gray-700">
      <div className="text-center">
        <p className="text-sm font-semibold text-gray-900 dark:text-white">3</p>
        <p className="text-xs text-gray-600 dark:text-gray-400">
          קורסים בסך הכל
        </p>
      </div>
      <div className="text-center">
        <p className="text-sm font-semibold text-green-600">1</p>
        <p className="text-xs text-gray-600 dark:text-gray-400">הושלם</p>
      </div>
      <div className="text-center">
        <p className="text-sm font-semibold text-blue-600">65%</p>
        <p className="text-xs text-gray-600 dark:text-gray-400">
          ממוצע התקדמות
        </p>
      </div>
    </div>
  </div>
);

// Dashboard 2: KPI Stats - Refactored
const kpiStatsData = {
  header: {
    title: "ביצועי למידה",
    subtitle: "מעקב התקדמות ודירוגים איכותיים",
  },
  kpis: [
    {
      icon: "🎯",
      value: "92%",
      label: "ציון ממוצע",
      color: "border-l-4 border-orange-500",
    },
    {
      icon: "⏱️",
      value: "24",
      label: "שעות למידה",
      color: "border-l-4 border-green-500",
    },
    {
      icon: "🏆",
      value: "87%",
      label: "הושלמו החודש",
      color: "border-l-4 border-purple-500",
    },
  ],
  weeklyProgress: [
    { week: "שבוע 4", value: 78, color: "bg-green-500" },
    { week: "שבוע 3", value: 85, color: "bg-purple-500" },
    { week: "שבוע 2", value: 72, color: "bg-orange-500" },
    { week: "שבוע 1", value: 65, color: "bg-red-500" },
  ],
};

// Dashboard 2 Component (Refactored)
const Dashboard2 = () => (
  <div className="space-y-8" dir="rtl">
    {/* KPI Cards */}
    <div>
      <h3 className="text-sm font-semibold text-gray-600 dark:text-gray-400 mb-4 uppercase tracking-wide">
        {kpiStatsData.header.subtitle}
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {kpiStatsData.kpis.map((kpi, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            className={`p-6 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 ${kpi.color}`}>
            <div className="flex items-end justify-between">
              <div>
                <p className="text-3xl font-bold text-gray-900 dark:text-white mb-1">
                  {kpi.value}
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {kpi.label}
                </p>
              </div>
              <span className="text-3xl">{kpi.icon}</span>
            </div>
          </motion.div>
        ))}
      </div>
    </div>

    {/* Weekly Progress Chart */}
    <div>
      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-6">
        התקדמות שבועות
      </h3>
      <div className="flex items-end justify-center gap-6 h-56">
        {kpiStatsData.weeklyProgress.map((week, idx) => (
          <motion.div
            key={idx}
            className="flex flex-col items-center gap-2"
            initial={{ height: 0 }}
            animate={{ height: "100%" }}
            transition={{ duration: 0.8, delay: idx * 0.1 }}>
            <div className="flex-1 flex items-end w-20">
              <motion.div
                className={`w-full ${week.color} rounded-t-lg`}
                initial={{ height: 0 }}
                animate={{ height: `${(week.value / 100) * 100}%` }}
                transition={{ duration: 0.8, delay: idx * 0.1 }}
              />
            </div>
            <div className="text-center">
              <p className="text-xs font-semibold text-gray-900 dark:text-white">
                {week.value}%
              </p>
              <p className="text-xs text-gray-600 dark:text-gray-400">
                {week.week}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </div>
);

// Dashboard 3: Upcoming Sessions & Ratings - Refactored
const upcomingSessionsData = {
  header: {
    title: "לוח זמנים ומשימות",
    subtitle: "תכנון למידה אישי וניהול זמן ",
  },
  stats: [
    { value: "1", label: "קורסים השלמו" },
    { value: "2.5", label: "שעות למידה" },
    { value: "3", label: "משימות השלמו" },
  ],
  sessions: [
    {
      title: "השלמת פרק 3 - זיהוי מוצרי חלב",
      subtitle: "ביצוחות מידע • השלמו 09:30",
      rating: "גבוה",
      ratingColor: "bg-red-100 text-red-700",
      icon: "✓",
      iconColor: "text-green-500",
      status: "completed",
    },
    {
      title: "מבחן ביניים - כללי בטיחות",
      subtitle: "ציון: 95% • השלמו 11:15",
      rating: "בינוני",
      ratingColor: "bg-yellow-100 text-yellow-700",
      icon: "✓",
      iconColor: "text-green-500",
      status: "completed",
    },
    {
      title: "צפייה בוידאו - טכניקות אחסון",
      subtitle: "בתהליך • זמן צפיה 15:40",
      rating: "בינוני",
      ratingColor: "bg-yellow-100 text-yellow-700",
      icon: "⚠",
      iconColor: "text-yellow-500",
      status: "pending",
    },
  ],
};

// Dashboard 3 Component (Refactored)
const Dashboard3 = () => (
  <div className="space-y-6" dir="rtl">
    {/* Stats Header */}
    <div className="grid grid-cols-3 gap-4">
      {upcomingSessionsData.stats.map((stat, idx) => (
        <motion.div
          key={idx}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: idx * 0.1 }}
          className="text-center p-4 bg-gradient-to-br from-purple-50 to-blue-50 dark:from-purple-950/30 dark:to-blue-950/30 rounded-lg border border-purple-200 dark:border-purple-800">
          <p className="text-3xl font-bold text-purple-600 dark:text-purple-400 mb-1">
            {stat.value}
          </p>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            {stat.label}
          </p>
        </motion.div>
      ))}
    </div>

    {/* Sessions Header */}
    <div className="flex items-center gap-2">
      <span className="text-2xl">📋</span>
      <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
        משימות היום
      </h3>
    </div>

    {/* Sessions List */}
    <div className="space-y-3">
      {upcomingSessionsData.sessions.map((session, idx) => (
        <motion.div
          key={idx}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: idx * 0.1 }}
          className="flex items-center gap-4 p-4 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 hover:shadow-md transition-shadow">
          {/* Status Icon */}
          <div
            className={`flex items-center justify-center w-8 h-8 rounded-full flex-shrink-0 ${
              session.status === "completed" ? "bg-green-100" : "bg-yellow-100"
            }`}>
            <span
              className={`text-lg ${
                session.status === "completed"
                  ? "text-green-600"
                  : "text-yellow-600"
              }`}>
              {session.icon}
            </span>
          </div>

          {/* Content */}
          <div className="flex-1 min-w-0">
            <h4
              className={`font-semibold text-gray-900 dark:text-white text-sm truncate ${
                session.status === "completed"
                  ? "text-decoration-line: line-through"
                  : ""
              }`}>
              {session.title}
            </h4>
            <p className="text-xs text-gray-600 dark:text-gray-400">
              {session.subtitle}
            </p>
          </div>

          {/* Rating Badge */}
          <span
            className={`px-3 py-1 rounded-full text-xs font-medium flex-shrink-0 ${session.ratingColor}`}>
            {session.rating}
          </span>
        </motion.div>
      ))}
    </div>

    {/* Footer Info */}
    <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
      <p className="text-xs text-gray-600 dark:text-gray-400 text-center">
        📊 כל המשימות מעודכנות בזמן אמת
      </p>
    </div>
  </div>
);

// Dashboard 4: AI Performance Analysis - Refactored
const aiAnalysisData = {
  header: {
    title: "ניתוח AI של עובדים",
    subtitle: "תובנות והמלצות אישיות",
    badge: "POWERED BY AI",
  },
  aiInsight: {
    title: "תובנת AI עבור דנה כהן",
    description:
      "העובדת מציגה ביצועים מעולים בקורסי בטיחות מזון אך זקוקה לחיזוק בנושא שיֿרות לקוחות. מומלץ להתמקד בהדרכה אישית ותרגול מעשי",
    confidence: 92,
    icon: "✨",
    backgroundColor: "bg-blue-50 dark:bg-blue-950/20",
    borderColor: "border-blue-300 dark:border-blue-800",
  },
  recommendations: [
    {
      title: "ביצועים כללים",
      icon: "✅",
      metric: "A-",
      description: "מעל הממוצע ב-15%",
      status: "positive",
      backgroundColor: "bg-green-50 dark:bg-green-950/20",
      badgeColor: "bg-green-200 dark:bg-green-900",
    },
    {
      title: "קבוע למידה",
      icon: "🎯",
      metric: "מחוזר",
      description: "זמן השלמה:2.3x מהיר יותר מהממוצע",
      status: "recommendation",
      backgroundColor: "bg-purple-50 dark:bg-purple-950/20",
      badgeColor: "bg-purple-200 dark:bg-purple-900",
    },
  ],
};

// Dashboard 4 Component (Refactored)
const Dashboard4 = () => (
  <div className="space-y-6" dir="rtl">
    {/* AI Insight Card */}
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className={`relative p-6 rounded-2xl border-2 ${aiAnalysisData.aiInsight.backgroundColor} ${aiAnalysisData.aiInsight.borderColor}`}>
      {/* Corner Icon */}
      <div className="absolute top-4 left-4 flex items-center justify-center w-12 h-12 rounded-full bg-blue-200 dark:bg-blue-900 text-xl">
        {aiAnalysisData.aiInsight.icon}
      </div>

      <div className="pr-16">
        {/* Title */}
        <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
          {aiAnalysisData.aiInsight.title}
        </h3>

        {/* Description */}
        <p className="text-sm text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
          {aiAnalysisData.aiInsight.description}
        </p>

        {/* Confidence Bar */}
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-xs font-semibold text-gray-600 dark:text-gray-400">
              רמת ביטחון:
            </span>
            <span className="text-sm font-bold text-gray-900 dark:text-white">
              {aiAnalysisData.aiInsight.confidence}%
            </span>
          </div>
          <motion.div className="w-full bg-gray-300 dark:bg-gray-700 rounded-full h-2 overflow-hidden">
            <motion.div
              className="h-full bg-gradient-to-r from-blue-400 to-purple-500 rounded-full"
              initial={{ width: 0 }}
              animate={{ width: `${aiAnalysisData.aiInsight.confidence}%` }}
              transition={{ duration: 1.2, delay: 0.2 }}
            />
          </motion.div>
        </div>
      </div>
    </motion.div>

    {/* Recommendations Grid */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {aiAnalysisData.recommendations.map((rec, idx) => (
        <motion.div
          key={idx}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: idx * 0.1 }}
          className={`p-5 rounded-xl border border-gray-200 dark:border-gray-700 ${rec.backgroundColor} hover:shadow-md transition-shadow`}>
          {/* Header */}
          <div className="flex items-start justify-between mb-3">
            <div className="flex items-center gap-2">
              <span className="text-2xl">{rec.icon}</span>
              <div>
                <h4 className="font-semibold text-gray-900 dark:text-white text-sm">
                  {rec.title}
                </h4>
              </div>
            </div>
            <span
              className={`px-2 py-1 rounded-full text-xs font-bold text-gray-900 dark:text-white ${rec.badgeColor}`}>
              {rec.metric}
            </span>
          </div>

          {/* Description */}
          <p className="text-xs text-gray-600 dark:text-gray-400">
            {rec.description}
          </p>
        </motion.div>
      ))}
    </div>

    {/* AI Features List */}
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6, delay: 0.3 }}
      className="pt-4 border-t border-gray-200 dark:border-gray-700">
      <p className="text-xs text-gray-600 dark:text-gray-400 text-center">
        🤖 ניתוח AI מעדכן בזמן אמת - התוצאות משתנות כל שעה
      </p>
    </motion.div>
  </div>
);

const DashboardsShowcase = React.forwardRef<
  HTMLDivElement,
  DashboardsShowcaseProps
>(
  (
    {
      className,
      title = "דשבורדים ודוחות בזמן אמת",
      subtitle = "צפו בדוגמאות של הדשבורדים המתקדמים שלנו - נתונים מעודכנים כל שנייה",
      ...props
    },
    ref
  ) => {
    const [selectedDashboard, setSelectedDashboard] = useState(0);

    const dashboards = [
      {
        title: "התקדמות הכשרות",
        description: "מעקב על סטטוס ההכשרות לכל עובד",
        icon: "📊",
      },
      {
        title: "ציונים במבחנים",
        description: "השוואת ביצועים בין קבוצות ויחידים",
        icon: "📈",
      },
      {
        title: "לוח זמנים ומשימות",
        description: "תכנון למידה אישי וניהול זמן ",
        icon: "📋",
      },
      {
        title: "ניתוח AI של עובדים",
        description: "תובנות והמלצות אישיות",
        icon: "🤖",
      },
    ];

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
      hidden: { opacity: 0, y: 20 },
      visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.5 },
      },
    };

    return (
      <div
        ref={ref}
        className={cn("relative py-20 px-4 sm:px-6 lg:px-8", className)}
        {...props}>
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-white via-blue-50/20 to-white dark:from-gray-950 dark:via-blue-950/10 dark:to-gray-950 pointer-events-none" />

        {/* Animated background elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-primary-500/10 to-accent-500/5 rounded-full blur-3xl -z-10" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-accent-500/10 to-secondary-500/5 rounded-full blur-3xl -z-10" />

        <div className="relative z-10 max-w-7xl mx-auto">
          {/* Header */}
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-300">
              {title}
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              {subtitle}
            </p>
          </motion.div>

          {/* Dashboard Tabs */}
          <motion.div
            className="flex gap-3 mb-8 overflow-x-auto pb-2 justify-center"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}>
            {dashboards.map((dashboard, index) => (
              <motion.button
                key={index}
                variants={itemVariants}
                onClick={() => setSelectedDashboard(index)}
                className={cn(
                  "px-4 py-2 rounded-lg font-medium whitespace-nowrap transition-all duration-300 text-sm md:text-base",
                  selectedDashboard === index
                    ? "bg-gradient-to-r from-primary-600 to-accent-600 text-white shadow-lg"
                    : "bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-700 hover:border-primary-500 dark:hover:border-primary-500"
                )}>
                <span className="mr-2">{dashboard.icon}</span>
                {dashboard.title}
              </motion.button>
            ))}
          </motion.div>

          {/* Dashboard Display */}
          <motion.div
            key={selectedDashboard}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="bg-white dark:bg-gray-900/50 rounded-xl border border-gray-200 dark:border-gray-800 p-8 shadow-sm">
            {/* Dashboard Header */}
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                {dashboards[selectedDashboard].title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                {dashboards[selectedDashboard].description}
              </p>
            </div>

            {/* Charts */}
            <div className="w-full">
              {selectedDashboard === 0 && <Dashboard1 />}

              {selectedDashboard === 1 && <Dashboard2 />}

              {selectedDashboard === 2 && <Dashboard3 />}

              {selectedDashboard === 3 && <Dashboard4 />}
            </div>

            {/* Dashboard Footer */}
            <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-800 flex justify-between items-center">
              <p className="text-sm text-gray-600 dark:text-gray-400">
                ✓ נתונים מעודכנים בזמן אמת
              </p>
              <button className="px-4 py-2 rounded-lg bg-green-600 text-white hover:bg-primary-700 transition-colors text-sm font-medium">
                ייצא דוח ל-Excel
              </button>
            </div>
          </motion.div>

          {/* Features Grid */}
          <motion.div
            className="grid md:grid-cols-4 gap-4 mt-12"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}>
            {[
              {
                icon: "📊",
                title: "דוחות מותאמים",
                description: "בנו דוחות לפי הצרכים שלכם",
              },
              {
                icon: "⏱️",
                title: "זמן אמת",
                description: "נתונים מעודכנים כל שנייה",
              },
              {
                icon: "📥",
                title: "ייצוא נתונים",
                description: "הוריד דוחות ב-PDF או Excel",
              },
              {
                icon: "🔔",
                title: "התראות חכמות",
                description: "קבל הודעות על אירועים חשובים",
              },
            ].map((feature, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="p-4 rounded-lg bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950/30 dark:to-indigo-950/20 border border-blue-200 dark:border-blue-900/30 text-center">
                <div className="text-3xl mb-2">{feature.icon}</div>
                <h4 className="font-semibold text-gray-900 dark:text-white mb-1 text-sm">
                  {feature.title}
                </h4>
                <p className="text-xs text-gray-600 dark:text-gray-400">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    );
  }
);

DashboardsShowcase.displayName = "DashboardsShowcase";

export { DashboardsShowcase };

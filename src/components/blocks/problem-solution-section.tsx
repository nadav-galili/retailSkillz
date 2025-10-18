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
    title: "Inconsistent Training Quality",
    description:
      "Retail staff receive fragmented training across locations with no standardized approach",
    icon: AlertCircle,
  },
  {
    title: "High Employee Turnover",
    description:
      "Lack of engaging training leads to demotivated staff and increased turnover costs",
    icon: AlertCircle,
  },
  {
    title: "Limited Skill Development",
    description:
      "Traditional methods don't track or measure employee skill progression effectively",
    icon: AlertCircle,
  },
  {
    title: "Time & Resource Constraints",
    description:
      "Manual training consumes valuable time and resources that could be invested elsewhere",
    icon: AlertCircle,
  },
];

const solutions = [
  {
    title: "Unified Training Platform",
    description:
      "Standardized curriculum accessible to all employees across all locations in real-time",
    icon: CheckCircle2,
  },
  {
    title: "Engagement & Gamification",
    description:
      "Interactive learning paths with progress tracking, badges, and rewards to keep staff motivated",
    icon: CheckCircle2,
  },
  {
    title: "Skills Analytics & Insights",
    description:
      "Detailed performance metrics and skill assessments to identify gaps and growth opportunities",
    icon: CheckCircle2,
  },
  {
    title: "Scalable & Efficient",
    description:
      "Automated training workflows that reduce overhead and let managers focus on leadership",
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
      title = "The Problem & Our Solution",
      subtitle = "Transforming retail training from a challenge into a competitive advantage",
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
          ease: "easeOut",
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

        <div className="relative z-10 max-w-6xl mx-auto">
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

          {/* Problems & Solutions Grid */}
          <div className="grid lg:grid-cols-2 gap-8 items-start">
            {/* Problems Section */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="space-y-4">
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
                Current Challenges
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
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
                RetailSkillz Solutions
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

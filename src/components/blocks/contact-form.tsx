import React, { useState } from "react";
import { motion } from "motion/react";
import { Mail, Phone, Send, CheckCircle2, AlertCircle } from "lucide-react";
import { cn } from "@/lib/utils";

interface ContactFormProps extends React.HTMLAttributes<HTMLDivElement> {
  title?: string;
  subtitle?: string;
}

const ContactForm = React.forwardRef<HTMLDivElement, ContactFormProps>(
  (
    {
      className,
      title = "צרו קשר איתנו",
      subtitle = "יש לכם שאלות? אנחנו כאן כדי לעזור. השאירו פרטים והצוות שלנו יחזור אליכם בהקדם",
      ...props
    },
    ref
  ) => {
    const [formState, setFormState] = useState<
      "idle" | "loading" | "success" | "error"
    >("idle");
    const [formData, setFormData] = useState({
      name: "",
      email: "",
      phone: "",
      company: "",
      message: "",
    });

    const handleChange = (
      e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
      const { name, value } = e.target;
      setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      setFormState("loading");

      try {
        const response = await fetch("https://formspree.io/f/xdkwbrob", {
          method: "POST",
          body: JSON.stringify(formData),
          headers: {
            Accept: "application/json",
          },
        });

        if (response.ok) {
          setFormState("success");
          setFormData({
            name: "",
            email: "",
            phone: "",
            company: "",
            message: "",
          });
          // Reset success message after 5 seconds
          setTimeout(() => setFormState("idle"), 5000);
        } else {
          setFormState("error");
          setTimeout(() => setFormState("idle"), 5000);
        }
      } catch (error) {
        console.error("Error sending form:", error);
        setFormState("error");
        setTimeout(() => setFormState("idle"), 5000);
      }
    };

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

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Contact Info */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="space-y-6">
              <motion.div
                variants={itemVariants}
                className="flex gap-4 p-6 rounded-lg bg-white dark:bg-gray-900/50 border border-gray-200 dark:border-gray-800">
                <div className="flex-shrink-0 flex items-center justify-center w-12 h-12 rounded-lg bg-primary-100 dark:bg-primary-950/30">
                  <Mail className="w-6 h-6 text-primary-600 dark:text-primary-400" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-1">
                    אימייל
                  </h3>
                  <a
                    href="mailto:nadav@retailskillz.com"
                    className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
                    nadavg@retailskillz.com
                  </a>
                </div>
              </motion.div>

              <motion.div
                variants={itemVariants}
                className="flex gap-4 p-6 rounded-lg bg-white dark:bg-gray-900/50 border border-gray-200 dark:border-gray-800">
                <div className="flex-shrink-0 flex items-center justify-center w-12 h-12 rounded-lg bg-accent-100 dark:bg-accent-950/30">
                  <Phone className="w-6 h-6 text-accent-600 dark:text-accent-400" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-1">
                    טלפון
                  </h3>
                  <a
                    href="tel:+972501234567"
                    className="text-gray-600 dark:text-gray-400 hover:text-accent-600 dark:hover:text-accent-400 transition-colors">
                    052-4417944
                  </a>
                </div>
              </motion.div>
            </motion.div>

            {/* Contact Form */}
            <motion.form
              onSubmit={handleSubmit}
              className="lg:col-span-2 p-8 rounded-xl bg-white dark:bg-gray-900/50 border border-gray-200 dark:border-gray-800 shadow-sm"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}>
              <div className="space-y-5">
                {/* Name and Email Row */}
                <div className="grid md:grid-cols-2 gap-4">
                  <motion.div variants={itemVariants}>
                    <label className="block text-sm font-medium text-gray-900 dark:text-white mb-2">
                      שם מלא
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary-500 transition-all"
                      placeholder="שמך המלא"
                    />
                  </motion.div>
                  <motion.div variants={itemVariants}>
                    <label className="block text-sm font-medium text-gray-900 dark:text-white mb-2">
                      אימייל
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary-500 transition-all"
                      placeholder="your@email.com"
                    />
                  </motion.div>
                </div>

                {/* Phone and Company Row */}
                <div className="grid md:grid-cols-2 gap-4">
                  <motion.div variants={itemVariants}>
                    <label className="block text-sm font-medium text-gray-900 dark:text-white mb-2">
                      טלפון
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary-500 transition-all"
                      placeholder="050-XXX-XXXX"
                    />
                  </motion.div>
                  <motion.div variants={itemVariants}>
                    <label className="block text-sm font-medium text-gray-900 dark:text-white mb-2">
                      שם החברה
                    </label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary-500 transition-all"
                      placeholder="שם החברה שלך"
                    />
                  </motion.div>
                </div>

                {/* Message */}
                <motion.div variants={itemVariants}>
                  <label className="block text-sm font-medium text-gray-900 dark:text-white mb-2">
                    הודעה
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary-500 transition-all resize-none"
                    placeholder="כתבו את הודעתכם כאן..."
                  />
                </motion.div>

                {/* Status Messages */}
                {formState === "success" && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex items-center gap-3 p-4 rounded-lg bg-green-50 dark:bg-green-950/20 border border-green-200 dark:border-green-900/50">
                    <CheckCircle2 className="w-5 h-5 text-green-600 dark:text-green-400" />
                    <p className="text-sm font-medium text-green-800 dark:text-green-400">
                      התודעה נשלחה בהצלחה! נחזור אליכם בקרוב.
                    </p>
                  </motion.div>
                )}

                {formState === "error" && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex items-center gap-3 p-4 rounded-lg bg-red-50 dark:bg-red-950/20 border border-red-200 dark:border-red-900/50">
                    <AlertCircle className="w-5 h-5 text-red-600 dark:text-red-400" />
                    <p className="text-sm font-medium text-red-800 dark:text-red-400">
                      שגיאה בשליחת ההודעה. אנא נסו שוב.
                    </p>
                  </motion.div>
                )}

                {/* Submit Button */}
                <motion.button
                  type="submit"
                  disabled={formState === "loading"}
                  whileHover={{ scale: formState !== "loading" ? 1.02 : 1 }}
                  whileTap={{ scale: formState !== "loading" ? 0.98 : 1 }}
                  className="w-full py-3 rounded-lg font-semibold text-white bg-gradient-to-r from-primary-600 to-accent-600 hover:from-primary-700 hover:to-accent-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 flex items-center justify-center gap-2">
                  {formState === "loading" ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      שולח...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      שלח הודעה
                    </>
                  )}
                </motion.button>
              </div>
            </motion.form>
          </div>
        </div>
      </div>
    );
  }
);

ContactForm.displayName = "ContactForm";

export { ContactForm };

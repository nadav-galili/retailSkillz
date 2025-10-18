import React from "react";
import { motion } from "motion/react";
import {
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Twitter,
  Facebook,
  Instagram,
} from "lucide-react";
import { cn } from "@/lib/utils";

interface FooterProps extends React.HTMLAttributes<HTMLDivElement> {
  companyName?: string;
  companyDescription?: string;
}

const quickLinks = [
  { label: "Home", href: "#hero" },
  { label: "Features", href: "#features" },
  { label: "Problem & Solution", href: "#problem-solution" },
  { label: "Contact", href: "#contact" },
];

const legalLinks = [
  { label: "Privacy Policy", href: "#privacy" },
  { label: "Terms of Service", href: "#terms" },
  { label: "Cookie Policy", href: "#cookies" },
  { label: "Compliance", href: "#compliance" },
];

const productLinks = [
  { label: "Learning Platform", href: "#" },
  { label: "Analytics Dashboard", href: "#" },
  { label: "Mobile App", href: "#" },
  { label: "Integrations", href: "#" },
];

const socialLinks = [
  { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
  { icon: Twitter, href: "https://twitter.com", label: "Twitter" },
  { icon: Facebook, href: "https://facebook.com", label: "Facebook" },
  { icon: Instagram, href: "https://instagram.com", label: "Instagram" },
];

const Footer = React.forwardRef<HTMLDivElement, FooterProps>(
  (
    {
      className,
      companyName = "RetailSkillz",
      companyDescription = "Empowering retail teams with world-class training and skill development solutions.",
      ...props
    },
    ref
  ) => {
    const linkVariants = {
      hidden: { opacity: 0, y: 10 },
      visible: (i: number) => ({
        opacity: 1,
        y: 0,
        transition: {
          delay: i * 0.05,
          duration: 0.4,
        },
      }),
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

    return (
      <footer
        ref={ref}
        className={cn(
          "relative bg-gray-900 dark:bg-black text-gray-100",
          className
        )}
        {...props}>
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-900 to-black pointer-events-none" />

        {/* Animated background elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-primary-500/5 to-accent-500/5 rounded-full blur-3xl -z-10" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-accent-500/5 to-secondary-500/5 rounded-full blur-3xl -z-10" />

        {/* Main content */}
        <div className="relative z-10">
          {/* Top section */}
          <div className="border-b border-gray-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
                {/* Company Info */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}>
                  <h3 className="text-2xl font-bold bg-gradient-to-r from-primary-400 to-accent-400 bg-clip-text text-transparent mb-4">
                    {companyName}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed mb-6">
                    {companyDescription}
                  </p>
                  {/* Social Links */}
                  <div className="flex gap-3">
                    {socialLinks.map((social, index) => {
                      const Icon = social.icon;
                      return (
                        <motion.a
                          key={index}
                          href={social.href}
                          aria-label={social.label}
                          className="flex items-center justify-center w-10 h-10 rounded-lg bg-gray-800 hover:bg-primary-600 transition-all duration-300 text-gray-400 hover:text-white"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.95 }}>
                          <Icon className="w-5 h-5" />
                        </motion.a>
                      );
                    })}
                  </div>
                </motion.div>

                {/* Quick Links */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.1 }}>
                  <h4 className="font-semibold text-white mb-6">Quick Links</h4>
                  <ul className="space-y-3">
                    {quickLinks.map((link, index) => (
                      <motion.li
                        key={index}
                        custom={index}
                        variants={linkVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}>
                        <a
                          href={link.href}
                          className="text-gray-400 hover:text-primary-400 transition-colors text-sm">
                          {link.label}
                        </a>
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>

                {/* Product Links */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}>
                  <h4 className="font-semibold text-white mb-6">Product</h4>
                  <ul className="space-y-3">
                    {productLinks.map((link, index) => (
                      <motion.li
                        key={index}
                        custom={index}
                        variants={linkVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}>
                        <a
                          href={link.href}
                          className="text-gray-400 hover:text-accent-400 transition-colors text-sm">
                          {link.label}
                        </a>
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>

                {/* Contact Info */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.3 }}>
                  <h4 className="font-semibold text-white mb-6">Contact</h4>
                  <div className="space-y-4">
                    <a
                      href="mailto:hello@retailskillz.com"
                      className="flex items-start gap-3 text-gray-400 hover:text-primary-400 transition-colors text-sm">
                      <Mail className="w-5 h-5 flex-shrink-0 mt-0.5" />
                      <span>hello@retailskillz.com</span>
                    </a>
                    <a
                      href="tel:+1234567890"
                      className="flex items-start gap-3 text-gray-400 hover:text-primary-400 transition-colors text-sm">
                      <Phone className="w-5 h-5 flex-shrink-0 mt-0.5" />
                      <span>+1 (234) 567-890</span>
                    </a>
                    <div className="flex items-start gap-3 text-gray-400 text-sm">
                      <MapPin className="w-5 h-5 flex-shrink-0 mt-0.5" />
                      <span>123 Retail Street, Commerce City, CC 12345</span>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>

          {/* Bottom section */}
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              {/* Copyright */}
              <motion.p
                className="text-gray-500 text-sm text-center md:text-left"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}>
                &copy; {new Date().getFullYear()} {companyName}. All rights
                reserved.
              </motion.p>

              {/* Legal Links */}
              <motion.div
                className="flex flex-wrap items-center justify-center gap-6"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}>
                {legalLinks.map((link, index) => (
                  <motion.a
                    key={index}
                    href={link.href}
                    className="text-gray-500 hover:text-gray-300 transition-colors text-sm"
                    custom={index}
                    variants={linkVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}>
                    {link.label}
                  </motion.a>
                ))}
              </motion.div>

              {/* Status indicator */}
              <motion.div
                className="flex items-center gap-2 text-sm text-gray-500"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.5 }}>
                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                <span>All systems operational</span>
              </motion.div>
            </div>
          </div>
        </div>
      </footer>
    );
  }
);

Footer.displayName = "Footer";

export { Footer };

import React from 'react';
import { motion } from 'framer-motion';

const Button = ({ children, onClick, type = "button", variant = "primary", className = "", href }) => {
  const baseStyles = "px-6 py-3 rounded-full font-medium transition-all duration-300 flex items-center justify-center gap-2 text-sm md:text-base";
  
  const variants = {
    primary: "bg-primary text-white hover:bg-blue-600 shadow-lg shadow-blue-500/20",
    secondary: "bg-white/5 text-white border border-white/10 hover:bg-white/10 hover:border-white/20",
    outline: "bg-transparent text-primary border border-primary hover:bg-primary/5",
  };

  const Component = href ? motion.a : motion.button;

  return (
    <Component
      href={href}
      type={type}
      onClick={onClick}
      className={`${baseStyles} ${variants[variant]} ${className}`}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      {children}
    </Component>
  );
};

export default Button;

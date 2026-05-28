import { motion } from 'framer-motion';

const Button = ({ children, onClick, type = "button", variant = "primary", className = "", href, disabled = false, as: ComponentOverride, ...props }) => {
  const baseStyles = "px-6 py-3 rounded-full font-medium transition-all duration-300 inline-flex items-center justify-center gap-2 text-sm md:text-base focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/70 focus-visible:ring-offset-2 focus-visible:ring-offset-dark disabled:pointer-events-none disabled:opacity-60";
  
  const variants = {
    primary: "bg-primary text-white hover:bg-blue-600 shadow-lg shadow-blue-500/20",
    secondary: "bg-white/5 text-white border border-white/10 hover:bg-white/10 hover:border-white/20",
    outline: "bg-transparent text-primary border border-primary hover:bg-primary/5",
  };

  const Component = ComponentOverride || (href ? motion.a : motion.button);
  const motionProps = ComponentOverride || disabled
    ? {}
    : {
        whileHover: { scale: 1.02 },
        whileTap: { scale: 0.98 },
      };

  return (
    <Component
      href={href}
      type={!href && !ComponentOverride ? type : undefined}
      onClick={onClick}
      aria-disabled={href && disabled ? true : undefined}
      disabled={!href && !ComponentOverride ? disabled : undefined}
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...motionProps}
      {...props}
    >
      {children}
    </Component>
  );
};

export default Button;

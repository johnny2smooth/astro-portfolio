import { motion } from 'framer-motion';
export default function FadeIn({ children }) {
  return (
    <motion.div
      className="font-black text-5xl text-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ ease: 'easeIn', duration: 1 }}
    >
      {children}
    </motion.div>
  );
}

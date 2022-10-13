import { useState } from 'react';
import { motion } from 'framer-motion';
export default function Header() {
  const [count, setCount] = useState(2);
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      <button onClick={() => setCount((prev) => prev + 1)}>{count}</button>
      <h1>hello</h1>
    </motion.div>
  );
}

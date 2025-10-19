import { motion, AnimatePresence } from "motion/react";

export const Loading = ({ isLoading }: { isLoading: boolean }) => {
  return (
    <AnimatePresence initial={false}>
      {isLoading && (
        <motion.div
          key="loading"
          className="bg-primary fixed inset-0 flex items-center justify-center"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0 }}
        >
          <div className="border-gray border-t-blue h-10 w-10 animate-spin rounded-full border-4"></div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

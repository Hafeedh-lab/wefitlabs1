import { motion } from 'framer-motion';

export const Footer = () => {
  return (
    <footer className="mt-24 border-t border-white/5 bg-black/20">
      <div className="container flex flex-col gap-6 py-10 text-sm text-white/60 md:flex-row md:items-center md:justify-between">
        <motion.div whileHover={{ scale: 1.01 }} className="flex flex-col gap-2">
          <span className="text-base font-semibold text-white">weFit Labs</span>
          <span>Social fitness platform engineered for compounding network effects.</span>
        </motion.div>
        <div className="flex flex-wrap items-center gap-4">
          <a href="mailto:invest@wefitlabs.com" className="hover:text-white">
            invest@wefitlabs.com
          </a>
          <a href="https://calendly.com/wefit-investors" className="hover:text-white" target="_blank" rel="noreferrer">
            Calendly
          </a>
          <span className="text-xs">© {new Date().getFullYear()} weFit Labs. All rights reserved.</span>
        </div>
      </div>
    </footer>
  );
};

import { useState } from 'react';
import { Dialog } from '@headlessui/react';
import { Menu, X } from 'lucide-react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/Button';
import { navLinks } from '@/utils/constants';
import { handleCTAClick } from '@/utils/analytics';

const scrollToTarget = (href: string) => {
  const el = document.querySelector(href);
  if (!el) return;
  el.scrollIntoView({ behavior: 'smooth', block: 'start' });
};

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const onNavigate = (href: string) => {
    scrollToTarget(href);
    setIsOpen(false);
  };

  const navContent = (
    <nav className="flex flex-col gap-4 text-lg md:flex-row md:items-center md:gap-6 md:text-sm">
      {navLinks.map((link) => (
        <button
          key={link.href}
          className="text-left font-medium text-white/80 transition hover:text-white"
          onClick={() => onNavigate(link.href)}
        >
          {link.label}
        </button>
      ))}
      <Button
        size="md"
        className="mt-2 w-full md:mt-0 md:w-auto"
        onClick={() => {
          handleCTAClick('header_deck', 'Header deck download');
          const deck = document.getElementById('contact');
          deck?.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }}
      >
        Request Deck
      </Button>
    </nav>
  );

  return (
    <header className="sticky top-0 z-50 backdrop-blur-md">
      <div className="container flex items-center justify-between py-4">
        <motion.a
          href="#hero"
          className="flex items-center gap-3 text-lg font-semibold"
          whileHover={{ scale: 1.02 }}
        >
          <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary-blue/10 text-primary-blue">
            we
          </span>
          <span className="text-white">weFit Labs</span>
        </motion.a>
        <div className="hidden items-center gap-6 md:flex">{navContent}</div>
        <button
          className="inline-flex items-center rounded-md border border-white/10 p-2 text-white md:hidden"
          onClick={() => setIsOpen(true)}
          aria-label="Open navigation"
        >
          <Menu className="h-5 w-5" />
        </button>
      </div>

      <Dialog open={isOpen} onClose={setIsOpen} className="md:hidden">
        <div className="fixed inset-0 z-40 bg-black/60" aria-hidden="true" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-50 flex w-72 flex-col gap-6 bg-dark-charcoal/95 p-6 shadow-2xl">
          <button className="self-end rounded-full border border-white/10 p-2" onClick={() => setIsOpen(false)}>
            <X className="h-5 w-5" />
          </button>
          {navContent}
        </Dialog.Panel>
      </Dialog>
    </header>
  );
};

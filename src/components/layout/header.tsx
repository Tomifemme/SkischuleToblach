"use client";

import { useState } from 'react';
import Link from 'next/link';
import { MountainSnow, Menu, X } from 'lucide-react';
import { useTranslation } from '@/hooks/use-translation';
import { LanguageSwitcher } from '@/components/language-switcher';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/context/language-context';

const Header = () => {
  const { t } = useTranslation();
  const { language } = useLanguage();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { href: '/', label: t('nav.home') },
    { href: '/team', label: t('nav.team') },
    { href: '/prices', label: t('nav.prices') },
    { href: '/media', label: t('nav.media') },
    { href: '/contact', label: t('nav.contact') },
  ];

  return (
    <header className="bg-card shadow-md sticky top-0 z-40">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="flex items-center gap-2 text-primary">
            <MountainSnow className="h-8 w-8" />
            <span className="font-headline text-xl font-bold tracking-tight">
              SkiSchool360
            </span>
          </Link>

          <nav className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-4">
            <LanguageSwitcher />
            <Button asChild>
              <Link href="/booking">{t('nav.booking')}</Link>
            </Button>
          </div>

          <div className="md:hidden flex items-center">
            <Button onClick={() => setIsMenuOpen(!isMenuOpen)} variant="ghost" size="icon">
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              <span className="sr-only">Toggle menu</span>
            </Button>
          </div>
        </div>
      </div>
      
      {isMenuOpen && (
        <div className="md:hidden bg-card border-t">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                className="block px-3 py-2 rounded-md text-base font-medium text-foreground hover:bg-accent hover:text-accent-foreground"
              >
                {link.label}
              </Link>
            ))}
             <div className="border-t my-2"></div>
            <div className="px-3 py-2">
                 <LanguageSwitcher />
            </div>
            <div className="px-1 py-2">
                <Button asChild className="w-full">
                    <Link href="/booking">{t('nav.booking')}</Link>
                </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;

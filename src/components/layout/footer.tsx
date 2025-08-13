"use client";

import { useTranslation } from '@/hooks/use-translation';
import { MountainSnow } from 'lucide-react';
import Link from 'next/link';

const Footer = () => {
    const { t } = useTranslation();
    return (
        <footer className="bg-muted text-muted-foreground mt-12">
            <div className="container mx-auto py-6 px-4 sm:px-6 lg:px-8 text-center">
                <p className="text-sm">
                    &copy; {new Date().getFullYear()} SkiSchool360. {t('footer.rights')}
                </p>
            </div>
        </footer>
    );
};

export default Footer;

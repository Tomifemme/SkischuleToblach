"use client";

import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useTranslation } from '@/hooks/use-translation';
import { Users, Medal, Mountain } from 'lucide-react';

export default function HomePage() {
  const { t } = useTranslation();

  const features = [
    {
      icon: <Users className="h-10 w-10 text-primary" />,
      title: t('home.features.0.title'),
      description: t('home.features.0.description'),
    },
    {
      icon: <Medal className="h-10 w-10 text-primary" />,
      title: t('home.features.1.title'),
      description: t('home.features.1.description'),
    },
    {
      icon: <Mountain className="h-10 w-10 text-primary" />,
      title: t('home.features.2.title'),
      description: t('home.features.2.description'),
    },
  ];

  return (
    <div className="flex flex-col">
      <section className="relative h-[60vh] md:h-[70vh] flex items-center justify-center text-center text-white">
        <Image
          src="https://placehold.co/1920x1080.png"
          alt="Skiing in the Dolomites"
          layout="fill"
          objectFit="cover"
          className="absolute z-0"
          data-ai-hint="skiing mountains"
        />
        <div className="absolute inset-0 bg-black/50 z-10"></div>
        <div className="relative z-20 px-4 flex flex-col items-center">
          <h1 className="font-headline text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight drop-shadow-lg animate-fade-in-down">
            {t('home.heroTitle')}
          </h1>
          <p className="mt-4 max-w-3xl text-lg md:text-xl text-primary-foreground/90 drop-shadow-md animate-fade-in-up">
            {t('home.heroSubtitle')}
          </p>
          <Button asChild size="lg" className="mt-8 bg-accent text-accent-foreground hover:bg-accent/90 animate-fade-in-up">
            <Link href="/booking">{t('home.bookNow')}</Link>
          </Button>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-card">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in-right">
              <Image
                src="https://placehold.co/600x400.png"
                alt="Ski school group"
                width={600}
                height={400}
                className="rounded-lg shadow-xl"
                data-ai-hint="ski school"
              />
            </div>
            <div className="animate-fade-in-left">
              <h2 className="font-headline text-3xl md:text-4xl font-bold text-primary">
                {t('home.overviewTitle')}
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                {t('home.overviewText')}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="text-center p-6 border-2 border-transparent hover:border-primary hover:shadow-xl transition-all duration-300">
                <CardHeader className="flex flex-col items-center">
                  <div className="bg-primary/10 p-4 rounded-full">
                    {feature.icon}
                  </div>
                  <CardTitle className="font-headline mt-4 text-2xl font-semibold">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

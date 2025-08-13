"use client";

import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useTranslation } from '@/hooks/use-translation';
import { useLanguage, Language } from '@/context/language-context';
import { instructors } from '@/lib/data';

export default function TeamPage() {
  const { t } = useTranslation();
  const { language } = useLanguage();

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="text-center mb-12">
        <h1 className="font-headline text-4xl md:text-5xl font-bold text-primary">
          {t('team.title')}
        </h1>
        <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
          {t('team.subtitle')}
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {instructors.map((instructor) => (
          <Card key={instructor.id} className="overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 flex flex-col">
            <div className="relative h-64 w-full">
              <Image
                src={instructor.image}
                alt={instructor.name}
                layout="fill"
                objectFit="cover"
                data-ai-hint={instructor.hint}
              />
            </div>
            <CardHeader className="p-4">
              <CardTitle className="font-headline text-xl">{instructor.name}</CardTitle>
            </CardHeader>
            <CardContent className="p-4 pt-0 flex-grow">
              <p className="text-sm text-muted-foreground">
                {instructor.bio[language as Language]}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}

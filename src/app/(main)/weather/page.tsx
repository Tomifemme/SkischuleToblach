
"use client";

import { useTranslation } from '@/hooks/use-translation';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useEffect, useState } from 'react';

const WeatherWidget = () => {
    useEffect(() => {
        const script = document.createElement('script');
        script.id = 'weatherwidget-io-js';
        script.src = 'https://weatherwidget.io/js/widget.min.js';
        script.async = true;
        document.body.appendChild(script);

        return () => {
            const existingScript = document.getElementById('weatherwidget-io-js');
            if (existingScript) {
                document.body.removeChild(existingScript);
            }
        };
    }, []);

    return (
        <a
            className="weatherwidget-io"
            href="https://forecast7.com/en/46d7312d24/dobbiaco/"
            data-label_1="DOBBIACO"
            data-label_2="WEATHER"
            data-theme="original"
            style={{ display: 'block', position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
        >
            Dobbiaco Weather
        </a>
    );
};


export default function WeatherPage() {
  const { t } = useTranslation();
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])


  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="text-center mb-12">
        <h1 className="font-headline text-4xl md:text-5xl font-bold text-primary">
          {t('weather.title')}
        </h1>
        <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
          {t('weather.subtitle')}
        </p>
      </div>

      <Card className="max-w-4xl mx-auto shadow-xl overflow-hidden">
        <CardContent className="p-0 relative h-[380px]">
            {isClient && <WeatherWidget />}
        </CardContent>
      </Card>
    </div>
  );
}

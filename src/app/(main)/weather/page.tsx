
"use client";

import { useTranslation } from '@/hooks/use-translation';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useEffect, useState } from 'react';

const WeatherWidget = () => {
    useEffect(() => {
        const scriptId = 'weatherwidget-io-js';
        // Check if the script already exists
        if (document.getElementById(scriptId)) return;

        const script = document.createElement('script');
        script.id = scriptId;
        script.src = 'https://weatherwidget.io/js/widget.min.js';
        script.async = true;
        
        // Find the anchor tag and append the script after it
        const widgetAnchor = document.querySelector('.weatherwidget-io');
        if(widgetAnchor && widgetAnchor.parentNode){
             widgetAnchor.parentNode.insertBefore(script, widgetAnchor.nextSibling);
        } else {
             document.body.appendChild(script);
        }

        return () => {
            // The script will be handled by the widget itself, 
            // but we can remove it on unmount if needed.
            const existingScript = document.getElementById(scriptId);
            if (existingScript) {
                // To avoid issues with re-renders, it might be better to leave the script
                // as weatherwidget.io might manage its state internally.
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
            data-font="Poppins"
            style={{ display: 'block', position: 'relative', height: '380px', width: '100%' }}
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
        <CardContent className="p-0">
            {isClient ? <WeatherWidget /> : <div className="h-[380px] w-full bg-muted animate-pulse"></div>}
        </CardContent>
      </Card>
    </div>
  );
}

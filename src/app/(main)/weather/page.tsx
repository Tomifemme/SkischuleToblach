
"use client";

import { useTranslation } from '@/hooks/use-translation';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function WeatherPage() {
  const { t } = useTranslation();

  const weatherWidgetUrl = "https://www.meteoblue.com/en/weather/widget/daily/dobbiaco_italy_3178003?geoloc=fixed&days=5&tempunit=CELSIUS&windunit=KILOMETER_PER_HOUR&precipunit=MILLIMETER&coloured=coloured&pictoicon=1&maxtemperature=1&mintemperature=1&windspeed=1&windgust=0&winddirection=1&uvindex=1&humidity=1&precipitation=1&precipitationprobability=1&spot=1&pressure=1&sunshine=1";

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
          <iframe
            src={weatherWidgetUrl}
            frameBorder="0"
            scrolling="no"
            allowTransparency={true}
            sandbox="allow-same-origin allow-scripts allow-popups allow-popups-to-escape-sandbox"
            style={{ width: '100%', height: '520px' }}
          ></iframe>
        </CardContent>
      </Card>
    </div>
  );
}

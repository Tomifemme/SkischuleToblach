"use client";

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useTranslation } from '@/hooks/use-translation';
import { MapPin, Clock, Phone, Mail } from 'lucide-react';

export default function ContactPage() {
  const { t } = useTranslation();

  const contactDetails = [
    { icon: <MapPin className="h-6 w-6 text-primary" />, titleKey: 'contact.addressTitle', valueKey: 'contact.address' },
    { icon: <Clock className="h-6 w-6 text-primary" />, titleKey: 'contact.hoursTitle', valueKey: 'contact.hours' },
    { icon: <Phone className="h-6 w-6 text-primary" />, titleKey: 'contact.phoneTitle', valueKey: 'contact.phone' },
    { icon: <Mail className="h-6 w-6 text-primary" />, titleKey: 'contact.emailTitle', valueKey: 'contact.email' },
  ];

  const mapEmbedUrl = "https://maps.google.com/maps?q=Via%20Dolomiti%2C%203%2C%2039034%20Dobbiaco%20BZ%2C%20Italy&t=&z=15&ie=UTF8&iwloc=&output=embed";

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="text-center mb-12">
        <h1 className="font-headline text-4xl md:text-5xl font-bold text-primary">
          {t('contact.title')}
        </h1>
        <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
          {t('contact.subtitle')}
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-12">
        <div>
          <Card className="shadow-xl h-full">
            <CardHeader>
              <CardTitle className="font-headline text-2xl">Contact Information</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-6">
                {contactDetails.map((item, index) => (
                  <li key={index} className="flex items-start gap-4">
                    <div className="flex-shrink-0 mt-1">{item.icon}</div>
                    <div>
                      <h3 className="font-semibold text-lg">{t(item.titleKey)}</h3>
                      <p className="text-muted-foreground">{t(item.valueKey)}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
        <div>
          <Card className="shadow-xl overflow-hidden">
            <CardHeader>
                <CardTitle className="font-headline text-2xl">{t('contact.mapTitle')}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-96 w-full rounded-md overflow-hidden">
                <iframe
                  src={mapEmbedUrl}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={false}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}

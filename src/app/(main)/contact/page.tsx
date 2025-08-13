"use client";

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useTranslation } from '@/hooks/use-translation';
import { MapPin, Clock, Phone, Mail, UserCheck } from 'lucide-react';

export default function ContactPage() {
  const { t } = useTranslation();

  const officeContactDetails = [
    { icon: <MapPin className="h-6 w-6 text-primary" />, titleKey: 'contact.addressTitle', valueKey: 'contact.address' },
    { icon: <Clock className="h-6 w-6 text-primary" />, titleKey: 'contact.hoursTitle', valueKey: 'contact.hours' },
    { icon: <Phone className="h-6 w-6 text-primary" />, titleKey: 'contact.phoneTitle', valueKey: 'contact.phone' },
    { icon: <Mail className="h-6 w-6 text-primary" />, titleKey: 'contact.emailTitle', valueKey: 'contact.email' },
  ];

  const officeMapUrl = "https://maps.google.com/maps?q=Via%20Dolomiti%2C%203%2C%2039034%20Dobbiaco%20BZ%2C%20Italy&t=&z=15&ie=UTF8&iwloc=&output=embed";
  const meetingPointMapUrl = "https://maps.google.com/maps?q=Pista%20Sci%20Rienza%2C%20Dobbiaco%20BZ%2C%20Italy&t=&z=15&ie=UTF8&iwloc=&output=embed";

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

      <div className="grid md:grid-cols-1 gap-16">
        {/* Office Location */}
        <Card className="shadow-xl">
            <CardHeader>
                <CardTitle className="font-headline text-3xl">Our Office</CardTitle>
            </CardHeader>
            <CardContent className="grid md:grid-cols-2 gap-12">
                <div>
                    <h3 className="font-headline text-2xl mb-4">Contact Information</h3>
                    <ul className="space-y-6">
                        {officeContactDetails.map((item, index) => (
                        <li key={index} className="flex items-start gap-4">
                            <div className="flex-shrink-0 mt-1">{item.icon}</div>
                            <div>
                            <h4 className="font-semibold text-lg">{t(item.titleKey)}</h4>
                            <p className="text-muted-foreground">{t(item.valueKey)}</p>
                            </div>
                        </li>
                        ))}
                    </ul>
                </div>
                <div>
                    <h3 className="font-headline text-2xl mb-4">{t('contact.mapTitle')}</h3>
                    <div className="h-96 w-full rounded-md overflow-hidden border">
                        <iframe
                        src={officeMapUrl}
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen={false}
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                    </div>
                </div>
            </CardContent>
        </Card>

        {/* Meeting Point */}
        <Card className="shadow-xl">
            <CardHeader>
                <CardTitle className="font-headline text-3xl">Lesson Meeting Point</CardTitle>
            </CardHeader>
            <CardContent className="grid md:grid-cols-2 gap-12">
                <div>
                    <h3 className="font-headline text-2xl mb-4">Location Details</h3>
                    <ul className="space-y-6">
                        <li className="flex items-start gap-4">
                            <div className="flex-shrink-0 mt-1"><UserCheck className="h-6 w-6 text-primary" /></div>
                            <div>
                                <h4 className="font-semibold text-lg">Rienza Slope</h4>
                                <p className="text-muted-foreground">Please meet your instructor in front of the restaurant on the Rienza slope.</p>
                            </div>
                        </li>
                    </ul>
                </div>
                <div>
                    <h3 className="font-headline text-2xl mb-4">Meeting Point Map</h3>
                     <div className="h-96 w-full rounded-md overflow-hidden border">
                        <iframe
                        src={meetingPointMapUrl}
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen={false}
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                    </div>
                </div>
            </CardContent>
        </Card>
      </div>
    </div>
  );
}

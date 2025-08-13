
"use client";

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { useTranslation } from '@/hooks/use-translation';
import { priceList2025_2026 } from '@/lib/data';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

type PriceData = { [key: string]: number | { [key: string]: any } };

export default function PricesPage() {
  const { t } = useTranslation();

  const formatPrice = (price: number) => `€ ${price.toFixed(2)}`;

  const renderSimpleTable = (titleKey: string, data: PriceData, col1Key: string, col2Key: string) => (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>{t(col1Key)}</TableHead>
          <TableHead className="text-right">{t(col2Key)}</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {Object.entries(data).map(([key, value]) => (
          <TableRow key={key}>
            <TableCell>{t(`prices.terms.${key}`)}</TableCell>
            <TableCell className="text-right">{formatPrice(value as number)}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="text-center mb-12">
        <h1 className="font-headline text-4xl md:text-5xl font-bold text-primary">
          {t('prices.title')} 2025/2026
        </h1>
        <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
          {t('prices.subtitle')}
        </p>
      </div>

      <Accordion type="multiple" collapsible className="w-full space-y-8">
        
        <AccordionItem value="group-courses">
          <AccordionTrigger className="font-headline text-3xl text-primary">{t('prices.groupCourses2Hours')}</AccordionTrigger>
          <AccordionContent className="space-y-6 pt-4">
            {Object.entries(priceList2025_2026.groupCourses2Hours).map(([period, prices]) => (
              <Card key={period}>
                <CardHeader>
                  <CardTitle className="text-xl">{t('prices.seasons.period')}: {period.replace(/_/g, ' & ')}</CardTitle>
                </CardHeader>
                <CardContent>
                  {renderSimpleTable('prices.groupCourses2Hours', prices, 'prices.duration', 'prices.price')}
                </CardContent>
              </Card>
            ))}
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="private-lessons">
          <AccordionTrigger className="font-headline text-3xl text-primary">{t('prices.privateLessons')}</AccordionTrigger>
          <AccordionContent className="space-y-6 pt-4">
            {Object.entries(priceList2025_2026.privateLessons).map(([period, prices]) => (
              <Card key={period}>
                <CardHeader>
                  <CardTitle className="text-xl">{period.includes(':') ? `${t('prices.terms.timeslot')} ${period}` : `${t('prices.seasons.period')}: ${period.replace(/_/g, ' & ')}`}</CardTitle>
                </CardHeader>
                <CardContent>
                   <Table>
                    <TableHeader><TableRow><TableHead>{t('prices.service')}</TableHead><TableHead className="text-right">{t('prices.price')}</TableHead></TableRow></TableHeader>
                    <TableBody>
                      {Object.entries(prices).map(([key, value]) => (
                        <TableRow key={key}>
                          <TableCell>{t(`prices.terms.${key}`)}</TableCell>
                          <TableCell className="text-right">{formatPrice(value as number)}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                   </Table>
                </CardContent>
              </Card>
            ))}
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="super-courses">
          <AccordionTrigger className="font-headline text-3xl text-primary">{t('prices.superCourses')}</AccordionTrigger>
          <AccordionContent className="space-y-6 pt-4">
             {Object.entries(priceList2025_2026.superCourses).map(([period, prices]) => (
              <Card key={period}>
                <CardHeader>
                  <CardTitle className="text-xl">{t('prices.seasons.period')}: {period.replace(/_/g, ' & ')}</CardTitle>
                </CardHeader>
                <CardContent>
                  <Table>
                    <TableHeader><TableRow><TableHead>{t('prices.groupSize')}</TableHead><TableHead>{t('prices.duration')}</TableHead><TableHead className="text-right">{t('prices.price')}</TableHead></TableRow></TableHeader>
                    <TableBody>
                      {Object.entries(prices).flatMap(([group, details]) => 
                        Object.entries(details).map(([duration, price]) => (
                           <TableRow key={`${group}-${duration}`}>
                              <TableCell>{t(`prices.terms.${group}`)}</TableCell>
                              <TableCell>{t(`prices.terms.${duration}`)}</TableCell>
                              <TableCell className="text-right">{formatPrice(price as number)}</TableCell>
                           </TableRow>
                        ))
                      )}
                    </TableBody>
                  </Table>
                </CardContent>
              </Card>
            ))}
          </AccordionContent>
        </AccordionItem>
        
        <AccordionItem value="weekend-course">
          <AccordionTrigger className="font-headline text-3xl text-primary">{t('prices.weekendCourse')}</AccordionTrigger>
          <AccordionContent className="pt-4">
             {Object.entries(priceList2025_2026.weekendCourse).map(([period, details]) => (
              <Card key={period}>
                <CardHeader>
                  <CardTitle className="text-xl">{t('prices.seasons.period')}: {period}</CardTitle>
                </CardHeader>
                <CardContent>
                   <p className="mb-4"><strong>{t('prices.price')}:</strong> {formatPrice(details['3days'].price)}</p>
                   <p><strong>{t('prices.schedule')}:</strong></p>
                   <ul className="list-disc list-inside">
                        <li>{t('prices.terms.friday')}: {details['3days'].time.friday}</li>
                        <li>{t('prices.terms.saturday')}: {details['3days'].time.saturday}</li>
                        <li>{t('prices.terms.sunday')}: {details['3days'].time.sunday}</li>
                   </ul>
                </CardContent>
              </Card>
            ))}
          </AccordionContent>
        </AccordionItem>
        
        <AccordionItem value="full-day">
          <AccordionTrigger className="font-headline text-3xl text-primary">{t('prices.fullDayWithLunch')}</AccordionTrigger>
           <AccordionContent className="space-y-6 pt-4">
            {Object.entries(priceList2025_2026.fullDayWithLunch).map(([period, prices]) => (
              <Card key={period}>
                <CardHeader>
                  <CardTitle className="text-xl">{t('prices.seasons.period')}: {period.replace(/_/g, ' & ')}</CardTitle>
                </CardHeader>
                <CardContent>
                  {renderSimpleTable('prices.fullDayWithLunch', prices, 'prices.duration', 'prices.price')}
                </CardContent>
              </Card>
            ))}
          </AccordionContent>
        </AccordionItem>
        
        <AccordionItem value="freeride">
          <AccordionTrigger className="font-headline text-3xl text-primary">{t('prices.freeride')}</AccordionTrigger>
           <AccordionContent className="space-y-6 pt-4">
             {Object.entries(priceList2025_2026.freeride).map(([period, prices]) => (
              <Card key={period}>
                <CardHeader>
                  <CardTitle className="text-xl">{t('prices.seasons.period')}: {period.replace(/_/g, ' & ')}</CardTitle>
                </CardHeader>
                <CardContent>
                  <Table>
                    <TableHeader><TableRow><TableHead>{t('prices.groupSize')}</TableHead><TableHead>{t('prices.duration')}</TableHead><TableHead className="text-right">{t('prices.price')}</TableHead></TableRow></TableHeader>
                    <TableBody>
                      {Object.entries(prices).flatMap(([group, details]) => 
                        Object.entries(details).map(([duration, price]) => (
                           <TableRow key={`${group}-${duration}`}>
                              <TableCell>{t(`prices.terms.${group}`)}</TableCell>
                              <TableCell>{t(`prices.terms.${duration}`)}</TableCell>
                              <TableCell className="text-right">{formatPrice(price as number)}</TableCell>
                           </TableRow>
                        ))
                      )}
                    </TableBody>
                  </Table>
                </CardContent>
              </Card>
            ))}
          </AccordionContent>
        </AccordionItem>
        
        <AccordionItem value="junior-club">
          <AccordionTrigger className="font-headline text-3xl text-primary">{t('prices.juniorClubHalfDayWithLunch')}</AccordionTrigger>
          <AccordionContent className="pt-4">
             <Card>
                <CardHeader>
                  <CardTitle className="text-xl">{t('prices.seasons.anyPeriod')}</CardTitle>
                </CardHeader>
                <CardContent>
                   <p><strong>{t('prices.price')}:</strong> {formatPrice(priceList2025_2026.juniorClubHalfDayWithLunch.anyPeriod.price)}</p>
                   <p><strong>{t('prices.terms.time')}:</strong> {priceList2025_2026.juniorClubHalfDayWithLunch.anyPeriod.time}</p>
                </CardContent>
              </Card>
          </AccordionContent>
        </AccordionItem>

      </Accordion>
    </div>
  );
}

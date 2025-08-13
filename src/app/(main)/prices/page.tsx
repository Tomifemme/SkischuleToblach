"use client";

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { useTranslation } from '@/hooks/use-translation';
import { priceList } from '@/lib/data';

export default function PricesPage() {
  const { t } = useTranslation();

  const renderTable = (titleKey: string, data: typeof priceList.private) => (
    <Card className="shadow-lg">
      <CardHeader>
        <CardTitle className="font-headline text-2xl text-primary">{t(titleKey)}</CardTitle>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[50%]">{t('prices.course')}</TableHead>
              <TableHead>{t('prices.notes')}</TableHead>
              <TableHead className="text-right">{t('prices.price')}</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {data.map((item) => (
              <TableRow key={item.id}>
                <TableCell className="font-medium">{t(`prices.${item.courseKey}`)}</TableCell>
                <TableCell>{item.notesKey ? t(`prices.${item.notesKey}`) : '-'}</TableCell>
                <TableCell className="text-right">{item.price}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="text-center mb-12">
        <h1 className="font-headline text-4xl md:text-5xl font-bold text-primary">
          {t('prices.title')}
        </h1>
        <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
          {t('prices.subtitle')}
        </p>
      </div>

      <div className="space-y-12">
        {renderTable('prices.privateLessons', priceList.private)}
        {renderTable('prices.groupLessonsKids', priceList.groupKids)}
        {renderTable('prices.groupLessonsAdults', priceList.groupAdults)}
      </div>
    </div>
  );
}

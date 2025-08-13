"use client";

import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useTranslation } from '@/hooks/use-translation';
import { Facebook, Film } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function MediaPage() {
  const { t } = useTranslation();

  const videos = [
    { id: '6r9R1TDa0DI', title: '3 Cime/3 Zinnen Dolomites | Ski Pustertal Express' },
  ];

  const photos = [
    { src: 'https://placehold.co/600x400.png', alt: 'Group of kids learning to ski', hint: 'children skiing' },
    { src: 'https://placehold.co/600x400.png', alt: 'Snowy mountain landscape', hint: 'snowy mountain' },
    { src: 'https://placehold.co/600x400.png', alt: 'Skier making a sharp turn', hint: 'skiing action' },
    { src: 'https://placehold.co/600x400.png', alt: 'Happy family on a ski lift', hint: 'family ski' },
    { src: 'https://placehold.co/600x400.png', alt: 'Apres-ski fun at the lodge', hint: 'apres ski' },
    { src: 'https://placehold.co/600x400.png', alt: 'Sunrise over the Dolomites', hint: 'mountain sunrise' },
  ];

  const facebookUrl = "https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fscuolascidobbiaco%2F&tabs=timeline&width=500&height=600&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId";

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="text-center mb-12">
        <h1 className="font-headline text-4xl md:text-5xl font-bold text-primary">
          {t('media.title')}
        </h1>
        <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
          {t('media.subtitle')}
        </p>
      </div>

      <section className="mb-16">
        <h2 className="font-headline text-3xl font-bold mb-8">{t('media.socialTitle')}</h2>
        <div className="w-full max-w-lg mx-auto">
            <Card className="shadow-xl">
                <CardContent className="p-2">
                    <iframe
                        src={facebookUrl}
                        width="100%"
                        height="600"
                        style={{ border: 'none', overflow: 'hidden' }}
                        scrolling="no"
                        frameBorder="0"
                        allowFullScreen={true}
                        allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                    ></iframe>
                </CardContent>
            </Card>
        </div>
      </section>

      <section className="mb-16">
        <h2 className="font-headline text-3xl font-bold mb-8">{t('media.videosTitle')}</h2>
        <div className="grid md:grid-cols-1 gap-8 max-w-4xl mx-auto">
          {videos.map((video) => (
            <Card key={video.id} className="overflow-hidden shadow-lg">
                <div className="aspect-w-16 aspect-h-9">
                    <iframe
                        src={`https://www.youtube.com/embed/${video.id}`}
                        title={video.title}
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        className="w-full h-full"
                    ></iframe>
                </div>
                <CardContent className="p-4">
                    <p className="font-semibold">{video.title}</p>
                </CardContent>
            </Card>
          ))}
           <div className="text-center mt-4">
            <Button asChild>
                <Link href="https://www.scuolasci-dobbiaco.com/it/VIDEO" target="_blank" rel="noopener noreferrer">
                    <Film className="mr-2 h-4 w-4" />
                    View More Videos
                </Link>
            </Button>
          </div>
        </div>
      </section>

      <section>
        <h2 className="font-headline text-3xl font-bold mb-8">{t('media.photosTitle')}</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {photos.map((photo, index) => (
            <div key={index} className="relative aspect-square rounded-lg overflow-hidden shadow-lg group">
              <Image
                src={photo.src}
                alt={photo.alt}
                layout="fill"
                objectFit="cover"
                className="group-hover:scale-105 transition-transform duration-300"
                data-ai-hint={photo.hint}
              />
               <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300"></div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

import type { Metadata } from 'next';
import './globals.css';
import { LanguageProvider } from '@/context/language-context';
import { Toaster } from '@/components/ui/toaster';
import Chatbot from '@/components/chatbot';

export const metadata: Metadata = {
  title: 'SkiSchool360',
  description: 'Your premier ski school in Dobbiaco.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&family=PT+Sans:wght@400;700&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body antialiased">
        <LanguageProvider>
          {children}
          <Chatbot />
          <Toaster />
        </LanguageProvider>
      </body>
    </html>
  );
}

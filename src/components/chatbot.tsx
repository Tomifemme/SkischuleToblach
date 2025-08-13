"use client";

import { useState, useRef, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { MessageSquare, Send, X, Bot, User, Loader2 } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Form, FormControl, FormField, FormItem } from '@/components/ui/form';
import { ScrollArea } from '@/components/ui/scroll-area';
import { useTranslation } from '@/hooks/use-translation';
import { answerQuestion } from '@/ai/flows/chatbot-answers';

type Message = {
  role: 'user' | 'bot';
  text: string;
};

const formSchema = z.object({
  message: z.string().min(1),
});

export default function Chatbot() {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const scrollAreaRef = useRef<HTMLDivElement>(null);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: { message: '' },
  });

  useEffect(() => {
    if (isOpen && messages.length === 0) {
      setMessages([{ role: 'bot', text: t('chatbot.welcome') }]);
    }
  }, [isOpen, messages.length, t]);

  useEffect(() => {
    if (scrollAreaRef.current) {
        // A bit of a hack to scroll to the bottom.
        // Direct scroll manipulation is tricky with ScrollArea component
        setTimeout(() => {
             const viewport = scrollAreaRef.current?.querySelector('div[data-radix-scroll-area-viewport]');
             if(viewport) {
                viewport.scrollTop = viewport.scrollHeight;
             }
        }, 100);
    }
  }, [messages]);

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    const userMessage: Message = { role: 'user', text: values.message };
    setMessages((prev) => [...prev, userMessage]);
    setIsLoading(true);
    form.reset();

    try {
      const response = await answerQuestion({ question: values.message });
      const botMessage: Message = { role: 'bot', text: response.answer };
      setMessages((prev) => [...prev, botMessage]);
    } catch (error) {
      console.error('Chatbot error:', error);
      const errorMessage: Message = { role: 'bot', text: 'Sorry, I am having trouble connecting. Please try again later.' };
      setMessages((prev) => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <div className="fixed bottom-6 right-6 z-50">
        <Button onClick={() => setIsOpen(!isOpen)} size="icon" className="rounded-full h-14 w-14 shadow-lg bg-primary hover:bg-primary/90">
          {isOpen ? <X className="h-7 w-7" /> : <MessageSquare className="h-7 w-7" />}
          <span className="sr-only">Toggle Chat</span>
        </Button>
      </div>

      {isOpen && (
        <Card className="fixed bottom-24 right-6 z-50 w-full max-w-sm shadow-2xl flex flex-col h-[60vh]">
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle className="font-headline text-lg">{t('chatbot.title')}</CardTitle>
          </CardHeader>
          <CardContent className="flex-grow p-0">
            <ScrollArea className="h-full" ref={scrollAreaRef}>
              <div className="p-4 space-y-4">
                {messages.map((message, index) => (
                  <div key={index} className={`flex items-start gap-3 ${message.role === 'user' ? 'justify-end' : ''}`}>
                    {message.role === 'bot' && <Bot className="h-6 w-6 text-primary flex-shrink-0" />}
                    <div className={`rounded-lg px-3 py-2 max-w-[80%] ${message.role === 'user' ? 'bg-primary text-primary-foreground' : 'bg-muted'}`}>
                      <p className="text-sm">{message.text}</p>
                    </div>
                    {message.role === 'user' && <User className="h-6 w-6 text-muted-foreground flex-shrink-0" />}
                  </div>
                ))}
                {isLoading && (
                   <div className="flex items-start gap-3">
                     <Bot className="h-6 w-6 text-primary flex-shrink-0" />
                     <div className="rounded-lg px-3 py-2 bg-muted">
                        <Loader2 className="h-5 w-5 animate-spin text-primary" />
                     </div>
                   </div>
                )}
              </div>
            </ScrollArea>
          </CardContent>
          <CardFooter className="p-4 border-t">
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="flex w-full items-center space-x-2">
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem className="flex-grow">
                      <FormControl>
                        <Input placeholder={t('chatbot.placeholder')} {...field} disabled={isLoading} autoComplete="off"/>
                      </FormControl>
                    </FormItem>
                  )}
                />
                <Button type="submit" size="icon" disabled={isLoading}>
                  <Send className="h-4 w-4" />
                  <span className="sr-only">{t('chatbot.send')}</span>
                </Button>
              </form>
            </Form>
          </CardFooter>
        </Card>
      )}
    </>
  );
}

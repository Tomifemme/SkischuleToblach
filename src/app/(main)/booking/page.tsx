"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { useTranslation } from "@/hooks/use-translation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function BookingPage() {
    const { t } = useTranslation();
    const { toast } = useToast();

    const formSchema = z.object({
        name: z.string().min(2, { message: "Name must be at least 2 characters." }),
        email: z.string().email({ message: "Please enter a valid email." }),
        phone: z.string().optional(),
        lessonType: z.string({ required_error: "Please select a lesson type." }),
        date: z.string().optional(),
        message: z.string().min(10, { message: "Message must be at least 10 characters." }),
    });

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: "",
            email: "",
            phone: "",
            message: "",
        },
    });

    async function onSubmit(values: z.infer<typeof formSchema>) {
        // Mock submission
        console.log(values);
        await new Promise(resolve => setTimeout(resolve, 1000));
        toast({
            title: t('booking.form.success'),
            description: t('booking.form.successText'),
        });
        form.reset();
    }

    return (
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <div className="text-center mb-12">
                <h1 className="font-headline text-4xl md:text-5xl font-bold text-primary">
                    {t('booking.title')}
                </h1>
                <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
                    {t('booking.subtitle')}
                </p>
            </div>

            <Card className="max-w-2xl mx-auto shadow-xl">
                <CardContent className="p-8">
                    <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                            <FormField
                                control={form.control}
                                name="name"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>{t('booking.form.name')}</FormLabel>
                                        <FormControl>
                                            <Input placeholder={t('booking.form.namePlaceholder')} {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                             <FormField
                                control={form.control}
                                name="email"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>{t('booking.form.email')}</FormLabel>
                                        <FormControl>
                                            <Input placeholder={t('booking.form.emailPlaceholder')} {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                             <FormField
                                control={form.control}
                                name="phone"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>{t('booking.form.phone')}</FormLabel>
                                        <FormControl>
                                            <Input placeholder={t('booking.form.phonePlaceholder')} {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="lessonType"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>{t('booking.form.lessonType')}</FormLabel>
                                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                                            <FormControl>
                                                <SelectTrigger>
                                                    <SelectValue placeholder={t('booking.form.selectLesson')} />
                                                </SelectTrigger>
                                            </FormControl>
                                            <SelectContent>
                                                <SelectItem value="group-course">{t('prices.groupCourses2Hours')}</SelectItem>
                                                <SelectItem value="private-lesson">{t('prices.privateLessons')}</SelectItem>
                                                <SelectItem value="super-course">{t('prices.superCourses')}</SelectItem>
                                                <SelectItem value="weekend-course">{t('prices.weekendCourse')}</SelectItem>
                                                <SelectItem value="full-day">{t('prices.fullDayWithLunch')}</SelectItem>
                                                <SelectItem value="freeride">{t('prices.freeride')}</SelectItem>
                                                <SelectItem value="junior-club">{t('prices.juniorClubHalfDayWithLunch')}</SelectItem>
                                            </SelectContent>
                                        </Select>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                             <FormField
                                control={form.control}
                                name="message"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>{t('booking.form.message')}</FormLabel>
                                        <FormControl>
                                            <Textarea
                                                placeholder={t('booking.form.messagePlaceholder')}
                                                className="resize-none"
                                                {...field}
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <Button type="submit" className="w-full" disabled={form.formState.isSubmitting}>
                                {form.formState.isSubmitting ? "Sending..." : t('booking.form.submit')}
                            </Button>
                        </form>
                    </Form>
                </CardContent>
            </Card>
        </div>
    );
}

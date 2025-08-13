'use server';
/**
 * @fileOverview A flow for sending booking confirmation emails.
 *
 * - sendBookingEmail - A function that sends an email with booking details.
 * - BookingEmailInput - The input type for the sendBookingEmail function.
 */

import { ai } from '@/ai/genkit';
import { z } from 'genkit';
import * as nodemailer from 'nodemailer';

const BookingEmailInputSchema = z.object({
  name: z.string().describe('The full name of the person booking.'),
  email: z.string().email().describe('The email address of the person booking.'),
  phone: z.string().optional().describe('The phone number of the person booking.'),
  lessonType: z.string().describe('The type of ski lesson selected.'),
  message: z.string().describe('The message or special requests from the user.'),
});
export type BookingEmailInput = z.infer<typeof BookingEmailInputSchema>;

export async function sendBookingEmail(input: BookingEmailInput): Promise<{ success: boolean }> {
  return sendBookingEmailFlow(input);
}

const sendBookingEmailFlow = ai.defineFlow(
  {
    name: 'sendBookingEmailFlow',
    inputSchema: BookingEmailInputSchema,
    outputSchema: z.object({ success: z.boolean() }),
  },
  async (input) => {
    const { name, email, phone, lessonType, message } = input;

    // IMPORTANT: Replace placeholder values in your .env file
    // with your actual email service provider's details.
    const transporter = nodemailer.createTransport({
      host: process.env.EMAIL_HOST,
      port: parseInt(process.env.EMAIL_PORT || '587', 10),
      secure: (process.env.EMAIL_PORT === '465'), // true for 465, false for other ports
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: `"Ski School Booking" <${process.env.EMAIL_FROM}>`, // sender address
      to: process.env.EMAIL_TO, // list of receivers
      subject: `New Ski Lesson Booking from ${name}`,
      text: `
        You have received a new booking request.

        Details:
        - Name: ${name}
        - Email: ${email}
        - Phone: ${phone || 'Not provided'}
        - Lesson Type: ${lessonType}
        
        Message:
        ${message}
      `,
      html: `
        <h2>New Ski Lesson Booking Request</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
        <p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
        <p><strong>Lesson Type:</strong> ${lessonType}</p>
        <hr>
        <h3>Message:</h3>
        <p>${message.replace(/\n/g, '<br>')}</p>
      `,
    };

    try {
      await transporter.sendMail(mailOptions);
      console.log('Booking email sent successfully');
      return { success: true };
    } catch (error) {
      console.error('Error sending email:', error);
      // Throwing an error will cause the flow to fail,
      // which can be caught on the client-side.
      throw new Error('Failed to send booking email.');
    }
  }
);

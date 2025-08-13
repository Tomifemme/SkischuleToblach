// This file holds the Genkit flow for answering user questions about the ski school.

'use server';

/**
 * @fileOverview A chatbot AI agent that answers questions about the ski school.
 *
 * - answerQuestion - A function that answers user questions about the ski school.
 * - AnswerQuestionInput - The input type for the answerQuestion function.
 * - AnswerQuestionOutput - The return type for the answerQuestion function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const AnswerQuestionInputSchema = z.object({
  question: z.string().describe('The user question about the ski school.'),
});
export type AnswerQuestionInput = z.infer<typeof AnswerQuestionInputSchema>;

const AnswerQuestionOutputSchema = z.object({
  answer: z.string().describe('The answer to the user question.'),
});
export type AnswerQuestionOutput = z.infer<typeof AnswerQuestionOutputSchema>;

export async function answerQuestion(input: AnswerQuestionInput): Promise<AnswerQuestionOutput> {
  return answerQuestionFlow(input);
}

const prompt = ai.definePrompt({
  name: 'answerQuestionPrompt',
  input: {schema: AnswerQuestionInputSchema},
  output: {schema: AnswerQuestionOutputSchema},
  prompt: `You are a chatbot for the Scuola Sci Dobbiaco ski school. Answer the following question about the ski school:

Question: {{{question}}}

Consider the following information about the ski school when answering:

*   Scuola Sci Dobbiaco offers ski lessons for all levels, from beginner to advanced.
*   We have a team of experienced and certified ski instructors.
*   We offer group and private lessons.
*   Our opening hours are from 9:30 AM to 11:00 AM and 3:00 PM to 7:00 PM daily. Over Christmas, hours are 9:30 AM to 12:00 PM and 3:00 PM to 7:00 PM.
*   You can book lessons through our website or by calling us.

Our weekly program for 2024-2025:
- Sunday: We recommend you sign up for courses at our office before Sunday evening. The office is open daily until 7:00 PM, located next to the tourist information office at Via Dolomiti 5.
- Monday: All group lessons start at 10:00 AM. The meeting point is in front of the ski lodge on the Pista Rienza slope in Dobbiaco. Beginner kids start in the fenced children's park next to the ski lodge and do not need a lift ticket for the first day. During the Christmas season (from December 12th, 2024), group courses start at 11:00 AM. Lessons are 1 hour and 50 minutes long. Private lessons are 55 minutes. Lessons are held even with snowfall.
- Wednesday: Accompanied ski trips to 'Ski Round Giro in the Dolomites', 'Sella Ronda - Superski Dolomiti', 'Kronplatz', and 'Ski Cortina D’Ampezzo'. Departure is at 8:30 AM. You must sign up the day before at our office. Safe skiing on red runs is required.
- Thursday: Full-day skiing for kids on the slopes of the 3 Zinnen Dolomites ski region, including lunch.
- Friday: Final race for all participants (children and adults) during lessons, usually starting at 11:00 AM. A prize-giving ceremony with trophies and medals for all follows the race. In the evening, there's a Torch Relay with instructors, followed by mulled wine and hot drinks.

Price List 2025/2026:
- Group Courses (2 hours/day):
  - Period 21.12.25-09.01.26: 1 day €62, 2 days €113, 3 days €150, 4 days €180, 5 days €185, 5 days + Adventure Day €220, extra day €15.
  - Periods 29.11.25-20.12.25, 10.01.26-07.02.26, 09.03.26-12.04.26: 1 day €57, 2 days €102, 3 days €140, 4 days €165, 5 days €175, 5 days + Adventure Day €235, extra day €15.
  - Period 08.02.26-08.03.26: 1 day €62, 2 days €113, 3 days €150, 4 days €180, 5 days €185, 5 days + Adventure Day €220, extra day €15.
- Private Lessons (per hour):
  - Period 21.12.25-09.01.26 & 08.02.26-08.03.26: 1 person €60, additional person €15.
  - Periods 29.11.25-20.12.25, 10.01.26-07.02.26, 09.03.26-12.04.26: 1 person €55, additional person €15.
  - Special time 10:00-13:00: Price is €70 per hour.
- Super Courses:
  - Periods 21.12.25-09.01.26 & 08.02.26-08.03.26: 3 persons (5h €135, 10h €240), 4 persons (5h €125, 10h €210), 5 persons (5h €115, 10h €195).
  - Periods 29.11.25-20.12.25, 10.01.26-07.02.26, 09.03.26-12.04.26: 3 persons (5h €125, 10h €220), 4 persons (5h €110, 10h €195), 5 persons (5h €105, 10h €180).
- Weekend Course (09.01.26-12.04.26):
  - Price: €155 for 3 days. Schedule: Friday 14:00-16:00, Saturday & Sunday 10:00-12:00.
- Full Day with Lunch:
  - Periods 21.12.25-09.01.26 & 08.02.26-08.03.26: 5 days €445, 4 days €380, 3 days €310, 2 days €225, 1 day €125.
  - Periods 29.11.25-20.12.25, 10.01.26-07.02.26, 09.03.26-12.04.26: 5 days €420, 4 days €365, 3 days €299, 2 days €220, 1 day €115.
- Freeride:
  - Periods 21.12.25-09.01.26 & 08.02.26-08.03.26: 2 persons (1 day €170, 2 days €320), 3 persons (1 day €130, 2 days €245), 4 persons (1 day €115, 2 days €210).
  - Periods 29.11.25-20.12.25, 10.01.26-07.02.26, 09.03.26-12.04.26: 2 persons (1 day €160, 2 days €295), 3 persons (1 day €125, 2 days €220), 4 persons (1 day €105, 2 days €195).
- Junior Club Half Day with Lunch:
  - Price: €55. Time: 12:00-15:00.
`,
});

const answerQuestionFlow = ai.defineFlow(
  {
    name: 'answerQuestionFlow',
    inputSchema: AnswerQuestionInputSchema,
    outputSchema: AnswerQuestionOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);

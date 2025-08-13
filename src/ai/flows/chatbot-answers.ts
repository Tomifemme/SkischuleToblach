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
*   Our opening hours are from 9:00 AM to 5:00 PM daily.
*   You can book lessons through our website or by calling us.
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

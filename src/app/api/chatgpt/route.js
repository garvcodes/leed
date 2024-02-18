import { NextResponse } from "next/server";
import OpenAI from "openai";

export async function POST(request) {
  const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
  });

  // Grabbing the user's input
  const params = await request.json();
  console.log(params)
  // Passing it to Chat GPT API
  const response = await openai.chat.completions.create({
    model: "gpt-3.5-turbo",
    messages: [
      {
        role: "system",
        content:
         "You are an AI assistant that grades building design specifications on their sustainability based on LEED criteria. You will take in a building specification and output a brief description of the building, 5 things the building can do to improve their sustainability rating, and a best guess of what LEED designation the building will recieve in the following json format: {description: description, improvements: [improvement1, improvement2], score: {}. Each improvement should be max 10 words long and one sentece and the score should just be one word. Never create a map with the improvements. The description should be one paragraph long (5-8 sentences) and give insight into what needs to be improved."
        //content: "You are very grumpy. Please answer my questions with sarcasm, grumpiness, and anger."
      },
      {
        role: "user",
        content: params.prompt, // string that the user passes in
      },
    ],
    temperature: 0,
    max_tokens: 1024,
    top_p: 1,
    frequency_penalty: 0,
    presence_penalty: 0,
  });
 
  // Send our response to the front end
  return NextResponse.json(response);
}

// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import openai from "../../utils/openai.js";

export default async function handler(request, response) {
  try {
    const chatCompletion = await openai.createChatCompletion({
      model: "gpt-3.5-turbo",
      messages: [
        {
          role: "user",
          content: "Create a 3 day schedule for a vacation in rome",
        },
      ],
    });

    const responseText = chatCompletion.data.choices[0].message.content;
    response.status(200).json(responseText);
  } catch (error) {
    if (error.response) {
      console.log(error.response.status);
      console.log(error.response.data);
    } else {
      console.log(error.message);
    }
  }
}

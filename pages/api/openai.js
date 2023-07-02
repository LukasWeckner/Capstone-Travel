// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import openai from "../../utils/openai.js";

export default async function handler(request, response) {
  try {
    const chatCompletion = await openai.createChatCompletion({
      model: "gpt-3.5-turbo",
      messages: [
        {
          role: "user",
          content:
            "Create a 2 day schedule for a vacation in rome. Display the trip as a json object. The object needs to have the following keys: slug, destination, startDate, endDate, dayDetails. The destination has a value of the city, in this case it's rome. The slug has the same value as destination but is written in lowercase. For the startDate and endDate you can make up dates in the format DD/MM/YYYY. The dayDetails key contains another object with the keys titles and acitivities. The titles key contains an array with a title string for each day of the trip. The activities key contains an array with a string for each day which gives 3 activity suggestions in key words for the trip. ",
        },
      ],
    });

    const responseText = chatCompletion.data.choices[0].message.content;
    const responseObject = JSON.parse(responseText);

    response.status(200).json(responseObject);
  } catch (error) {
    if (error.response) {
      console.log(error.response.status);
      console.log(error.response.data);
    } else {
      console.log(error.message);
    }
  }
}

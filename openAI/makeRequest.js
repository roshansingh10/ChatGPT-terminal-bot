
import { openai } from "../config/openai.js";
import { insertHistory , readHistory, insertErrorLog} from "../fileOperations/index.js";

export async function chatCompletion(inputPrompt) {
  try{
    let data = readHistory();
    if(!data)
    {
      data = [{"role":"user",content: inputPrompt}];
      insertHistory(data);
    }
    else{
      data.push({"role":"user",content: inputPrompt});
    }

    const chatObject = await openai.createChatCompletion(
      {
        model: "gpt-3.5-turbo",
        messages: data,
      }
    );
    const responseMessage = chatObject.data.choices[0]?.message?.content;
    data.push({"role":"assistant",content: responseMessage});
    insertHistory(data);
    return responseMessage;
  }
  catch(error){
    let errorMessage = "Error: " + error.message + Date.now() + "\n";
    insertErrorLog(errorMessage);
    return "Sorry! Couldn't fullfil this request right now. Try again.";
  }
}
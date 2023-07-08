
import { openai } from "../config/openai.js";

export async function chatCompletion(inputPrompt) {
  try{
    let chatHistory = [];	// This is gonna store the chat history. To make session interactive.
    const messages = chatHistory.map(([role,content])=>({role,content}));

    // Update the first message
    messages.push({role:"user",content: inputPrompt});
		
    const chatObject = await openai.createChatCompletion(
      {
        model: "gpt-3.5-turbo",
        messages: messages,
      }
    );
    const responseMessage = chatObject.data.choices[0]?.message?.content;
    chatHistory.push(["user", inputPrompt]);
    chatHistory.push(["assistant", responseMessage]);
    return responseMessage;
  }
  catch(error){
    return "Sorry! Couldn't fullfil this request right now. Try again.";
  }
}
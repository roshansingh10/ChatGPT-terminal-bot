import readlineSync from "readline-sync";
import {chatCompletion} from "../openAI/makeRequest.js";
import colors from "colors";
import { oraPromise } from "ora";
import { emoji_map } from "../config/emojis.js";

const userNameList = ["Me", "Use My Name"];
let userName;

export async function startChat(){
  const options = { 
    "spinner": "point",
    "hideCursor": true
  };
  console.log(colors.yellow(`Welcome to your very own ChatGPT Bot ${emoji_map.robot}. Experience the power of ChatGPT 3.5 in your device.${emoji_map.fire}`));

  const index = readlineSync.keyInSelect(userNameList, "How should we address you?");
  if (index === 1){
    userName = readlineSync.question(colors.white(`Please tell me your name${emoji_map.smiley}`));
  } else{
    userName = userNameList[0];
  }
  console.log(colors.yellow(`Hi! ${userName}. Let's have some fun with the ChatGPT Bot ${emoji_map.tada}.`));
  while(true){
    const prompt = readlineSync.question(colors.blue(`${userName}: `));
    const response = await oraPromise(chatCompletion(prompt), options);
    console.log(colors.green(`Bot: ${response}`));
    if (prompt.toLowerCase() == "exit")
      return;
  }
}
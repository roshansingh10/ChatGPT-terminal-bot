import readlineSync from "readline-sync";
import {chatCompletion} from "../openAI/makeRequest.js";
import colors from "colors";
import { oraPromise } from "ora";

const userNameList = ["Me", "Use my name"];
let userName;

export async function startChat(){
	const options = { 
		"spinner":"point",
		"hideCursor":true
	};
	console.log(colors.red("Welcome to your very own ChatGPT Bot. Experience the power of ChatGPT 3.5 in your device."));

	const index = readlineSync.keyInSelect(userNameList, "How should we address you?");
	if (index === 1){
		userName = readlineSync.question("Please enter your name..");
	} else{
		userName = userNameList[0];
	}
	console.log(colors.yellow(`Hi! ${userName}. Let's have some fun with the ChatGPT Bot`));
	while(true){
		const prompt = readlineSync.question(colors.blue(`${userName}: `));
		const response = await oraPromise(chatCompletion(prompt), options);
		console.log(colors.green(`Bot: ${response}`));
		if (prompt.toLowerCase() == "exit")
			return;
	}
}
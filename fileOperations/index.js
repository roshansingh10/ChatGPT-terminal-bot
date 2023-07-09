import fs from "fs";

const chatHistoryFilePath = `${process.cwd()}/files/chatHistory.txt`;
const logFilePath = `${process.cwd()}/files/errorLogs.txt`;

export function insertHistory(history){
  fs.writeFileSync(chatHistoryFilePath, JSON.stringify(history, null, 2),()=>{});
}   

export function readHistory() {
  let data = fs.readFileSync(chatHistoryFilePath, "utf8");
  return JSON.parse(data);
}

export function insertErrorLog(logMessage){
  fs.appendFile(logFilePath, logMessage, ()=>{});
}

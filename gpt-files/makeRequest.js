/**
 * Author : Roshan Singh
 * Licence: MIT
 */

import {openai} from './configurations.js'

export async function chatCompletion(){
    const chatCompletion = await openai.createChatCompletion({
        model: "gpt-3.5-turbo",
        messages: [{role: "user", content: "my question"}],
    });
}


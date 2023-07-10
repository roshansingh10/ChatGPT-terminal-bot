# Node.js Chatbot with OpenAI API

This Node.js application allows you to run a chatbot in your local terminal using the OpenAI API. The chatbot leverages the power of OpenAI's language model to generate human-like responses to user inputs.

## Prerequisites

Before running this application, make sure you have the following:

- Node.js installed on your machine (version 12 or higher)
- OpenAI API key. You can obtain it by signing up for an OpenAI account and creating an API key.

## Installation

1. Clone the repository to your local machine:

   ```bash
   git clone https://github.com/roshansingh10/ChatGPT-terminal-bot.git
   ```

2. Navigate to the project directory:

   ```bash
   cd your-repo
   ```

3. Install the dependencies:

   ```bash
   npm install
   ```

4. Set up your OpenAI API key:

   - Create a file named `.env` in the project directory.
   - Add the following line to the `.env` file, replacing `YOUR_API_KEY` with your actual API key:

     ```
     SECRET_KEY=YOUR_API_KEY
     ```

## Usage

To start the chatbot in your terminal, run the following command:

```bash
npm start
```

Once the chatbot is running, you can start a conversation by entering your message in the terminal. The chatbot will process your input and provide a response based on the trained language model.

To exit the chatbot, simply type `exit` or press `Ctrl + C` in your terminal.

## Configuration

If you want to modify the behavior of the chatbot, you can adjust the settings in the `config.js` file. You can change the chatbot's name, the language model used, and other parameters to customize the chatbot's behavior to your liking.

## Contributing

Contributions are welcome! If you find any issues or want to add new features, please create a pull request or submit an issue on the [GitHub repository](https://github.com/roshansingh10/ChatGPT-terminal-bot).

## License

This project is licensed under the [MIT License](LICENSE). Feel free to modify and distribute it according to your needs.

## Disclaimer

This chatbot application is powered by OpenAI's language model, and its responses are generated based on the training data provided to the model. While efforts have been made to ensure accurate and appropriate responses, the chatbot may occasionally provide incorrect or misleading information. Use the chatbot at your own risk, and exercise caution when relying on its responses.

## Contact

If you have any questions or suggestions regarding this application, feel free to contact the maintainer at [this mail](mailto:your-email@example.com).

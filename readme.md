# AI CLI

AI CLI is a stylish, interactive terminal app that brings the power of OpenAI directly into your command line. Ask questions, keep context during a conversation, start fresh when needed, and enjoy a clean, colorful experience built with Node.js.

## Why this project is awesome

- Ask any question from your terminal
- Maintain conversational memory within the session
- Start a brand-new chat instantly
- Beautiful terminal output using Chalk
- Simple setup and beginner-friendly UX
- Built with modern JavaScript and ESM modules

## Features

- Interactive menu driven by Inquirer
- OpenAI chat completions integration
- Conversation history tracking
- User-friendly prompts and terminal formatting
- Fast setup for local experimentation and development

## Requirements

- Node.js 18 or newer
- An OpenAI API key

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/RealJavascriptKid/ai-cli.git
   cd ai-cli
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Copy the example environment file and configure your settings:
   ```bash
   cp .env.example .env
   ```
   Then update `.env` with your API key and preferred model:
   ```env
   OPENAI_API_KEY=your_openai_api_key_here
   OPENAI_MODEL=gpt-4o-mini
   ```

## Running the app

Start the CLI with:

```bash
npm start
```

Or run it directly:

```bash
node index.js
```

## Usage

Once the app starts, you’ll see a menu with three options:

- Ask a question
- Start new conversation
- Exit

Choose `Ask a question`, type your prompt, and the app will send it to OpenAI and print the response in the terminal.

## Project structure

```text
ai-cli/
├── index.js         # Main CLI app
├── package.json     # Project metadata and dependencies
├── .env             # Local environment variables (not committed)
├── readme.md        # Project documentation
├── LICENSE          # MIT license
└── node_modules     # Installed dependencies
```

## Configuration

The app reads the API key from the `OPENAI_API_KEY` environment variable and the model from `OPENAI_MODEL`. You can set both values in your `.env` file.

```env
OPENAI_API_KEY=your_openai_api_key_here
OPENAI_MODEL=gpt-4o-mini
```

## Contributing

Contributions are welcome. If you’d like to improve the app, open an issue or submit a pull request with a clear description of your changes.

## License

This project is licensed under the MIT License. See the [LICENSE](./LICENSE) file for details.

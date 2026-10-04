import { OpenAI } from 'openai';
import inquirer from 'inquirer';
import chalk from 'chalk';
import dotenv from 'dotenv';
dotenv.config();

class AICLI {
  constructor() {
    this.model = process.env.OPENAI_MODEL || 'gpt-3.5-turbo';
    this.openai = new OpenAI({
      apiKey: process.env.OPENAI_API_KEY
    });
    this.conversationHistory = [];
    this.isRunning = true;
  }

  async getAIResponse(prompt) {
    this.conversationHistory.push({ role: 'user', content: prompt });

    try {
      const response = await this.openai.chat.completions.create({
        model: this.model,
        messages: this.conversationHistory,
        temperature: 0.7,
      });

      const aiMessage = response.choices[0].message.content;
      this.conversationHistory.push({ role: 'assistant', content: aiMessage });
      return aiMessage;
    } catch (error) {
      console.error(chalk.red('Error getting AI response:'), error);
      return "Sorry, I encountered an error.";
    }
  }

  async displayResponse(response) {
    console.log(chalk.blue('\nAI:'), response);
  }

  async mainMenu() {
    while (this.isRunning) {
      const { action } = await inquirer.prompt({
        type: 'list',
        name: 'action',
        message: 'What would you like to do?',
        choices: [
          'Ask a question',
          'Start new conversation',
          'Exit'
        ],
      });

      switch (action) {
        case 'Ask a question':
          await this.askQuestion();
          break;
        case 'Start new conversation':
          this.conversationHistory = [];
          console.log(chalk.green('\nStarted new conversation.'));
          break;
        case 'Exit':
          this.isRunning = false;
          console.log(chalk.yellow('\nGoodbye!'));
          break;
      }
    }
  }

  async askQuestion() {
    const { question } = await inquirer.prompt({
      type: 'input',
      name: 'question',
      message: 'Your question:',
    });

    const response = await this.getAIResponse(question);
    await this.displayResponse(response);
  }

  async run() {
    console.log(chalk.bold.green('\nWelcome to AI CLI!\n'));
    await this.mainMenu();
  }
}

const aiCli = new AICLI();
aiCli.run();
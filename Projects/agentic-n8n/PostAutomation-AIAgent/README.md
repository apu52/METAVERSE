# Post Automation AI Agent 🤖
**Your AI-powered agent for automated daily social media posting.**

**PostAutomation-AIAgent** is a digital assistant that writes, logs, and publishes trending AI content for you daily using OpenAI GPT-4o and n8n workflow automation.  
Free your time, grow your presence, and let an intelligent agent do the talking!

## 🌟 Key Features

- **AI Agent Powered:** Uses OpenAI GPT-4o as “Vaibhav” to generate unique, human-like posts on trending AI topics.
- **Complete Automation:** Fully scheduled, no manual input required.
- **Multi-Platform Posting:** Simultaneously publishes to LinkedIn, X (Twitter), and Telegram (easily add more).
- **Smart Logging:** Archives every post and its timestamp in Google Sheets for instant tracking and record purposes.
- **Personalized Style:** Customize the AI agent’s prompt and persona to match your own voice.
- **Plug & Play:** Ready to run with n8n, no advanced coding required.

## 🧠 How It Works
Every 24 hours, your **AI agent** (powered by OpenAI GPT-4o) runs this workflow:

1. **Scheduler:**  
   A time-based trigger activates the workflow automatically.
2. **AI Agent :**  
   The OpenAI GPT-4o model acts as “Vaibhav,” generating a fresh, unique, trending, and engaging social media post.
3. **Google Sheets Logging:**  
   Each post, plus its timestamp, is instantly saved to a Google Sheet in your Drive.
4. **Automated Posting:**  
   The post is instantly published to all connected social media accounts: LinkedIn, X, and Telegram.

## 🚦 Workflow Overview
**1. n8n workflow:**
  
![n8n-workflow](https://github.com/user-attachments/assets/2579e2b2-3a17-4128-9c3f-b12410bae7db)

**2. Google sheet log example**

![Screenshot from 2025-06-26 18-36-02](https://github.com/user-attachments/assets/cc591cb8-ed6e-4f6a-969f-f559ffecd073)

## 📁 Workflow JSON Provided

You’ll find the exported n8n workflow file in the `/workflow` folder:

- `workflow/post_automation_ai_agent.json`

This file contains the entire automation—ready to import into your own n8n instance.

## 🚀 How to Use This Project

1. **Clone this repo:**
    ```bash
    git clone https://github.com/kumawatvaibhav/Ai-agent
    ```
2. **Start n8n** on your system (locally or hosted).
    - [n8n installation guide](https://docs.n8n.io/hosting/installation/)
3. **Import the workflow:**
    - In n8n, go to the top menu, select **Import**, and upload `workflow/post_automation_ai_agent.json`.
4. **Set up credentials:**
    - Add your API keys for OpenAI, LinkedIn, X (Twitter), Telegram, and Google Sheets in the n8n Credentials section.
5. **Customize the agent:**
    - Open the AI Agent node and edit the prompt to match your style, preferred topics, or posting frequency.
6. **Activate the workflow:**
    - Switch on the workflow. The agent will start running according to the built-in schedule (every 24 hours by default).


## 💡 Tips to Customize

- **Change the posting schedule** (e.g., every 12 hours, every Monday, etc.).
- **Edit the OpenAI prompt** for more personality, different topics, or language.
- **Add more platforms** (Instagram, Discord, etc.) with a few extra nodes.
- **Log more details** (like platform or hashtags) to your Google Sheet as needed.

## 🔗 Tech Stack

- [n8n](https://n8n.io/) – Visual workflow automation
- [OpenAI GPT-4o](https://platform.openai.com/) – AI-powered content agent
- Google Sheets – Activity log & archive
- LinkedIn, X (Twitter), Telegram APIs – Social posting

## 📄 License

MIT License—use, fork, or build on this project for any purpose!





# 🎵 AudioExtract Project

**AudioExtract** is an open-source tool for extracting and processing audio files efficiently. This README will guide you through the steps to set up and run the project locally.

---

## 📋 Table of Contents
1. [Prerequisites](#prerequisites)
2. [Installation](#installation)
3. [Setting up MongoDB Atlas](#setting-up-mongodb-atlas)
4. [Running the Project](#running-the-project)
5. [Contributing](#contributing)
6. [Feedback and Improvements](#feedback-and-improvements)

---

## 🚀 Prerequisites

Before you get started, ensure you have the following installed on your system:

1. Node.js (v14 or higher)
   - [Download Node.js](https://nodejs.org/)
2. MongoDB Atlas for database management.
3. ffmpeg for audio processing.
   - [Download ffmpeg](https://ffmpeg.org/download.html#build-windows)
4. Git to clone the repository.
   - [Install Git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git)

---

## 🛠 Installation

Follow these steps to set up the project on your local machine:

1. Clone the repository:

   ```bash
   git clone https://github.com/apu52/METAVERSE.git
   cd METAVERSE/Projects/AudioExtract
   ```

2. Install dependencies for both the server and client:

   Navigate into both the `server` and `client` folders and install dependencies using npm:

   ```bash
   cd server
   npm install
   cd ../client
   npm install
   ```

3. Install ffmpeg and set it up in your system path:

   - [Download ffmpeg](https://ffmpeg.org/download.html)
   - Extract the files and add the ffmpeg binary to your system path.
   - Verify the installation by running `ffmpeg -version` in the terminal.

---

## 🌐 Setting Up MongoDB Atlas

To connect the project to MongoDB:

1. Create an account on MongoDB Atlas:  
   [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
   
2. Create a new cluster and get the connection string.

3. Update your `.env` file:

   Create a `.env` file in the `server` directory and add the following:

   ```bash
   MONGO_URI=your-mongodb-atlas-connection-string
   ```

---

## ▶️ Running the Project

1. Start the backend server:

   In the `server` directory, run:

   ```bash
   npm start
   ```

   The server should now be running on `http://localhost:5000`.

2. Start the frontend:

   In the `client` directory, run:

   ```bash
   npm start
   ```

   The client should now be running on `http://localhost:3000`.

---

## 💡 Contributing

We welcome contributions! To contribute:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Make your changes and commit them (`git commit -m 'Add some feature'`).
4. Push to the branch (`git push origin feature-branch`).
5. Open a pull request.

Please ensure your code follows the project's coding guidelines.

---

## 📝 Feedback and Improvements

Any suggestions or improvements are always welcome! Feel free to raise an issue or submit a pull request.

---

Made with ❤️ by the AudioExtract Team

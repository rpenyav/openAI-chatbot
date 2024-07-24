# OpenAI Chat Application

This project is a chat application built with React and Vite, leveraging the OpenAI API to generate responses.

## Table of Contents

- [Installation](#installation)
- [Configuration](#configuration)
- [Usage](#usage)
- [Features](#features)
- [Contributing](#contributing)
- [License](#license)

## Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/yourusername/openai-chat-app.git
   cd openai-chat-app
   ```

2. **Install the dependencies:**

   ```bash
   npm install
   ```

   or

   ```bash
   yarn install
   ```

3. **Start the development server:**

   ```bash
   npm run dev
   ```

   or

   ```bash
   yarn dev
   ```

   The application should now be running at `http://localhost:3000`.

## Configuration

1. **Create a `.env` file in the root directory:**

   ```bash
   touch .env
   ```

2. **Add your OpenAI API key to the `.env` file:**

   ```plaintext
   VITE_OPENAI_API_KEY=your_openai_api_key
   ```

## Usage

1. **Open your browser and navigate to:**

   ```
   http://localhost:3000
   ```

2. **Type your message in the chat input and press Enter to send.**
3. **Wait for the response from OpenAI and continue the conversation.**

## Features

- **Real-time Chat:** Interact with OpenAI's language model in real-time.
- **Easy Setup:** Quickly get started with React and Vite.
- **Environmental Configuration:** Securely manage API keys with environment variables.

## Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository.
2. Create a new branch: `git checkout -b my-feature-branch`.
3. Make your changes and commit them: `git commit -m 'Add some feature'`.
4. Push to the branch: `git push origin my-feature-branch`.
5. Submit a pull request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

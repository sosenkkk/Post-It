# Post-It

[Click here to visit the website](https://postttitt.netlify.app/)

Post-It is a modern blog posting website that enhances user experience through the use of web hooks. This project is built using the MERN stack (MongoDB, Express.js, React, Node.js).

## Features

- **User-friendly Interface**: A clean and intuitive design to provide an excellent user experience.
- **Real-time Updates**: Thanks to web hooks, users can see live updates without needing to refresh the page.
- **Responsive Design**: Optimized for both desktop and mobile devices.
- **Secure and Scalable**: Built with security best practices and scalability in mind.

## Tech Stack

- **MongoDB**: NoSQL database for storing user data and blog posts.
- **Express.js**: Backend framework for building RESTful APIs.
- **React**: Frontend library for building interactive user interfaces.
- **Node.js**: JavaScript runtime environment for server-side development.

## Web Hooks

Post-It leverages web hooks to provide real-time updates and notifications. Whenever a user creates, updates, or deletes a blog post, the web hooks ensure that all connected clients are immediately notified and the changes are reflected in real-time. This enhances the overall user experience by eliminating the need to manually refresh the page to see updates.

## Getting Started

To get a local copy up and running, follow these steps:

### Prerequisites

- Node.js installed on your local machine
- MongoDB instance (local or cloud-based)

### Installation

1. **Clone the repository:**

    ```bash
    git clone https://github.com/sosenkkk/post-it.git
    ```

2. **Navigate to the project directory:**

    ```bash
    cd post-it
    ```

3. **Install dependencies:**

    ```bash
    npm install
    ```

4. **Set up environment variables:**

    Create a `.env` file in the root directory and add your MongoDB connection string and other necessary environment variables.

5. **Start the development server:**

    ```bash
    npm run dev
    ```

6. **Navigate to the client directory and install dependencies:**

    ```bash
    cd client
    npm install
    ```

7. **Start the React development server:**

    ```bash
    npm start
    ```

Your application should now be running on `http://localhost:3000` for the frontend and `http://localhost:5000` for the backend.




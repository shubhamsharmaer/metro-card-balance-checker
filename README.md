![221_2x_shots_so](https://github.com/user-attachments/assets/6ded2dc6-2bfa-42cf-b36c-a6273effc234)

**Metro Card Balance Checker** is a full-stack web application that allows users to easily check their metro card balance. The application consists of a React.js-based frontend and an Express.js-based backend. The client interface provides users with a sleek and intuitive platform to input their metro card details, while the backend handles API requests to fetch balance data securely.

## ✨ Working Mode

### Desktop View
![52shots_so](https://github.com/user-attachments/assets/d42cad30-6529-4965-993e-916eb483fc4e)

### Mobile View
![818shots_so](https://github.com/user-attachments/assets/41df3581-4158-4bb2-b80a-5964c465302f)


## 🚀 Run Locally

Follow the instructions below to run the **Metro Card Balance Checker App** locally on your system.

### 🛠️ System Pre-requisites

Before running this project locally, ensure your system meets the following requirements:

| Requirement   | Version | Description                                      |
|---------------|---------|--------------------------------------------------|
| ![Node.js](https://img.shields.io/badge/Node.js-18.x-green?logo=node.js) | 18.x or higher | Required for running both the server and client environments |
| ![npm](https://img.shields.io/badge/npm-9.x-red?logo=npm) | 9.x or higher  | Dependency management for both server and client              |
| ![Vite](https://img.shields.io/badge/Vite-5.4.1-blue?logo=vite) | 5.4.1         | Development server and build tool for the React client        |
| ![React](https://img.shields.io/badge/React-18.3.1-blue?logo=react) | 18.3.1        | Frontend framework for building the client interface          |
| ![Express.js](https://img.shields.io/badge/Express.js-4.20.0-blue?logo=express) | 4.20.0        | Backend framework for setting up the server                   |
| ![Axios](https://img.shields.io/badge/Axios-1.7.7-yellow?logo=axios) | 1.7.7         | HTTP client for API requests on the frontend                  |
| ![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4.10-blue?logo=tailwind-css) | 3.4.10         | CSS framework for styling the client                          |
| ![ESLint](https://img.shields.io/badge/ESLint-9.9.0-purple?logo=eslint) | 9.9.0         | Linting tool for code quality in the client                   |
| ![cors](https://img.shields.io/badge/cors-2.8.5-lightgrey?logo=cors) | 2.8.5         | Middleware for enabling CORS in the backend                   |
| ![dotenv](https://img.shields.io/badge/dotenv-16.4.5-brightgreen?logo=dotenv) | 16.4.5        | Environment variable management for the server                |
| ![Helmet](https://img.shields.io/badge/Helmet-7.1.0-brightgreen?logo=helmet) | 7.1.0        | Secures Express apps by setting HTTP headers                  |

### 🔧 Steps to Set Up the Client

1. **Clone the repository**:
   
   ```bash
   git clone https://github.com/shubhamsharmaer/metro-card-balance-checker.git
   cd .\metro-card-balance-checker
   ```
3. **Navigate to the `client`**:
   
   ```bash
   cd .\metro-balance-checker\client\
   ```
5. **Install the dependencies**:
   
   ```bash
   npm install
   ```
7. **Run the development server**:
   
   ```bash
   npm run dev
   ```
   The client will now be running on `http://localhost:5173`

### 🔧 Steps to Set Up the Server

1. **Navigate to the `server`**:
   
   ```bash
   cd ../server
   ```
3. **Install the dependencies**:
   
   ```bash
   npm install
   ```
5. Create a new file named `.env.local` in the root directory and copy the environment variables from `.envSample`
   ```makefile
   PORT=5000
   VITE_API_URL=http://localhost:5000/api/card
   ```
6. Run Backend Server;
   ```bash
   node app.js
   ```
   The server will now be running on `http://localhost:5000`

## 📜 Features
- Check Metro Card Balance: Easily input your metro card number and check your balance.
- Real-time Updates: Get accurate and real-time metro card balance using our secure backend.
- Responsive Design: Optimized for both desktop and mobile devices with clean UI using Tailwind CSS.

## 🤝 Contributing
You can help improve code quality, fix bugs, or add new features to make the app more robust.
Contributions, issues, and feature requests are welcome! Feel free to check the issues page.

- Fork the Project
- Create your Feature Branch (git checkout -b feature/AmazingFeature)
- Commit your Changes (git commit -m 'Add some AmazingFeature')
- Push to the Branch (git push origin feature/AmazingFeature)
- Open a Pull Request

## 📧 Contact
For any inquiries, feel free to contact the project maintainer:

Shubham Sharma -  [LinkedIn](https://www.linkedin.com/in/shubhamsharmaer/) | [Email](shubhamgetmail@gmail.com)

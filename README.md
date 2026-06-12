# Biological AI Agent

A full-stack biological AI assistant built with a React + TypeScript frontend and an Express + TypeScript backend. The app provides user authentication, research discovery, AI-powered chat, channel-based messaging, and scheduled research ingestion from Biorxiv.

## Project Structure

- `client/` - React frontend using Vite, TypeScript, Redux, Tailwind CSS, React Router, and Socket.io client
- `server/` - Express backend with TypeScript, Mongoose, Socket.io, OpenAI/Google Gemini integration, authentication, and scheduled research import

## Features

- User registration and login
- JWT-backed protected routes with cookie authentication
- Research list and detail pages
- AI-generated research demonstrations and chat responses
- Channels with real-time messaging via Socket.io
- User settings for profile updates and account deletion
- Automatic research ingestion from Biorxiv using a cron job

## Tech Stack

- Frontend: React 19, TypeScript, Vite, Tailwind CSS, Redux, React Router, Axios, Socket.io Client
- Backend: Node.js, Express 5, TypeScript, Mongoose, Socket.io, bcrypt, jsonwebtoken, dotenv, cron
- AI: OpenAI-compatible Gemini API via `openai` package

## Prerequisites

- Node.js 20+ / npm
- MongoDB database
- Gemini-compatible OpenAI API key

## Environment Variables

### Server

Create a `.env` file inside the `server/` folder with at least:

```env
PORT=5000
DB_URL=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
VIEW_LINK=http://localhost:5173
GEMINI_API_KEY=your_gemini_api_key
NODE_ENV=development
```

### Client

Create a `.env` file inside the `client/` folder with:

```env
VITE_API_LINK=http://localhost:5000
```

> Adjust `VIEW_LINK` and `VITE_API_LINK` to match the actual frontend URL when running in a different environment.

## Installation

Install dependencies separately for frontend and backend.

```bash
cd client
npm install

cd ../server
npm install
```

## Development

Run frontend and backend in parallel from their respective folders.

```bash
cd client
npm run dev
```

```bash
cd server
npm run dev
```

The backend listens on the configured `PORT` (default `5000`). The frontend uses Vite default port `5173` unless changed.

## Production Build

Build both apps for production.

```bash
cd client
npm run build

cd ../server
npm run build
```

Then run the compiled server code:

```bash
cd server
npm start
```

## API Routes

### Public

- `POST /api/public/user/register` - Register a new user
- `POST /api/public/user/login` - Login and receive auth cookie

### Private (authenticated)

- `GET /api/private/user/auth` - Get authenticated user data
- `DELETE /api/private/user/deconnect` - Logout
- `PATCH /api/private/user/update-profile-name` - Update user name
- `PATCH /api/private/user/update-profile-email` - Update user email
- `PATCH /api/private/user/delete` - Delete account

- `GET /api/private/research/` - Get research list
- `GET /api/private/research/?page=` - Get paginated research
- `GET /api/private/research/:id` - Get research details

- `GET /api/private/channels/` - Get channels
- `POST /api/private/channels/create` - Create channel
- `PATCH /api/private/channels/update/:id` - Update channel
- `DELETE /api/private/channels/:id` - Delete channel

- `GET /api/private/messages/:channelId` - Get messages by channel
- `POST /api/private/messages/create` - Create message

## Socket.io

The backend starts a Socket.io server attached to the same HTTP server. The client can connect and exchange messages in real-time using:

- `message` event to send message payloads
- `receive-message` event to receive replies

## Notes

- The backend uses a cron job to fetch research data from the Biorxiv API after MongoDB is connected.
- AI responses are generated using the Gemini API via the `openai` package with `gemini-2.5-flash`.
- The backend enforces CORS using `VIEW_LINK` and expects requests from the configured frontend origin.

## Useful Commands

- `npm run dev` in `client/` - start frontend
- `npm run dev` in `server/` - start backend in watch mode
- `npm run build` in `client/` - build frontend
- `npm run build` in `server/` - compile backend
- `npm start` in `server/` - run built backend

## Folder Overview

- `client/src/` - frontend source code
- `client/src/api/` - Axios wrapper and API endpoint constants
- `client/src/components/` - UI components
- `client/src/pages/` - app pages and routing targets
- `client/src/context/` - auth, socket, Redux store

- `server/src/` - backend source code
- `server/src/config/` - database connection
- `server/src/controller/` - route controllers
- `server/src/routers/` - public and private routes
- `server/src/model/` - Mongoose models
- `server/src/services/` - cron and research import service
- `server/src/bot/` - AI message generation
- `server/src/socket.ts` - socket server logic
- `server/src/middlewares/` - token verification middleware
- `server/src/types/` - shared TypeScript models and types
- `server/src/utils/` - helpers and pagination

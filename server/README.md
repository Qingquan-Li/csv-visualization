# Server (Backend)

The server (backend) is built with TypeScript and Express.js. It serves the frontend (client) and provides the API endpoints to interact with the dataset.

## Running the Server

### Prerequisites

- Node.js

### Steps

1. Install dependencies

```bash
cd /path/to/server
npm install
```

2. Run the server with TypeScript

```bash
cd /path/to/server
npx ts-node src/server.ts
```

3. Or compile TypeScript to JavaScript and run the server

```bash
cd /path/to/server
# Compile TypeScript to JavaScript
npx tsc
# Run the server
node dist/server.js
```

The server will be running at http://localhost:3000

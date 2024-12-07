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

2. Run the server
  
```bash
cd /path/to/server
npm run start
```

Same as:

```bash
cd /path/to/server

# Compile TypeScript to JavaScript
npx tsc
# Or:
# npm run build

# Run the server
node dist/server.js
```

The server will be running at http://localhost:3000

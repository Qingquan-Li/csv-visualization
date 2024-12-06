# Client (Frontend)

The client (frontend) is built with TypeScript, React.js, and Tailwind CSS. It interacts with the backend (server) to retrieve and display the dataset in the table (dashboard), search people, show summary statistics, and create visualizations.

## Running the Client

### Prerequisites

- Node.js

### Steps

1. Install dependencies

```bash
cd path/to/client
npm install
```

2. Run the client with Vite dev server

```bash
cd path/to/client
npm run dev
```

The client will be running at http://localhost:5173

3. Or run the client with Vite dev server and specify the host (your LAN IP address)

```bash
cd path/to/client
# specify the host (your LAN IP address)
npm run dev -- --host
```

The client will be running at http://your-lan-ip:5173

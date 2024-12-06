// export const RootAPIURL: string = "http://localhost:3000/api"; // For local development
// export const RootAPIURL: string = '/api'; // For production

export const RootAPIURL: string = import.meta.env.VITE_API_URL || '';

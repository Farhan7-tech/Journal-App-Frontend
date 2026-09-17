// Base URL of the JournalApp Spring Boot API.
// Set VITE_API_BASE_URL in .env.local (see .env.example); defaults to the local backend.
export const API_BASE_URL = (import.meta.env.VITE_API_BASE_URL || "http://localhost:8080").replace(/\/+$/, "");

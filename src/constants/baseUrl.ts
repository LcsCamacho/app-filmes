const isProduction = process.env.NODE_ENV === "production";

export const BASE_URL_NEXT = isProduction
  ? "https://app-filmes-eta.vercel.app/api"
  : "http://localhost:3000/api";

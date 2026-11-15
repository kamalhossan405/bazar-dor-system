import { betterAuth } from "better-auth";
import { MongoClient } from "mongodb";
import { mongodbAdapter } from "@better-auth/mongo-adapter";

const dbUrl =
  process.env.BETTER_AUTH_DB_URL || "mongodb://127.0.0.1:27017/bazar-dor";
const client = new MongoClient(dbUrl);
const db = client.db("bazar-dor");

client.on("error", (error) => {
  // Gracefully log DB warnings without crashing the app process
  console.warn(
    "[MongoDB connection]",
    error instanceof Error ? error.message : error,
  );
});

export const auth = betterAuth({
  baseURL: process.env.BETTER_AUTH_URL || "http://localhost:3000",

  trustedOrigins: [
    "http://localhost:3000",
    "https://bazar-dor-psi-beige.vercel.app",
    ...(process.env.BETTER_AUTH_URL ? [process.env.BETTER_AUTH_URL] : []),
  ],

  secret:
    process.env.BETTER_AUTH_SECRET ||
    "bazar-dor-secure-secret-key-must-be-long-enough",

  emailAndPassword: {
    enabled: true,
  },

  socialProviders: {
    google: {
      clientId: process.env.BETTER_AUTH_GOOGLE_CLIENT_ID || "google-client-id",
      clientSecret:
        process.env.BETTER_AUTH_GOOGLE_CLIENT_SECRET || "google-client-secret",
    },

    github: {
      clientId: process.env.BETTER_AUTH_GITHUB_CLIENT_ID || "github-client-id",
      clientSecret:
        process.env.BETTER_AUTH_GITHUB_CLIENT_SECRET || "github-client-secret",
    },
  },

  account: {
    accountLinking: {
      enabled: true,
      trustedProviders: ["google", "github"],
    },
  },

  database: mongodbAdapter(db, {
    client,
  }),
});

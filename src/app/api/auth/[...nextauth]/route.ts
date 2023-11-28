import NextAuth, { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import axios from "axios";
import { BASE_URL_NEXT } from "../../../../constants/baseUrl";

const nextAuthOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text", placeholder: "jsmith" },
        password: {
          label: "Password",
          type: "password",
          placeholder: "Password",
        },
      },
      async authorize(credentials) {
        console.log("AUTHORIZE");
        const body = JSON.stringify(credentials);
        const res = await axios.post(`${BASE_URL_NEXT}/auth`, body, {
          headers: { "Content-Type": "application/json" },
        });
        console.log(res);
        // If no error and we have user data, return it
        if (res.status === 200) {
          return res.data;
        }
        // Return null if user data could not be retrieved
        return null;
      },
    }),
  ],
  pages: {
    signIn: "/",
  },
  callbacks: {
    async jwt({ token, user }) {
      user && (token.user = user)
      return token
    },
    async session({ session, token }) {
      return {
        ...session,
        iat: token.iat,
        exp: token.exp,
        jti: token.jti
      }
    },
  }
};

const handler = NextAuth(nextAuthOptions);

export { handler as GET, handler as POST, nextAuthOptions };

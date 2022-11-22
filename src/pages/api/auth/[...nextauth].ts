import NextAuth, { type NextAuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { DgraphAdapter } from "@next-auth/dgraph-adapter";
import { env } from "../../../env/server.mjs";

export const authOptions: NextAuthOptions = {
  // Include user.id on session
  callbacks: {
    session({ session, user }) {
      if (session.user) {
        session.user.id = user.id;
      }
      return session;
    },
  },

  adapter: DgraphAdapter({
    endpoint: env.DGRAPH_GRAPHQL_ENDPOINT,
    authToken: env.DGRAPH_GRAPHQL_KEY,

    // you can omit the following properties if you are running an unsecure schema
    // authHeader: env.AUTH_HEADER, // default: "Authorization",
    // jwtSecret:  env.SECRET,
  }),

  providers: [
    GoogleProvider({
      clientId: env.GOOGLE_CLIENT_ID,
      clientSecret: env.GOOGLE_CLIENT_SECRET,
    }),
    // ...add more providers here
  ],
};

export default NextAuth(authOptions);

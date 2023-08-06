import type { NextAuthOptions } from "next-auth";

import GitHubProvider, { GithubProfile } from "next-auth/providers/github";
import KakaoProvider from "next-auth/providers/kakao";
import CredentialsProvider from "next-auth/providers/credentials";
import { FirestoreAdapter } from "@auth/firebase-adapter";
import { db } from "@/my-firebase-admin/firebase";
import ts from "typescript";

export const options: NextAuthOptions = {
  secret: process.env.NEXTAUTH_SECRET as string,
  callbacks: {
    async session({ session, token, user }) {
      // Send properties to the client, like an access_token and user id from a provider.


      // Add admin propertiy to the user Session object. 
      // @ts-ignore
      session.user.admin = user.admin;

      return session;
    },
  },
  // @ts-ignore
  adapter: FirestoreAdapter(db),

  providers: [
    GitHubProvider({
      clientId: process.env.GITHUB_ID as string,
      clientSecret: process.env.GITHUB_SECRET as string,
      profile(profile: GithubProfile): any {
        // use at your own risk
        return {
          id: profile.id.toString(),
          name: profile.name || profile.login,
          email: profile.email,
          image: profile.avatar_url,
          admin: false,
        };
      },
    }),
  ],
};

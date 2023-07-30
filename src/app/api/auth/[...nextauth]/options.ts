import type { NextAuthOptions } from "next-auth";

import GitHubProvider, { GithubProfile } from "next-auth/providers/github";
import KakaoProvider from "next-auth/providers/kakao";
import CredentialsProvider from "next-auth/providers/credentials";
import { FirestoreAdapter } from "@auth/firebase-adapter";
import { db } from "@/my-firebase-admin/firebase";


export const options: NextAuthOptions = {
  secret: process.env.NEXTAUTH_SECRET as string,
  // @ts-ignore
  adapter: FirestoreAdapter(db),

  providers: [
    GitHubProvider({
      clientId: process.env.GITHUB_ID as string,
      clientSecret: process.env.GITHUB_SECRET as string,
      profile(profile: GithubProfile): any {
        // use at your own risk
        const [firstName, lastName] = profile.name!.split(" ");
        return {
          id: profile.id.toString(),
          name: profile.name || profile.login,
          email: profile.email,
          image: profile.avatar_url,
          admin: false,
        };
      },
    }),
    /*  KakaoProvider({
    clientId: process.env.KAKAO_CLIENT_ID as string,
    clientSecret: process.env.KAKAO_CLIENT_SECRET as string
  }), */
 
  ],

};

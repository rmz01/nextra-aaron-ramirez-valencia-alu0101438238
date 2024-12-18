import NextAuth from "next-auth"
import GithubProvider from "next-auth/providers/github"
 
export const authOptions = {
  providers: [
    GithubProvider.default({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
  ],
  // add more options here
}

export default NextAuth.default(authOptions)
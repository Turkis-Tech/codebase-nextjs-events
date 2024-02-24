import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { TUser } from "@/app/types/App";
import { isCredentialMatched } from "@/app/utils";

const handler = NextAuth({
  pages: {
    signIn: "/login"
  },
  providers: [
    CredentialsProvider({
      // The name to display on the sign in form (e.g. 'Sign in with...')
      name: "Credentials",
      // The credentials is used to generate a suitable form on the sign in page.
      // You can specify whatever fields you are expecting to be submitted.
      // e.g. domain, username, password, 2FA token, etc.
      // You can pass any HTML attribute to the <input> tag through the object.
      credentials: {
        username: { label: "Username", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req): Promise<any> {
        // You need to provide your own logic here that takes the credentials
        // submitted and returns either a object representing a user or value
        // that is false/null if the credentials are invalid.
        // e.g. return { id: 1, name: 'J Smith', email: 'jsmith@example.com' }
        // You can also use the `req` object to obtain additional parameters
        // (i.e., the request IP address)
        
        // fake user is here and it's going to match with credentials
        const user: TUser = {
          id: 1,
          name: "Admin",
          username: "admin@local.com",
          password: "q1w2e3R4."
        };

        // If no error and we have user data, return it
                if (isCredentialMatched(credentials as any, user)) {
                  return user;
                }

                // Return null if user data could not be retrieved
                return null;
              },
            }),
          ],
          secret: "q1w2e3r4t5y6u7i8o9p0",
        });

export { handler as GET, handler as POST };

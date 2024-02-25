import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { TUser } from "@/app/types/App";
import { isCredentialMatched } from "@/app/utils";

const authOptions = {
  pages: {
    signIn: "/login",
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
      async authorize(credentials, _req): Promise<any> {
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
          password: "q1w2e3R4.",
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
  secret: "MIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQCgPKTx9C1UKtKd85WKPqXHx0/LUWuE6diZVni/IujHYxethJ44cCMbGP/ISerw7pyV/NesGu/YOCR7yok79j9C9LiUW4Vf/jOLXLhN8BSEJZzBa6H/+qmz46fiGDVoIkPcHApigq30B+SuIlR4X64mjdXD3u3KlXuJr4A4Vb9GytsJ7esiPyxr/CIYHidQHzgFjGxzI7ldgbp/+LBXmwqfoWSYzjSv+ZRDeaKTohYPhZSU7o5DK2f36rOQDdBVTP3zLpc5h2WuNSd0MhHchabbQy7Gl+pbCyoZ2aDHOurgPLnOn+V2jQYjBJaOBTEYiGtX0UQFBpi8aGvaOuSUlA05AgMBAAECggEARymXsZLZPLuF7TscKxjWhEp6oBfJUe6O0M6r8mr9CWvzPI8cu4DlvmeUVS2qxxSZey0e1WLjKNoKLeYNm5EpmEFZ5h1dNvwMhTSI76gTXHrdyrLT7/yxOGB/EzTgJx6sl4jmfch+m9WTlFhPvmPz0lCEYqhTX/iSNFw6bAp81+GUKTYCDrM8c5Vl6iiqY5QN75QrmYyDEVEKycMZzu7D4ReVuC/dPjLjuiqXiC0wStA4m03U9MhrdggbiBub19+a1B0AxmSe5PFzqzNynCFFsVxac2ecbmXKUgPMo6nvvbJ70rwhye+F7tldXwuoIpVUSEhhZ/CDgoOZtto9AxUTbwKBgQDYcPgQwuRF7Zf8AiM7xZegzUr1TBHY/1/GBLaVazZFJfmoszIm4gwWbYbAA3DdGme8u4jyk5QrTh31S9/QZsS/mIPL9yh6O9MmMxAFDL3OyANAbShgVemReUUPKKUf/AX+4cfEaBgqCJB0pLyJdcV3esT+j1uz7kMm+zNUCTCoxwKBgQC9hfA8E5HYVru0WF95qHmH5GtteJzdAUExDdQx424nTi7uwChAd2iihGpOLMc35Kjv8ur4DmClHr/tcIe7lfcpt8G6vfehbm45suKk8aCJwhMopO19L+yZ0h7ViPFi4MgSnGHybjK31fo0wbCyPbxYCRKkXrmXdgRoHZRtWtuZ/wKBgQCuygQ6nPj109riI+PKOFasAD3hfG4JXKo+Yr4ESpGIJBPK/fOpXPFAB3FDjUPO+qz9yEDfDPkiQ7KDzqNPTD7lL0h4Jf/lPnzVI3Vzboe1/uZJWB28NoUp+tIfXMaE3uUEodbOsPWatFHcMNEk/Rvb0iRWIvV+iBJo34HjAozuLwKBgHiuxV88Bu7/q98XNxS9F0ZVSaMX3qtMlTqrV6e87vPQcUpOylLitppmP1swYFtTG9BPmxgB78C1Z/nGYmgtAopqHM7RENKXA1Fye6gUxOlzz8dd3myNC9iXWFMZNLyF7mELe8NoMJungf/+JooZjclxXZGVUBEGcZ/q1g0cgiH5AoGBAJLqvvY8Gk0Iy059f/3Zj5Fxq50t+KUDkQ9Lmq/Ud4E4aiLF61pLKhWbSo51jfHmNVb7k1Wr85bbcM2GaLzE5t7Teadtnaxu1qkwh81BzvcEn9pqyZjlnJQ/SWHSGtyg45vUI3wgLhMyl2REz2HBcla20SwQgkXANtXRHrVtkw5N",
};
const handler = NextAuth(authOptions);

export { handler as GET, handler as POST, authOptions };

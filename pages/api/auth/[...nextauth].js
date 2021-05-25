import NextAuth from 'next-auth';
import Providers from 'next-auth/providers';



export default (req, res) => 
    NextAuth(req, res, {
    providers: [
        Providers.Facebook({
            clientId: process.env.FACEBOOK_ID,
            clientSecret: process.env.FACEBOOK_SECRET
        }),
        Providers.Google({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET
        })
    ],
    callbacks: {
        async signIn(user, account, profile) {
            console.log(user, account, profile, profile)
            return true
        },
        async redirect(url, baseUrl) {
          return url;
        },
        async session(session, token) {
            session.accessToken = token.accessToken
            return session
          }
    }
}) 
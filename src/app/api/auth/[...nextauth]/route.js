import NextAuth from "next-auth";
import CredentialsProvider  from "next-auth/providers/credentials";


const handler = NextAuth({
    session: {
      strategy: 'jwt'
    },
    pages: {
      signIn: "/login"
    },
    providers: [
      CredentialsProvider({
        name: 'Credentials',
        credentials: {
          name: { },
          password: { },
        },
        async authorize(credentials, req) {
            console.log(credentials)
            // Aqui você faria a chamada para sua API para verificar as credenciais
            if (!credentials?.name || !credentials?.password) return null
            const response = await fetch('http://127.0.0.1:8000/login', {
             
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify(credentials),
            });
            const data = await response.json();
            
            if (response.ok) {
              return response, data
            } else {

              // Se a resposta da API não for bem-sucedida, retorne null
              return null;
            }
          },
        }),
      ],
    });


export { handler as GET, handler as POST}
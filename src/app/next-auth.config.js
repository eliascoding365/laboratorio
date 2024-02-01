/*import NextAuth from 'next-auth';
import Providers from 'next-auth/providers';

export default NextAuth({
  providers: [
    Providers.Credentials({
      name: 'Custom Provider',
      credentials: {
        name: { label: 'Name', type: 'text' },
        password: {  label: 'Password', type: 'password' }
      },
      async authorize(credentials) {
        // Fazer uma requisição para sua API
        const res = await fetch('http://127.0.0.1:8000/user', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(credentials),
        });

        const user = await res.json();

        if (res.ok && user) {
          return Promise.resolve(user);
        } else {
          return Promise.resolve(null);
        }
      },
    }),
    // Outros provedores, como Google, GitHub, etc., podem ser adicionados aqui
  ],
  // Outras configurações podem ser adicionadas aqui
});
*/
// api/users.js - API endpoint para usuários
export default function handler(req, res) {
  try {
    // Em produção, lerá das variáveis de ambiente do Vercel
    const usersData = process.env.USERS_DATA || '[{"id":"1","firstName":"Admin","lastName":"Lossantos","companyName":"Lossantos Corp","email":"admin@lossantos.com","password":"adminpassword123"},{"id":"2","firstName":"Lucas","lastName":"Andrade","companyName":"","email":"lucas.andrade@email.com","password":"senhaforte456"}]';
    const users = JSON.parse(usersData);

    if (req.method === 'GET') {
      res.status(200).json(users);
    } else if (req.method === 'POST') {
      const newUser = req.body;
      newUser.id = Date.now().toString();
      users.push(newUser);
      // Em produção, você precisaria atualizar a variável de ambiente
      res.status(201).json(newUser);
    } else {
      res.status(405).json({ message: 'Method not allowed' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
}

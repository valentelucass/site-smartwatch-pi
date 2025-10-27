const fs = require('fs');
const path = require('path');

try {
  // Ler o db.json
  const dbPath = path.join(__dirname, 'db.json');
  const dbContent = fs.readFileSync(dbPath, 'utf8');
  const db = JSON.parse(dbContent);

  // Gerar variáveis de ambiente
  const envVars = {
    NODE_ENV: 'production',
    USERS_DATA: JSON.stringify(db.users || []),
    PRODUCTS_DATA: JSON.stringify(db.products || []),
    VITE_API_URL: 'https://site-smartwatch-pi.vercel.app/api',
    VITE_APP_NAME: 'Smartwatch Store'
  };

  // Mostrar as variáveis no console
  console.log('=== VARIÁVEIS DE AMBIENTE PARA O VERCEL ===\n');

  Object.entries(envVars).forEach(([key, value]) => {
    console.log(`${key}=${value}`);
    console.log('');
  });

  console.log('=== INSTRUÇÕES ===');
  console.log('1. Copie as variáveis acima');
  console.log('2. No dashboard do Vercel, vá em Settings > Environment Variables');
  console.log('3. Adicione cada variável');
  console.log('4. Para USERS_DATA e PRODUCTS_DATA, certifique-se de que o JSON é válido');

} catch (error) {
  console.error('Erro ao processar db.json:', error.message);
}

# Deploy no Vercel - Instruções

## Configuração das Variáveis de Ambiente

No dashboard do Vercel, adicione estas variáveis em **Settings > Environment Variables**:

### Variáveis Obrigatórias:

1. **NODE_ENV**
   - Valor: `production`

2. **USERS_DATA** (JSON string dos usuários)
   ```
   [{"id":"1","firstName":"Admin","lastName":"Lossantos","companyName":"Lossantos Corp","email":"admin@lossantos.com","password":"adminpassword123"},{"id":"2","firstName":"Lucas","lastName":"Andrade","companyName":"","email":"lucas.andrade@email.com","password":"senhaforte456"}]
   ```

3. **PRODUCTS_DATA** (JSON string dos produtos)
   ```
   [{"id":"1","title":"Watch 10 ultra - 49mm","price":559,"category":"Smartwatch","description":"Descrição detalhada do Watch 10 ultra.","sku":"SW-ULTRA-10-49","slug":"watch-10-ultra-49mm","stockStatus":"Em estoque","quantity":15}]
   ```

### Como extrair os dados do db.json:

1. Abra o arquivo `db.json`
2. Copie o array de `users` completo
3. Copie o array de `products` completo
4. Cole nas respectivas variáveis no Vercel

### Endpoints da API disponíveis:

- `GET /api/users` - Lista todos os usuários
- `POST /api/users` - Cria um novo usuário
- `GET /api/products` - Lista todos os produtos
- `POST /api/products` - Cria um novo produto

### Frontend:
- `VITE_API_URL=https://seu-projeto.vercel.app/api`

## Deploy:
1. Commit e push os arquivos da API
2. Configure as variáveis no dashboard do Vercel
3. Deploy automático

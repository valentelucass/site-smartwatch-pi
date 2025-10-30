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

### Backend no Render (recomendado)

Se o backend estiver hospedado no Render, configure no Vercel a variável:

- `VITE_API_URL=https://<seu-servico>.onrender.com`

Substitua `<seu-servico>` pela URL pública do seu serviço no Render (ou domínio customizado, se houver). A aplicação usa essa variável em produção; em desenvolvimento (`npm run dev`) o fallback é `http://localhost:3001`.

Observações sobre Render (plano gratuito):
- Cold start pode levar 20–60s após inatividade. A primeira chamada pode demorar.
- Garanta que o serviço esteja como Web Service e acessível publicamente.
- Habilite CORS se usar proxies; o `json-server` já responde com CORS padrão.

## Deploy
1. Faça commit/push do frontend para Vercel.
2. No Vercel: Settings > Environment Variables, configure `VITE_API_URL` com a URL do Render.
3. No Render: confirme que o serviço está rodando e acessível.
4. Dispare o deploy no Vercel ou aguarde o auto deploy.

# Smartwatch Store

Projeto de e-commerce de smartwatches desenvolvido com React + Vite.

## Variáveis de Ambiente

O projeto usa variáveis de ambiente para configuração da API e outras configurações:

### Variáveis Configuradas:
- `VITE_API_URL` - URL da API (ex: `https://site-smartwatch-pi.vercel.app/api`)
- `VITE_APP_NAME` - Nome da aplicação (ex: `Smartwatch Store`)
- `USERS_DATA` - Dados dos usuários (JSON string)
- `PRODUCTS_DATA` - Dados dos produtos (JSON string)

### Como usar no código:
```javascript
// Acessar variáveis de ambiente
const apiUrl = import.meta.env.VITE_API_URL
const appName = import.meta.env.VITE_APP_NAME

// Exemplo de uso em componentes
<div className="logo">
  {import.meta.env.VITE_APP_NAME || 'LOSSANTOS'}
</div>

// Exemplo de chamada para API
const response = await fetch(`${import.meta.env.VITE_API_URL}/users`)
```

## Deploy no Vercel

### 1. Configure as variáveis de ambiente no Vercel Dashboard:

```
NODE_ENV=production
VITE_API_URL=https://site-smartwatch-pi.vercel.app/api
USERS_DATA=[{"id":"1","firstName":"Admin","lastName":"Lossantos","companyName":"Lossantos Corp","email":"admin@lossantos.com","password":"adminpassword123"},...]
PRODUCTS_DATA=[{"id":"1","title":"Watch 10 ultra - 49mm","price":559,"category":"Smartwatch",...},...]
```

### 2. API Endpoints disponíveis:
- `GET /api/users` - Lista todos os usuários
- `POST /api/users` - Cria um novo usuário
- `GET /api/products` - Lista todos os produtos
- `POST /api/products` - Cria um novo produto

### 3. Scripts disponíveis:
```bash
npm run dev          # Servidor de desenvolvimento
npm run build        # Build para produção
npm run preview      # Preview do build
npm run extract-env  # Extrai dados do db.json para variáveis de ambiente
```

## Desenvolvimento

### Instalação:
```bash
npm install
```

### Desenvolvimento local:
```bash
npm run dev
# Acesse: http://localhost:5173
```

### Para extrair dados do db.json:
```bash
npm run extract-env
```

## Tecnologias
- React 19
- Vite
- React Router DOM
- Axios
- React Hot Toast
- Tailwind CSS (se configurado)

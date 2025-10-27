// Exemplo de uso das variáveis de ambiente no React/Vite
// Arquivo: src/components/EnvExample.jsx (opcional)

import React from 'react';

// Exemplo 1: Acessar variável de ambiente
const apiUrl = import.meta.env.VITE_API_URL;
const appName = import.meta.env.VITE_APP_NAME;

// Exemplo 2: Usar em componentes
const EnvExample = () => {
  return (
    <div>
      <h1>Exemplo de Variáveis de Ambiente</h1>
      <p>API URL: {apiUrl}</p>
      <p>App Name: {appName}</p>
      <p>Environment: {import.meta.env.MODE}</p>
    </div>
  );
};

// Exemplo 3: Uso condicional
const isProduction = import.meta.env.PROD;
const isDevelopment = import.meta.env.DEV;

// Exemplo 4: Usar em funções
const fetchUsers = async () => {
  try {
    const response = await fetch(`${import.meta.env.VITE_API_URL}/users`);
    return await response.json();
  } catch (error) {
    console.error('Erro ao buscar usuários:', error);
  }
};

export default EnvExample;

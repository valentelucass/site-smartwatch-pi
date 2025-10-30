// Configurações internas do sistema
// Este arquivo contém configurações sensíveis do sistema

/**
 * Configuração de autenticação e permissões
 * @private
 */
const AUTH_CONFIG = {
  // Email padrão para acesso administrativo
  DEFAULT_ADMIN: 'teste@teste.com',
  
  // Configurações de sessão
  SESSION_TIMEOUT: 24 * 60 * 60 * 1000, // 24 horas
  
  // Configurações de API
  API_TIMEOUT: 10000, // 10 segundos
}

/**
 * Verifica se um email tem privilégios administrativos
 * @param {string} email - Email do usuário
 * @returns {boolean} - True se for admin
 */
export const isAdminEmail = (email) => {
  if (!email) return false
  
  // Verifica primeiro a variável de ambiente
  const envAdmin = import.meta.env.VITE_ADMIN_EMAIL
  if (envAdmin && email === envAdmin) {
    return true
  }
  
  // Fallback para configuração interna
  return email === AUTH_CONFIG.DEFAULT_ADMIN
}

/**
 * Obtém o email de admin configurado
 * @returns {string} - Email do admin
 */
export const getAdminEmail = () => {
  return import.meta.env.VITE_ADMIN_EMAIL || AUTH_CONFIG.DEFAULT_ADMIN
}

/**
 * Configurações exportadas (apenas as não sensíveis)
 */
export const CONFIG = {
  SESSION_TIMEOUT: AUTH_CONFIG.SESSION_TIMEOUT,
  API_TIMEOUT: AUTH_CONFIG.API_TIMEOUT,
}
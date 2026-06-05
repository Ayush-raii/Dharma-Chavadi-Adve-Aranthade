// Admin authentication configuration
const ADMIN_EMAIL = 'aranthadedharmachavadi@gmail.com'
const ADMIN_PASSWORD = 'gandhaprasada'

export const authenticateAdmin = (email: string, password: string): boolean => {
  return email === ADMIN_EMAIL && password === ADMIN_PASSWORD
}

export const validateAdminCredentials = (email: string, password: string): { success: boolean; message: string } => {
  if (!email || !password) {
    return { success: false, message: 'Email and password are required' }
  }
  
  if (email !== ADMIN_EMAIL || password !== ADMIN_PASSWORD) {
    return { success: false, message: 'Access denied. Invalid credentials.' }
  }
  
  return { success: true, message: 'Authentication successful' }
}

// utils/auth.js
export const isAuthenticated = () => {
  const token = localStorage.getItem('adminToken');
  return !!token;
};

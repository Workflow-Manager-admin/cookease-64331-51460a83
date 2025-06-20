/**
 * PUBLIC_INTERFACE
 * Custom hook for authentication logic (user state, login, logout, etc).
 * Provides user info and actions.
 * MVP: Frontend only, extendable for backend.
 */
function useAuth() {
  // Placeholder: returns mock user (or null)
  return { user: null, login: () => {}, logout: () => {} };
}

export default useAuth;

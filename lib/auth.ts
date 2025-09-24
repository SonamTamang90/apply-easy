// Simple frontend-only authentication service
export interface User {
  id: string;
  email: string;
  name: string;
}

export interface Session {
  user: User;
  token: string;
}

// Hardcoded credentials
const HARDCODED_CREDENTIALS = {
  email: "demo@example.com",
  password: "demo123",
  name: "Demo User"
};

// Simple auth service using localStorage
export class AuthService {
  private static readonly STORAGE_KEY = "apply_easy_session";

  // Sign in with hardcoded credentials
  static async signInWithPassword(email: string, password: string): Promise<{ user: User; session: Session } | { error: string }> {
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 500));

    if (email === HARDCODED_CREDENTIALS.email && password === HARDCODED_CREDENTIALS.password) {
      const user: User = {
        id: "demo-user-id",
        email: HARDCODED_CREDENTIALS.email,
        name: HARDCODED_CREDENTIALS.name
      };

      const session: Session = {
        user,
        token: `demo-token-${Date.now()}`
      };

      // Store session in localStorage
      localStorage.setItem(this.STORAGE_KEY, JSON.stringify(session));

      return { user, session };
    }

    return { error: "Invalid email or password" };
  }

  // Sign up (just redirect to sign in for demo)
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  static async signUp(email: string, password: string, _name: string): Promise<{ user: User; session: Session } | { error: string }> {
    // For demo purposes, just sign them in
    return this.signInWithPassword(email, password);
  }

  // Sign out
  static async signOut(): Promise<void> {
    localStorage.removeItem(this.STORAGE_KEY);
  }

  // Get current session
  static getSession(): Session | null {
    const sessionData = localStorage.getItem(this.STORAGE_KEY);
    if (sessionData) {
      try {
        return JSON.parse(sessionData);
      } catch {
        localStorage.removeItem(this.STORAGE_KEY);
      }
    }
    return null;
  }

  // Check if user is authenticated
  static isAuthenticated(): boolean {
    return this.getSession() !== null;
  }
}
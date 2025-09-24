"use client";
import { createContext, useContext, useEffect, useState } from "react";
import { AuthService, User, Session } from "@/lib/auth";

type AuthContextType = {
  user: User | null;
  session: Session | null;
  loading: boolean;
  signOut: () => Promise<void>;
  refreshAuth: () => void;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [session, setSession] = useState<Session | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check for existing session on mount
    const existingSession = AuthService.getSession();
    if (existingSession) {
      setSession(existingSession);
      setUser(existingSession.user);
    }
    setLoading(false);
  }, []);

  const signOut = async () => {
    await AuthService.signOut();
    setUser(null);
    setSession(null);
  };

  const refreshAuth = () => {
    const existingSession = AuthService.getSession();
    if (existingSession) {
      setSession(existingSession);
      setUser(existingSession.user);
    } else {
      setSession(null);
      setUser(null);
    }
  };

  return (
    <AuthContext.Provider value={{ user, session, loading, signOut, refreshAuth }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}

"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { User } from "@/lib/definitions";
import { users, updateUser as updateUserData } from "@/lib/data";
import { useRouter } from "next/navigation";

interface AuthContextType {
  user: User | null;
  login: (email: string, name?: string) => Promise<void>;
  logout: () => void;
  updateUser: (user: User) => void;
  loading: boolean;
  isAuthenticated: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    // Check for user in localStorage to persist session
    try {
      const storedUser = localStorage.getItem("user");
      if (storedUser) {
        setUser(JSON.parse(storedUser));
      }
    } catch (error) {
      console.error("Failed to parse user from localStorage", error);
      localStorage.removeItem("user");
    }
    setLoading(false);
  }, []);

  const login = async (email: string, name?: string) => {
    setLoading(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 500));
    let foundUser = users.find(u => u.email === email);

    if (foundUser) {
      setUser(foundUser);
      localStorage.setItem("user", JSON.stringify(foundUser));
    } else {
      // If user not found, create a new one for demonstration purposes
      const newUser: User = {
        id: String(Date.now()), // Use a more unique ID
        name: name || email.split('@')[0],
        username: name?.toLowerCase().replace(/\s/g, '') || email.split('@')[0],
        email: email,
        country: '',
        profilePhoto: ''
      };
      users.push(newUser);
      setUser(newUser);
      localStorage.setItem("user", JSON.stringify(newUser));
    }
    setLoading(false);
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("user");
    router.push("/login");
  };

  const updateUser = (updatedUser: User) => {
    setUser(updatedUser);
    localStorage.setItem("user", JSON.stringify(updatedUser));
    // Also update the mock data source
    updateUserData(updatedUser);
  };
  
  const isAuthenticated = !!user;

  const value = { user, login, logout, updateUser, loading, isAuthenticated };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};

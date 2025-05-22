import { useRouter } from "next/navigation";
import React, { useState } from "react";

export const useUser = () => {
  const router = useRouter();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const handleLogin = async (e: React.FormEvent): Promise<void> => {
    e.preventDefault();
    setError("");

    const res = await fetch("/api/login", {
      method: "POST",
      body: JSON.stringify({ username, password }),
      headers: { "Content-Type": "application/json" },
    });

    if (res.ok) {
      router.push("/dashboard");
    } else {
      const data = await res.json();
      setError(data.message || "Login failed");
    }
  };

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setSuccess(false);

    const res = await fetch("/api/register", {
      method: "POST",
      body: JSON.stringify({ username, password }),
      headers: { "Content-Type": "application/json" },
    });

    if (res.ok) {
      setSuccess(true);
      setTimeout(() => router.push("/"), 1000);
    } else {
      const data = await res.json();
      setError(data.message || "Registration failed");
    }
  };

  return {
    error,
    handleLogin,
    handleRegister,
    password,
    setError,
    setPassword,
    setSuccess,
    setUsername,
    success,
    username,
  };
};

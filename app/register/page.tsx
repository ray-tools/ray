"use client";

import { useUser } from "@/hooks/useUser";
import Link from "next/link";

export default function RegisterPage() {
  const {
    username,
    password,
    error,
    success,
    handleRegister,
    setUsername,
    setPassword,
  } = useUser();

  return (
    <main className="w-full min-h-screen flex items-center justify-center bg-black p-10">
      <form
        onSubmit={handleRegister}
        className="w-full max-w-sm bg-gray-700 p-6 rounded-2xl shadow-xl space-y-4"
      >
        <h2 className="text-xl font-semibold">Register</h2>
        <input
          className="w-full border p-2 rounded bg-gray-50 text-black"
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Username"
          required
          type="text"
          value={username}
        />
        <input
          className="w-full border p-2 rounded bg-gray-50 text-black"
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          required
          type="password"
          value={password}
        />
        {error && <p className="text-red-500 text-sm">{error}</p>}
        {success && (
          <p className="text-green-600 text-sm">Registered! Redirecting...</p>
        )}
        <button
          className="w-full bg-white py-2 rounded hover:opacity-90 text-black font-bold"
          type="submit"
        >
          Register
        </button>
        <p className="text-center text-sm">
          Already have an account?{" "}
          <Link href="/" className="underline text-cyan-600">
            Login
          </Link>
        </p>
      </form>
    </main>
  );
}

"use client";

import Link from "next/link";
import { useUser } from "./hooks/useUser";

export default function Home() {
  const { password, username, setUsername, handleLogin, setPassword, error } =
    useUser();

  return (
    <>
      <header className="text-center py-20">
        <h1 className="text-5xl font-bold mb-4">Welcome to RAY ❇️</h1>
        <p className="text-lg text-gray-500">
          Your modular productivity workspace
        </p>
      </header>
      <main className="w-full flex items-center justify-center ">
        <form
          onSubmit={handleLogin}
          className="w-full max-w-sm bg-gray-700 p-6 rounded-2xl shadow-xl space-y-4"
        >
          <h2 className="text-xl font-semibold">Login</h2>
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
          <button
            className="w-full bg-white py-2 rounded hover:opacity-90 text-black font-bold"
            type="submit"
          >
            Login
          </button>
          <p className="text-center text-sm">
            Don&apos;t have an account?{" "}
            <Link href="/register" className="underline text-cyan-600">
              Register
            </Link>
          </p>
        </form>
      </main>
    </>
  );
}

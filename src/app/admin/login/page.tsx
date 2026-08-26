"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { FormEvent, Suspense, useState } from "react";

function LoginFormInner() {
  const router = useRouter();
  const search = useSearchParams();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function onSubmit(e: FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError("");
    try {
      const res = await fetch("/api/admin/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
      });
      const data = (await res.json()) as { error?: string };
      if (!res.ok) throw new Error(data.error || "Login failed.");
      router.replace(search.get("next") || "/admin/dashboard");
      router.refresh();
    } catch (err) {
      setError(err instanceof Error ? err.message : "Login failed.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <form onSubmit={onSubmit} className="mx-auto w-full max-w-md space-y-4 rounded-2xl border border-esa-border bg-white p-6 shadow-esa-soft sm:p-8">
      <div>
        <p className="text-xs font-semibold uppercase tracking-[0.14em] text-esa-red">Admin</p>
        <h1 className="mt-2 text-2xl font-bold text-esa-navy">Sign in</h1>
        <p className="mt-2 text-sm text-esa-muted">
          Sign in to create, edit, and publish blogs for Easy Spanish Academy.
        </p>
      </div>
      <label className="block space-y-1.5">
        <span className="text-sm font-semibold">Email / username</span>
        <input
          autoComplete="username"
          required
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="you@example.com"
          className="w-full rounded-lg border border-esa-border px-3 py-2.5 text-sm focus-esa"
        />
      </label>
      <label className="block space-y-1.5">
        <span className="text-sm font-semibold">Password</span>
        <input
          type="password"
          autoComplete="current-password"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full rounded-lg border border-esa-border px-3 py-2.5 text-sm focus-esa"
        />
      </label>
      {error ? <p className="text-sm text-esa-red">{error}</p> : null}
      <button
        type="submit"
        disabled={loading}
        className="w-full rounded-lg bg-esa-red px-4 py-2.5 text-sm font-semibold text-white hover:bg-esa-red-dark focus-esa disabled:opacity-60"
      >
        {loading ? "Signing in…" : "Sign in"}
      </button>
    </form>
  );
}

export default function AdminLoginPage() {
  return (
    <div className="flex min-h-[70vh] items-center justify-center py-10">
      <Suspense fallback={<p className="text-sm text-esa-muted">Loading…</p>}>
        <LoginFormInner />
      </Suspense>
    </div>
  );
}

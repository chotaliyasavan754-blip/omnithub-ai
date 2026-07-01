"use client";

import { useState, useId } from "react";
import { useRouter } from "next/navigation";
import { OmniHubLogo } from "@/components/common/OmniHubLogo";
import { LoadingSpinner } from "@/components/common/LoadingSpinner";

// ─── Icons ────────────────────────────────────────────────────────────────────

function EyeIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75} className={className} aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
    </svg>
  );
}

function EyeOffIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75} className={className} aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M3.98 8.223A10.477 10.477 0 0 0 1.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.451 10.451 0 0 1 12 4.5c4.756 0 8.773 3.162 10.065 7.498a10.522 10.522 0 0 1-4.293 5.774M6.228 6.228 3 3m3.228 3.228 3.65 3.65m7.894 7.894L21 21m-3.228-3.228-3.65-3.65m0 0a3 3 0 1 0-4.243-4.243m4.242 4.242L9.88 9.88" />
    </svg>
  );
}

function GoogleIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09Z" fill="#4285F4" />
      <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23Z" fill="#34A853" />
      <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62Z" fill="#FBBC05" />
      <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53Z" fill="#EA4335" />
    </svg>
  );
}

// ─── Login Form Component ─────────────────────────────────────────────────────

export function LoginForm() {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const usernameId = useId();
  const passwordId = useId();
  const rememberMeId = useId();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");

    await new Promise((r) => setTimeout(r, 1500));

    if (username === "heet" && password === "savan") {
      router.push("/dashboard");
    } else {
      setError("Invalid username or password. Please try again.");
      setIsLoading(false);
    }
  };

  return (
    <div className="rounded-2xl border border-slate-200/80 bg-white/90 px-8 py-10 shadow-xl shadow-slate-200/60 backdrop-blur-sm dark:border-slate-700/60 dark:bg-slate-900/90 dark:shadow-slate-950/60 sm:px-10">
      {/* Logo + Brand */}
      <div className="mb-8 flex flex-col items-center gap-3">
        <div className="flex items-center gap-2.5">
          <OmniHubLogo />
          <span className="text-xl font-bold tracking-tight text-slate-900 dark:text-white">
            OmniHub <span className="text-[#9D1A10] dark:text-red-400">AI</span>
          </span>
        </div>
        <div className="text-center">
          <h1 className="text-2xl font-semibold tracking-tight text-slate-900 dark:text-white">
            Welcome back
          </h1>
          <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">Sign in to your account</p>
        </div>
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit} noValidate className="space-y-5">
        {/* Error */}
        {error && (
          <div className="rounded-lg bg-red-50 p-3 text-sm text-red-600 dark:bg-red-900/30 dark:text-red-400 text-center">
            {error}
          </div>
        )}

        {/* Username */}
        <div className="space-y-1.5">
          <label htmlFor={usernameId} className="block text-sm font-medium text-slate-700 dark:text-slate-300">
            Username
          </label>
          <input
            id={usernameId}
            type="text"
            autoComplete="username"
            required
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Enter your username"
            aria-label="Username"
            className="block w-full rounded-lg border border-slate-300 bg-white px-3.5 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 shadow-sm transition-all duration-150 focus:border-[#9D1A10] focus:outline-none focus:ring-2 focus:ring-[#9D1A10]/20 dark:border-slate-600 dark:bg-slate-800 dark:text-white dark:placeholder:text-slate-500 dark:focus:border-red-400 dark:focus:ring-red-400/20"
          />
        </div>

        {/* Password */}
        <div className="space-y-1.5">
          <label htmlFor={passwordId} className="block text-sm font-medium text-slate-700 dark:text-slate-300">
            Password
          </label>
          <div className="relative">
            <input
              id={passwordId}
              type={showPassword ? "text" : "password"}
              autoComplete="current-password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              aria-label="Password"
              className="block w-full rounded-lg border border-slate-300 bg-white px-3.5 py-2.5 pr-11 text-sm text-slate-900 placeholder:text-slate-400 shadow-sm transition-all duration-150 focus:border-[#9D1A10] focus:outline-none focus:ring-2 focus:ring-[#9D1A10]/20 dark:border-slate-600 dark:bg-slate-800 dark:text-white dark:placeholder:text-slate-500 dark:focus:border-red-400 dark:focus:ring-red-400/20"
            />
            <button
              type="button"
              onClick={() => setShowPassword((v) => !v)}
              aria-label={showPassword ? "Hide password" : "Show password"}
              className="absolute inset-y-0 right-0 flex items-center px-3.5 text-slate-400 transition-colors hover:text-slate-600 dark:text-slate-500 dark:hover:text-slate-300"
            >
              {showPassword
                ? <EyeOffIcon className="h-[18px] w-[18px]" />
                : <EyeIcon className="h-[18px] w-[18px]" />}
            </button>
          </div>
        </div>

        {/* Remember me + Forgot password */}
        <div className="flex items-center justify-between gap-2">
          <label className="flex cursor-pointer items-center gap-2 select-none">
            <input
              id={rememberMeId}
              type="checkbox"
              checked={rememberMe}
              onChange={(e) => setRememberMe(e.target.checked)}
              aria-label="Remember me"
              className="h-4 w-4 rounded border-slate-300 text-[#9D1A10] shadow-sm transition-colors focus:ring-2 focus:ring-[#9D1A10]/30 focus:ring-offset-0 dark:border-slate-600 dark:bg-slate-800 dark:checked:bg-red-500 dark:focus:ring-red-400/30"
            />
            <span className="text-sm text-slate-600 dark:text-slate-400">Remember me</span>
          </label>
          <a
            href="/forgot-password"
            className="text-sm font-medium text-[#9D1A10] transition-colors hover:text-[#871510] dark:text-red-400 dark:hover:text-red-300"
          >
            Forgot password?
          </a>
        </div>

        {/* Sign In Button */}
        <button
          type="submit"
          disabled={isLoading}
          aria-busy={isLoading}
          className="relative flex w-full items-center justify-center gap-2 rounded-lg bg-[#9D1A10] px-4 py-2.5 text-sm font-semibold text-white shadow-sm shadow-red-200 transition-all duration-150 hover:bg-[#871510] focus:outline-none focus:ring-2 focus:ring-[#9D1A10] focus:ring-offset-2 active:scale-[0.99] disabled:cursor-not-allowed disabled:opacity-70 dark:shadow-red-900/40 dark:focus:ring-offset-slate-900"
        >
          {isLoading ? (
            <>
              <LoadingSpinner className="h-4 w-4" />
              Signing in…
            </>
          ) : (
            "Sign In"
          )}
        </button>
      </form>

      {/* Divider */}
      <div className="relative my-6 flex items-center" aria-hidden="true">
        <div className="flex-1 border-t border-slate-200 dark:border-slate-700" />
        <span className="mx-3 text-xs font-medium text-slate-400 dark:text-slate-500">or continue with</span>
        <div className="flex-1 border-t border-slate-200 dark:border-slate-700" />
      </div>

      {/* Google Sign-In */}
      <button
        type="button"
        onClick={() => { /* Google OAuth handler */ }}
        className="flex w-full items-center justify-center gap-3 rounded-lg border border-slate-300 bg-white px-4 py-2.5 text-sm font-medium text-slate-700 shadow-sm transition-all duration-150 hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-[#9D1A10]/30 focus:ring-offset-2 active:scale-[0.99] dark:border-slate-600 dark:bg-slate-800 dark:text-slate-200 dark:hover:bg-slate-700 dark:focus:ring-offset-slate-900"
        aria-label="Sign in with Google"
      >
        <GoogleIcon className="h-[18px] w-[18px]" />
        Sign in with Google
      </button>

      {/* Sign Up Link */}
      <p className="mt-6 text-center text-sm text-slate-500 dark:text-slate-400">
        Don&apos;t have an account?{" "}
        <a
          href="/register"
          className="font-semibold text-[#9D1A10] transition-colors hover:text-[#871510] dark:text-red-400 dark:hover:text-red-300"
        >
          Sign Up
        </a>
      </p>
    </div>
  );
}

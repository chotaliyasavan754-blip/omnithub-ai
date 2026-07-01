import { LoginForm } from "@/components/auth/LoginForm";

/**
 * Login page — thin shell.
 * All logic and UI lives in LoginForm.
 */
export default function LoginPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-indigo-50 dark:from-slate-950 dark:via-slate-900 dark:to-indigo-950 flex items-center justify-center p-4 sm:p-6 lg:p-8">
      {/* Background decoration */}
      <div aria-hidden="true" className="pointer-events-none fixed inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 h-[600px] w-[600px] rounded-full bg-indigo-100/60 blur-3xl dark:bg-indigo-900/20" />
        <div className="absolute -bottom-40 -left-40 h-[500px] w-[500px] rounded-full bg-violet-100/60 blur-3xl dark:bg-violet-900/20" />
      </div>

      <div className="relative w-full max-w-md">
        <LoginForm />

        {/* Footer note */}
        <p className="mt-6 text-center text-xs text-slate-400 dark:text-slate-600">
          By signing in, you agree to our{" "}
          <a href="/terms" className="underline underline-offset-2 hover:text-slate-600 dark:hover:text-slate-400">Terms</a>
          {" & "}
          <a href="/privacy" className="underline underline-offset-2 hover:text-slate-600 dark:hover:text-slate-400">Privacy Policy</a>.
        </p>
      </div>
    </main>
  );
}
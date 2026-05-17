function GitHubSvg({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2C6.48 2 2 6.58 2 12.26c0 4.52 2.87 8.35 6.84 9.71.5.1.68-.22.68-.49 0-.24-.01-1.04-.01-1.89-2.78.62-3.37-1.22-3.37-1.22-.45-1.18-1.11-1.49-1.11-1.49-.91-.64.07-.63.07-.63 1 .07 1.53 1.06 1.53 1.06.9 1.57 2.36 1.12 2.94.86.09-.67.35-1.12.63-1.38-2.22-.26-4.56-1.14-4.56-5.06 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.3.1-2.71 0 0 .84-.28 2.75 1.05A9.35 9.35 0 0 1 12 6.99c.85 0 1.7.12 2.5.34 1.9-1.33 2.74-1.05 2.74-1.05.55 1.41.2 2.45.1 2.71.64.72 1.03 1.63 1.03 2.75 0 3.93-2.34 4.8-4.57 5.05.36.32.68.94.68 1.9 0 1.38-.01 2.49-.01 2.83 0 .27.18.59.69.49A10.08 10.08 0 0 0 22 12.26C22 6.58 17.52 2 12 2Z" />
    </svg>
  );
}

function LinkedInSvg({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M4.98 3.5C4.98 4.88 3.86 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5ZM.3 8.1h4.4V23H.3V8.1ZM8.1 8.1h4.22v2.04h.06c.59-1.12 2.03-2.3 4.18-2.3 4.47 0 5.29 2.94 5.29 6.76V23h-4.4v-7.45c0-1.78-.03-4.07-2.48-4.07-2.48 0-2.86 1.94-2.86 3.94V23H8.1V8.1Z" />
    </svg>
  );
}

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 bg-slate-950 py-8">
      <div className="container-custom flex flex-col items-center justify-between gap-5 text-center sm:flex-row sm:text-left">
        <div>
          <p className="text-lg font-bold text-white">Harshrajsinh Vaghela</p>
          <p className="mt-1 text-sm text-slate-400">MERN Stack Developer</p>
        </div>

        <p className="text-sm text-slate-500">
          © {year} Harshrajsinh Vaghela. All rights reserved.
        </p>

        <div className="flex gap-3">
          <a
            href="https://github.com/harshrajsinhvaghela7586"
            aria-label="GitHub"
            className="rounded-full border border-white/10 p-2 text-slate-400 transition hover:border-cyan-300 hover:text-cyan-300"
          >
            <GitHubSvg size={18} />
          </a>

          <a
            href="https://www.linkedin.com/in/harshrajsinh-vaghela-a38bba300/"
            aria-label="LinkedIn"
            className="rounded-full border border-white/10 p-2 text-slate-400 transition hover:border-cyan-300 hover:text-cyan-300"
          >
            <LinkedInSvg size={18} />
          </a>
        </div>
      </div>
    </footer>
  );
}
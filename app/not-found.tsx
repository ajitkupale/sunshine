import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="text-center">
        <h1
          className="text-8xl font-extrabold mb-4"
          style={{
            fontFamily: "Figtree, sans-serif",
            backgroundImage: "linear-gradient(135deg, var(--color-primary), var(--color-cta))",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          404
        </h1>
        <h2
          className="text-2xl font-bold mb-3"
          style={{ fontFamily: "Figtree, sans-serif", color: "var(--color-text)" }}
        >
          Page Not Found
        </h2>
        <p
          className="text-base mb-8"
          style={{ color: "var(--color-text-muted)", fontFamily: "Noto Sans, sans-serif" }}
        >
          The page you are looking for doesn&apos;t exist or has been moved.
        </p>
        <Link
          href="/"
          className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl font-semibold text-white cursor-pointer transition-all duration-200 hover:-translate-y-0.5"
          style={{
            background: "linear-gradient(135deg, var(--color-cta), #047857)",
            fontFamily: "Figtree, sans-serif",
          }}
        >
          Return to Homepage
        </Link>
      </div>
    </div>
  );
}

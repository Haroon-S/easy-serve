import Link from "next/link";

export function Header() {
  return (
    <header className="bg-green-900 text-white py-4 shadow">
      <div className="container mx-auto flex justify-between items-center px-4">
        <div className="flex items-center gap-2">
          <span className="font-bold text-lg">🍴 Restaurant</span>
        </div>
        <nav className="flex gap-6 font-medium">
          <Link href="/">Home</Link>
          <Link href="/register">Register</Link>
          <Link href="/login">Login</Link>
        </nav>
      </div>
    </header>
  );
}

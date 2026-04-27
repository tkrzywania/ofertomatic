import Link from "next/link"

export function PageHeader() {
  return (
    <header className="flex items-center justify-between px-6 py-4 max-w-6xl mx-auto">
      <Link href="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
        <img
          src="/growth-icon.png"
          alt="Ofertomatic logo"
          width={32}
          height={32}
          className="dark:invert"
        />
        <span className="font-semibold text-lg">Ofertomatic</span>
      </Link>
      <Link
        href="/"
        className="text-sm text-muted-foreground hover:text-foreground transition-colors"
      >
        Powrót do strony głównej
      </Link>
    </header>
  )
}

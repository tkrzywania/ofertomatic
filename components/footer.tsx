import Link from "next/link"

export function Footer() {
  return (
    <footer className="px-6 py-12 max-w-6xl mx-auto">
      <div className="flex flex-col md:flex-row gap-12 justify-between">
        {/* Brand */}
        <div className="space-y-4 max-w-xs">
          <div className="flex items-center gap-2">
            <img
              src="/growth-icon.png"
              alt="Ofertomatic logo"
              width={24}
              height={24}
              className="dark:invert"
            />
            <span className="font-semibold text-lg">Ofertomatic</span>
          </div>
          <p className="text-muted-foreground text-sm leading-relaxed">
            Twórz profesjonalne oferty nawet dla złożonych projektów w kilka
            chwil, zarządzaj zmianami bez stresu, dostarczaj przejrzyste
            rozliczenia i kontroluj zyski z precyzją.
          </p>
        </div>

        {/* Information */}
        <div className="space-y-4">
          <h3 className="font-semibold">Informacje</h3>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li>
              <Link href="/regulamin" className="hover:text-foreground transition-colors">
                Regulamin
              </Link>
            </li>
            <li>
              <Link href="/polityka-prywatnosci" className="hover:text-foreground transition-colors">
                Polityka Prywatności
              </Link>
            </li>
            <li>
              <Link href="/polityka-google-api" className="hover:text-foreground transition-colors">
                Polityka Usług API Google
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div className="space-y-4">
          <h3 className="font-semibold">Kontakt</h3>
          <div className="space-y-2">
            <a
              href="tel:+48694192834"
              className="inline-block border border-border rounded-full px-4 py-2 text-sm text-muted-foreground hover:text-foreground hover:border-foreground transition-colors"
            >
              694 192 834
            </a>
            <br />
            <a
              href="mailto:pomoc@ofertomatic.pl"
              className="inline-block border border-border rounded-full px-4 py-2 text-sm text-muted-foreground hover:text-foreground hover:border-foreground transition-colors"
            >
              pomoc@ofertomatic.pl
            </a>
          </div>
        </div>
      </div>

      <div className="mt-12 pt-6 border-t border-border">
        <p className="text-sm text-muted-foreground">
          &copy; 2025 Ofertomatic.pl Wszelkie prawa zastrzeżone
        </p>
      </div>
    </footer>
  )
}

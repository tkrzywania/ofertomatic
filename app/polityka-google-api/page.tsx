import { PageHeader } from "@/components/page-header"
import { Footer } from "@/components/footer"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Polityka Usług API Google | Ofertomatic",
  description: "Polityka korzystania z usług API Google w serwisie Ofertomatic.pl",
}

export default function PolitykaGoogleApiPage() {
  return (
    <main className="min-h-screen">
      <PageHeader />
      <article className="px-6 py-12 max-w-4xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold mb-8">Polityka Usług API Google</h1>
        <p className="text-muted-foreground mb-8">
          Ostatnia aktualizacja: 27 kwietnia 2026
        </p>

        <div className="prose prose-neutral dark:prose-invert max-w-none space-y-8">
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold">1. Wprowadzenie</h2>
            <p className="text-muted-foreground leading-relaxed">
              Ofertomatic korzysta z usług API Google w celu zapewnienia dodatkowych 
              funkcjonalności dla naszych Użytkowników. Niniejsza polityka opisuje, 
              w jaki sposób wykorzystujemy te usługi i jak przetwarzamy dane uzyskane 
              za ich pośrednictwem.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold">2. Usługi Google API</h2>
            <p className="text-muted-foreground leading-relaxed">
              W naszym Serwisie możemy korzystać z następujących usług Google:
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li><strong className="text-foreground">Google OAuth 2.0</strong> - uwierzytelnianie i logowanie użytkowników</li>
              <li><strong className="text-foreground">Google Drive API</strong> - przechowywanie i synchronizacja dokumentów</li>
              <li><strong className="text-foreground">Google Sheets API</strong> - integracja z arkuszami kalkulacyjnymi</li>
              <li><strong className="text-foreground">Google Calendar API</strong> - zarządzanie terminami i harmonogramami</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold">3. Zakres dostępu do danych</h2>
            <p className="text-muted-foreground leading-relaxed">
              Podczas korzystania z usług Google API prosimy o dostęp wyłącznie do danych 
              niezbędnych do świadczenia naszych usług. Zakres dostępu obejmuje:
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li>Podstawowe informacje profilowe (imię, adres email)</li>
              <li>Dostęp do plików utworzonych przez naszą aplikację</li>
              <li>Możliwość tworzenia i edycji dokumentów w imieniu użytkownika</li>
            </ul>
            <p className="text-muted-foreground leading-relaxed">
              Nie żądamy dostępu do danych wykraczających poza niezbędny zakres.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold">4. Wykorzystanie danych</h2>
            <p className="text-muted-foreground leading-relaxed">
              Dane uzyskane za pośrednictwem usług Google API wykorzystujemy wyłącznie w celu:
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li>Uwierzytelnienia użytkownika w naszym Serwisie</li>
              <li>Synchronizacji dokumentów i wycen między Ofertomatic a usługami Google</li>
              <li>Eksportu raportów i dokumentów do formatu Google Sheets</li>
              <li>Integracji kalendarza z harmonogramem projektów</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold">5. Przechowywanie danych</h2>
            <p className="text-muted-foreground leading-relaxed">
              Tokeny dostępu do usług Google przechowujemy w bezpieczny sposób 
              i wykorzystujemy wyłącznie do celów określonych w niniejszej polityce. 
              Nie udostępniamy tokenów ani danych uzyskanych z usług Google osobom trzecim.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Możesz w każdej chwili odwołać dostęp naszej aplikacji do swoich danych Google, 
              odwiedzając stronę{" "}
              <a 
                href="https://myaccount.google.com/permissions" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                ustawień konta Google
              </a>.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold">6. Zgodność z politykami Google</h2>
            <p className="text-muted-foreground leading-relaxed">
              Korzystanie z usług Google API w Ofertomatic odbywa się zgodnie z:
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li>
                <a 
                  href="https://developers.google.com/terms/api-services-user-data-policy" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  Google API Services User Data Policy
                </a>
              </li>
              <li>
                <a 
                  href="https://policies.google.com/privacy" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  Polityką prywatności Google
                </a>
              </li>
              <li>
                <a 
                  href="https://policies.google.com/terms" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  Warunkami korzystania z usług Google
                </a>
              </li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold">7. Ograniczone wykorzystanie</h2>
            <p className="text-muted-foreground leading-relaxed">
              Ofertomatic przestrzega wymogów ograniczonego wykorzystania danych 
              Google (Limited Use Requirements). Oznacza to, że:
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li>Wykorzystujemy dane tylko do zapewnienia funkcjonalności widocznych dla użytkownika</li>
              <li>Nie przekazujemy danych osobom trzecim (z wyjątkiem sytuacji wymaganych prawem)</li>
              <li>Nie wykorzystujemy danych do celów reklamowych</li>
              <li>Nie wykorzystujemy danych do tworzenia profili użytkowników niezwiązanych z usługą</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold">8. Bezpieczeństwo</h2>
            <p className="text-muted-foreground leading-relaxed">
              Stosujemy odpowiednie środki bezpieczeństwa w celu ochrony danych 
              uzyskanych z usług Google API, w tym:
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li>Szyfrowanie danych podczas transmisji (HTTPS/TLS)</li>
              <li>Bezpieczne przechowywanie tokenów dostępu</li>
              <li>Regularne audyty bezpieczeństwa</li>
              <li>Ograniczony dostęp do systemów przechowujących dane</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold">9. Kontakt</h2>
            <p className="text-muted-foreground leading-relaxed">
              W przypadku pytań dotyczących wykorzystania usług Google API w Ofertomatic, 
              prosimy o kontakt:
            </p>
            <ul className="list-none space-y-2 text-muted-foreground">
              <li>Email: <a href="mailto:pomoc@ofertomatic.pl" className="text-primary hover:underline">pomoc@ofertomatic.pl</a></li>
              <li>Telefon: <a href="tel:+48694192834" className="text-primary hover:underline">694 192 834</a></li>
            </ul>
          </section>
        </div>
      </article>
      <Footer />
    </main>
  )
}

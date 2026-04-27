import { PageHeader } from "@/components/page-header"
import { Footer } from "@/components/footer"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Polityka Prywatności | Ofertomatic",
  description: "Polityka prywatności serwisu Ofertomatic.pl - informacje o przetwarzaniu danych osobowych",
}

export default function PolitykaPrywatnosciPage() {
  return (
    <main className="min-h-screen">
      <PageHeader />
      <article className="px-6 py-12 max-w-4xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold mb-8">Polityka Prywatności</h1>
        <p className="text-muted-foreground mb-8">
          Ostatnia aktualizacja: 27 kwietnia 2026
        </p>

        <div className="prose prose-neutral dark:prose-invert max-w-none space-y-8">
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold">1. Administrator danych</h2>
            <p className="text-muted-foreground leading-relaxed">
              Administratorem Twoich danych osobowych jest Ofertomatic z siedzibą w Polsce. 
              Dokładamy wszelkich starań, aby Twoje dane były przetwarzane w sposób bezpieczny 
              i zgodny z obowiązującymi przepisami, w tym z Rozporządzeniem Ogólnym o Ochronie 
              Danych (RODO).
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold">2. Jakie dane zbieramy</h2>
            <p className="text-muted-foreground leading-relaxed">
              W ramach korzystania z naszego Serwisu możemy zbierać następujące dane:
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li><strong className="text-foreground">Dane identyfikacyjne</strong> - imię, nazwisko, adres email, numer telefonu</li>
              <li><strong className="text-foreground">Dane firmowe</strong> - nazwa firmy, NIP, adres siedziby</li>
              <li><strong className="text-foreground">Dane techniczne</strong> - adres IP, typ przeglądarki, informacje o urządzeniu</li>
              <li><strong className="text-foreground">Dane o aktywności</strong> - informacje o sposobie korzystania z Serwisu</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold">3. Cele przetwarzania danych</h2>
            <p className="text-muted-foreground leading-relaxed">
              Twoje dane przetwarzamy w następujących celach:
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li>Świadczenie usług dostępnych w Serwisie</li>
              <li>Obsługa zapytań i komunikacja z Użytkownikami</li>
              <li>Doskonalenie i rozwój Serwisu</li>
              <li>Wypełnianie obowiązków prawnych</li>
              <li>Marketing własnych produktów i usług (za zgodą Użytkownika)</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold">4. Podstawy prawne przetwarzania</h2>
            <p className="text-muted-foreground leading-relaxed">
              Przetwarzamy Twoje dane na podstawie:
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li>Wykonania umowy (art. 6 ust. 1 lit. b RODO)</li>
              <li>Prawnie uzasadnionego interesu administratora (art. 6 ust. 1 lit. f RODO)</li>
              <li>Twojej zgody (art. 6 ust. 1 lit. a RODO)</li>
              <li>Obowiązku prawnego (art. 6 ust. 1 lit. c RODO)</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold">5. Okres przechowywania danych</h2>
            <p className="text-muted-foreground leading-relaxed">
              Twoje dane przechowujemy przez okres niezbędny do realizacji celów, dla których 
              zostały zebrane, lub do momentu wycofania zgody. Dane związane z umową 
              przechowujemy przez okres jej trwania oraz przez czas wymagany przepisami prawa.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold">6. Twoje prawa</h2>
            <p className="text-muted-foreground leading-relaxed">
              Przysługują Ci następujące prawa:
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li>Prawo dostępu do swoich danych</li>
              <li>Prawo do sprostowania danych</li>
              <li>Prawo do usunięcia danych (&quot;prawo do bycia zapomnianym&quot;)</li>
              <li>Prawo do ograniczenia przetwarzania</li>
              <li>Prawo do przenoszenia danych</li>
              <li>Prawo do sprzeciwu</li>
              <li>Prawo do wycofania zgody w dowolnym momencie</li>
              <li>Prawo do wniesienia skargi do organu nadzorczego (PUODO)</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold">7. Pliki cookies</h2>
            <p className="text-muted-foreground leading-relaxed">
              Nasz Serwis wykorzystuje pliki cookies w celu zapewnienia prawidłowego 
              funkcjonowania, analizy ruchu oraz personalizacji treści. Możesz zarządzać 
              ustawieniami cookies w swojej przeglądarce.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Używamy następujących rodzajów plików cookies:
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li><strong className="text-foreground">Niezbędne</strong> - wymagane do prawidłowego działania Serwisu</li>
              <li><strong className="text-foreground">Analityczne</strong> - pomagają nam zrozumieć, jak użytkownicy korzystają z Serwisu</li>
              <li><strong className="text-foreground">Funkcjonalne</strong> - umożliwiają zapamiętanie preferencji użytkownika</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold">8. Bezpieczeństwo danych</h2>
            <p className="text-muted-foreground leading-relaxed">
              Stosujemy odpowiednie środki techniczne i organizacyjne w celu ochrony 
              Twoich danych przed nieuprawnionym dostępem, utratą lub zniszczeniem. 
              Korzystamy z szyfrowania SSL, regularnych kopii zapasowych oraz 
              kontroli dostępu.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold">9. Kontakt</h2>
            <p className="text-muted-foreground leading-relaxed">
              W sprawach związanych z ochroną danych osobowych możesz się z nami skontaktować:
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

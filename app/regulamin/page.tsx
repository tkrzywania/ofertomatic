import { PageHeader } from "@/components/page-header"
import { Footer } from "@/components/footer"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Regulamin | Ofertomatic",
  description: "Regulamin korzystania z serwisu Ofertomatic.pl",
}

export default function RegulaminPage() {
  return (
    <main className="min-h-screen">
      <PageHeader />
      <article className="px-6 py-12 max-w-4xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold mb-8">Regulamin</h1>
        <p className="text-muted-foreground mb-8">
          Ostatnia aktualizacja: 27 kwietnia 2026
        </p>

        <div className="prose prose-neutral dark:prose-invert max-w-none space-y-8">
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold">1. Postanowienia ogólne</h2>
            <p className="text-muted-foreground leading-relaxed">
              Niniejszy Regulamin określa zasady korzystania z serwisu Ofertomatic.pl, 
              którego właścicielem jest Ofertomatic z siedzibą w Polsce. Serwis umożliwia 
              tworzenie profesjonalnych wycen, rozliczeń powykonawczych oraz śledzenie 
              zysków w branży Smart Home i elektrotechnicznej.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Korzystanie z serwisu oznacza akceptację niniejszego Regulaminu w całości. 
              Jeśli nie zgadzasz się z którymkolwiek z postanowień, prosimy o niekorzystanie 
              z naszych usług.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold">2. Definicje</h2>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li><strong className="text-foreground">Serwis</strong> - aplikacja internetowa Ofertomatic dostępna pod adresem ofertomatic.pl</li>
              <li><strong className="text-foreground">Użytkownik</strong> - osoba fizyczna lub prawna korzystająca z Serwisu</li>
              <li><strong className="text-foreground">Konto</strong> - indywidualne konto Użytkownika w Serwisie</li>
              <li><strong className="text-foreground">Usługi</strong> - funkcjonalności udostępniane przez Serwis</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold">3. Zasady korzystania z Serwisu</h2>
            <p className="text-muted-foreground leading-relaxed">
              Użytkownik zobowiązuje się do korzystania z Serwisu zgodnie z obowiązującym 
              prawem, niniejszym Regulaminem oraz dobrymi obyczajami. Zabronione jest 
              wykorzystywanie Serwisu w sposób mogący naruszyć prawa osób trzecich lub 
              zakłócić prawidłowe funkcjonowanie Serwisu.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Użytkownik ponosi pełną odpowiedzialność za treści wprowadzane do Serwisu 
              oraz za działania podejmowane za pośrednictwem swojego Konta.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold">4. Rejestracja i Konto</h2>
            <p className="text-muted-foreground leading-relaxed">
              Rejestracja w Serwisie wymaga podania prawdziwych i aktualnych danych. 
              Użytkownik jest zobowiązany do zachowania poufności danych logowania 
              i nieudostępniania ich osobom trzecim.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Ofertomatic zastrzega sobie prawo do zawieszenia lub usunięcia Konta 
              w przypadku naruszenia postanowień Regulaminu.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold">5. Opłaty i płatności</h2>
            <p className="text-muted-foreground leading-relaxed">
              Szczegółowe informacje dotyczące opłat za korzystanie z Serwisu 
              dostępne są w aktualnym cenniku. Ofertomatic zastrzega sobie prawo 
              do zmiany cennika z odpowiednim wyprzedzeniem.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold">6. Odpowiedzialność</h2>
            <p className="text-muted-foreground leading-relaxed">
              Ofertomatic dokłada wszelkich starań, aby Serwis działał prawidłowo 
              i nieprzerwanie. Nie ponosimy jednak odpowiedzialności za przerwy 
              w dostępie do Serwisu wynikające z przyczyn niezależnych od nas, 
              w tym awarii technicznych, działań osób trzecich lub siły wyższej.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold">7. Postanowienia końcowe</h2>
            <p className="text-muted-foreground leading-relaxed">
              Ofertomatic zastrzega sobie prawo do zmiany niniejszego Regulaminu. 
              O wszelkich zmianach Użytkownicy będą informowani z odpowiednim wyprzedzeniem.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              W sprawach nieuregulowanych niniejszym Regulaminem zastosowanie mają 
              przepisy prawa polskiego. Wszelkie spory będą rozstrzygane przez sąd 
              właściwy dla siedziby Ofertomatic.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold">8. Kontakt</h2>
            <p className="text-muted-foreground leading-relaxed">
              W przypadku pytań dotyczących Regulaminu prosimy o kontakt:
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

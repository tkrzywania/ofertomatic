"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Mail, Loader2, ArrowRight } from "lucide-react"

export function Waitlist() {
  const [email, setEmail] = useState("")
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus("loading")

    try {
      const response = await fetch(
        "https://hook.eu2.make.com/vrl320fh29ll1imlaywdo2ary3tdn2uq",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ "email-waitlist": email }),
        }
      )

      if (response.ok) {
        setStatus("success")
        setEmail("")
      } else {
        setStatus("error")
      }
    } catch {
      setStatus("error")
    }
  }

  if (status === "success") {
    return (
      <section id="waitlist" className="bg-muted py-16 px-6">
        <div className="max-w-xl mx-auto text-center space-y-6">
          <h2 className="text-2xl md:text-3xl font-bold text-green-600">
            Sukces! 🤝
          </h2>
          <p className="text-lg">
            Dziękujemy! Dodano Cię do listy oczekujących! 🎉 Sprawdź skrzynkę pocztową, czy otrzymałeś od nas wiadomość! 😊
          </p>
        </div>
      </section>
    )
  }

  return (
    <section id="waitlist" className="bg-muted py-16 px-6">
      <div className="max-w-xl mx-auto text-center space-y-6">
        <h2 className="text-2xl md:text-3xl font-bold">
          Dolacz do listy oczekujących!
        </h2>
        {status === "error" && (
          <div className="text-red-600 text-sm">
            Błąd! 😢 Coś poszło nie tak podczas dołączania do listy oczekujących. Proszę spróbuj ponownie lub napisz do nas na adres{" "}
            <a href="mailto:pomoc@ofertomatic.pl" className="underline">
              pomoc@ofertomatic.pl
            </a>
          </div>
        )}
        <form
          onSubmit={handleSubmit}
          className="flex flex-col sm:flex-row gap-3 justify-center"
        >
          <div className="relative flex-1 max-w-sm">
            <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
            <Input
              type="email"
              placeholder="twoj.adres@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="pl-10 h-12 bg-background"
              required
              disabled={status === "loading"}
            />
          </div>
          <Button type="submit" className="h-12 px-8 rounded-lg group" disabled={status === "loading"}>
            {status === "loading" ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Wysyłanie...
              </>
            ) : (
              <>
                Dołączam
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </>
            )}
          </Button>
        </form>
      </div>
    </section>
  )
}

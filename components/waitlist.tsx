"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Mail } from "lucide-react"

export function Waitlist() {
  const [email, setEmail] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle waitlist signup
    console.log("Waitlist signup:", email)
  }

  return (
    <section id="waitlist" className="bg-muted py-16 px-6">
      <div className="max-w-xl mx-auto text-center space-y-6">
        <h2 className="text-2xl md:text-3xl font-bold">
          Dolacz do listy oczekujących!
        </h2>
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
            />
          </div>
          <Button type="submit" className="h-12 px-8 rounded-lg">
            Dołączam
          </Button>
        </form>
      </div>
    </section>
  )
}

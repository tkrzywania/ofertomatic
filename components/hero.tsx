"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Mail } from "lucide-react"

export function Hero() {
  const [email, setEmail] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle waitlist signup
    console.log("Waitlist signup:", email)
  }

  return (
    <section className="px-6 py-12 max-w-6xl mx-auto">
      <div className="flex flex-col lg:flex-row items-center gap-12">
        <div className="flex-1 space-y-6">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight text-balance">
            Aplikacja do tworzenia wycen, rozliczeń powykonawczych i śledzenia
            zysków{" "}
            <span className="text-primary">
              w branżach elektrotechnicznej i HVAC
            </span>
          </h1>
          <p className="text-muted-foreground text-lg max-w-xl">
            Twórz profesjonalne oferty nawet dla złożonych projektów w kilka
            chwil, zarządzaj zmianami bez stresu, dostarczaj przejrzyste
            rozliczenia i kontroluj zyski z precyzją. Dołącz teraz do listy
            oczekujących!
          </p>
          <form onSubmit={handleSubmit} className="space-y-3">
            <div className="flex gap-2 max-w-md">
              <div className="relative flex-1">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                <Input
                  type="email"
                  placeholder="twoj.adres@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="pl-10 h-12"
                  required
                />
              </div>
              <Button type="submit" className="h-12 px-6 rounded-lg">
                Dołączam
              </Button>
            </div>
            <p className="text-sm text-muted-foreground">
              Kliknij, dołącz do listy oczekujących i zacznij rewolucję w swoim
              biznesie – tym samym akceptując nasz{" "}
              <a href="#" className="underline hover:text-foreground">
                regulamin
              </a>
              .
            </p>
          </form>
        </div>
        <div className="flex-1">
          <HeroIllustration />
        </div>
      </div>
    </section>
  )
}

function HeroIllustration() {
  return (
    <div className="relative w-full max-w-lg mx-auto">
      {/* Background blob */}
      <div className="absolute inset-0 bg-muted rounded-full scale-110 -z-10" />

      {/* Laptop */}
      <svg viewBox="0 0 400 300" className="w-full h-auto">
        {/* Laptop screen */}
        <rect
          x="60"
          y="30"
          width="280"
          height="180"
          rx="8"
          fill="#1e3a5f"
          stroke="#334155"
          strokeWidth="2"
        />

        {/* Screen content - document preview */}
        <rect x="80" y="50" width="140" height="140" rx="4" fill="#fff" />
        <rect x="90" y="60" width="60" height="8" rx="2" fill="#e2e8f0" />
        <rect x="90" y="75" width="100" height="6" rx="2" fill="#e2e8f0" />
        <rect x="90" y="88" width="80" height="6" rx="2" fill="#e2e8f0" />
        <rect x="90" y="101" width="110" height="6" rx="2" fill="#e2e8f0" />
        <rect x="90" y="120" width="60" height="20" rx="4" fill="#3b82f6" />
        <rect x="90" y="150" width="40" height="30" rx="4" fill="#dbeafe" />
        <rect x="135" y="150" width="40" height="30" rx="4" fill="#dbeafe" />

        {/* Sidebar */}
        <rect x="230" y="50" width="90" height="140" rx="4" fill="#0f172a" />
        <rect x="240" y="65" width="70" height="8" rx="2" fill="#475569" />
        <rect x="240" y="85" width="50" height="6" rx="2" fill="#334155" />
        <rect x="240" y="98" width="60" height="6" rx="2" fill="#334155" />
        <rect x="240" y="111" width="45" height="6" rx="2" fill="#334155" />
        <rect x="240" y="130" width="70" height="25" rx="4" fill="#3b82f6" />
        <text
          x="275"
          y="147"
          fill="#fff"
          fontSize="10"
          textAnchor="middle"
          fontWeight="500"
        >
          Wyślij
        </text>

        {/* Laptop base */}
        <path
          d="M40 210 L60 210 L60 212 L340 212 L340 210 L360 210 L370 230 L30 230 Z"
          fill="#475569"
        />
        <ellipse cx="200" cy="221" rx="40" ry="3" fill="#334155" />

        {/* Clock decoration */}
        <circle
          cx="350"
          cy="70"
          r="28"
          fill="#ef4444"
          stroke="#dc2626"
          strokeWidth="3"
        />
        <circle cx="350" cy="70" r="22" fill="#fff" />
        <line
          x1="350"
          y1="70"
          x2="350"
          y2="55"
          stroke="#1e293b"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <line
          x1="350"
          y1="70"
          x2="362"
          y2="70"
          stroke="#1e293b"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <circle cx="350" cy="70" r="3" fill="#1e293b" />

        {/* Pencil decoration */}
        <g transform="translate(320, 160) rotate(-30)">
          <rect x="0" y="0" width="60" height="12" rx="2" fill="#fbbf24" />
          <polygon points="60,0 70,6 60,12" fill="#f8e3c5" />
          <rect x="0" y="0" width="8" height="12" rx="2" fill="#dc2626" />
        </g>

        {/* Small decorations */}
        <circle cx="50" cy="100" r="6" fill="#3b82f6" opacity="0.6" />
        <circle cx="45" cy="140" r="4" fill="#ef4444" opacity="0.6" />
      </svg>
    </div>
  )
}

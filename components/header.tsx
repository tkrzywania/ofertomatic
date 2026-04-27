"use client"

import { Button } from "@/components/ui/button"

export function Header() {
  const scrollToWaitlist = () => {
    const element = document.getElementById("waitlist")
    element?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <header className="flex items-center justify-between px-6 py-4 max-w-6xl mx-auto">
      <div className="flex items-center gap-2">
        <img
          src="/growth-icon.png"
          alt="Ofertomatic logo"
          width={32}
          height={32}
          className="dark:invert"
        />
        <span className="font-semibold text-lg">Ofertomatic</span>
      </div>
      <Button onClick={scrollToWaitlist} className="rounded-full px-6">
        Dołącz do listy oczekujących
      </Button>
    </header>
  )
}

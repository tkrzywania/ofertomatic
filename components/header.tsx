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
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          className="text-foreground"
        >
          <circle cx="12" cy="6" r="2" fill="currentColor" />
          <circle cx="6" cy="12" r="2" fill="currentColor" />
          <circle cx="18" cy="12" r="2" fill="currentColor" />
          <circle cx="12" cy="18" r="2" fill="currentColor" />
          <path
            d="M12 8v2M12 14v2M8 12h-2M16 12h2"
            stroke="currentColor"
            strokeWidth="1.5"
          />
        </svg>
        <span className="font-semibold text-lg">Ofertomatic</span>
      </div>
      <Button onClick={scrollToWaitlist} className="rounded-full px-6">
        Dołącz do listy oczekujących
      </Button>
    </header>
  )
}

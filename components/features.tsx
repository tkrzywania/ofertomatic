import { ChevronRight } from "lucide-react"

const features = [
  {
    tagline: "Wyceny, które męczą i odstraszają?",
    title: "Profesjonalne wyceny w mgnieniu oka",
    description:
      "Twórz perfekcyjne oferty bez wysiłku, zachwycając klientów szybkością i precyzją.",
    illustration: "quotes",
    reverse: false,
  },
  {
    tagline: "Modyfikacje ofert zabierają czas?",
    title: "Zmiany w wycenie? Pełna kontrola, zero chaosu.",
    description:
      "Zarządzaj modyfikacjami łatwo i skutecznie, mając wszystko w ryzach.",
    illustration: "modifications",
    reverse: true,
  },
  {
    tagline: "Chaos w zmianach = sfrustrowani klienci",
    title: "Klarowne rozliczenia od ręki – zero pytań, pełna satysfakcja.",
    description:
      "Dostarczaj przejrzyste i jednocześnie szczegółowe rozliczenia etapowe oraz końcowe, budując zaufanie bez zbędnych wyjaśnień.",
    illustration: "settlements",
    reverse: false,
  },
  {
    tagline: "Marża ginie w gąszczu zmian?",
    title: "Zyski pod lupą – zawsze wiesz, ile zarabiasz.",
    description:
      "Śledź marże z chirurgiczną precyzją, nawet przy wielu projektach i ciągłych zmianach.",
    illustration: "margins",
    reverse: true,
  },
]

export function Features() {
  return (
    <section className="py-16">
      <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center mb-16 px-6 text-balance">
        Ofertomatic – Twój klucz do prostszego biznesu
      </h2>

      <div className="space-y-24">
        {features.map((feature, index) => (
          <FeatureBlock key={index} {...feature} />
        ))}
      </div>
    </section>
  )
}

function FeatureBlock({
  tagline,
  title,
  description,
  illustration,
  reverse,
}: {
  tagline: string
  title: string
  description: string
  illustration: string
  reverse: boolean
}) {
  return (
    <div
      className={`flex flex-col ${reverse ? "lg:flex-row-reverse" : "lg:flex-row"} items-center gap-12 px-6 max-w-6xl mx-auto`}
    >
      <div className="flex-1 space-y-4">
        <p className="text-primary font-medium">{tagline}</p>
        <h3 className="text-2xl md:text-3xl font-bold text-balance">{title}</h3>
        <p className="text-muted-foreground text-lg">{description}</p>
      </div>
      <div className="flex-1 flex justify-center">
        <FeatureIllustration type={illustration} />
      </div>
    </div>
  )
}

function FeatureIllustration({ type }: { type: string }) {
  if (type === "quotes") {
    return (
      <div className="relative w-full max-w-sm">
        <div className="absolute inset-0 bg-muted rounded-2xl -z-10 scale-105" />
        <svg viewBox="0 0 300 200" className="w-full h-auto">
          {/* Document */}
          <rect
            x="30"
            y="20"
            width="160"
            height="160"
            rx="8"
            fill="#fff"
            stroke="#e2e8f0"
            strokeWidth="2"
          />
          <rect x="50" y="40" width="80" height="10" rx="2" fill="#e2e8f0" />
          <rect x="50" y="60" width="120" height="6" rx="2" fill="#f1f5f9" />
          <rect x="50" y="75" width="100" height="6" rx="2" fill="#f1f5f9" />
          <rect x="50" y="90" width="110" height="6" rx="2" fill="#f1f5f9" />
          <rect x="50" y="115" width="60" height="20" rx="4" fill="#3b82f6" />
          <rect x="50" y="145" width="50" height="25" rx="4" fill="#dbeafe" />
          <rect x="110" y="145" width="50" height="25" rx="4" fill="#dbeafe" />

          {/* Clock */}
          <circle cx="240" cy="50" r="30" fill="#ef4444" />
          <circle cx="240" cy="50" r="24" fill="#fff" />
          <line
            x1="240"
            y1="50"
            x2="240"
            y2="35"
            stroke="#1e293b"
            strokeWidth="2.5"
            strokeLinecap="round"
          />
          <line
            x1="240"
            y1="50"
            x2="255"
            y2="50"
            stroke="#1e293b"
            strokeWidth="2.5"
            strokeLinecap="round"
          />
          <circle cx="240" cy="50" r="3" fill="#1e293b" />

          {/* Arrow */}
          <g transform="translate(210, 120)">
            <circle cx="30" cy="30" r="25" fill="#f1f5f9" />
            <ChevronRight className="w-8 h-8" x="16" y="16" stroke="#64748b" />
          </g>
        </svg>
      </div>
    )
  }

  if (type === "modifications") {
    return (
      <div className="relative w-full max-w-sm">
        <div className="absolute inset-0 bg-muted rounded-2xl -z-10 scale-105" />
        <svg viewBox="0 0 300 200" className="w-full h-auto">
          {/* Monitor */}
          <rect
            x="50"
            y="20"
            width="200"
            height="130"
            rx="8"
            fill="#1e3a5f"
            stroke="#334155"
            strokeWidth="2"
          />

          {/* Screen content - checklist */}
          <rect x="70" y="40" width="160" height="90" rx="4" fill="#fff" />

          {/* Checklist items */}
          <rect x="85" y="55" width="16" height="16" rx="3" fill="#22c55e" />
          <path
            d="M88 63 L92 67 L98 58"
            stroke="#fff"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <rect x="110" y="57" width="100" height="8" rx="2" fill="#e2e8f0" />

          <rect x="85" y="80" width="16" height="16" rx="3" fill="#22c55e" />
          <path
            d="M88 88 L92 92 L98 83"
            stroke="#fff"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <rect x="110" y="82" width="80" height="8" rx="2" fill="#e2e8f0" />

          <rect
            x="85"
            y="105"
            width="16"
            height="16"
            rx="3"
            fill="#fff"
            stroke="#e2e8f0"
            strokeWidth="2"
          />
          <rect x="110" y="107" width="90" height="8" rx="2" fill="#e2e8f0" />

          {/* Monitor stand */}
          <rect x="135" y="150" width="30" height="10" fill="#475569" />
          <rect x="115" y="160" width="70" height="8" rx="2" fill="#334155" />

          {/* Pencil */}
          <g transform="translate(20, 100) rotate(-20)">
            <rect x="0" y="0" width="50" height="10" rx="2" fill="#fbbf24" />
            <polygon points="50,0 58,5 50,10" fill="#f8e3c5" />
            <rect x="0" y="0" width="6" height="10" rx="1" fill="#dc2626" />
          </g>

          {/* Small decorations */}
          <circle cx="270" cy="140" r="4" fill="#3b82f6" opacity="0.6" />
        </svg>
      </div>
    )
  }

  if (type === "settlements") {
    return (
      <div className="relative w-full max-w-sm">
        <svg viewBox="0 0 300 200" className="w-full h-auto">
          {/* Document stack */}
          <rect
            x="60"
            y="30"
            width="180"
            height="140"
            rx="8"
            fill="#f8fafc"
            stroke="#e2e8f0"
            strokeWidth="2"
          />
          <rect
            x="70"
            y="20"
            width="180"
            height="140"
            rx="8"
            fill="#fff"
            stroke="#e2e8f0"
            strokeWidth="2"
          />

          {/* Content */}
          <rect x="90" y="40" width="100" height="12" rx="2" fill="#e2e8f0" />
          <rect x="90" y="62" width="140" height="6" rx="2" fill="#f1f5f9" />
          <rect x="90" y="76" width="120" height="6" rx="2" fill="#f1f5f9" />
          <rect x="90" y="90" width="130" height="6" rx="2" fill="#f1f5f9" />

          {/* Price boxes */}
          <rect x="90" y="110" width="60" height="35" rx="4" fill="#dbeafe" />
          <text
            x="120"
            y="132"
            fill="#1e40af"
            fontSize="12"
            textAnchor="middle"
            fontWeight="600"
          >
            2,500 PLN
          </text>

          <rect x="160" y="110" width="60" height="35" rx="4" fill="#dcfce7" />
          <text
            x="190"
            y="132"
            fill="#166534"
            fontSize="12"
            textAnchor="middle"
            fontWeight="600"
          >
            +15%
          </text>
        </svg>
      </div>
    )
  }

  // margins
  return (
    <div className="relative w-full max-w-sm">
      <svg viewBox="0 0 300 200" className="w-full h-auto">
        {/* Chart background */}
        <rect
          x="40"
          y="30"
          width="220"
          height="140"
          rx="8"
          fill="#fff"
          stroke="#e2e8f0"
          strokeWidth="2"
        />

        {/* Grid lines */}
        <line
          x1="60"
          y1="60"
          x2="240"
          y2="60"
          stroke="#f1f5f9"
          strokeWidth="1"
        />
        <line
          x1="60"
          y1="90"
          x2="240"
          y2="90"
          stroke="#f1f5f9"
          strokeWidth="1"
        />
        <line
          x1="60"
          y1="120"
          x2="240"
          y2="120"
          stroke="#f1f5f9"
          strokeWidth="1"
        />
        <line
          x1="60"
          y1="150"
          x2="240"
          y2="150"
          stroke="#f1f5f9"
          strokeWidth="1"
        />

        {/* Bar chart */}
        <rect x="80" y="80" width="25" height="70" rx="4" fill="#3b82f6" />
        <rect x="120" y="60" width="25" height="90" rx="4" fill="#3b82f6" />
        <rect x="160" y="100" width="25" height="50" rx="4" fill="#3b82f6" />
        <rect x="200" y="50" width="25" height="100" rx="4" fill="#22c55e" />

        {/* Magnifying glass */}
        <circle
          cx="240"
          cy="45"
          r="25"
          fill="none"
          stroke="#64748b"
          strokeWidth="4"
        />
        <line
          x1="258"
          y1="63"
          x2="275"
          y2="80"
          stroke="#64748b"
          strokeWidth="4"
          strokeLinecap="round"
        />
        <circle cx="240" cy="45" r="18" fill="#dbeafe" opacity="0.5" />
      </svg>
    </div>
  )
}

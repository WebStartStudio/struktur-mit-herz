import Link from "next/link"
import { Button } from "@/components/ui/Button"

export default function Hero() {
  return (
    <section className="py-24 px-4 bg-gradient-to-b from-background to-white">
      <div className="max-w-4xl mx-auto text-center">

        <h1 className="text-5xl md:text-6xl font-bold mb-6 text-foreground">
          Struktur mit Herz
        </h1>

        <p className="text-xl md:text-2xl text-foreground/80 mb-10 max-w-2xl mx-auto">
          Finde deine innere Ruhe durch bewusste Organisation.
          Baue Struktur in dein Leben, deinen Haushalt und deinen Geist
          – mit Mitgefühl und kleinen Schritten.
        </p>

        <Link href="/steps">
          <Button size="lg">
            Jetzt anfangen
          </Button>
        </Link>

      </div>
    </section>
  )
}
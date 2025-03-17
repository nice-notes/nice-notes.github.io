import LetterForm from "@/components/letter-form"
import LetterDisplay from "@/components/letter-display"
import AboutSection from "@/components/about-section"
import FaqSection from "@/components/faq-section"
import ScrollToTopButton from "@/components/scroll-to-top-button"
import Navigation from "@/components/navigation"

export default function Home() {
  return (
    <main className="min-h-screen bg-[#f8f7f3] dark:bg-gray-950">
      {/* Navigation */}
      <Navigation />

      {/* Hero Section */}
      <section id="home" className="container mx-auto px-4 py-12 md:py-24 min-h-screen flex items-center">
        <div className="flex flex-col items-center text-center w-full">
          <h1 className="mb-6 text-4xl font-bold tracking-tight md:text-6xl">Nice Notes</h1>
          <p className="mb-10 max-w-2xl text-lg text-muted-foreground">
            Share anonymous words of kindness and read supportive messages from others. A little positivity goes a long
            way.
          </p>
          <LetterForm />
        </div>
      </section>

      {/* Section Divider */}
      <div className="h-16 bg-gradient-to-b from-transparent to-background"></div>

      {/* Letters Display Section */}
      <section id="notes" className="bg-background py-16">
        <div className="container mx-auto px-4">
          <h2 className="mb-8 text-center text-3xl font-bold">Recent Notes</h2>
          <LetterDisplay />
        </div>
      </section>

      {/* Section Divider */}
      <div className="h-16 bg-gradient-to-b from-background to-transparent"></div>

      {/* About Section */}
      <section id="about">
        <AboutSection />
      </section>

      {/* Section Divider */}
      <div className="h-16 bg-gradient-to-b from-transparent to-background"></div>

      {/* FAQ Section */}
      <section id="faq" className="bg-background">
        <FaqSection />
      </section>

      {/* Footer */}
      <footer className="border-t bg-background py-6 text-center text-sm text-muted-foreground">
        <div className="container mx-auto px-4">
          <p>© {new Date().getFullYear()} Nice Notes. Spread kindness everywhere.</p>
        </div>
      </footer>

      {/* Scroll to Top Button */}
      <ScrollToTopButton />
    </main>
  )
}


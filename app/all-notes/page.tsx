import LetterDisplay from "@/components/letter-display"
import { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"

export const metadata: Metadata = {
  title: "All Nice Notes",
  description: "Browse all the nice notes from our community",
}

export default function AllNotesPage() {
  return (
    <>
      <div className="fixed top-4 left-4 z-10">
        <Link href="/">
          <Button variant="outline" className="flex items-center gap-2 shadow-md bg-background">
            <ArrowLeft className="h-4 w-4" /> Back to Home
          </Button>
        </Link>
      </div>
      
      <div className="container py-8 px-4 mx-auto">
        <div className="mb-8 h-10">
          {/* Spacer to replace the position of the now-fixed button */}
        </div>
        
        <h1 className="text-3xl font-bold mb-8 text-center">All Nice Notes</h1>
        <p className="text-center mb-8 text-muted-foreground">
          Browse all the kind messages from our community
        </p>
        <LetterDisplay />
      </div>
    </>
  )
} 
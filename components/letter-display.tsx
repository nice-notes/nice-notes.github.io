"use client"

import { useState, useEffect } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogClose } from "@/components/ui/dialog"
import { X } from "lucide-react"
import { useIsMobile } from "@/hooks/use-mobile"

// Define the type for our letter data
interface Letter {
  id: number
  name: string
  message: string
  time: string
}

// Random rotation for sticky notes
const getRandomRotation = () => {
  // return Math.floor(Math.random() * 11) - 5 // Between -5 and 5 degrees
  return 0
}

// Random pastel colors for sticky notes
const stickyColors = [
  "bg-yellow-100 dark:bg-yellow-900",
  "bg-blue-100 dark:bg-blue-900",
  "bg-green-100 dark:bg-green-900",
  "bg-pink-100 dark:bg-pink-900",
  "bg-purple-100 dark:bg-purple-900",
]

const getRandomColor = () => {
  return stickyColors[Math.floor(Math.random() * stickyColors.length)]
}

export default function LetterDisplay({ limit }: { limit?: number }) {
  const [letters, setLetters] = useState<Letter[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [selectedLetter, setSelectedLetter] = useState<Letter | null>(null)
  const isMobile = useIsMobile()

  useEffect(() => {
    const fetchLetters = async () => {
      try {
        setLoading(true)
        const response = await fetch('https://nice-notes.chenyi.world/note/all')
        
        if (!response.ok) {
          throw new Error(`Failed to fetch letters: ${response.status}`)
        }
        
        const data = await response.json()
        setLetters(data)
      } catch (err) {
        console.error('Error fetching letters:', err)
        setError(err instanceof Error ? err.message : 'Failed to fetch letters')
      } finally {
        setLoading(false)
      }
    }

    fetchLetters()
  }, [])

  // Apply limit to letters if provided
  const displayedLetters = limit ? letters.slice(0, limit) : letters

  if (loading) {
    return <div className="text-center py-10">Loading nice notes...</div>
  }

  if (error) {
    return <div className="text-center py-10 text-red-500">Error: {error}</div>
  }

  return (
    <>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {displayedLetters.length === 0 ? (
          <div className="col-span-full text-center py-10">No notes found. Be the first to write one!</div>
        ) : (
          displayedLetters.map((letter) => {
            const rotation = getRandomRotation()
            const color = getRandomColor()

            return (
              <div
                key={letter.id}
                className={`${color} cursor-pointer rounded-md p-4 shadow-md transition-transform hover:scale-105`}
                style={{ transform: `rotate(${rotation}deg)` }}
                onClick={() => setSelectedLetter(letter)}
              >
                <p className="line-clamp-6 text-sm">
                  {letter.message.length > 300 ? letter.message.slice(0, 300) + "..." : letter.message}
                </p>
                <div className="mt-3 flex justify-between text-xs text-muted-foreground">
                  {letter.name && <p className="font-medium">- {letter.name}</p>}
                  <p className="ml-auto">{new Date(letter.time).toLocaleDateString()}</p>
                </div>
              </div>
            )
          })
        )}
      </div>

      <Dialog open={!!selectedLetter} onOpenChange={(open: boolean) => !open && setSelectedLetter(null)}>
        <DialogContent className={`${isMobile ? "w-[95%] max-w-[95%]" : "sm:max-w-md"} p-0 overflow-hidden`}>
          <DialogHeader className="p-4 border-b">
            <DialogTitle className="text-center">Nice Note</DialogTitle>
          </DialogHeader>
          <div className="p-4 max-h-[70vh] overflow-y-auto">
            <p className="whitespace-pre-wrap text-lg">{selectedLetter?.message}</p>
            <div className="mt-4 flex justify-between items-center text-sm text-muted-foreground">
              {selectedLetter?.name && <p className="font-medium">- {selectedLetter.name}</p>}
              <p className="ml-auto">Posted {selectedLetter && new Date(selectedLetter.time).toLocaleString()}</p>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  )
}


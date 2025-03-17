"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { toast } from "@/hooks/use-toast"

export default function LetterForm() {
  const [letter, setLetter] = useState("")
  const [name, setName] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    const trimmedLetter = letter.trim()

    if (trimmedLetter.length < 10) {
      toast({
        title: "Letter too short",
        description: "Please write at least 10 characters.",
        variant: "destructive",
      })
      return
    }

    setIsSubmitting(true)

    try {
      // Submit to the API endpoint
      const response = await fetch('https://nice-notes.chenyi.world/note', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: name.trim() || 'Anonymous',
          message: trimmedLetter.slice(0, 1000)
        }),
      })

      if (response.ok) {
        toast({
          title: "Letter submitted!",
          description: "Thanks! Your kind words will be visible after admin approval.",
          variant: "default",
          duration: 5000, // 5 seconds duration
        })
        setLetter("")
        setName("")
      } else {
        toast({
          title: "Submission failed",
          description: "There was an error submitting your note. Please try again.",
          variant: "destructive",
          duration: 5000, // 5 seconds duration
        })
      }
    } catch (error) {
      console.error("Error submitting note:", error);
      toast({
        title: "Submission failed",
        description: "There was an error submitting your note. Please try again.",
        variant: "destructive",
        duration: 5000, // 5 seconds duration
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="w-full max-w-md transition-all">
      <form onSubmit={handleSubmit} className="flex flex-col rounded-md bg-yellow-100 p-6 shadow-md dark:bg-yellow-900">
        <div className="mb-4">
          <input
            type="text"
            placeholder="Your name (optional)"
            className="w-full rounded border-none bg-yellow-50 p-2 text-base shadow-inner dark:bg-yellow-800/50 dark:text-yellow-50"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <p className="mt-1 text-xs text-muted-foreground">Leave blank to remain anonymous</p>
        </div>
        <Textarea
          placeholder="Write a supportive message here..."
          className="mb-4 min-h-[150px] border-none bg-yellow-50 text-lg shadow-inner dark:bg-yellow-800/50 dark:text-yellow-50"
          value={letter}
          onChange={(e) => setLetter(e.target.value)}
          maxLength={1000}
        />
        <div className="mb-4 text-right text-sm text-muted-foreground">{letter.length}/1000 characters</div>
        <Button
          type="submit"
          className="bg-yellow-500 text-yellow-950 hover:bg-yellow-600 dark:bg-yellow-600 dark:text-yellow-50 dark:hover:bg-yellow-500"
          disabled={isSubmitting}
        >
          {isSubmitting ? "Posting..." : "Post Note"}
        </Button>
      </form>
    </div>
  )
}


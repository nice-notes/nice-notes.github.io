"use client"

import LetterDisplay from "@/components/letter-display"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export default function RecentNotes() {
  return (
    <div className="py-8">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">Recent Notes</h2>
        <Link href="/all-notes">
          <Button variant="outline" className="flex items-center gap-2">
            View All <ArrowRight className="h-4 w-4" />
          </Button>
        </Link>
      </div>
      <LetterDisplay limit={4} />
    </div>
  )
} 
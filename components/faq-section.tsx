import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function FaqSection() {
  return (
    <section className="py-16 min-h-screen flex items-center">
      <div className="container mx-auto px-4">
        <h2 className="mb-8 text-center text-3xl font-bold">Frequently Asked Questions</h2>

        <div className="mx-auto max-w-3xl">
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger>What is the word limit for each letter?</AccordionTrigger>
              <AccordionContent>
                We will be placing a limit of 1,000 words for the letter.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2">
              <AccordionTrigger>What kind of language can be used in the letters?</AccordionTrigger>
              <AccordionContent>
                We encourage our writers to use appropriate language in their letters. There will be a process where letters have to be approved and any letter that does not meet this criteria will not be approved.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3">
              <AccordionTrigger>What should the letters talk about?</AccordionTrigger>
              <AccordionContent>
                The letters should share a message of hope, encouragement, and be uplifting. They are intended to make people feel better.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4">
              <AccordionTrigger>What is the review process?</AccordionTrigger>
              <AccordionContent>
                The letters will be reviewed by a group of individuals to ensure that they are able to be published and shared with others. If a letter is written in good faith and has a message that can help others it will be shared.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </section>
  )
}


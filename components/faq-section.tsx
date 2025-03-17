import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function FaqSection() {
  return (
    <section className="py-16 min-h-screen flex items-center">
      <div className="container mx-auto px-4">
        <h2 className="mb-8 text-center text-3xl font-bold">Frequently Asked Questions</h2>

        <div className="mx-auto max-w-3xl">
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger>Are the notes really anonymous?</AccordionTrigger>
              <AccordionContent>
                Yes! We don't collect any personal information when you submit a note. Your identity remains completely
                private.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2">
              <AccordionTrigger>How are notes moderated?</AccordionTrigger>
              <AccordionContent>
                We have automated filters to catch inappropriate content, and our team reviews flagged notes to ensure
                Nice Notes remains a positive space. We remove anything that doesn't align with our community
                guidelines.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3">
              <AccordionTrigger>Can I delete a note after posting it?</AccordionTrigger>
              <AccordionContent>
                Since notes are anonymous, we don't have a way to verify which notes belong to which users. However, if
                you need a note removed for any reason, please contact us with the specific content and approximate time
                of posting.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4">
              <AccordionTrigger>How often are new notes added?</AccordionTrigger>
              <AccordionContent>
                New notes appear as soon as they're submitted and pass our moderation checks, which typically takes just
                a few minutes. The community is active, so there's usually fresh content throughout the day.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5">
              <AccordionTrigger>Can I share notes on social media?</AccordionTrigger>
              <AccordionContent>
                Each note has a unique link that you can share. We encourage spreading positivity beyond our platform.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-6">
              <AccordionTrigger>Is there a mobile app?</AccordionTrigger>
              <AccordionContent>
                Not yet, but our website is fully responsive and works great on mobile devices. We're considering
                developing a dedicated app in the future based on community interest.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </section>
  )
}


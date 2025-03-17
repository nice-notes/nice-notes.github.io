export default function AboutSection() {
  return (
    <section className="bg-white py-16 dark:bg-gray-900 min-h-screen flex items-center">
      <div className="container mx-auto px-4">
        <h2 className="mb-8 text-center text-3xl font-bold">About Nice Notes</h2>

        <div className="mx-auto max-w-3xl space-y-6 text-lg">
          <p>
            Nice Notes was created with a simple mission: to spread kindness and positivity in a world that sometimes
            feels overwhelming.
          </p>

          <p>
            We believe in the power of anonymous encouragement. When you write a note, you're sending positivity into
            the world without expectation of recognition or reward—just pure kindness.
          </p>

          <p>
            Similarly, when you read notes from others, you're receiving support from someone who expects nothing in
            return. There's something beautiful about this exchange of goodwill between strangers.
          </p>

          <p>
            Whether you're having a difficult day and need some encouragement, or you're feeling inspired and want to
            lift others up, Nice Notes is here to facilitate that connection.
          </p>

          <p className="font-medium">
            Remember: A few kind words can change someone's entire day. Your note might be exactly what someone needs to
            hear right now.
          </p>
        </div>
      </div>
    </section>
  )
}


import React from 'react';

export default function AboutSection() {
  return (
    <section className="bg-white py-16 dark:bg-gray-900 min-h-screen flex items-center">
      <div className="container mx-auto px-4">
        <h2 className="mb-8 text-center text-3xl font-bold">About Nice Notes</h2>

        <div className="mx-auto max-w-3xl space-y-6 text-lg">
          <p>
            We made this website because we believe that kind words can help people who are going through tough times. 
            On our website, anyone can write and share a letter of hope, comfort, or encouragement, and know that 
            their words will make someone feel better.
          </p>

          <p>
            The website is a warm and welcoming place where anyone can share heartfelt letters of encouragement, 
            positivity, and support. The process to submit a letter is simple and is done through a form, and your 
            words will join a collection of other letters in our public gallery.
          </p>

          <p>
            We will ensure that every letter is respectful and uplifting. There will be a process where letters are 
            approved in order to ensure they are appropriate to be shared to the public. Once this is done the letters 
            will be published and shared with others.
          </p>

          <p className="font-medium">
            Whether you're looking to spread some positivity or find comfort for yourself, we're glad you're here. 
            Together, through collective kindness, we want to remind everyone that they're not alone, that their 
            struggles matter, and that support is always just a message away.
          </p>
        </div>
      </div>
    </section>
  )
}


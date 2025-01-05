import ContactCTA from "@/components/cta/contact";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'About Us',
  description: 'Learn more about Ruff Management inc.'
}

export default function About() {
  return (
    <div>
      <section className="text-gray-800">
        <div className="container flex flex-col justify-center p-6 max-w-5xl mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
          <div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
            <img src="/images/ruff-lion.png" alt="Ruff Lion" className="object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128" />
          </div>
          <div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
            <h1 className="text-5xl font-bold leading-none sm:text-6xl">
              Let's Build <span className="text-red-600">Your Future</span> Together
            </h1>
            <p className="mt-6 mb-8 text-lg sm:mb-12">
              Ready to elevate your business operations? <br className="hidden md:inline lg:hidden" />
              Contact Ruff Management Inc. today and discover how we can help you achieve your goals.
            </p>
            <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
              <a rel="noopener noreferrer" href="/services" className="px-8 py-3 text-lg font-semibold rounded bg-blue-600 hover:bg-blue-500 active:ring ring-gray-800 text-gray-50">
                Our Services
              </a>
              <a rel="noopener noreferrer" href="/contact" className="px-8 py-3 text-lg hover:bg-gray-900 hover:text-white active:ring ring-red-600/70 font-semibold border rounded border-gray-800">
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </section>
      <hr />
      <section className="max-w-xl relative mx-auto py-10 px-5">
          <h1 className="text-2xl py-5">
            Welcome to Ruff Management Inc.
          </h1>
          <p>
            At Ruff Management, we're dedicated to streamlining success for businesses of all sizes. 
            With a proven track record in comprehensive company management and administrative services, we empower our partner companies to focus on what they do best—achieving growth and excellence.
          </p>
          <h2 className="text-xl py-5">
            Who We Are
          </h2>
          <p>
            Founded on the principles of innovation, efficiency, and partnership, Ruff Management Inc. serves as a trusted ally to businesses across industries. 
            Our team of seasoned professionals ensures seamless operational management, allowing your company to thrive in today's competitive landscape.
          </p>
      </section>
      <hr />
      <section className="max-w-4xl relative mx-auto grid grid-cols-1 md:grid-cols-2 py-10 px-5 md:space-x-5 space-y-5 md:space-y-0">
        <div>
          <h2 className="text-xl py-5">
            Why Choose Us?
          </h2>
          <p>
            With Ruff Management Inc., you gain more than a service provider—you gain a partner committed to your success. 
            Our customized approach ensures that your unique needs are met with precision and care.
          </p>
        </div>
        <div>
          <h2 className="text-xl py-5">
            Let's Build Your Future Together
          </h2>
          <p>
            Ready to elevate your business operations? Contact Ruff Management Inc. today and discover how we can help you achieve your goals.
          </p>
        </div>
      </section>
      <section aria-description="Contact Us for a quote today.">
          <ContactCTA />
      </section>
    </div>
  );
}

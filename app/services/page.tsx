import { Metadata } from 'next';

import ServiceCard from "@/components/services/card";
import ContactCTA from "@/components/cta/contact";

import { servicesList } from "@/config/services";

export const metadata: Metadata = {
    title: 'Our Services',
}

export default function Services() {
    return (
    <div className="select-none">
        <section className="pt-5 lg:py-10 lg:pt-12">
            <h1 className="text-3xl font-bold text-center">
                Our Services
            </h1>
            <p className="pt-5 max-w-lg relative mx-auto hidden md:block">
                RTM offers a variety of services in the logistics industry, these include: warehousing, shipping, and transportation.
                &nbsp;<a href="/about" title="Learn more about RTM Transit" className="text-blue-500 hover:underline">Learn more...</a>
            </p>
        </section>
        <section className="max-w-5xl relative mx-auto mb-5 grid md:grid-cols-2 lg:grid-cols-3 py-5 px-7 space-x-2">
            {
                servicesList.map((service, index) => (
                    <div key={index} className="my-2">
                        <ServiceCard
                            {...service}
                        />
                    </div>
                ))
            }
        </section>
        <section aria-description="Contact Us for a quote today.">
            <ContactCTA />
        </section>
      </div>
    );
  }
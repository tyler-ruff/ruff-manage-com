import ContactCTA from "@/components/cta/contact";
import Image from "next/image";

export default function About() {
  return (
    <div>
      <div className="bg-gray-100 text-gray-800 select-none">
            <section className="container flex flex-col mx-auto lg:flex-row">
                <div className="w-full lg:w-1/3 hidden lg:block">
                    <img src="/images/freight_topper.png" alt="Photo of freight and cargo." width={345} height={345} />
                </div>
                <div className="flex flex-col w-full p-6 lg:w-2/3 md:p-8 lg:p-12">
                    <div>
                        <div className="inline-flex">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 2 20 20" fill="currentColor" className="w-8 h-8 mb-8 text-emerald-600">
                                <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                            </svg>
                        </div>
                        <div className="inline-flex">
                            <img src="/images/bus-black.png" width={100} height={85} />
                        </div>
                    </div>
                    <h1 className="text-3xl font-semibold leading-none">
                        About RTM Transit
                    </h1>
                    <p className="mt-4 mb-8 text-md">
                        With a focus on reliability, efficiency, and exceptional customer service, we deliver seamless solutions tailored to your logistics needs.
                    </p>
                    <a href="/services" className="self-start px-10 py-3 text-lg font-medium rounded-3xl bg-emerald-600 hover:bg-emerald-500 text-gray-50 focus:ring ring-green-300">
                        Our Services
                    </a>
                </div>
            </section>
            <hr />
            <section className="bg-gray-100 text-gray-800 my-5">
                <div className="container flex flex-col-reverse mx-auto lg:flex-row">
                    <div className="flex flex-col px-6 py-8 space-y-6 rounded-sm sm:p-8 lg:p-12 lg:w-1/2 xl:w-2/5 bg-emerald-600 text-gray-50">
                        <div className="flex">
                            <h3 className="text-lg">
                                Why Choose RTM Transportation?
                            </h3>
                        </div>
                        <div className="flex space-x-2 sm:space-x-4">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="flex-shrink-0 w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"></path>
                            </svg>
                            <div className="space-y-2">
                                <p className="text-lg font-medium leading-snug">
                                    Dependable Service
                                </p>
                                <p className="leading-snug">
                                    We pride ourselves on consistent, on-time deliveries.
                                </p>
                            </div>
                        </div>
                        <div className="flex space-x-2 sm:space-x-4">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="flex-shrink-0 w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"></path>
                            </svg>
                            <div className="space-y-2">
                                <p className="text-lg font-medium leading-snug">
                                    Tailored Solutions
                                </p>
                                <p className="leading-snug">
                                    From small parcels to large freight, we customize our services to fit your requirements.
                                </p>
                            </div>
                        </div>
                        <div className="flex space-x-2 sm:space-x-4">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="flex-shrink-0 w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"></path>
                            </svg>
                            <div className="space-y-2">
                                <p className="text-lg font-medium leading-snug">
                                    Experienced Team
                                </p>
                                <p className="leading-snug">
                                    Our skilled professionals bring years of expertise to handle your shipping needs with care.
                                </p>
                            </div>
                        </div>
                        <div className="flex space-x-2 sm:space-x-4">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="flex-shrink-0 w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"></path>
                            </svg>
                            <div className="space-y-2">
                                <p className="text-lg font-medium leading-snug">
                                    Modern Fleet
                                </p>
                                <p className="leading-snug">
                                    Equipped with advanced technology, our vehicles ensure the safe and efficient transport of goods.
                                </p>
                            </div>
                        </div>
                        <div className="flex space-x-2 sm:space-x-4">
                            <div className="space-y-2">
                                <p className="leading-snug">
                                
                                </p>
                                <p className="text-lg font-medium leading-snug space-x-3">
                                    <a href="/reviews" className="border-b border-dotted hover:border-solid" title="Explore customer testimonials">
                                        Customer Testimonials
                                    </a>
                                    <span className="hidden xl:inline-flex">
                                        &nbsp;|&nbsp;
                                    </span>
                                    <a href="/team" className="hidden xl:inline-flex border-b border-dotted hover:border-solid" title="Explore customer testimonials">
                                        Meet our Team
                                    </a>
                                    <span className="hidden 2xl:inline-flex">
                                        &nbsp;|&nbsp;
                                    </span>
                                    <a href="/fleet" className="hidden 2xl:inline-flex border-b border-dotted hover:border-solid" title="Explore customer testimonials">
                                        Vehicle Fleet
                                    </a>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="lg:w-full xl:w-3/5 bg-gray-100 hidden lg:block">
                        <div className="flex items-center justify-center p-4 md:p-8 lg:p-12">
                            <a href="https://oceancarservice.com" target="_blank" title="Visit Ocean Car Service">
                                <Image src="/images/OCS-Cover.png" width={800} height={825} alt="Ocean Car Service Promo" className="rounded-lg hover:shadow-lg bg-gray-500 aspect-video sm:min-h-96" />
                            </a>
                        </div>
                    </div>
                </div>
            </section>
            <br />
            <section className="container flex flex-col mx-auto lg:flex-row">
            <div className="flex flex-col lg:w-1/2 p-6 lg:w-2/3 md:p-8 lg:p-12">
                    <h2 className="text-xl font-bold py-5">
                        Who We Are
                    </h2>
                    <p className="mt-4 mb-8 text-md">
                        RTM Transportation LLC (also known as RTM Transit) has been shipping cargo since 2012. The company was founded by Robert Ruff, who has over 20+ years driving experience.
                        RTM specializes in small to medium cargo. Our fleet is comprised of cargo vans and box trucks. We service New Jersey, New York, Boston, Baltimore, Philadelphia, Maryland, DC, and Pittsburgh.
                    </p>
                </div>
                <div className="flex flex-col lg:w-1/2 p-6 lg:w-2/3 md:p-8 lg:p-12">
                    <h2 className="text-xl font-bold py-5">
                        How We're Moving America Forward.
                    </h2>
                    <p className="mt-4 mb-8 text-md">
                        At RTM Transportation, we understand the complexities of modern supply chains. 
                        Whether you're shipping locally or across the nation, our dedicated team ensures your cargo reaches its destination safely and on time.
                        Reach out to our team and discover how RTM Transportation LLC can make a difference in your supply chain.
                    </p>
                </div>
            </section>
            <section aria-description="Contact Us for a quote today.">
                <ContactCTA />
            </section>
        </div>
    </div>
  )
}

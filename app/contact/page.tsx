import { Metadata } from 'next';
import Form from 'next/form';

import { brand } from "@/config/app";
import { formatTelephone } from "@/lib/functions";

import { submitForm } from './actions';

export const metadata: Metadata = {
    title: 'Contact Us',
}

export default async function Contact(){

    return (
        <section className="py-6 bg-gray-100 text-gray-900 select-none">
            <div className="grid max-w-6xl grid-cols-1 px-6 mx-auto lg:px-8 py-20 md:grid-cols-2 md:divide-x">
                <div className="py-6 md:py-0 md:px-6">
                    <h1 className="text-4xl font-bold">
                        Get in Touch
                    </h1>
                    <p className="pt-2 pb-4">
                        Fill out the form for quotes, comments, feedback, concerns, or anything else.
                    </p>
                    <div className="space-y-4">
                        {
                            brand.address && (
                                <p className="flex items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 mr-2 sm:mr-6">
                                        <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"></path>
                                    </svg>
                                    <span>
                                        {brand.address}
                                    </span>
                                </p>
                            )
                        }
                        { brand.telephone && (
                                <p className="flex items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 mr-2 sm:mr-6">
                                        <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path>
                                    </svg>
                                    <a className="hover:underline" href={`tel:${brand.telephone}`}>
                                        {formatTelephone(brand.telephone)}
                                    </a>
                                </p>
                            )
                        }
                        {
                            brand.email && (
                                <p className="flex items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 mr-2 sm:mr-6">
                                        <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                                        <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                                    </svg>
                                    <a className="hover:underline" href={`mailto:${brand.email}`}>
                                        {brand.email}
                                    </a>
                                </p>
                            )
                        }
                    </div>
                </div>
                <Form action={submitForm} className="flex flex-col py-6 space-y-6 md:py-0 md:px-6">
                    <label className="block">
                        <span className="mb-1">Full name</span>
                        <input type="text" name="name" id="name" placeholder="Leroy Jenkins" className="block w-full rounded-md shadow-sm focus:ring focus:ring-opacity-75 focus:ring-emerald-600 bg-gray-100" />
                    </label>
                    <label className="block">
                        <span className="mb-1">Email address</span>
                        <input type="email" name="email" id="email" placeholder="leroy@jenkins.com" className="block w-full rounded-md shadow-sm focus:ring focus:ring-opacity-75 focus:ring-emerald-600 bg-gray-100" />
                    </label>
                    <label className="block">
                        <span className="mb-1">Message</span>
                        <textarea name="message" id="message" className="block w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-emerald-600 bg-gray-100"></textarea>
                    </label>
                    <input value="Send Message" type="submit" className="self-center px-8 py-3 text-lg rounded focus:ring hover:ring focus:ring-opacity-75 bg-emerald-600 text-gray-50 focus:ring-emerald-600 hover:ring-emerald-600"/>
                </Form>
            </div>
        </section>
    )
}
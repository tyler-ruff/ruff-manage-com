import { Icon } from "@iconify/react";

import { brand, config, social } from "@/config/app";
import { formatTelephone } from "@/lib/functions";

import { linksFooter } from './data';

export default function Footer(){
    const year = new Date().getFullYear();
    const date = new Date().toISOString();
    return (
        <footer className="px-4 divide-y bg-gray-100 text-gray-800 border-t select-none">
            <div className="container flex flex-col justify-between py-10 mx-auto space-y-8 lg:flex-row lg:space-y-0">
                <div className="lg:w-1/3">
                    <div className="flex justify-center mb-3 space-x-3 lg:justify-start">
                        <a rel="noopener noreferrer" href="/" title="Return Home" className="inline-flex hover:opacity-75">
                            <div className="flex items-center justify-center w-12 h-12 rounded-full">
                                <img src="https://blazed.sirv.com/RTM/logo/bus-black.png" alt="Beaker" width={42} height={42} />
                            </div>
                            <span className="self-center text-2xl font-semibold">
                                {config.name}
                            </span>
                        </a>
                    </div>
                    <div className="text-center lg:text-left space-y-3">
                        {
                            brand.telephone && (
                                <p title="Call or text us.">
                                    <span className="text-gray-500">Phone:</span>&nbsp;&nbsp;<a href={`tel:${brand.telephone}`} className="border-b border-dotted border-gray-600 hover:border-solid active:text-gray-400 active:border-gray-400">{formatTelephone(brand.telephone)}</a>
                                </p>
                            )
                        }
                        {
                            brand.email && (
                                <p title="Send us an email.">
                                    <span className="text-gray-500">Email:</span>&nbsp;&nbsp;<a href={`mailto:${brand.email}`} className="border-b border-dotted border-gray-600 hover:border-solid active:text-gray-400 active:border-gray-400">{brand.email}</a>
                                </p>
                            )
                        }
                    </div>
                </div>
                <div className="grid grid-cols-2 text-sm gap-x-3 gap-y-8 lg:w-2/3 sm:grid-cols-4">
                    {
                        linksFooter.map((footerItem, findex) => {
                            return (
                                <div key={findex} className="space-y-3">
                                    <h3 className="tracking-widest font-bold uppercase text-gray-900 dark:text-gray-300 select-none">
                                        {footerItem.title}
                                    </h3>
                                    <ul className="space-y-1">
                                        {
                                            footerItem.items.map((item, index) => {
                                                return (
                                                    <li key={index}>
                                                        <a rel="noopener noreferrer" className="hover:underline dark:text-gray-100" target={item.target} href={item.href}>
                                                            {item.label}
                                                        </a>
                                                    </li>
                                                );
                                            })
                                        }
                                    </ul>
                                </div>
                            );
                        })
                    }

                    <div className="space-y-3">
                        <h3 className="pl-2 uppercase font-bold text-gray-900 tracking-widest">
                            Social media
                        </h3>
                        <div className="flex justify-start space-x-3">
                            {social.facebook && (
                                <a rel="noopener noreferrer" href={social.facebook} target="social" title="Like us on Facebook" className="flex items-center p-1 hover:opacity-75">
                                    <Icon icon="typcn:social-facebook" width={27} height={27} />
                                </a>
                            )}
                            {social.twitter && (
                                <a rel="noopener noreferrer" href={social.twitter} target="social" title="Follow us on X" className="flex items-center p-1 hover:opacity-75">
                                    <Icon icon="mingcute:social-x-line" width={22} height={22} />
                                </a>
                            )}
                            {social.linkedin && (
                                <a rel="noopener noreferrer" href={social.linkedin} target="social" title="Connect with us on Linkedin" className="flex items-center p-1 hover:opacity-75">
                                    <Icon icon="typcn:social-linkedin" width={27} height={27} />
                                </a>
                            )}
                        </div>
                    </div>
                </div>
            </div>
            <div className="py-6 text-sm text-center text-gray-600">
                &copy;<time dateTime={date}>{year}</time> {brand.company}. All rights reserved.
            </div>
        </footer>
    );
}
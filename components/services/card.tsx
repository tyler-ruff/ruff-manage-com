import { Icon } from "@iconify/react";

import { IServiceCard } from "./data";

export default function ServiceCard(props: IServiceCard){
    
    return (
        <a href={props.url} className="group">
            <article className="rounded-lg border border-gray-100 bg-white p-4 shadow-sm transition hover:shadow-lg sm:p-6">
                {
                    props.icon && (
                        <span className="inline-block rounded bg-blue-600 p-2 text-white">
                            <Icon icon={props.icon} height={18} width={18} />
                        </span>
                    )
                }
                <h3 className="mt-0.5 text-lg font-medium text-gray-900">
                    {props.title}
                </h3>
                <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500">
                    {props.description}
                </p>
                <span className="group mt-4 inline-flex items-center gap-1 text-sm font-medium text-blue-600">
                    Find out more
                    <span aria-hidden="true" className="block transition-all group-hover:ms-0.5 rtl:rotate-180">
                        &rarr;
                    </span>
                </span>
            </article>
        </a>
    )
}
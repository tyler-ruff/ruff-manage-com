import type { Metadata, ResolvingMetadata } from 'next';
import { redirect } from 'next/navigation';
import React from 'react';

import { getSingleService } from '@/lib/hooks/services';
import { url } from '@/config/app';

interface Props {
    params: Promise<{ slug: string }>;
    searchParams: Promise<{ sortOrder: string }>;
}

export async function generateMetadata(props: Props, parent: ResolvingMetadata): Promise<Metadata> {
    //const slug = (await params).slug;
    const params = await props.params;
    const {
        slug
    } = params;
    const service = getSingleService(slug);
    if(!service){ 
        redirect('/404');
    }
    return {
        title: `${service.title} | Services`,
        description: service.description,
        openGraph: {
            title: service.title,
            type: "article",
            url: new URL(`/services/${service.slug}`, url)
        }
    }
}

export default async function Page(props: Props){
    const params = await props.params;
    const {
        slug
    } = params;
    //const slug = params.slug;
    const service = getSingleService(slug);

    return service && (
        <article className="max-w-2xl px-6 py-24 mx-auto space-y-16 text-gray-900">
            <div className="w-full mx-auto space-y-4">
                <h1 className="text-5xl font-bold leading-none">
                    {service.title}
                </h1>
                <div className="flex flex-wrap space-x-2 text-sm text-gray-600">
                    <a rel="noopener noreferrer" href="#" className="p-1 hover:underline">#MambaUI</a>
                    <a rel="noopener noreferrer" href="#" className="p-1 hover:underline">#TailwindCSS</a>
                    <a rel="noopener noreferrer" href="#" className="p-1 hover:underline">#Angular</a>
                </div>
                <p className="text-sm text-gray-600">by
                    <a href="#" target="_blank" rel="noopener noreferrer" className="hover:underline text-emerald-600">
                        <span>Leroy Jenkins</span>
                    </a>on
                    <time dateTime="2021-02-12 15:34:18-0200">Feb 12th 2021</time>
                </p>
            </div>
            <div className="text-gray-800">
                <p>
                    {service.description}
                </p>
            </div>
        </article>
    );
}
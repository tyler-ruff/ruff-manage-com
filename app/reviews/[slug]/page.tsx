import type { Metadata, ResolvingMetadata } from 'next';
import { redirect } from 'next/navigation';
import React from 'react';

import { Icon } from "@iconify/react";

import { url } from '@/config/app';
import { getSingleReview } from '@/lib/hooks/reviews';
import { truncateString } from '@/lib/functions';
import Rating from '@/components/reviews/rating';

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
    const review = getSingleReview(slug);
    if(!review){ 
        redirect('/404');
    }
    return {
        title: `${review.title} by ${review.customer} | Testimonials`,
        description: `View review by ${review.customer}. ${truncateString(review.comment, 150)}`,
        openGraph: {
            title: `View testimonial by ${review.customer} on RTM.`,
            type: "article",
            url: new URL(`/reviews/${slug}`, url)
        }
    }
}

export default async function Page(props: Props) {
    //const slug = params.slug;
    const params = await props.params;
    const {
        slug
    } = params;

    const review = getSingleReview(slug);

    return review && (
        <article className="py-8 bg-gray-100 text-gray-800">
            <div className="container flex flex-col items-center p-4 mx-auto space-y-6 md:p-8">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" className="w-16 h-16 text-emerald-600">
                    <polygon points="328.375 384 332.073 458.999 256.211 406.28 179.924 459.049 183.625 384 151.586 384 146.064 496 182.756 496 256.169 445.22 329.242 496 365.936 496 360.414 384 328.375 384"></polygon>
                    <path d="M415.409,154.914l-2.194-48.054L372.7,80.933,346.768,40.414l-48.055-2.2L256,16.093,213.287,38.219l-48.055,2.2L139.3,80.933,98.785,106.86l-2.194,48.054L74.464,197.628l22.127,42.715,2.2,48.053L139.3,314.323l25.928,40.52,48.055,2.195L256,379.164l42.713-22.126,48.055-2.195,25.928-40.52L413.214,288.4l2.195-48.053,22.127-42.715Zm-31.646,76.949L382,270.377l-32.475,20.78-20.78,32.475-38.515,1.76L256,343.125l-34.234-17.733-38.515-1.76-20.78-32.475L130,270.377l-1.759-38.514L110.5,197.628,128.237,163.4,130,124.88,162.471,104.1l20.78-32.474,38.515-1.76L256,52.132l34.234,17.733,38.515,1.76,20.78,32.474L382,124.88l1.759,38.515L401.5,197.628Z"></path>
                </svg>
                <p className="px-6 py-2 text-2xl font-semibold text-center sm:font-bold sm:text-3xl md:text-4xl lg:max-w-2xl xl:max-w-4xl text-gray-700">
                    {review.title}
                </p>
                <div className="text-gray-800 py-4">
                    <p>
                        {review.comment}
                    </p>
                </div>
                <div className="flex justify-center space-x-3">
                    <img src="/api/avatars" alt={`Review by: ${review.customer}`} className="w-20 h-20 bg-center bg-cover rounded-md bg-gray-500 bg-gray-300" />
                    <div>
                        <p className="leading-tight pb-2">
                            {review.customer}
                        </p>
                        <p className="text-sm leading-tight text-gray-700">
                            <time dateTime={new Date(review.date).toISOString()}>
                                {new Date(review.date).toLocaleDateString('en-us', { weekday:"long", year:"numeric", month:"short", day:"numeric"})}
                            </time>
                        </p>
                        <div className="flex items-center py-2 space-x-1 text-sm">
                            <Rating stars={review.stars} />
                        </div>
                    </div>
                </div>
                <a href="/reviews" className="group flex">
                    <span className="inline-flex group-hover:text-gray-500">
                        <Icon icon="ic:sharp-arrow-back" width={25} height={25} />
                    </span>
                    <span className="inline-flex pl-2 group-hover:text-gray-500">
                        Return to Testimonials
                    </span>
                </a>
            </div>
        </article>
    );
}
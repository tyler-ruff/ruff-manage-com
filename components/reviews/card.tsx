import { Icon } from "@iconify/react";

import { truncateString } from "@/lib/functions";
import { IReviewCard } from "./data";

export default function ReviewCard(props: IReviewCard){
    return (
        <a href={`/reviews/${props.slug}`} title="Read more..." className="flex flex-col max-w-sm mx-4 my-6 hover:shadow-lg">
            <div className="px-4 py-12 rounded-t-lg sm:px-8 md:px-12 bg-gray-50">
                <p className="relative px-6 py-1 text-lg italic text-center text-gray-800">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" className="w-8 h-8 text-emerald-600">
                        <path d="M232,246.857V16H16V416H54.4ZM48,48H200V233.143L48,377.905Z"></path>
                        <path d="M280,416h38.4L496,246.857V16H280ZM312,48H464V233.143L312,377.905Z"></path>
                    </svg>
                    {truncateString(props.comment, 75)}
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" className="absolute right-0 w-8 h-8 text-emerald-600">
                        <path d="M280,185.143V416H496V16H457.6ZM464,384H312V198.857L464,54.1Z"></path>
                        <path d="M232,16H193.6L16,185.143V416H232ZM200,384H48V198.857L200,54.1Z"></path>
                    </svg>
                </p>
            </div>
            <div className="flex flex-col items-center justify-center p-8 rounded-b-lg bg-emerald-600 text-gray-50">
                <img src="/api/avatars" alt={props.customer} className="w-16 h-16 mb-2 -mt-16 bg-center bg-cover rounded-full bg-gray-500 bg-gray-300 border" />
                <p className="text-xl font-semibold leading-tight">
                    {props.customer}
                </p>
                <p className="text-md uppercase truncate">
                    {props.title}
                </p>
                <div className="text-sm flex">
                    <i className="inline-flex">
                        <Icon icon="material-symbols:star" width={18} height={18}/>
                    </i>
                    <span className="inline-flex">
                        {`${props.stars} of 5 stars`}
                    </span>
                </div>
            </div>
        </a>
    )
}
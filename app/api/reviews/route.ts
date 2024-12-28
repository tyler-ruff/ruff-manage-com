import { defaultLimit, testimonialList } from '@/config/testimonials';
import { NextResponse } from 'next/server';

export async function GET(request: Request){
    const { searchParams } = new URL(request.url);
    const page = searchParams.has('page') ? 
    searchParams.get('page') : "1";
    const limit = searchParams.has('limit') ?
    searchParams.get('limit') : `${defaultLimit}`;

    if(page === null || page === undefined || limit === null || limit === undefined){
        throw new URIError("The page number is invalid.");
    }
    
    /*else {
        const pageParsed = Number.parseInt(page);
        const limitParsed = Number.parseInt(limit);
    }
    */
    const pageParsed = Number.parseInt(page);
    const limitParsed = Number.parseInt(limit);

    // End reached
    if(pageParsed*limitParsed >= testimonialList.length){
        return NextResponse.json(
            {
                data: [testimonialList.slice((pageParsed-1)*limitParsed, testimonialList.length)]
            },
            {
                status: 200
            }
        );
    }

    return NextResponse.json(
        {
            data: [testimonialList.slice((pageParsed-1)*limitParsed, pageParsed*limitParsed)]
        },
        {
            status: 200
        }
    );

}
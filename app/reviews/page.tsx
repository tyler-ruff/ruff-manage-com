import { cookies } from 'next/headers';
import { redirect } from "next/navigation";

import ContactCTA from "@/components/cta/contact";
import ReviewCard from "@/components/reviews/card";
import { defaultLimit, testimonialList } from "@/config/testimonials";

export default async function Reviews({
    searchParams,
  }: {
    searchParams: Promise<{ [key: string]: string | string[] | undefined }>
  }){
    //const page = (await searchParams).page;
    const { page = '1', sort = 'desc', orderBy = 'date', pageSize = defaultLimit } = await searchParams;

    function getTotalPages(limit: number = defaultLimit){
        return Math.ceil(testimonialList.length / limit);
    }

    function createQueryUrl(targetPage: string = page as string){
        return `/reviews?page=${targetPage}&orderBy=${orderBy}&sort=${sort}`;
    }

    function applyFilters(){
        let sortedArray = [...testimonialList];
        switch(orderBy){
            case 'title':
                sortedArray.sort((a, b) => {
                    if(sort === 'desc'){
                        return a.title.localeCompare(b.title)
                    }
                    return b.title.localeCompare(a.title)
                });
                break;
            case 'name':
                sortedArray.sort((a, b) => {
                    if(sort === 'desc'){
                        return a.customer.localeCompare(b.customer)
                    }
                    return b.customer.localeCompare(a.customer)
                });
                break;
            case 'date':
            case 'age':
                    sortedArray.sort((a, b) => {
                        var d1 = new Date(a.date).getTime();
                        var d2 = new Date(b.date).getTime();
                        if(sort === 'desc'){
                            return d2 - d1;
                        }
                        return d1 - d2;
                    })
                    break;
            case 'none':
            default:
                // Do not apply any filters
                redirect(createQueryUrl(page as string));
                break;
        }
        return sortedArray;
    }
    
    if(!page || page === '0' || Number.parseInt(page as string) <= 0){
        redirect('/reviews?page=1');
    }

    if(Number.parseInt(page as string) > getTotalPages()){
        redirect(`/reviews?page=${getTotalPages()}`);
    }
    
    function PaginateReviews(props: { page: any }){
        switch(orderBy){
            case "name":
                break;
        }
        const pageParsed = Number.parseInt(props.page);
        let resultList = [];
        const sortedArray = applyFilters();
        //End Reached
        if((pageParsed*defaultLimit) >= testimonialList.length){
            resultList = sortedArray.slice((pageParsed-1)*defaultLimit, testimonialList.length);
        } else {
            resultList = sortedArray.slice((defaultLimit*(pageParsed-1)), (defaultLimit*pageParsed));
        }
        
        return resultList.map((item, index) => (
            <ReviewCard {...item} key={index} />
        ));
    }
    function PaginateMenu(props: { currentPage: any }){
        let menuNew = [];
        const totalPages = getTotalPages();
        for(let i = 0; i < totalPages; i++){
            menuNew.push(`${i+1}`);
        }
        return (
            <div className="flex justify-center space-x-1 text-gray-800">
                {
                    props.currentPage <= 1 ? (
                        <button type="button" disabled={true} className="inline-flex items-center justify-center w-8 h-8 py-0 border rounded-md shadow-md bg-gray-200 border-gray-100">
                            <svg viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="w-4">
                                <polyline points="15 18 9 12 15 6"></polyline>
                            </svg>
                        </button>
                    ) : (
                        <a title="Previous Page" href={createQueryUrl(`${props.currentPage-1}`)} className="inline-flex items-center justify-center w-8 h-8 py-0 border rounded-md shadow-md bg-gray-50 hover:bg-gray-900/50 hover:text-white active:ring ring-gray-400 border-gray-100">
                            <svg viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="w-4">
                                <polyline points="15 18 9 12 15 6"></polyline>
                            </svg>
                        </a>
                    )
                }
                {
                    menuNew.map((menuItem, index) => (
                        <a href={createQueryUrl(menuItem)} key={index} className={`inline-flex items-center justify-center w-8 h-8 text-sm border rounded shadow-md bg-gray-50 hover:bg-gray-900/50 hover:text-white active:ring ring-gray-400 ${menuItem === page ? 'text-gray-900 font-bold border-gray-900 hover:border-gray-900' : 'border-gray-100'}`} title={`Page ${menuItem}`}>
                            {menuItem}
                        </a>
                    ))
                }
                {
                    props.currentPage >= totalPages ? (
                        <button type="button" disabled={true} className="inline-flex items-center justify-center w-8 h-8 py-0 border rounded-md shadow-md bg-gray-200 border-gray-100">
                            <svg viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="w-4">
                                <polyline points="9 18 15 12 9 6"></polyline>
                            </svg>
                        </button>
                    ) : (
                        <a title="Next Page" href={createQueryUrl(`${Number.parseInt(props.currentPage)+1}`)} className="inline-flex items-center justify-center w-8 h-8 py-0 border rounded-md shadow-md bg-gray-50 hover:bg-gray-900/50 hover:text-white active:ring ring-gray-400 border-gray-100">
                            <svg viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="w-4">
                                <polyline points="9 18 15 12 9 6"></polyline>
                            </svg>
                        </a>
                    )
                }
                <span className="sr-only">
                    {
                        `Page ${page} of ${totalPages}`
                    }
                </span>
            </div>
        );
    }
    return (
        <div>
            <section className="py-8 bg-gray-100 text-gray-800">
                <div className="container flex flex-col items-center mx-auto mb-12 md:p-10 md:px-12">
                    <h1 className="p-4 text-4xl font-semibold leading-none text-center">
                        Testimonials
                    </h1>
                    <p className="py-2">
                        What Our Customers Are Saying About Us
                    </p>
                </div>
                <div className="container flex flex-col items-center justify-center mx-auto lg:flex-row lg:flex-wrap lg:justify-evenly lg:px-10">
                    <PaginateReviews page={page === undefined ? "1" : page} />
                </div>
                <div className="container flex flex-col items-center justify-center mx-auto lg:flex-row lg:flex-wrap lg:justify-evenly lg:px-10 py-6">
                    <PaginateMenu currentPage={page} />
                </div>
            </section>
            <section aria-description="Contact Us for a quote today.">
                <ContactCTA />
            </section>
        </div>
    );
}
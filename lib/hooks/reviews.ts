import { testimonialList } from "@/config/testimonials"

export const getSingleReview = (reviewSlug: string) => {
    const getReview = testimonialList.find(review => review.slug === reviewSlug);
    if(!getReview){
        return null;
    }
    return getReview;
}
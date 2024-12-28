import { servicesList } from "@/config/services";

export const getSingleService = (serviceSlug: string) => {
    const getService = servicesList.find(service => service.slug === serviceSlug);
    if(!getService){
        //throw new Error("Service not found.");
        return null;
    }
    return getService;
}
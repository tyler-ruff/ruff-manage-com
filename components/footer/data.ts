import { social } from "@/config/app";
import { MenuItem } from "@/lib/types/site";

export interface FooterItems{
    title: string;
    items: MenuItem[];
    target?: string;
}

export const linksFooter = [
    {
        title: "Company",
        items: [
            {
                label: "Home",
                href: "/"
            },
            {
                label: "About",
                href: "/about"
            },
            {
                label: "Services",
                href: "/services"
            },
            {
                label: "Contact",
                href: "/contact"
            }
        ]
    },
    {
        title: "Site",
        items: [
            {
                label: "Testimonials",
                href: "/reviews"
            },
            {
                label: "Team",
                href: "/team"
            },
            {
                label: "Fleet",
                href: "/fleet"
            }
        ]
    },
    {
        title: "Community",
        items: [
            {
                label: "Blog",
                href: "/blog"
            },
            {
                label: "FAQ",
                href: "/faq"
            },
            {
                label: "uShip Profile",
                target: "_blank",
                href: social.uship
            },
        ]
    }
] as FooterItems[];
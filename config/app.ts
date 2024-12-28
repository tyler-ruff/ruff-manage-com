import { Brand, Config, Social } from "@/lib/types/app";

const url = process.env.NODE_ENV === "development" ? 
'http://localhost:3000' : 'https://ruff-manage.com';

const config = {
    name: "Ruff Management",
    fbAppId: "",
    description: "At Ruff Management Inc., we specialize in turning complexity into clarity. With years of expertise in managing properties, websites, and companies, we provide comprehensive solutions designed to streamline your operations and enhance your success."
} as Config;

const social = {
    facebook: "https://www.facebook.com/ruffmanagement/",
    twitter: "https://x.com/RuffManage",
    github: "https://github.com/ruff-org",
    linkedin: "https://www.linkedin.com/company/ruff-management-inc/"
} as Social

const brand = {
    logo: "/icons/beaker_dark.svg",
    company: "Ruff Management inc.",
    email: "hello@ruff-manage.com",
    telephone: "+18338870061",
    address: "1650 Simpson Ave, Ocean City, NJ 08226"
} as Brand;

export {
    config, brand, social, url
};
import Image from "next/image";
import Link from "next/link";

import { ILogo } from "./data";

/**
 * Logo component
 * @param prop title <string>
 * @example <Logo title={config.title} />
 * @returns JSX Component
 */
const Logo = (props: ILogo) => {
    return (
        <Link href="/" 
            aria-label="Back to homepage"
            title={props.title} 
            className="flex items-center p-2 text-2xl font-bold hover:opacity-75 select-none">
            RTM
        </Link>
    );
}

export default Logo;
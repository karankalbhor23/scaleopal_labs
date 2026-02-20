import Image from "next/image";

interface LogoProps {
    className?: string;
    height?: number;
    width?: number;
}

/**
 * Basic Logo Component
 * Note: To fix sizing issues permanently, it is highly recommended to 
 * crop the source image file (logo.png) to remove all empty whitespace 
 * around the actual logo content.
 */
export function Logo({ className = "", height = 80, width = 320 }: LogoProps) {
    return (
        <div
            className={`flex items-center justify-start ${className}`}
            style={{ height, width }}
        >
            <Image
                src="/logo.png"
                alt="Scaleopal Labs Logo"
                width={width}
                height={height}
                className="h-full w-auto object-contain"
                priority
            />
        </div>
    );
}

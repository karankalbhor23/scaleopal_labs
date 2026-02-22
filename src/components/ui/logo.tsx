interface LogoProps {
    className?: string;
    height?: number;
}

/**
 * Logo Component using plain img for predictable sizing.
 * The height prop directly controls the rendered height.
 * Width adjusts automatically to maintain aspect ratio.
 */
export function Logo({ className = "", height = 40 }: LogoProps) {
    return (
        // eslint-disable-next-line @next/next/no-img-element
        <img
            src="/logo.png"
            alt="Scaleopal Labs Logo"
            style={{ height: `${height}px`, width: 'auto' }}
            className={className}
        />
    );
}


import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "About Us | Scaleopal Labs",
    description: "Scaleopal Labs is a team of active AI Engineers and Robotics Specialists on a mission to transform students from technology consumers into technology creators. Learn about our story and philosophy.",
    alternates: {
        canonical: "https://labs.scaleopal.com/about",
    },
    openGraph: {
        title: "About Scaleopal Labs | Bridging Tech & Education",
        description: "Born from a real-world AI agency, we bring industry-grade technology education to schools and students across India.",
        url: "https://labs.scaleopal.com/about",
        siteName: "Scaleopal Labs",
        images: [
            {
                url: "/scaleopal_labs_og.png",
                width: 1200,
                height: 630,
                alt: "About Scaleopal Labs Team",
            },
        ],
        locale: "en_US",
        type: "website",
    },
};

// JSON-LD Structured Data for About Page
const aboutSchema = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "mainEntity": {
        "@type": "EducationalOrganization",
        "name": "Scaleopal Labs",
        "description": "EdTech division of Scaleopal providing industry-grade AI and Robotics education.",
        "parentOrganization": {
            "@type": "Organization",
            "name": "Scaleopal Pvt. Ltd.",
            "url": "https://scaleopal.com"
        },
        "foundingDate": "2024",
        "location": {
            "@type": "Place",
            "address": {
                "@type": "PostalAddress",
                "streetAddress": "Bavdhan",
                "addressLocality": "Pune",
                "postalCode": "411021",
                "addressCountry": "IN"
            }
        }
    }
};

export default function AboutLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(aboutSchema),
                }}
            />
            {children}
        </>
    );
}

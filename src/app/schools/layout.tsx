
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "AI & Robotics Labs for Schools | Scaleopal Labs",
    description: "Transform your school into a Future-Ready AI & Robotics Hub. We provide turnkey hardware, NEP-aligned curriculum, and expert faculty training designed by active AI engineers.",
    alternates: {
        canonical: "https://labs.scaleopal.com/schools",
    },
    openGraph: {
        title: "AI & Robotics Labs for Schools | Scaleopal Labs",
        description: "Partner with Scaleopal Labs to bring industry-grade AI, Robotics, and IoT education to your students. 50/50 Partnership Framework.",
        url: "https://labs.scaleopal.com/schools",
        siteName: "Scaleopal Labs",
        images: [
            {
                url: "/scaleopal_labs_og.png",
                width: 1200,
                height: 630,
                alt: "Scaleopal Labs for Schools",
            },
        ],
        locale: "en_US",
        type: "website",
    },
};

// JSON-LD Structured Data for B2B Service
const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "AI & Robotics Lab Setup for Schools",
    "provider": {
        "@type": "EducationalOrganization",
        "name": "Scaleopal Labs",
        "url": "https://labs.scaleopal.com"
    },
    "serviceType": "Educational Technology Implementation",
    "areaServed": {
        "@type": "City",
        "name": "Pune"
    },
    "description": "Turnkey AI and Robotics lab setup, curriculum design, and faculty training for K-12 schools aligned with NEP 2020.",
    "offers": {
        "@type": "Offer",
        "name": "School Partnership Program"
    }
};

export default function SchoolsLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(serviceSchema),
                }}
            />
            {children}
        </>
    );
}

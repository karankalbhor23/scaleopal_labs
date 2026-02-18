import { Metadata } from "next";

export const metadata: Metadata = {
    title: "AI & Robotics Summer Camp 2026 | Scaleopal Labs Pune",
    description: "Join Pune's premier 5-day intensive AI & Robotics bootcamp for students (Class 3-10). Build real robots, learn Python/AI, and get certified by industry engineers.",
    alternates: {
        canonical: "https://labs.scaleopal.com/summer-camp",
    },
    openGraph: {
        title: "Scaleopal Labs - AI & Robotics Summer Camp 2026",
        description: "5 Days. 15 Hours. Real Hardware. Build your own robots this summer!",
        url: "https://labs.scaleopal.com/summer-camp",
        images: [
            {
                url: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=1200",
                width: 1200,
                height: 630,
                alt: "Scaleopal Summer Camp Students",
            },
        ],
    },
};

export default function SummerCampLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}

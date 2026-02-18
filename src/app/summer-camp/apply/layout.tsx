import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Apply Now - Summer Camp 2026 | Scaleopal Labs",
    description: "Secure your spot for the Scaleopal Labs AI & Robotics Summer Camp. Limited seats available for Young Innovators and Master Builders tracks.",
    alternates: {
        canonical: "https://labs.scaleopal.com/summer-camp/apply",
    },
    robots: {
        index: false,
        follow: true,
    }
};

export default function ApplyLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}

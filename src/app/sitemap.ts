import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = "https://labs.scaleopal.com";

    return [
        {
            url: baseUrl,
            lastModified: new Date(),
            changeFrequency: "weekly",
            priority: 1,
        },
        {
            url: `${baseUrl}/summer-camp`,
            lastModified: new Date(),
            changeFrequency: "daily", // Frequent updates as camp approaches
            priority: 1, // High priority for conversion
        },
        {
            url: `${baseUrl}/summer-camp/apply`,
            lastModified: new Date(),
            changeFrequency: "weekly",
            priority: 0.8,
        },
        // Add other relevant pages like /about, /contact if they exist
        // {
        //   url: `${baseUrl}/about`,
        //   lastModified: new Date(),
        //   changeFrequency: "monthly",
        //   priority: 0.5,
        // },
    ];
}

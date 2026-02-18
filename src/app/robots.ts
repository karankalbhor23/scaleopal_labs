import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
    return {
        rules: {
            userAgent: "*",
            allow: "/",
            disallow: ["/api/", "/private/"], // Disallow API routes or private paths
        },
        sitemap: "https://labs.scaleopal.com/sitemap.xml",
    };
}

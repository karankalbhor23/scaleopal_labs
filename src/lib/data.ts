// Site-wide data for Scaleopal Labs

export const siteConfig = {
    name: "Scaleopal Labs",
    description: "India's first Robotics Curriculum built by active AI Engineers. Join the Summer Bootcamp 2026.",
    url: "https://labs.scaleopal.com",
    parentCompany: "Scaleopal",
    parentUrl: "https://scaleopal.com",
    address: "Scaleopal Pvt. Ltd., Bavdhan, Pune 411021, India",
    phone: "+91 9322086245",
    email: "hello@scaleopal.com"
};

export const navLinks = [
    { label: "Summer Camp", href: "/summer-camp" },
    { label: "For Schools", href: "#schools" },
    { label: "About", href: "#about" }
];

export const socialProof = {
    tagline: "Taught by engineers from",
    companies: [
        { name: "OpenAI", logo: "/logos/openai.svg" },
        { name: "Google", logo: "/logos/google.svg" },
        { name: "Arduino", logo: "/logos/arduino.svg" },
        { name: "Python", logo: "/logos/python.svg" }
    ]
};

export const engineerAdvantage = {
    title: "The Engineer Advantage",
    description: "Why learn from tutors when you can learn from the builders?",
    comparison: {
        others: {
            label: "Traditional Tutors",
            points: [
                "Teaching from textbooks",
                "Theoretical knowledge only",
                "No industry experience",
                "Generic certificates"
            ]
        },
        scaleopal: {
            label: "Scaleopal Engineers",
            points: [
                "Global Enterprise AI Projects",
                "Hardware + Software combined",
                "Active industry practitioners",
                "Certificate of Internship"
            ]
        }
    },
    features: [
        {
            title: "Global Projects",
            description: "Work on real-world systems built for our global enterprise and AI startup clients.",
            icon: "Globe"
        },
        {
            title: "Hardware + Software",
            description: "Build physical robots AND write the AI code that powers them.",
            icon: "Cpu"
        },
        {
            title: "Industry Certificate",
            description: "Receive a Certificate of Internship, not just participation.",
            icon: "Award"
        },
        {
            title: "Small Batches",
            description: "Maximum 15 students per batch for personalized attention.",
            icon: "Users"
        }
    ]
};

export const summerCamp = {
    title: "Summer Camp 2026",
    subtitle: "10 Days to Build an AI-Powered Project",
    urgency: "Batch 1 Starts April 15th",
    kits: [
        {
            level: 1,
            name: "Explorer Kit",
            description: "Build your first AI-powered security camera",
            duration: "10 Days",
            ages: "Class 8-10",
            project: "Smart Security Camera",
            price: 3999,
            originalPrice: 5999,
            tag: "Early Bird",
            highlights: [
                "Raspberry Pi fundamentals",
                "Python programming basics",
                "Computer vision intro",
                "Take-home project kit"
            ]
        },
        {
            level: 2,
            name: "Builder Kit",
            description: "Create an autonomous robot with voice control",
            duration: "10 Days",
            ages: "Class 10-12",
            project: "Voice-Controlled Robot",
            price: 5999,
            originalPrice: 7999,
            tag: "Most Popular",
            highlights: [
                "Advanced robotics",
                "Natural language processing",
                "Sensor integration",
                "Industry-grade components"
            ]
        }
    ]
};

export const schoolsSection = {
    title: "Partner With Us",
    subtitle: "Bring Industry-Grade AI Labs to Your School",
    description: "We help schools set up and run Atal Tinkering Labs (ATL) with real engineering mentorship and government grant support.",
    features: [
        {
            title: "ATL Setup Support",
            description: "Complete guidance for Atal Tinkering Lab applications and setup.",
            icon: "Building"
        },
        {
            title: "Government Grants",
            description: "Assistance with ₹20 Lakh ATL grant applications.",
            icon: "IndianRupee"
        },
        {
            title: "Curriculum Design",
            description: "Industry-aligned robotics and AI curriculum for NEP 2020.",
            icon: "BookOpen"
        },
        {
            title: "Teacher Training",
            description: "Upskill your faculty with our engineer-led workshops.",
            icon: "GraduationCap"
        }
    ],
    cta: {
        primary: "Schedule a Demo",
        secondary: "Download Brochure"
    }
};

export const footer = {
    tagline: "Taught by Engineers. Built for Tomorrow.",
    links: [
        { label: "Privacy Policy", href: "/privacy" },
        { label: "Safety Guidelines", href: "/safety" },
        { label: "Terms of Service", href: "/terms" }
    ],
    social: [
        { platform: "LinkedIn", href: "https://linkedin.com/company/scaleopal" },
        { platform: "Instagram", href: "https://instagram.com/scaleopal" },
        { platform: "YouTube", href: "https://youtube.com/@scaleopal" }
    ]
};

interface Project {
    id: number;
    name: string;
    description: string;
    tools: string[];
    code: string;
    demo: string;
    image: string;
    role: string;
}

export const projects: Project[] = [
    {
        id: 1,
        name: "Banking UI - Angular Optimization",
        description: "Built and optimized Angular modules for banking UIs at Unisys. Reduced load time by 30% through lazy loading and bundle optimization. Developed dynamic dropdown filters, modal sliders, and state-managed components using NgRx.",
        tools: ["Angular", "NgRx", "TypeScript", "Lazy Loading", "JWT Auth", "Redis"],
        code: "",
        demo: "",
        image: "assets/image/screen.png",
        role: "Frontend Angular Engineer",
    },
    {
        id: 2,
        name: "Legacy jQuery to Angular Migration",
        description: "Led the migration of legacy jQuery/JS dashboards to Angular-based applications, improving performance by 40%. Removed 900+ jQuery DOM implementations and replaced jQuery modals with Angular Material, modernizing 300+ UI elements.",
        tools: ["Angular", "Angular Material", "Bootstrap", "TypeScript", "HTML5", "CSS3"],
        code: "",
        demo: "",
        image: "assets/image/portfolio.gif",
        role: "Associate App Development Engineer",
    },
    {
        id: 3,
        name: "Hybrid Mobile App (Ionic + Angular)",
        description: "Created hybrid mobile applications using Ionic & Angular, deployed to both iOS and Android platforms. Implemented reusable component-driven architecture with clean state management patterns.",
        tools: ["Ionic", "Angular", "TypeScript", "iOS", "Android"],
        code: "",
        demo: "",
        image: "assets/image/real-estate.jpg",
        role: "Mobile App Developer",
    },
    {
        id: 4,
        name: "Angular Performance Optimization",
        description: "Systematically improved rendering performance using trackBy in ngFor and OnPush change detection. Prevented memory leaks by unsubscribing from Observables using takeUntil and async pipe. Reduced bundle size by removing unused imports.",
        tools: ["Angular", "RxJS", "TypeScript", "OnPush", "Memory Management"],
        code: "",
        demo: "",
        image: "assets/image/ayla.jpg",
        role: "Software Engineer",
    },
    {
        id: 5,
        name: "Animated SVG Icon System",
        description: "Designed and implemented custom animated SVG icon sets used across banking UI applications. Created route-based lazy loading combined with animated transitions for a polished user experience.",
        tools: ["SVG Animations", "Angular", "CSS3", "TypeScript"],
        code: "",
        demo: "",
        image: "assets/image/travel.jpg",
        role: "Frontend Developer",
    }
]

export default function NoctureCard() {
    const descriptors = [
        "Latest Research",
        "Peer-Reviewed Articles",
        "Scientific Publications",
        "Research Papers",
        "Preprints",
        "Biological Discoveries",
        "Genomics Research",
        "Molecular Biology",
        "Cell Biology",
        "Microbiology",
        "Neuroscience",
        "Genetics",
        "Biotechnology",
        "Bioinformatics",
        "Evolutionary Biology",
        "Ecology Studies",
        "Marine Biology",
        "Immunology",
        "Cancer Research",
        "Medical Biology",
        "Life Sciences",
        "Scientific Insights",
        "Research Trends",
        "Trending Publications",
        "Citation Analysis",
        "Literature Reviews",
        "Research Summaries",
        "Academic Resources",
        "Open Access Research",
        "Scholarly Articles",
        "Laboratory Findings",
        "Experimental Data",
        "Dataset Repository",
        "Clinical Studies",
        "Scientific Evidence",
        "Research Analytics",
        "Biological Databases",
        "Knowledge Graphs",
        "Species Discovery",
        "Biodiversity Research",
        "Genome Exploration",
        "Protein Analysis",
        "DNA Sequencing",
        "RNA Studies",
        "Research Metrics",
        "Academic Journals",
        "Publication Insights",
        "Science News",
        "Research Highlights",
        "AI Research Assistant",
        "Gathered Data",
        "Knowledge Discovery",
        "Explore Biology",
        "Discover Life Sciences",
        "Research Navigator",
        "Scientific Trends",
        "Emerging Research",
        "Citation Network",
        "Research Explorer",
        "Evidence-Based Science"
    ];

    const marqueeItems = [...descriptors, ...descriptors];

    return (
    <div>
        <style>{`
            @keyframes marquee {
                0% { transform: translateX(0); }
                100% { transform: translateX(-50%); }
            }
        `}</style>

        <div className="relative border-y border-[#00ff41] bg-black/50 overflow-hidden py-4">
            <div className="flex gap-8 whitespace-nowrap font-['JetBrains Mono',monospace] min-w-max" style={{ animation: 'marquee 48s linear infinite' }}>
                {marqueeItems.map((desc, index) => (
                    <div key={index} className="flex items-center gap-2 text-[#00ff41] font-semibold text-sm">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-dna-icon lucide-dna">
                            <path d="m10 16 1.5 1.5" />
                            <path d="m14 8-1.5-1.5" />
                            <path d="M15 2c-1.798 1.998-2.518 3.995-2.807 5.993" />
                            <path d="m16.5 10.5 1 1" />
                            <path d="m17 6-2.891-2.891" />
                            <path d="M2 15c6.667-6 13.333 0 20-6" />
                            <path d="m20 9 .891.891" />
                            <path d="M3.109 14.109 4 15" />
                            <path d="m6.5 12.5 1 1" />
                            <path d="m7 18 2.891 2.891" />
                            <path d="M9 22c1.798-1.998 2.518-3.995 2.807-5.993" />
                        </svg>
                        <span>{desc}</span>
                    </div>
                ))}
            </div>
        </div>
    </div>
  )
}

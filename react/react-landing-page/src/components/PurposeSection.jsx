const features = [
    {
        icon: "🟣",
        title: "Built for impact",
        description:
            "We identify and nurture a truly diverse team of designers, developers and marketers",
    },
    {
        icon: "🔴",
        title: "In sync with you",
        description:
            "We work the way you do by adapting to your workflows and rhythm we aim to blend in for a seamless.",
    },
];
export default function PurposeSection() {
    return (
        <section id="about" className="w-full bg-gray-50 py-16 px-4 md:px-8 conrainer">
            <div className="container max-w-6xl mx-auto">
                <div className="grid lg:grid-cols-3 grid-cols-1 gap-8">
                    <div>
                        <h4 className="text-sm text-orange-500 font-medium mb-2">ACHIEVE MORE</h4>
                        <h2 className="text-3xl md:w-4/5 md:text-4xl font-bold text-gray-900">
                            Purpose of a convoy is to keep your team
                        </h2>
                    </div>
                    <ul className="col-span-2 grid grid-cols-1 md:grid-cols-2 justify-between gap-8">
                        {features.map((feature, index) => (
                            <li key={index} className="flex items-start gap-4">
                                <div className="w-12 h-12 flex items-center justify-center rounded-lg">
                                    {feature.icon}
                                </div>
                                <div className="text-gray-600">{feature.description}</div>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    );
}

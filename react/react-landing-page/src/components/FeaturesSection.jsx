import MainButton from "./MainButton";

const features = [
    {
        icon: "🔍",
        title: "Find out what you need",
        description: "We present you a proposal and discuss nitty-gritty like",
    },
    {
        icon: "⚙️",
        title: "Work out the details",
        description: "Communication protocols apart from engagement models",
    },
    {
        icon: "🚀",
        title: "We get to work fast",
        description: "Protocols apart from engage models, pricing billing",
    },
];

const FeaturesSection = () => {
    return (
        <section className="container max-w-7xl mx-auto px-4">
            <div className="text-center mb-12">
                <h2 className="text-3xl font-bold mb-4">How can we help your business?</h2>
                <p className="text-gray-600">
                    When you resell besnik, you build trust and increase
                </p>
            </div>

            <ul className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {features.map((feature, index) => (
                    <li key={index} className="flex flex-col items-center p-6">
                        <div
                            className={`w-24 h-24 rounded-full mb-6 flex items-center justify-center ${
                                index === 0
                                    ? "bg-[#F1EFFD]"
                                    : index === 1
                                    ? "bg-[#FFE7E7]"
                                    : "bg-[#FFF3E4]"
                            }`}
                        >
                            <div className="text-3xl">{feature.icon}</div>
                        </div>
                        <h3 className="text-2xl font-medium mb-3">{feature.title}</h3>
                        <p className="text-gray-500 text-center">{feature.description}</p>
                    </li>
                ))}
            </ul>

            <div className="text-center mt-12">
                <MainButton className="relative">
                    Become a Partner
                    <div className="absolute -z-10 w-full h-full rounded-full bg-[var(--color-primary-600)]/30 blur-xl top-0 left-0"></div>
                </MainButton>
            </div>
        </section>
    );
};

export default FeaturesSection;

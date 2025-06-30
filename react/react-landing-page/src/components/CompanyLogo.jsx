const logos = ["slack", "amazon", "woocommerce", "meundies", "sitepoint"];
const CompanyLogo = () => {
    return (
        <div className="w-full container mx-auto overflow-hidden flex flex-col sm:flex-row sm:items-center items-start ">
            <div className="w-[300px] shrink-0 px-8 text-gray-600 border-l-4 border-[var(--color-primary-500)] bg-white py-2 z-10 sm:text-base text-xl font-semibold sm:text-left  mb-8 sm:mb-0">
                Proud partner at <br /> Hubspot & Segment
            </div>
            <ul className="flex animate-marquee gap-8">
                {logos.map((logo, index) => (
                    <li>
                        <img
                            key={index}
                            src={`/assets/${logo}.png`}
                            alt={`Company Logo ${index + 1}`}
                            className="mx-12 h-8 w-36 object-contain grayscale hover:grayscale-0  transition-all"
                        />
                    </li>
                ))}
                {logos.map((logo, index) => (
                    <li>
                        <img
                            key={`duplicate-${index}`}
                            src={`/assets/${logo}.png`}
                            alt={`Company Logo ${index + 1}`}
                            className="mx-12 h-8 w-36 object-contain grayscale hover:grayscale-0  transition-all"
                        />
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default CompanyLogo;

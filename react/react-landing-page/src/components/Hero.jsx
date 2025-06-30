import MainButton from "./MainButton";

export default function Hero() {
    return (
        <section
            id="home"
            className="flex flex-col md:flex-row gap-16 justify-between items-center px-4 sm:px-6 lg:px-8 mt-16 py-8 container mx-auto"
        >
            {/* left side */}
            <div className="w-full md:w-1/2 flex flex-col gap-8">
                {/* badge */}
                <div className="flex items-center gap-2 bg-gray-50 w-fit px-4 py-2 rounded-full hover:bg-gray-100 transition-colors cursor-pointer group">
                    <span className="text-primary group-hover:scale-110 transition-transform">
                        ★
                    </span>
                    <span className="text-sm font-medium">Jump start your growth</span>
                </div>

                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                    We boost the growth for
                    <span className="text-primary relative inline-block">
                        Startup to Fortune 500
                        <span className="absolute bottom-0 left-0 w-full h-0.5 bg-primary-200)]/60"></span>
                    </span>
                    Companies
                    <span className="inline-block ml-2 animate-pulse">⏰</span>
                </h1>
                <p className="text-gray-600 text-lg md:text-xl max-w-xl">
                    Get the most accurate leads, sales people training and conversions, tools and
                    more — all within the same one billing.
                </p>
                <form className="flex gap-2 max-w-md">
                    <input
                        type="email"
                        placeholder="Email Address"
                        className="flex-1 px-6 py-4 border border-gray-200 rounded-xl focus:outline-none focus:border-[var(--color-primary)] focus:ring-2 focus:ring-[var(--color-primary-100)] transition-all text-gray-600"
                    />
                    <MainButton>→</MainButton>
                </form>
            </div>

            {/* right side */}
            <div className="w-full md:w-1/2 md:mt-0 pl-0 md:pl-12">
                <img
                    src={"/assets/hero-image.png"}
                    alt="Team meeting"
                    className="hover:scale-[1.02] transition-transform duration-300"
                />
            </div>
        </section>
    );
}

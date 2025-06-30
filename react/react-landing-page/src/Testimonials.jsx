import Carousel from "./components/Carousel";

const testimonials = [
    {
        id: 1,
        name: "Robin Ayala Doe",
        image: "https://i.pravatar.cc/150?img=10",
        text: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast.",
    },
    {
        id: 2,
        name: "John De marli",
        image: "https://i.pravatar.cc/150?img=2",
        text: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove.",
    },
    {
        id: 3,
        name: "Rowhan Smith",
        image: "https://i.pravatar.cc/150?img=3",
        text: "When she reached the first hills of the Mountains, she had a last view back on the of her hometown Bookmarksgrove, the headline.",
    },
    {
        id: 4,
        name: "Sarah Johnson",
        image: "https://i.pravatar.cc/150?img=5",
        text: "The customer service has been exceptional. They went above and beyond to help me solve my problems and were always available when I needed them.",
    },
    {
        id: 5,
        name: "Michael Chen",
        image: "https://i.pravatar.cc/150?img=4",
        text: "I've been using their services for over a year now and couldn't be happier. The platform is intuitive and the features are exactly what I needed for my business.",
    },
    {
        id: 6,
        image: "https://i.pravatar.cc/150?img=9",
        name: "Emma Wilson",
        text: "What impressed me most was how quickly they responded to my requests. The team is professional, knowledgeable, and truly cares about their customers' success.",
    },
];

export default function Testimonials() {
    const OPTIONS = { dragFree: true };

    return (
        <section id="testimonials" className="py-16 px-4 container max-w-7xl mx-auto">
            <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">What our happy client say</h2>
                <p className="text-gray-600">Things that make it the best place to start trading</p>
            </div>
            {/* carroussel */}
            <Carousel slides={testimonials} options={OPTIONS} />
        </section>
    );
}

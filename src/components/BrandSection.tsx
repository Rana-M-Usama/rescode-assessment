import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";
import BrandCard from "./BrandCard";
const BrandSection = () => {
    const brandGroups = [
        {
            category: "Clothing",
            data: [
                { name: "EVEASY", logo: "https://picsum.photos/200?random=1" },
                { name: "DS", logo: "https://picsum.photos/200?random=2" },
                { name: "BYD", logo: "https://picsum.photos/200?random=3" },
                { name: "BAW", logo: "https://picsum.photos/200?random=4" },
                { name: "EVEASY", logo: "https://picsum.photos/200?random=1" },
                { name: "DS", logo: "https://picsum.photos/200?random=2" },
                { name: "BYD", logo: "https://picsum.photos/200?random=3" },
                { name: "BAW", logo: "https://picsum.photos/200?random=4" },
            ],
        },
        {
            category: "Electronics",
            data: [
                { name: "SERES", logo: "https://picsum.photos/200?random=5" },
                { name: "MG", logo: "https://picsum.photos/200?random=6" },
                { name: "KGM", logo: "https://picsum.photos/200?random=7" },
                { name: "GAC", logo: "https://picsum.photos/200?random=8" },
                { name: "SERES", logo: "https://picsum.photos/200?random=5" },
                { name: "MG", logo: "https://picsum.photos/200?random=6" },
                { name: "KGM", logo: "https://picsum.photos/200?random=7" },
                { name: "GAC", logo: "https://picsum.photos/200?random=8" },
            ],
        },
        {
            category: "Automobile",
            data: [
                { name: "Tesla", logo: "https://picsum.photos/200?random=9" },
                { name: "Ford", logo: "https://picsum.photos/200?random=10" },
                { name: "BMW", logo: "https://picsum.photos/200?random=11" },
                { name: "Mercedes", logo: "https://picsum.photos/200?random=12" },
                { name: "SERES", logo: "https://picsum.photos/200?random=5" },
                { name: "MG", logo: "https://picsum.photos/200?random=6" },
                { name: "KGM", logo: "https://picsum.photos/200?random=7" },
                { name: "GAC", logo: "https://picsum.photos/200?random=8" },
            ],
        },
    ];

    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-50">
            <div className="w-full max-w-6xl px-4">
                <Carousel>
                    <CarouselContent>
                        {brandGroups.map((group, index) => (
                            <CarouselItem key={index}>
                                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 p-4">
                                    {group.data.map((brand, brandIndex) => (
                                        <BrandCard
                                            key={brandIndex}
                                            brandName={brand.name}
                                            logoSrc={brand.logo}
                                        />
                                    ))}
                                </div>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    <CarouselPrevious />
                    <CarouselNext />
                </Carousel>
            </div>
        </div>
    );
};

export default BrandSection;
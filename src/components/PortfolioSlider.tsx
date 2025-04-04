
import { useEffect, useState } from "react";
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from "@/components/ui/carousel";
import { ArrowLeft, ArrowRight, X } from "lucide-react";
import { Dialog, DialogContent } from "@/components/ui/dialog";

// Define the interfaces for our portfolio data
interface PortfolioImage {
  id: number;
  src: string;
  alt: string;
  title: string;
  description: string;
}

export function PortfolioSlider() {
  // State to track autoplay interval
  const [api, setApi] = useState<any>(null);
  
  // State for image viewer modal
  const [selectedImage, setSelectedImage] = useState<PortfolioImage | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  // Portfolio images data
  const portfolioImages: PortfolioImage[] = [
    {
      id: 1,
      src: "/lovable-uploads/c44ecf6e-9a65-42cd-b1d4-d5d92437149a.png",
      alt: "Lion logo design on golden coin",
      title: "Brand Identity",
      description: "Gold lion emblem design with intricate Greek key pattern border"
    },
    {
      id: 2,
      src: "/lovable-uploads/28963e54-3360-4f0b-a42a-0cca469ed5a9.png",
      alt: "Life coach banner design",
      title: "Marketing Material",
      description: "Professional life coach branding with gold accent elements"
    },
    {
      id: 3,
      src: "/lovable-uploads/bf0fc528-735b-452c-84f3-7cd6369afb24.png",
      alt: "Wood crafting brand design",
      title: "Logo Design",
      description: "Areta Woods branding featuring wood grain texture and nature elements"
    },
    {
      id: 4,
      src: "/lovable-uploads/624083fc-4f16-4a9f-9aa4-ffa857a3d271.png",
      alt: "Christmas greeting card design",
      title: "Holiday Design",
      description: "Festive Christmas card with elegant gold accents and typography"
    },
    {
      id: 5,
      src: "/lovable-uploads/68d15f85-1d2e-4227-9855-51e5d25bdbd4.png",
      alt: "Burger promotion poster",
      title: "Food Advertising",
      description: "Bold promotional design for premium burger with striking typography"
    },
    {
      id: 6,
      src: "/lovable-uploads/92f8cb9b-85f0-4c14-9ca3-8ec1b552b492.png",
      alt: "Spicy burger promotion",
      title: "Food Marketing",
      description: "Vibrant red background promotional design for spicy burger"
    },
    {
      id: 7,
      src: "/lovable-uploads/d0c9ea0c-f4ea-4cf6-95dc-953952a3d117.png",
      alt: "Creative business services",
      title: "Corporate Branding",
      description: "Professional business services promotion with clean layout"
    },
    {
      id: 8,
      src: "/lovable-uploads/549862c4-0659-4aa4-bc61-588bb851b877.png",
      alt: "School admission flyer",
      title: "Educational Marketing",
      description: "School admission promotional material with modern green design"
    },
    {
      id: 9,
      src: "/lovable-uploads/511ced14-4214-4ac6-82e9-bb186f20b28e.png",
      alt: "Fitness Christmas promotion",
      title: "Seasonal Fitness Marketing",
      description: "Gym holiday promotion with festive elements and bold typography"
    },
    {
      id: 10,
      src: "/lovable-uploads/b397ed50-0f22-4055-8e70-05cd418e8f7a.png",
      alt: "Visa services advertisement",
      title: "Immigration Services",
      description: "UK visa and immigration services promotional design"
    }
  ];

  // Function to open modal with selected image
  const openImageModal = (image: PortfolioImage) => {
    setSelectedImage(image);
    setIsModalOpen(true);
  };

  // Function to download the current image
  const downloadImage = () => {
    if (selectedImage) {
      // Create an anchor element
      const a = document.createElement('a');
      a.href = selectedImage.src;
      a.download = `felix-design-${selectedImage.id}.png`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
    }
  };

  // Set up autoplay functionality
  useEffect(() => {
    if (!api) return;

    // Interval for auto-sliding
    const autoplayInterval = setInterval(() => {
      api.scrollNext();
    }, 3000); // Change slide every 3 seconds

    // Cleanup on unmount
    return () => clearInterval(autoplayInterval);
  }, [api]);

  return (
    <section id="portfolio" className="py-20 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="section-heading mb-12 text-center">Design Portfolio</h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Showcasing my creative work in graphic design, digital marketing, and visual branding.
          Each project reflects my attention to detail and passion for impactful visual communication.
        </p>

        <div className="max-w-5xl mx-auto">
          <Carousel
            setApi={setApi}
            className="relative"
            opts={{
              loop: true,
              align: "start",
            }}
          >
            <CarouselContent>
              {portfolioImages.map((image) => (
                <CarouselItem key={image.id} className="md:basis-1/2 lg:basis-1/3">
                  <div className="p-1">
                    <div 
                      className="overflow-hidden rounded-lg border border-border shadow-sm cursor-pointer"
                      onClick={() => openImageModal(image)}
                      aria-label={`View ${image.title} design`}
                    >
                      <div className="relative aspect-square overflow-hidden">
                        <img
                          src={image.src}
                          alt={image.alt}
                          className="h-full w-full object-cover transition-transform duration-300 hover:scale-110"
                        />
                      </div>
                      <div className="p-4">
                        <h3 className="font-medium">{image.title}</h3>
                        <p className="text-sm text-muted-foreground mt-1">{image.description}</p>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="mt-4 flex justify-center gap-2">
              <CarouselPrevious 
                variant="outline" 
                className="h-8 w-8 rounded-full relative static translate-y-0 left-0"
              >
                <ArrowLeft className="h-4 w-4" />
              </CarouselPrevious>
              <CarouselNext 
                variant="outline" 
                className="h-8 w-8 rounded-full relative static translate-y-0 right-0"
              >
                <ArrowRight className="h-4 w-4" />
              </CarouselNext>
            </div>
          </Carousel>
        </div>

        {/* Image Modal */}
        <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
          <DialogContent className="max-w-3xl w-full p-1 sm:p-6">
            {selectedImage && (
              <div className="flex flex-col gap-4">
                <div className="relative">
                  <img 
                    src={selectedImage.src} 
                    alt={selectedImage.alt} 
                    className="w-full h-auto object-contain rounded-lg"
                  />
                  <button 
                    onClick={() => setIsModalOpen(false)}
                    className="absolute top-2 right-2 bg-background/80 backdrop-blur-sm p-1 rounded-full"
                    aria-label="Close image viewer"
                  >
                    <X className="h-6 w-6" />
                  </button>
                </div>
                
                <div className="text-center">
                  <h3 className="text-xl font-semibold">{selectedImage.title}</h3>
                  <p className="text-muted-foreground mt-1">{selectedImage.description}</p>
                  
                  <button
                    onClick={downloadImage}
                    className="mt-4 inline-flex items-center px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90"
                  >
                    Download Image
                  </button>
                </div>
              </div>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
}

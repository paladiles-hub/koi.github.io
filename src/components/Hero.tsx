import { Button } from "@/components/ui/button";
import { MapPin, Phone } from "lucide-react";
import heroImage from "@/assets/hero-sushi.jpg";

const Hero = () => {
  const whatsappNumber = "5519365600014";
  const whatsappMessage = encodeURIComponent("Olá! Gostaria de fazer uma reserva no Koi.");
  
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-transparent" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-primary-foreground mb-6 animate-fade-in">
            Koi
          </h1>
          <p className="text-xl sm:text-2xl lg:text-3xl text-primary-foreground/90 mb-8 font-light">
            Gastronomia Japonesa
          </p>
          <p className="text-lg sm:text-xl text-primary-foreground/80 mb-12 max-w-2xl">
            Descubra a autenticidade da cozinha japonesa em cada prato, onde tradição e frescor se encontram.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <Button 
              variant="hero" 
              size="xl"
              asChild
            >
              <a 
                href="https://now.swfast.com.br/koi---mococa"
                target="_blank"
                rel="noopener noreferrer"
              >
                Faça seu Pedido
              </a>
            </Button>
            <Button 
              variant="hero-outline" 
              size="xl"
              asChild
            >
              <a 
                href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Phone className="mr-2 h-5 w-5" />
                Faça sua Reserva
              </a>
            </Button>
          </div>

          {/* Location */}
          <div className="flex items-start gap-3 text-primary-foreground/70">
            <MapPin className="h-5 w-5 mt-1 flex-shrink-0" />
            <p className="text-sm sm:text-base">
              Rua Capitao Jose Gomes, 265<br />
              Mococa, Sao Paulo
            </p>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
        <div className="w-6 h-10 border-2 border-primary-foreground/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary-foreground/50 rounded-full mt-2 animate-bounce" />
        </div>
      </div>
    </section>
  );
};

export default Hero;

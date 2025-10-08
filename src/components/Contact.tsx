import { Button } from "@/components/ui/button";
import { MapPin, Phone, Clock } from "lucide-react";

const Contact = () => {
  const whatsappNumber = "5519365600014";
  const whatsappMessage = encodeURIComponent("Olá! Gostaria de entrar em contato.");
  
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">
            Visite-nos
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-secondary to-accent mx-auto" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="flex items-start gap-4">
              <div className="bg-primary/10 p-3 rounded-lg">
                <MapPin className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-2">Endereço</h3>
                <p className="text-muted-foreground">
                  Rua Capitao Jose Gomes 265<br />
                  Mococa, BR 13730-060
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-primary/10 p-3 rounded-lg">
                <Phone className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-2">Telefone</h3>
                <p className="text-muted-foreground">+55 19 3656 0014</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-primary/10 p-3 rounded-lg">
                <Clock className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-2">Horário</h3>
                <p className="text-muted-foreground">
                  Segunda a Sábado: 11:00 - 23:00<br />
                  Domingo: 11:00 - 22:00
                </p>
              </div>
            </div>

            <Button 
              variant="default" 
              size="lg"
              className="w-full sm:w-auto"
              asChild
            >
              <a 
                href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Phone className="mr-2 h-5 w-5" />
                Entre em Contato
              </a>
            </Button>
          </div>

          {/* Map */}
          <div className="h-[400px] rounded-lg overflow-hidden shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3698.8!2d-47.0!3d-21.47!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjHCsDI4JzEyLjAiUyA0N8KwMDAnMDAuMCJX!5e0!3m2!1spt-BR!2sbr!4v1234567890"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Localização do Restaurante Koi"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

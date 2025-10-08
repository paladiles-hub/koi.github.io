import { Card, CardContent } from "@/components/ui/card";
import combinadoImage from "@/assets/combinado.jpg";
import sashimiImage from "@/assets/sashimi-new.jpg";
import pokeImage from "@/assets/poke.gif";
import temakiImage from "@/assets/temaki.jpg";
import teppanImage from "@/assets/teppan.jpg";
import yakisobaImage from "@/assets/yakisoba.jpg";

const menuItems = [
  {
    name: "Combinados",
    description: "Seleção especial com variedades de sushis, sashimis e rolls frescos",
    image: combinadoImage,
  },
  {
    name: "Sashimi",
    description: "Fatias premium de peixes frescos seleccionados com gergelim tostado",
    image: sashimiImage,
  },
  {
    name: "Poke",
    description: "Bowl havaiiano com peixe fresco, legumes coloridos e temperos especiais",
    image: pokeImage,
  },
  {
    name: "Temaki",
    description: "Cone de alga nori recheado com salmão fresco e ingredientes selecionados",
    image: temakiImage,
  },
  {
    name: "Teppan Yaki",
    description: "Peixe grelhado na chapa quente acompanhado de legumes frescos",
    image: teppanImage,
  },
  {
    name: "Yakisoba",
    description: "Macarrão salteado com frutos do mar, legumes e molho especial",
    image: yakisobaImage,
  },
];

const Menu = () => {
  return (
    <section className="py-20 bg-muted">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">
            Nossos Destaques
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-secondary to-accent mx-auto" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {menuItems.map((item, index) => (
            <Card 
              key={index} 
              className="overflow-hidden group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-border"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold text-foreground mb-3">
                  {item.name}
                </h3>
                <p className="text-muted-foreground">
                  {item.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Menu;

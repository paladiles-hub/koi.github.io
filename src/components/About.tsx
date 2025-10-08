const About = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">
            Bem-vindo ao Koi
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-secondary to-accent mx-auto mb-8" />
          <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
            No Koi, celebramos a rica tradição da culinária japonesa com ingredientes frescos 
            e preparações autênticas. Cada prato é uma obra de arte cuidadosamente elaborada 
            para proporcionar uma experiência gastronômica inesquecível.
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Nossa paixão é compartilhar a essência da cultura japonesa através de sabores 
            únicos e apresentações elegantes, criando momentos especiais para nossos clientes.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;

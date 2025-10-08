const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h3 className="text-2xl font-bold mb-2">Koi</h3>
          <p className="text-sm text-primary-foreground/80 mb-4">
            Culinária Japonesa Autêntica
          </p>
          <p className="text-sm text-primary-foreground/60">
            © {new Date().getFullYear()} Koi Restaurante. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

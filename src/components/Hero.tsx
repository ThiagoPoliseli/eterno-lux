
export default function Hero() {
  return (
    <section id="inicio" className="pt-20">
      <div className="relative h-[80vh] flex items-center">
        <img 
          src="https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&q=80"
          alt="Elegant jewelry collection"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative container mx-auto px-4">
          <div className="max-w-2xl text-white">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              Elegância em Cada Detalhe
            </h1>
            <p className="text-xl mb-8">
              Descubra nossa exclusiva coleção de semi joias que combinam beleza atemporal com qualidade excepcional.
            </p>
            <div className="flex space-x-4">
              <a href="#catalogo" className="btn-primary">
                Ver Catálogo Completo
              </a>
              <a href="#colecoes" className="px-6 py-3 border-2 border-white text-white rounded-md hover:bg-white hover:text-gray-900 transition-colors duration-300">
                Nossas Coleções
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
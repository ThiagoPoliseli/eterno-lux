import React from 'react';

const collections = [
  {
    title: 'Coleção Banhados a ouro 18k',
    image: 'img/DALL·E 2025-01-30 09.53.37 - A luxurious black briefcase, slightly open, revealing neatly arranged 18k gold chains inside. The gold chains shine under a soft light, emphasizing th.webp',
    description: 'Peças delicadas com designs exclusivos, banhadas a ouro 18k',
    category: 'correntes'
  },
  {
    title: 'Coleção Prata 925',
    image: 'img/MaletaPrata.webp',
    description: 'Venha conecer nossa coleção de prata 925',
    category: 'brincos'
  },
  {
    title: 'Coleção Feminina',
    image: 'img/maleta_feminina.webp',
    description: 'Conheça nossa coleção de joias femininas',
    category: 'aneis'
  }
];

export default function Collections() {
  return (
    <section id="colecoes" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="section-title">Nossas Coleções</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {collections.map((collection) => (
            <div key={collection.title} className="group bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
              <div className="relative overflow-hidden">
                <img 
                  src={collection.image}
                  alt={collection.title}
                  className="w-full h-64 object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-semibold mb-3">{collection.title}</h3>
                <p className="text-gray-600 mb-4">{collection.description}</p>
                <a 
                  href={`#catalogo`}
                  className="inline-flex items-center text-[#B8860B] font-medium hover:text-[#8B6508] transition-colors group-hover:translate-x-2 duration-300"
                >
                  Ver Coleção 
                  <span className="ml-2">→</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
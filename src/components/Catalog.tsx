import { useState, useMemo } from 'react';
import CatalogItem from './CatalogItem';
import SearchBar from './SearchBar';
import { catalogData } from '../data/catalogData';
import { ChevronLeft, ChevronRight, ChevronsLeft, ChevronsRight } from 'lucide-react';

export default function Catalog() {
  const [activeCategory, setActiveCategory] = useState('todos');
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState('');
  const itemsPerPage = 12;
  
  const filteredItems = useMemo(() => {
    let items = activeCategory === 'todos' 
      ? catalogData 
      : catalogData.filter(item => item.category === activeCategory);

    if (searchTerm.trim()) {
      const searchTermLower = searchTerm.toLowerCase();
      items = items.filter(item => 
        item.name.toLowerCase().includes(searchTermLower) ||
        item.category.toLowerCase().includes(searchTermLower) ||
        item.price.includes(searchTerm)
      );
    }

    return items;
  }, [activeCategory, searchTerm]);

  const totalPages = Math.ceil(filteredItems.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const displayedItems = filteredItems.slice(startIndex, startIndex + itemsPerPage);

  const categories = ['todos', 'pingentes', 'correntes', 'brincos', 'pulseiras', 'escapularios','prata925', 'relogios','colecao feminina'];

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    document.getElementById('catalogo')?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleCategoryChange = (category: string) => {
    setActiveCategory(category);
    setCurrentPage(1);
    setSearchTerm('');
  };

  const handleSearch = (value: string) => {
    setSearchTerm(value);
    setCurrentPage(1);
  };

  const getVisiblePages = () => {
    const delta = 2;
    const range = [];
    const rangeWithDots = [];
    let l;

    for (let i = 1; i <= totalPages; i++) {
      if (i === 1 || i === totalPages || (i >= currentPage - delta && i <= currentPage + delta)) {
        range.push(i);
      }
    }

    for (const i of range) {
      if (l) {
        if (i - l === 2) {
          rangeWithDots.push(l + 1);
        } else if (i - l !== 1) {
          rangeWithDots.push('...');
        }
      }
      rangeWithDots.push(i);
      l = i;
    }

    return rangeWithDots;
  };

  return (
    <section id="catalogo" className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <h2 className="section-title text-white mb-12">Catálogo Completo</h2>
        
        <SearchBar searchTerm={searchTerm} onSearch={handleSearch} />
        
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => handleCategoryChange(category)}
              className={`px-6 py-3 rounded-full capitalize transition-all duration-300 transform hover:scale-105 ${
                activeCategory === category
                  ? 'bg-[#B8860B] text-white shadow-lg'
                  : 'bg-gray-900 text-gray-300 hover:bg-[#B8860B]/20'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {filteredItems.length === 0 ? (
          <div className="text-center text-gray-400 py-12">
            <p className="text-xl">Nenhum produto encontrado</p>
            <p className="mt-2">Tente uma busca diferente ou remova os filtros</p>
          </div>
        ) : (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mb-12">
              {displayedItems.map((item) => (
                <CatalogItem key={item.id} {...item} />
              ))}
            </div>

            {totalPages > 1 && (
              <div className="flex flex-col items-center space-y-4">
                <div className="flex items-center space-x-2">
                  <button
                    onClick={() => handlePageChange(1)}
                    disabled={currentPage === 1}
                    className="p-2 rounded-full bg-gray-900 text-white disabled:opacity-50 disabled:cursor-not-allowed hover:bg-[#B8860B] transition-colors"
                    title="Primeira página"
                  >
                    <ChevronsLeft className="h-5 w-5" />
                  </button>

                  <button
                    onClick={() => handlePageChange(currentPage - 1)}
                    disabled={currentPage === 1}
                    className="p-2 rounded-full bg-gray-900 text-white disabled:opacity-50 disabled:cursor-not-allowed hover:bg-[#B8860B] transition-colors"
                    title="Página anterior"
                  >
                    <ChevronLeft className="h-5 w-5" />
                  </button>
                  
                  <div className="flex space-x-2">
                    {getVisiblePages().map((page, index) => (
                      typeof page === 'number' ? (
                        <button
                          key={index}
                          onClick={() => handlePageChange(page)}
                          className={`w-10 h-10 rounded-full ${
                            currentPage === page
                              ? 'bg-[#B8860B] text-white'
                              : 'bg-gray-900 text-white hover:bg-[#B8860B]/20'
                          } transition-colors`}
                        >
                          {page}
                        </button>
                      ) : (
                        <span key={index} className="w-10 h-10 flex items-center justify-center text-gray-400">
                          {page}
                        </span>
                      )
                    ))}
                  </div>

                  <button
                    onClick={() => handlePageChange(currentPage + 1)}
                    disabled={currentPage === totalPages}
                    className="p-2 rounded-full bg-gray-900 text-white disabled:opacity-50 disabled:cursor-not-allowed hover:bg-[#B8860B] transition-colors"
                    title="Próxima página"
                  >
                    <ChevronRight className="h-5 w-5" />
                  </button>

                  <button
                    onClick={() => handlePageChange(totalPages)}
                    disabled={currentPage === totalPages}
                    className="p-2 rounded-full bg-gray-900 text-white disabled:opacity-50 disabled:cursor-not-allowed hover:bg-[#B8860B] transition-colors"
                    title="Última página"
                  >
                    <ChevronsRight className="h-5 w-5" />
                  </button>
                </div>

                <div className="text-gray-400">
                  Mostrando {startIndex + 1}-{Math.min(startIndex + itemsPerPage, filteredItems.length)} de {filteredItems.length} produtos
                </div>
              </div>
            )}
          </>
        )}
      </div>
    </section>
  );
}
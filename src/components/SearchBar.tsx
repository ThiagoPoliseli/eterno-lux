import React from 'react';
import { Search } from 'lucide-react';

interface SearchBarProps {
  searchTerm: string;
  onSearch: (value: string) => void;
}

export default function SearchBar({ searchTerm, onSearch }: SearchBarProps) {
  return (
    <div className="relative max-w-xl mx-auto mb-8">
      <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
        <Search className="h-5 w-5 text-gray-400" />
      </div>
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => onSearch(e.target.value)}
        placeholder="Buscar produtos..."
        className="w-full pl-12 pr-4 py-3 bg-gray-900 text-white placeholder-gray-400 rounded-full border border-gray-700 focus:border-[#B8860B] focus:ring-2 focus:ring-[#B8860B] focus:ring-opacity-50 transition-all duration-300"
      />
    </div>
  );
}
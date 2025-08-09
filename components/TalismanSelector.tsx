
import React from 'react';
import { Talisman } from '../types';

interface TalismanSelectorProps {
  talismans: Talisman[];
  selectedTalismanId: string | null;
  onSelect: (talisman: Talisman) => void;
}

const TalismanSelector: React.FC<TalismanSelectorProps> = ({ talismans, selectedTalismanId, onSelect }) => {
  return (
    <div className="w-full max-w-md mb-8">
        <h2 className="text-3xl font-semibold text-center text-white mb-4">Select Bujeok</h2>
        <div className="grid grid-cols-2 gap-4">
        {talismans.map((talisman) => (
            <button
            key={talisman.id}
            onClick={() => onSelect(talisman)}
            className={`
                p-4 border-2 transition-all duration-300 ease-in-out transform hover:-translate-y-1
                ${selectedTalismanId === talisman.id
                    ? 'bg-white border-white text-zinc-900 shadow-lg shadow-white/20'
                    : 'bg-zinc-800 border-zinc-700 text-white hover:bg-zinc-700 hover:border-white'
                }
            `}
            >
            <p className="text-lx font-bold">{talisman.name}</p>
            <p className="text-s mt-1 opacity-80">{talisman.description}</p>
            </button>
        ))}
        </div>
    </div>
  );
};

export default TalismanSelector;

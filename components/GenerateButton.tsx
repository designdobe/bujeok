import React from 'react';

interface GenerateButtonProps {
  onClick: () => void;
  isLoading: boolean;
  isSelected: boolean;
}

const GenerateButton: React.FC<GenerateButtonProps> = ({ onClick, isLoading, isSelected }) => {
  const isDisabled = isLoading || !isSelected;

  return (
    <div className="w-full max-w-md flex flex-col items-center">
      <h2 className="text-xl font-semibold text-center text-white mb-4"></h2>
      <button
        onClick={onClick}
        disabled={isDisabled}
        className={`
          w-full py-4 px-6 text-4xl font-bold transition-all duration-300 ease-in-out
          flex items-center justify-center
          ${isDisabled
            ? 'bg-zinc-700 text-zinc-500 cursor-not-allowed'
            : 'bg-red-700 text-white hover:bg-red-600 shadow-lg shadow-red-600/30 transform hover:scale-105'
          }
        `}
      >
        {isLoading ? (
          <>
            <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            Drawing Bujeok...
          </>
        ) : (
          'Generate!'
        )}
      </button>
    </div>
  );
};

export default GenerateButton;
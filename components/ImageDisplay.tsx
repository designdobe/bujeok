
import React from 'react';
import LoadingSpinner from './LoadingSpinner';

interface ImageDisplayProps {
  imageUrl: string | null;
  isLoading: boolean;
  error: string | null;
  talismanName?: string | null;
}

const ImageDisplay: React.FC<ImageDisplayProps> = ({ imageUrl, isLoading, error, talismanName }) => {
  return (
    <div className="w-full max-w-sm aspect-[9/16] bg-zinc-800 shadow-2xl border-2 border-zinc-700 flex flex-col items-center justify-center p-4 transition-all duration-500">
      {isLoading && <LoadingSpinner />}
      
      {error && !isLoading && (
        <div className="text-center text-red-400 px-4">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <p className="font-semibold">오류</p>
          <p className="text-sm">{error}</p>
        </div>
      )}

      {imageUrl && !isLoading && (
        <div className="w-full h-full relative animate-fade-in">
            <img
            src={imageUrl}
            alt={`${talismanName} 부적`}
            className="w-full h-full object-cover rounded-lg"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-lg"></div>
            <p className="absolute bottom-4 left-4 text-white text-lg font-bold" style={{textShadow: '0 1px 3px rgba(0,0,0,0.7)'}}>
                {talismanName} 부적
            </p>
        </div>
      )}

      {!isLoading && !error && !imageUrl && (
        <div className="text-center text-zinc-500 px-4">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 mx-auto mb-4 opacity-30" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
          <p className="font-semibold text-lg">생성될 부적이 여기에 표시됩니다.</p>
          <p className="text-sm mt-1">부적 종류를 선택하고 생성 버튼을 누르세요.</p>
        </div>
      )}
      <style>{`
        .animate-fade-in {
          animation: fadeIn 0.5s ease-in-out;
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: scale(0.95); }
          to { opacity: 1; transform: scale(1); }
        }
      `}</style>
    </div>
  );
};

export default ImageDisplay;

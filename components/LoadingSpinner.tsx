
import React, { useState, useEffect } from 'react';

const loadingMessages = [
  "천지신명(天地神明)의 가호를 받아...",
  "재수(財數)를 열어 부를 부르고...",
  "악(惡)을 물리치고 길(吉)을 들이다...",
  "소망(所望)이 이뤄지며 만사형통하소서...",
  "집안(家宅)에 평안(便安)과 길운(吉運)을 부르다..."
];

const LoadingSpinner: React.FC = () => {
  const [randomMessage, setRandomMessage] = useState<string>('');

  useEffect(() => {
    // Select a random message when the component mounts
    const message = loadingMessages[Math.floor(Math.random() * loadingMessages.length)];
    setRandomMessage(message);
  }, []); // Empty dependency array ensures this runs only once

  return (
    <div className="flex flex-col items-center justify-center text-white text-center px-4">
      <div className="w-16 h-16 border-4 border-t-4 border-white border-t-transparent rounded-full animate-spin"></div>
      <p className="mt-4 text-lg font-semibold">부적을 만들고 있습니다...</p>
      <p className="text-sm text-zinc-400 mt-2 min-h-[1.25rem]">{randomMessage}</p>
    </div>
  );
};

export default LoadingSpinner;

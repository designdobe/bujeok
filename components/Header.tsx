
import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="text-center mb-8">
      <h1 className="text-8xl md:text-5xl font-bold text-white" style={{'textShadow': '0 0 10px rgba(255, 255, 255, 0.3)'}}>
        Bujeok Shop
      </h1>
      <p className="text-zinc-400 mt-2 text-lg">당신의 소원을 담아 부적을 만들어보세요.</p>
    </header>
  );
};

export default Header;

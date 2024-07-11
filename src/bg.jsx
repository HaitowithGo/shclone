// src/Background.jsx
import React from 'react';

const Background = () => {
  return (
    <div className="w-full h-full bg-black">
      <div className="animate-pulse absolute w-[600px] h-[600px] top-[-60px] left-[-10px] bg-nw rounded-full filter blur-lar opacity-80"></div>
      <div className="animate-pulse absolute w-[650px] h-[650px] top-[-300px] right-[300px] bg-red rounded-full filter blur-lar opacity-80"></div>
      <div className="animate-pulse absolute w-[750px] h-[750px] bottom-[-190px] right-[-40px] bg-blue rounded-full filter blur-lar opacity-80"></div>
    </div>
  );
};

export default Background;

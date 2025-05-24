import { useState, useEffect } from 'react';
import logo from '../../logo.svg';

const ThinkWithAKink = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkIfMobile();
    window.addEventListener('resize', checkIfMobile);
    
    return () => window.removeEventListener('resize', checkIfMobile);
  }, []);

  return (
    <section className="min-h-screen bg-black text-white px-4 sm:px-6 py-6 sm:py-10 flex flex-col justify-between overflow-hidden">
      
      
      <header className="flex justify-between items-start w-full">
      
        <div className="flex-shrink-0">
          <img 
            src={logo} 
            alt="Plan R Logo" 
            className="w-20 h-auto sm:w-24 md:w-28 lg:w-36" 
          />
        </div>
        
        <div className="flex-1"></div>
        
        <div className="grid grid-cols-3 gap-1 sm:gap-1.5 p-1 sm:p-2 flex-shrink-0">
          {Array(9).fill(0).map((_, i) => (
            <div key={i} className="w-1.5 h-1.5 sm:w-2 sm:h-2 md:w-2.5 md:h-2.5 bg-white rounded-full" />
          ))}
        </div>
      </header>

     
      <div className="flex-1 flex flex-col justify-center items-center px-2 sm:px-4 py-8 sm:py-16">
        
        <div className="hidden md:flex items-center justify-center w-full">
          <h1 className="text-4xl lg:text-5xl xl:text-6xl font-light mr-4 lg:mr-8">
            Think with a
          </h1>
          <div className="relative">
            <h2 
              className="text-6xl lg:text-8xl xl:text-9xl font-bold leading-none"
              style={{
                textShadow: `
                  3px 3px 0px #7c2d92,
                  6px 6px 0px #a855f7,
                  9px 9px 0px #c084fc
                `,
                fontFamily: 'serif',
                fontWeight: 'bold',
                color: 'white'
              }}
            >
              kink
            </h2>
          </div>
        </div>

        <div className="md:hidden flex flex-col items-center justify-center text-center w-full">
          <h1 className="text-2xl sm:text-3xl font-light mb-4 sm:mb-6">
            Think with a
          </h1>
          <div className="relative">
            <h2 
              className="text-5xl sm:text-6xl font-bold leading-none"
              style={{
                textShadow: isMobile ? `
                  2px 2px 0px #7c2d92,
                  4px 4px 0px #a855f7,
                  6px 6px 0px #c084fc
                ` : `
                  3px 3px 0px #7c2d92,
                  6px 6px 0px #a855f7,
                  9px 9px 0px #c084fc
                `,
                fontFamily: 'serif',
                fontWeight: 'bold',
                color: 'white'
              }}
            >
              kink
            </h2>
          </div>
        </div>

        <div className="hidden sm:flex md:hidden flex-col items-center justify-center text-center w-full">
          <h1 className="text-3xl font-light mb-6">
            Think with a
          </h1>
          <div className="relative">
            <h2 
              className="text-7xl font-bold leading-none"
              style={{
                textShadow: `
                  3px 3px 0px #7c2d92,
                  6px 6px 0px #a855f7,
                  9px 9px 0px #c084fc
                `,
                fontFamily: 'serif',
                fontWeight: 'bold',
                color: 'white'
              }}
            >
              kink
            </h2>
          </div>
        </div>
      </div>

      <div className="h-8 sm:h-12 md:h-16 lg:h-20"></div>
    </section>
  );
};

export default ThinkWithAKink;
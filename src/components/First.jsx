const ThinkWithAKink = () => {
  return (
    <section className="min-h-screen bg-black text-white px-6 py-10 flex flex-col justify-between">
      
      <header className="flex justify-between items-start">
         <img src="/logo.svg" alt="Plan R Logo" className="w-28 md:w-36" />
        <div className="text-white text-2xl md:text-3xl font-light tracking-wide">
         
        </div>
        <div className="grid grid-cols-3 gap-1.5 p-2">
          {Array(9).fill(0).map((_, i) => (
            <div key={i} className="w-2.5 h-2.5 bg-white rounded-full" />
          ))}
        </div>
      </header>

      <div className="flex  mt-20 md:mt-32 text-center">
        <h1 className="text-4xl justify-center items-center md:text-6xl font-light mb-8 md:mb-12">Think with a</h1>
        <div className="mt-14 text-[120px] md:text-[180px] lg:text-[220px] font-bold leading-none relative">
           <h2 className="relative inline-block" style={{
            textShadow: `
              4px 4px 0px #7c2d92,
              8px 8px 0px #a855f7,
              12px 12px 0px #c084fc
            `,
            fontFamily: 'serif',
            fontWeight: 'bold',
            color: 'white'
          }}>
            kink
          </h2>
        </div>
      </div>
      <div className="h-20"></div>
    </section>
  );
};

export default ThinkWithAKink;
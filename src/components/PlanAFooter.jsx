
const PlanAFooter = () => {
  return (
    <footer className="bg-gray-50 relative overflow-hidden py-20 px-6">
      <div className="absolute mt-70 inset-0 flex items-center justify-center pointer-events-none">
        <div className="text-gray-400 text-[2rem] md:text-[2rem] lg:text-[16rem] xl:text-[4rem] leading-none whitespace-nowrap select-none">
          Think With A Kink Think With A Kink Think With A Kink
        </div>
      </div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid md:grid-cols-3 gap-12">
          
          <div className="space-y-8">
            <div className="flex items-center space-x-2">
              <span className="text-2xl font-bold text-gray-900">plan-</span>
              <div className="w-8 h-8 bg-gradient-to-br from-pink-500 to-purple-600 rounded-md flex items-center justify-center">
                <div className="w-4 h-4 bg-white rounded-sm"></div>
              </div>
            </div>
            
            <nav className="space-y-4">
              <a href="#" className="block text-gray-700 hover:text-gray-900 font-medium text-lg transition-colors">
                Home
              </a>
              <a href="#" className="block text-gray-700 hover:text-gray-900 font-medium text-lg transition-colors">
                Expertise
              </a>
              <a href="#" className="block text-gray-700 hover:text-gray-900 font-medium text-lg transition-colors">
                About
              </a>
              <a href="#" className="block text-gray-700 hover:text-gray-900 font-medium text-lg transition-colors">
                Insights
              </a>
              <a href="#" className="block text-gray-700 hover:text-gray-900 font-medium text-lg transition-colors">
                Work
              </a>
            </nav>
          </div>
          
          <div className="space-y-4">
            <a href="#" className="block text-gray-700 hover:text-gray-900 font-medium text-lg transition-colors">
              Instagram
            </a>
            <a href="#" className="block text-gray-700 hover:text-gray-900 font-medium text-lg transition-colors">
              LinkedIn
            </a>
            <a href="#" className="block text-gray-700 hover:text-gray-900 font-medium text-lg transition-colors">
              Twitter
            </a>
          </div>
          
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-pink-500">Contact Us</h3>
            <div className="space-y-2">
              <p className="text-gray-700 leading-relaxed">
                Plot 05, Baner - Mahalunge Rd,<br />
                Sanyadri Farms, Lalit Estate,<br />
                Baner, Pune, Maharashtra 411045
              </p>
            </div>
          </div>
          
        </div>
      </div>
      
      <div className="absolute inset-0 bg-gradient-to-t from-gray-50/80 to-transparent pointer-events-none"></div>
    </footer>
  );
};

export default PlanAFooter;
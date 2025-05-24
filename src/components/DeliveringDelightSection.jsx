import React from 'react';

const DeliveringDelightSection = () => {
  const testimonials = [
    {
      id: 1,
      text: "Plan-a worked on designated web pages while keeping elements the team helped pre-approved within his own design elements the team helped pre-approved",
      author: "Radhika Phatake",
      role: "Brand Manager",
      avatar: "RP"
    },
    {
      id: 2,
      text: "Restrictions of our branding and recycling new UI elements the team helped pre-approved within his own design within the tight",
      author: "Sunil Bharadvaj",
      role: "Creative Director", 
      avatar: "SB"
    },
    {
      id: 3,
      text: "Plan-a worked on designated web pages while keeping elements the team helped pre-approved within his own design within the tight restrictions of our branding",
      author: "Manik Manha",
      role: "CEO",
      avatar: "MM"
    }
  ];

  const companyLogos = [
    { name: "TATA STEEL", logo: "TATA STEEL" },
    { name: "Kasturi", logo: "Kasturi" },
    { name: "JOHN DEERE", logo: "JOHN DEERE" },
    { name: "SONIGARA CORP", logo: "SONIGARA CORP" }
  ];

  return (
    <div className="bg-black text-white py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 mt-0">
            Delivering Delight
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            In their words - our awesome clients speak about the 'masala' we create together
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-16 relative">
          <div className="absolute -right-8 top-1/2 transform -translate-y-1/2 w-24 h-24 rounded-full opacity-80 hidden lg:block"></div>
          
          {testimonials.map((testimonial, index) => (
            <div key={testimonial.id} className="bg-gray-900 p-6 rounded-lg relative">
              <div className="mb-6">
                <p className="text-gray-300 leading-relaxed">
                  "{testimonial.text}"
                </p>
              </div>
              
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-semibold text-sm">
                  {testimonial.avatar}
                </div>
                <div>
                  <h4 className="font-semibold text-white">{testimonial.author}</h4>
                  <p className="text-gray-400 text-sm">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mb-12">
          <p className="text-gray-400 mb-8 text-lg">
            Worked with some of the best out there
          </p>
          
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
            {companyLogos.map((company, index) => (
              <div key={index} className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors duration-300">
                <div className="w-8 h-8 bg-gradient-to-br from-orange-500 to-red-600 rounded-full flex items-center justify-center">
                  <span className="text-white text-xs font-bold">
                    {company.name.charAt(0)}
                  </span>
                </div>
                <span className="font-medium">{company.logo}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-2">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Become a plan-a-teer
          </h2>
          <p className="text-gray-300 mb-8 max-w-2xl text-lg">
            We're always looking for anyone (and that could be you) aspiring to 
            make their mark and carve out their own creative process to deliver 
            tangential thoughts that are right for our clients.
          </p>
          
          <button className="bg-white text-black px-8 py-3 rounded-full font-semibold hover:bg-gray-200 transition-colors duration-300 inline-flex items-center space-x-2">
            <span>Apply Here</span>
            <span>→</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeliveringDelightSection;
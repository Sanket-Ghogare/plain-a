import React, { useState } from "react";

const WorkCard = ({ imageSrc, title, location, className = "" }) => {
  return (
    <div className={`group cursor-pointer ${className}`}>
      <div className="relative overflow-hidden rounded-lg mb-4">
        <img
          src={imageSrc}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </div>
      <div className="text-left">
        <h3 className="text-white text-xl md:text-2xl font-light mb-1">
          {title}
        </h3>
        <p className="text-gray-400 text-lg md:text-xl">{location}</p>
      </div>
    </div>
  );
};

const SectionHeader = () => {
  return (
    <div className="text-center mb-16 md:mb-20">
      <h2
        className="relative text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-light mb-6 md:mb-8 inline-block"
        style={{
          textShadow: `
              4px 4px 0px #7c2d92,
              8px 8px 0px #a855f7,
              12px 12px 0px #c084fc
            `,
          fontFamily: "serif",
          fontWeight: "bold",
          color: "white",
        }}
      >
        Latest Work Released
      </h2>

      <p className="text-gray-300 text-lg md:text-xl lg:text-2xl max-w-4xl mx-auto leading-relaxed">
        Witness our recent victories, showcasing how we bring brands closer to
        their audience, from fast growth SMEs to Fortune 100 global
        organisations.
      </p>
    </div>
  );
};

const PortfolioGrid = () => {
  const workItems = [
    {
      id: 1,
      imageSrc:
        "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=600&fit=crop",
      title: "Corporate Campus",
      location: "New York, USA",
    },
    {
      id: 2,
      imageSrc:
        "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=800&h=600&fit=crop",
      title: "Rural Landscape",
      location: "Vermont, USA",
    },
    {
      id: 3,
      imageSrc:
        "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=800&h=600&fit=crop",
      title: "Modern Architecture",
      location: "Tokyo, Japan",
    },
    {
      id: 4,
      imageSrc:
        "https://images.unsplash.com/photo-1518780664697-55e3ad937233?w=800&h=600&fit=crop",
      title: "Urban Development",
      location: "London, UK",
    },
  ];

  return (
    <div className="space-y-16 md:space-y-20 lg:space-y-24">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16">
        <div className="lg:row-span-2">
          <WorkCard
            imageSrc={workItems[0].imageSrc}
            title={workItems[0].title}
            location={workItems[0].location}
            className="h-[400px] md:h-[500px] lg:h-[600px]"
          />
        </div>

        <div className="lg:mt-32">
          <WorkCard
            imageSrc={workItems[1].imageSrc}
            title={workItems[1].title}
            location={workItems[1].location}
            className="h-[300px] md:h-[350px] lg:h-[400px]"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16">
        <div className="lg:row-span-2">
          <WorkCard
            imageSrc={workItems[2].imageSrc}
            title={workItems[2].title}
            location={workItems[2].location}
            className="h-[400px] md:h-[500px] lg:h-[600px]"
          />
        </div>

        <div className="lg:mt-32">
          <WorkCard
            imageSrc={workItems[3].imageSrc}
            title={workItems[3].title}
            location={workItems[3].location}
            className="h-[300px] md:h-[350px] lg:h-[400px]"
          />
        </div>
      </div>
    </div>
  );
};

const AllProjectsButton = () => {
  return (
    <div className="text-center mt-20 mb-16 md:mb-20 lg:mb-24">
      <button className="bg-white text-black px-8 py-3 md:px-10 md:py-4 rounded-full text-lg md:text-xl font-medium hover:bg-gray-100 transition-colors duration-300 shadow-lg hover:shadow-xl">
        All Projects
      </button>
    </div>
  );
};

const ExpertiseSection = () => {
  return (
    <div className="mb-16 md:mb-20 lg:mb-24">
      <div className="text-center mb-12 md:mb-16">
        <h2 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-light mb-6 md:mb-8">
          <span className="bg-gradient-to-r from-pink-400 via-purple-400 to-pink-500 bg-clip-text text-transparent">
            Expertise
          </span>
        </h2>
        <p className="text-gray-300 text-lg md:text-xl lg:text-2xl max-w-4xl mx-auto leading-relaxed">
          We use a unique mix of consumer data, industry insights, creative
          thinking and focused execution to give every brand that extra oomph!
          Our team of driven experts have delivered spell-binding ROAS to viral
          videos.
        </p>
      </div>
    </div>
  );
};

const ServiceCategory = ({ title, services, isExpanded = false, onToggle }) => {
  return (
    <div className="border-b border-gray-700 last:border-b-0">
      <div
        className="flex items-center justify-between py-6 md:py-8 cursor-pointer group"
        onClick={onToggle}
      >
        <h3 className="text-2xl md:text-3xl lg:text-4xl font-light text-white group-hover:text-pink-400 transition-colors duration-300">
          {title}
        </h3>
        <div className="text-white text-2xl md:text-3xl group-hover:text-pink-400 transition-colors duration-300">
          {isExpanded ? "−" : "+"}
        </div>
      </div>

      {isExpanded && (
        <div className="pb-6 md:pb-8">
          <div className="bg-yellow-400 text-black px-4 py-3 md:py-4 rounded-lg overflow-hidden relative">
            <div className="flex items-center">
              <div className="flex space-x-2 md:space-x-4 whitespace-nowrap animate-scroll">
                {services.concat(services, services).map((service, index) => (
                  <span
                    key={index}
                    className="text-sm md:text-base lg:text-lg font-medium"
                  >
                    {service} |
                  </span>
                ))}
              </div>
              <div className="text-xl md:text-2xl ml-4 flex-shrink-0">→</div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

const ServicesList = () => {
  const [expandedService, setExpandedService] = useState("Strategy");

  const serviceCategories = [
    {
      title: "Strategy",
      services: [
        "Brand Strategy",
        "Market Research",
        "Consumer Insights",
        "Creative Strategy",
        "Digital Strategy",
        "Content Strategy",
        "Social Media Strategy",
        "Campaign Strategy",
        "Performance Strategy",
      ],
    },
    {
      title: "Design",
      services: [
        "Brand Identity",
        "UI/UX Design",
        "Graphic Design",
        "Web Design",
        "Print Design",
        "Packaging Design",
        "Motion Graphics",
        "Illustration",
        "Photography",
      ],
    },
    {
      title: "Performance Marketing",
      services: [
        "PPC Advertising",
        "Social Media Ads",
        "SEO Optimization",
        "Email Marketing",
        "Conversion Optimization",
        "Analytics",
        "Marketing Automation",
        "Lead Generation",
        "ROI Tracking",
      ],
    },
  ];

  const toggleService = (serviceName) => {
    setExpandedService(expandedService === serviceName ? null : serviceName);
  };

  return (
    <div className="mb-16 md:mb-20 lg:mb-24">
      {serviceCategories.map((category, index) => (
        <ServiceCategory
          key={index}
          title={category.title}
          services={category.services}
          isExpanded={expandedService === category.title}
          onToggle={() => toggleService(category.title)}
        />
      ))}
    </div>
  );
};

const ContactMessage = () => {
  return (
    <div className="text-center py-10 md:py-4">
      <h2 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-light text-white leading-tight">
        We're just a message away!
      </h2>
    </div>
  );
};

const LatestWorkSection = () => {
  return (
    <>
      <section className="min-h-screen bg-black text-white px-6 md:px-8 lg:px-12 xl:px-20 py-16 md:py-20 lg:py-24">
        <div className="max-w-7xl mx-auto">
          <SectionHeader />
          <PortfolioGrid />
          <AllProjectsButton />
          <ExpertiseSection />
          <ServicesList />
          <ContactMessage />
        </div>
      </section>

      <style>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-scroll {
          animation: scroll 15s linear infinite;
        }

        /* Mobile responsive scrolling */
        @media (max-width: 768px) {
          .animate-scroll {
            animation: scroll 10s linear infinite;
          }
        }
      `}</style>
    </>
  );
};

export default LatestWorkSection;

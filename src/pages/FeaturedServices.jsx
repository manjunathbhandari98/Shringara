import React from "react";

const FeaturedServices = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-serif text-center mb-16">
          Our Services
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              title: "Wedding Decorations",
              image:
                "https://images.unsplash.com/photo-1519225421980-715cb0215aed?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
            },
            {
              title: "Stage Setup",
              image:
                "https://images.unsplash.com/photo-1469371670807-013ccf25f16a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
            },
            {
              title: "Corporate Events",
              image:
                "https://images.unsplash.com/photo-1511578314322-379afb476865?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
            },
            {
              title: "Themed Parties",
              image:
                "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
            },
          ].map((service, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-lg"
            >
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-64 object-cover transition group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                <h3 className="text-white text-xl font-semibold p-6">
                  {service.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedServices;

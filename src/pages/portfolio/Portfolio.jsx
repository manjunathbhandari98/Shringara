import React, {
  useEffect,
  useState,
} from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Play,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import CaseStudy from "./CaseStudy";
import {
  caseStudies,
  testimonials,
} from "./portfolioData";
import ImageCard from "./ImageCard";
import TestimonialCard from "./TestimonialCard";
import { Link } from "react-router-dom";
import {
  getPorfolio,
  getSettings,
} from "../../services/settings";

const Portfolio = () => {
  const [
    currentTestimonial,
    setCurrentTestimonial,
  ] = useState(0);

  const [portfolioBanner, setPortfolioBanner] =
    useState();

  const [portfolioImages, setPortfolioImages] =
    useState([]);

  const fetchSettings = async () => {
    const response = await getSettings();
    setPortfolioBanner(
      response.portfolioBannerUrl
    );
  };

  const fetchPorfolio = async () => {
    const response = await getPorfolio();
    setPortfolioImages(response);
    console.log("portfolil: ", response);
  };

  useEffect(() => {
    fetchSettings();
    fetchPorfolio();
  }, []);

  return (
    <div className="min-h-screen ">
      {/* Hero Section */}
      <section className="relative h-screen">
        <div className="absolute inset-0">
          <img
            src={portfolioBanner}
            alt="Wedding Stage"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>
        <div className="relative h-full flex items-center justify-center text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl px-4"
          >
            <h1 className="text-5xl md:text-7xl font-serif mb-6">
              Our Stunning Creations
            </h1>
            <p className="text-xl text-white/90 mb-8">
              Making Your Dream Wedding a Reality
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              className="bg-rose-500 text-white px-8 py-3 rounded-full text-lg hover:bg-rose-600 transition-colors"
            >
              View Our Work
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-20 bg-black text-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-serif font-bold mb-4">
              Our Gallery
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Explore our collection of stunning
              wedding decorations and setups that
              have made countless celebrations
              unforgettable.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {portfolioImages.map((image) => (
              <ImageCard
                key={image.id}
                image={image}
                index={image.id}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Video Showcase
      <section className="py-20 bg-black text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif font-bold mb-4">
              See Us in Action
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Watch how we transform spaces into
              magical wedding venues.
            </p>
          </div>

          <div className="relative rounded-2xl overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1519225421980-715cb0215aed?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80"
              alt="Video Thumbnail"
              className="w-full h-[600px] object-cover"
            />
            <motion.button
              whileHover={{ scale: 1.1 }}
              className="absolute inset-0 m-auto w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-lg"
            >
              <Play className="w-8 h-8 text-rose-500" />
            </motion.button>
          </div>
        </div>
      </section> */}

      {/* Testimonials */}
      <section className="py-20 bg-black text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif font-bold mb-4">
              Client Love
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Read what our happy couples have to
              say about their experience with us.
            </p>
          </div>

          <div className="relative max-w-4xl mx-auto">
            <TestimonialCard
              testimonial={
                testimonials[currentTestimonial]
              }
            />

            <div className="flex justify-center mt-8 gap-4">
              <button
                onClick={() =>
                  setCurrentTestimonial((prev) =>
                    prev === 0
                      ? testimonials.length - 1
                      : prev - 1
                  )
                }
                className="p-2 rounded-full bg-white text-black shadow-md hover:bg-rose-50 transition-colors"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button
                onClick={() =>
                  setCurrentTestimonial((prev) =>
                    prev ===
                    testimonials.length - 1
                      ? 0
                      : prev + 1
                  )
                }
                className="p-2 rounded-full bg-white text-black shadow-md hover:bg-rose-50 transition-colors"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-20 bg-black text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif font-bold mb-4">
              Featured Projects
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Discover how we overcome challenges
              to create perfect wedding
              experiences.
            </p>
          </div>

          {caseStudies.map((study, index) => (
            <CaseStudy
              key={index}
              study={study}
            />
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-black text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-4xl font-serif font-bold mb-6">
              Loved Our Work? Let&apos;s Create
              Magic Together!
            </h2>
            <p className="text-gray-600 mb-8">
              Your dream wedding deserves nothing
              but the best. Let&apos;s make it
              happen!
            </p>
            <Link to="/contact">
              <motion.button
                whileHover={{ scale: 1.05 }}
                className="bg-rose-500 text-white px-8 py-3 rounded-full text-lg hover:bg-rose-600 transition-colors inline-flex items-center gap-2"
              >
                Get in Touch
                <ArrowRight className="w-5 h-5" />
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;

import React from "react";

const ContactForm = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-serif text-center mb-16">
            Quick Inquiry
          </h2>
          <form className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-rose-500 focus:ring-1 focus:ring-rose-500"
              />
              <input
                type="email"
                placeholder="Email Address"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-rose-500 focus:ring-1 focus:ring-rose-500"
              />
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <input
                type="date"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-rose-500 focus:ring-1 focus:ring-rose-500"
              />
              <select className="w-full px-4 py-3 rounded-lg text-gray-500 border border-gray-300 focus:border-rose-500 focus:ring-1 focus:ring-rose-500">
                <option value="">
                  Event Type
                </option>
                <option value="wedding">
                  Wedding
                </option>
                <option value="corporate">
                  Corporate Event
                </option>
                <option value="birthday">
                  Birthday Party
                </option>
                <option value="other">
                  Other
                </option>
              </select>
            </div>
            <textarea
              placeholder="Tell us about your event"
              rows={4}
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-rose-500 focus:ring-1 focus:ring-rose-500"
            ></textarea>
            <button className="w-full bg-rose-500 text-white py-3 rounded-lg hover:bg-rose-600 transition">
              Send Inquiry
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;

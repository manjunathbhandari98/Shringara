import React from "react";
import PackageCard from "./PackageCard";
import CustomPackageBuilder from "./CustomPackageBuilder";
import packages from "./packageData.js";

const Packages = () => {
  return (
    <section className="py-20 bg-black ">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-serif font-bold mb-4">
            Choose Your Perfect Package
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Select from our curated packages or
            build your own custom package.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-12 text-black">
          {packages.map((pkg, index) => (
            <PackageCard
              key={pkg.title}
              pkg={pkg}
              index={index}
            />
          ))}
        </div>

        <div className="max-w-2xl mx-auto">
          <CustomPackageBuilder />
        </div>
      </div>
    </section>
  );
};

export default Packages;

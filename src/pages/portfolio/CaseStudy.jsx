/* eslint-disable react/prop-types */
const CaseStudy = ({ study }) => {
  return (
    <div className="grid md:grid-cols-2 gap-8 items-center">
      <div>
        <h3 className="text-2xl font-serif font-bold mb-4">
          {study.title}
        </h3>
        <p className="text-gray-600 mb-6">
          {study.description}
        </p>

        <div className="bg-rose-500 rounded-lg p-6 mb-6">
          <h4 className="font-semibold mb-2">
            The Challenge
          </h4>
          <p className="text-white">
            {study.challenge}
          </p>
        </div>

        <div className="bg-green-500 rounded-lg p-6">
          <h4 className="font-semibold mb-2">
            Our Solution
          </h4>
          <p className="text-gray-600">
            {study.solution}
          </p>
        </div>
      </div>

      <div className="space-y-4">
        <div className="relative">
          <img
            src={study.before}
            alt="Before"
            className="w-full rounded-lg"
          />
          <span className="absolute top-4 left-4 bg-white/90 px-4 py-2 rounded-full text-sm font-semibold">
            Before
          </span>
        </div>
        <div className="relative">
          <img
            src={study.after}
            alt="After"
            className="w-full rounded-lg"
          />
          <span className="absolute top-4 left-4 bg-white/90 px-4 py-2 rounded-full text-sm font-semibold">
            After
          </span>
        </div>
      </div>
    </div>
  );
};

export default CaseStudy;

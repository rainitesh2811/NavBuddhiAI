import React from "react";

const WhyUs = () => {
  return (
    <section className="px-4 sm:px-6 md:px-16 mt-10 mb-12">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-2xl sm:text-3xl font-bold text-blue-600">
          Why Choose US?
        </h2>

        <p className="text-gray-600 mt-2">
          Get instant Mentorship, internship opportunities
          and a supportive learning community.
        </p>

        <div className="mt-6 rounded-2xl p-6 bg-white shadow-2xl inline-block">
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-4 text-left">

            <li className="flex items-center gap-2">
              <span className="text-green-600 text-xl">✔</span>
              <span className="text-gray-700 font-medium">
                Growth while learning
              </span>
            </li>

            <li className="flex items-center gap-2">
              <span className="text-green-600 text-xl">✔</span>
              <span className="text-gray-700 font-medium">
                Personalized Mentorship
              </span>
            </li>

            <li className="flex items-center gap-2">
              <span className="text-green-600 text-xl">✔</span>
              <span className="text-gray-700 font-medium">
                Internship Opportunities
              </span>
            </li>

            <li className="flex items-center gap-2">
              <span className="text-green-600 text-xl">✔</span>
              <span className="text-gray-700 font-medium">
                Premium Quality Courses
              </span>
            </li>

          </ul>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;

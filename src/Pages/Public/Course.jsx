import { useState, useEffect } from "react";
import aiIcon from "../../assets/Images/AI.png";

const coursesData = [
  {
    id: 1,
    title: "Artificial Intelligence Basics",
    category: "Development",
    icon: aiIcon,
  },
];

const categories = [
  "All Courses",
  "Design",
  "Development",
  "IT & Software",
  "Business",
];

const Courses = () => {
  const [selectedCategory, setSelectedCategory] = useState("All Courses");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1200);
    return () => clearTimeout(timer);
  }, []);

  const filteredCourses =
    selectedCategory === "All Courses"
      ? coursesData
      : coursesData.filter((course) => course.category === selectedCategory);

  return (
    <section className="px-4 sm:px-6 md:px-16 mt-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-6">
          <h2 className="text-3xl font-bold mb-2 text-orange-500">
            Browse our Courses
          </h2>
          <p className="text-gray-600">
            Explore a wide range of courses where learning is fun, easy, and absolutely free!
          </p>
        </div>

        <div className="grid grid-cols-2 gap-3 sm:flex sm:justify-center sm:gap-4 mb-8">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={
                `w-full px-4 py-2 rounded-full text-sm font-medium transition
                 bg-white border shadow-sm
                 text-blue-500 border-blue-400
                 hover:shadow-md ` +
                (selectedCategory === category
                  ? "shadow-md border-blue-500"
                  : "")
              }
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {loading
            ? Array.from({ length: 4 }).map((_, idx) => (
                <div
                  key={idx}
                  className="border border-orange-200 rounded-2xl p-4 aspect-square animate-pulse"
                >
                  <div className="w-20 h-20 bg-gray-200 rounded-2xl mx-auto mb-4" />
                  <div className="h-4 bg-gray-200 rounded w-3/4 mx-auto mb-2" />
                  <div className="h-3 bg-gray-200 rounded w-full mb-1" />
                  <div className="h-3 bg-gray-200 rounded w-5/6 mx-auto" />
                </div>
              ))
            : filteredCourses.length > 0
            ? filteredCourses.map((course) => (
                <div
                  key={course.id}
                  className="
                    bg-white border border-gray-200 rounded-2xl p-4
                    flex flex-col items-center text-center
                    aspect-square
                    transition shadow-sm
                    hover:-translate-y-1 hover:shadow-md
                    active:scale-[0.97]
                  "
                >
                  <div className="w-8 h-1 bg-orange-500 rounded-full mb-3" />
                  <div className="w-20 h-20 rounded-2xl overflow-hidden mb-4">
                    <img
                      src={course.icon}
                      alt={course.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="font-semibold text-sm sm:text-base leading-tight mb-1 text-blue-600">
                    {course.title}
                  </h3>
                </div>
              ))
            : (
              <p className="col-span-full text-center text-gray-500">
                No courses found in this category.
              </p>
            )}
        </div>
      </div>
    </section>
  );
};

export default Courses;

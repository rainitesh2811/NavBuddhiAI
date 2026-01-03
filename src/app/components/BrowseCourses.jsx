import { BookOpen, Clock, Users, Star } from "lucide-react";
import { ImageWithFallback } from "../components/figma/Imagewithfallback";

const courses = [
  {
    id: 1,
    title: "Basics of Artificial Intelligence",
    category: "Development",
    instructor: "Ravi Virat",
    rating: 4.5,
    students: 1200,
    duration: "1 hours",
    price: "₹199",
    image:
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlZHVjYXRpb24lMjB0ZWNobm9sb2d5fGVufDF8fHx8MTc2NzA5NDczMnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  },
  {
    id: 2,
    title: "Advance Artificial Intelligence",
    category: "Development",
    instructor: "Nitesh Rai",
    rating: 4.5,
    students: 890,
    duration: "1.5 hours",
    price: "₹399",
    image:
      "https://images.unsplash.com/photo-1546430498-05c7b929830e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvbmxpbmUlMjBjb3Vyc2VzJTIwbGFwdG9wfGVufDF8fHx8MTc2NzE2MDMxNHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  },
];

export function BrowseCourses() {
  return (
    <section
      id="browse-courses"   // ✅ IMPORTANT — this matches Explore button
      className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl text-foreground mb-4">
            Browse Our Popular Courses
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover a wide range of courses designed to help you achieve your
            learning goals
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {courses.map((course) => (
            <div
              key={course.id}
              className="bg-card rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow border border-border"
            >
              <div className="relative h-48 overflow-hidden">
                <ImageWithFallback
                  src={course.image}
                  alt={course.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-3 right-3 bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm">
                  {course.category}
                </div>
              </div>

              <div className="p-5 space-y-3">
                <h3 className="text-xl text-card-foreground">
                  {course.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  by {course.instructor}
                </p>

                <div className="flex items-center gap-4 text-sm">
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    <span>{course.rating}</span>
                  </div>

                  <div className="flex items-center gap-1 text-muted-foreground">
                    <Users className="w-4 h-4" />
                    <span>{course.students.toLocaleString()}</span>
                  </div>

                  <div className="flex items-center gap-1 text-muted-foreground">
                    <Clock className="w-4 h-4" />
                    <span>{course.duration}</span>
                  </div>
                </div>

                <div className="flex items-center justify-between pt-3 border-t border-border">
                  <span className="text-2xl text-primary">{course.price}</span>

                  <button className="px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors flex items-center gap-2">
                    <BookOpen className="w-4 h-4" />
                    Enroll Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="px-8 py-3 border-2 border-primary text-primary rounded-lg hover:bg-primary hover:text-primary-foreground transition-colors">
            View All Courses
          </button>
        </div>
      </div>
    </section>
  );
}

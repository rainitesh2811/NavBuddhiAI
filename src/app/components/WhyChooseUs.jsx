import { Award, Users, Video, HeadphonesIcon, TrendingUp, Shield } from "lucide-react";

const features = [
  {
    id: 1,
    icon: Award,
    title: "Expert Instructors",
    description:
      "Learn from industry professionals with years of real-world experience",
  },
  {
    id: 2,
    icon: Video,
    title: "Lifetime Access",
    description:
      "Get unlimited access to course materials and updates forever",
  },
  {
    id: 3,
    icon: Users,
    title: "Active Community",
    description:
      "Join a thriving community of learners and mentors worldwide",
  },
  {
    id: 4,
    icon: HeadphonesIcon,
    title: "24/7 Support",
    description:
      "Our dedicated support team is always ready to help you succeed",
  },
  {
    id: 5,
    icon: TrendingUp,
    title: "Career Growth",
    description:
      "Boost your career with industry-recognized certificates and skills",
  },
  {
    id: 6,
    icon: Shield,
    title: "Money-Back Guarantee",
    description:
      "30-day money-back guarantee if you're not satisfied with your purchase",
  },
];

export function WhyChooseUs() {
  return (
    <section
      id="why-us"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-secondary to-white"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl text-foreground mb-4">
            Why Choose EduLearn?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We're committed to providing the best online learning experience
            with features designed for your success
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <div
                key={feature.id}
                className="bg-white p-8 rounded-xl border border-border hover:shadow-xl transition-shadow group"
              >
                <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mb-5 group-hover:bg-primary group-hover:scale-110 transition-all">
                  <Icon className="w-7 h-7 text-primary group-hover:text-white" />
                </div>
                <h3 className="text-xl text-foreground mb-3">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>

        <div className="mt-20 bg-primary rounded-2xl p-12 text-center">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="space-y-2">
              <div className="text-4xl md:text-5xl text-primary-foreground">
                90%
              </div>
              <div className="text-primary-foreground/80">Success Rate</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl md:text-5xl text-primary-foreground">
                500+
              </div>
              <div className="text-primary-foreground/80">Graduates</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl md:text-5xl text-primary-foreground">
                10+
              </div>
              <div className="text-primary-foreground/80">Courses</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl md:text-5xl text-primary-foreground">
                4.5⭐
              </div>
              <div className="text-primary-foreground/80">Average Rating</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

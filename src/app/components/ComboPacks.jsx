import { Check, Tag } from "lucide-react";

const comboPacks = [
  {
    id: 1,
    name: "Basic & Advance of Artificial Intelligence",
    originalPrice: "₹599",
    discountedPrice: "₹399",
    discount: "33.39% OFF",
    courses: 2,
    features: [
      "Basics of Artificial Intelligence",
      "Advance Artificial Intelligence",
      "Hands-on Labs",
      "Real-world Projects",
    ],
    popular: false,
  },
  {
    id: 2,
    name: "Digital Marketing Pro Pack",
    originalPrice: "$249",
    discountedPrice: "$149",
    discount: "40% OFF",
    courses: 5,
    features: [
      "SEO Mastery",
      "Social Media Marketing",
      "Content Marketing",
      "Email Marketing",
      "Analytics & Reporting",
      "Marketing Strategy",
    ],
    popular: true,
  }
];

export function ComboPacks() {
  return (
    <section id="combo" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent rounded-full mb-4">
            <Tag className="w-4 h-4 text-accent-foreground" />
            <span className="text-sm text-accent-foreground">
              Limited Time Offer
            </span>
          </div>

          <h2 className="text-3xl md:text-4xl text-foreground mb-4">
            Combo Pack Courses
          </h2>

          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Get the best value with our bundled courses. Learn more, save more!
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {comboPacks.map((pack) => (
            <div
              key={pack.id}
              className={`relative bg-card rounded-2xl border-2 p-8 hover:shadow-2xl transition-all ${
                pack.popular
                  ? "border-primary shadow-xl scale-105"
                  : "border-border hover:border-primary/50"
              }`}
            >
              {pack.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground px-6 py-1 rounded-full">
                  Most Popular
                </div>
              )}

              <div className="text-center mb-6">
                <h3 className="text-2xl text-card-foreground mb-2">
                  {pack.name}
                </h3>

                <div className="inline-block bg-accent px-3 py-1 rounded-full text-sm text-accent-foreground mb-4">
                  {pack.courses} Courses Included
                </div>

                <div className="mb-2">
                  <span className="text-muted-foreground line-through mr-2">
                    {pack.originalPrice}
                  </span>
                  <span className="text-4xl text-primary">
                    {pack.discountedPrice}
                  </span>
                </div>

                <div className="inline-block bg-accent px-3 py-1 rounded-full text-sm text-accent-foreground">
                  Save {pack.discount}
                </div>
              </div>

              <div className="space-y-3 mb-8">
                {pack.features.map((feature, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center mt-0.5">
                      <Check className="w-3 h-3 text-primary" />
                    </div>
                    <span className="text-card-foreground">{feature}</span>
                  </div>
                ))}
              </div>

              <button
                className={`w-full py-3 rounded-lg transition-colors ${
                  pack.popular
                    ? "bg-primary text-primary-foreground hover:bg-primary/90"
                    : "border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                }`}
              >
                Get Started Now
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

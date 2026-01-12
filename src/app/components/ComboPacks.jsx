import { Check, Tag } from "lucide-react";

const comboPacks = [
  {
    id: 1,
    name: "Basic & Advance of Artificial Intelligence",
    originalPrice: "₹599",
    discountedPrice: "₹399",
    discount: "33.39% OFF",
    courses: 2,
    category: "Artificial Intelligence",
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
    originalPrice: "₹249",
    discountedPrice: "₹149",
    discount: "40% OFF",
    courses: 5,
    category: "Digital Marketing",
    features: [
      "SEO Mastery",
      "Social Media Marketing",
      "Content Marketing",
      "Email Marketing",
      "Analytics & Reporting",
      "Marketing Strategy",
    ],
    popular: true,
  },
];

export function ComboPacks() {

  const handlePayment = (pack) => {
    const query = new URLSearchParams({
      title: pack.name,
      price: pack.discountedPrice,
      category: pack.category,
      type: "combo", // 🔥 important
    }).toString();

    window.location.href = `/payment?${query}`;
  };

  return (
    <section id="combo" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent rounded-full mb-4">
            <Tag className="w-4 h-4 text-accent-foreground" />
            <span className="text-sm text-accent-foreground">
              Limited Time Offer
            </span>
          </div>

          <h2 className="text-3xl md:text-4xl mb-4">
            Combo Pack Courses
          </h2>

          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Get the best value with our bundled courses. Learn more, save more!
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {comboPacks.map((pack) => (
            <div
              key={pack.id}
              className={`relative bg-card rounded-2xl border-2 p-8 transition-all hover:shadow-2xl ${
                pack.popular
                  ? "border-primary shadow-xl scale-105"
                  : "border-border hover:border-primary/50"
              }`}
            >
              {pack.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-white px-6 py-1 rounded-full">
                  Most Popular
                </div>
              )}

              <div className="text-center mb-6">
                <h3 className="text-2xl mb-2">{pack.name}</h3>

                <div className="inline-block bg-accent px-3 py-1 rounded-full text-sm mb-4">
                  {pack.courses} Courses Included
                </div>

                <div className="mb-2">
                  <span className="line-through mr-2 text-muted-foreground">
                    {pack.originalPrice}
                  </span>
                  <span className="text-4xl text-primary">
                    {pack.discountedPrice}
                  </span>
                </div>

                <div className="inline-block bg-accent px-3 py-1 rounded-full text-sm">
                  Save {pack.discount}
                </div>
              </div>

              <div className="space-y-3 mb-8">
                {pack.features.map((feature, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center mt-0.5">
                      <Check className="w-3 h-3 text-primary" />
                    </div>
                    <span>{feature}</span>
                  </div>
                ))}
              </div>

              {/* 🔥 Payment Button */}
              <button
                onClick={() => handlePayment(pack)}
                className={`w-full py-3 rounded-lg transition-colors ${
                  pack.popular
                    ? "bg-primary text-white hover:bg-primary/90"
                    : "border-2 border-primary text-primary hover:bg-primary hover:text-white"
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

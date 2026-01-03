import { Scissors, ClipboardList, MessageSquare, Gem } from "lucide-react";

export default function LearningJourney() {

  const handleExploreClick = () => {
    const section = document.getElementById("browse-courses");

    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    }
  };

  const handleLearnMoreClick = () => {
    const section = document.getElementById("why-us");
    section?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    // ⭐ IMPORTANT — id added so footer can scroll here
    <section
      id="learning-journey"
      className="bg-[#0F2C54] text-white py-16 md:py-24"
    >
      <div className="max-w-6xl mx-auto px-6 text-center">

        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Your journey from learning to <br /> earning
        </h2>

        <p className="text-gray-300 max-w-2xl mx-auto mb-12">
          Follow these four steps to master digital skills and unlock real earning opportunities.
        </p>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-10">

          <div className="group space-y-3 p-5 rounded-xl border border-white/10 transition-all duration-300 hover:-translate-y-2 active:-translate-y-2 hover:shadow-xl active:shadow-xl hover:border-white/30 active:border-white/30">
            <Scissors className="w-10 h-10 mx-auto transition-transform duration-300 group-hover:scale-110" />
            <h3 className="font-semibold text-lg">Enroll in structured courses</h3>
            <p className="text-gray-300 text-sm">
              Choose from AI, design, content, marketing and more. Courses in Hindi with expert instructors.
            </p>
          </div>

          <div className="group space-y-3 p-5 rounded-xl border border-white/10 transition-all duration-300 hover:-translate-y-2 active:-translate-y-2 hover:shadow-xl active:shadow-xl hover:border-white/30 active:border-white/30">
            <ClipboardList className="w-10 h-10 mx-auto transition-transform duration-300 group-hover:scale-110" />
            <h3 className="font-semibold text-lg">Complete assignments and projects</h3>
            <p className="text-gray-300 text-sm">
              Apply what you learn through real-world assignments and live projects that matter.
            </p>
          </div>

          <div className="group space-y-3 p-5 rounded-xl border border-white/10 transition-all duration-300 hover:-translate-y-2 active:-translate-y-2 hover:shadow-xl active:shadow-xl hover:border-white/30 active:border-white/30">
            <MessageSquare className="w-10 h-10 mx-auto transition-transform duration-300 group-hover:scale-110" />
            <h3 className="font-semibold text-lg">Get expert feedback</h3>
            <p className="text-gray-300 text-sm">
              Receive verification and detailed feedback from industry experts to refine your skills.
            </p>
          </div>

          <div className="group space-y-3 p-5 rounded-xl border border-white/10 transition-all duration-300 hover:-translate-y-2 active:-translate-y-2 hover:shadow-xl active:shadow-xl hover:border-white/30 active:border-white/30">
            <Gem className="w-10 h-10 mx-auto transition-transform duration-300 group-hover:scale-110" />
            <h3 className="font-semibold text-lg">Unlock opportunities</h3>
            <p className="text-gray-300 text-sm">
              Access internships, job placements, affiliate programs, and multiple ways to earn.
            </p>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex justify-center gap-4">

          {/* scroll to Browse Courses */}
          <button
            onClick={handleExploreClick}
            className="px-6 py-2 border rounded-md hover:bg-white hover:text-black transition"
          >
            Explore
          </button>

          {/* optional smooth scroll */}
          <button
            onClick={handleLearnMoreClick}
            className="px-6 py-2 underline-offset-4 hover:underline"
          >
            Learn more →
          </button>
        </div>

      </div>
    </section>
  );
}

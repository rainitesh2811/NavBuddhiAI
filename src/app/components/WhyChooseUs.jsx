import { Award, Users, Video, HeadphonesIcon } from "lucide-react";

export function WhyChooseUs({ onSignupClick }) {
  return (
    <section className="bg-[#0F2C54] text-white py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-6">

        {/* Top title + description */}
        <div className="grid md:grid-cols-2 gap-10 mb-12">
          <div>
            <p className="text-sm uppercase text-gray-300 mb-2">Why</p>

            <h2 className="text-3xl md:text-4xl font-bold leading-snug">
              Learn, build, and earn <br /> with confidence
            </h2>
          </div>

          <div className="text-gray-300 text-sm md:text-base">
            This platform exists because we believe in you. You can learn real
            skills, create real projects, and earn real money. Everything here is
            designed to help you move forward.
          </div>
        </div>

        {/* Feature Row */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-16">

          <div>
            <Award className="w-8 h-8 mb-3" />
            <h3 className="font-semibold text-lg mb-1">
              You'll find the right guidance
            </h3>
            <p className="text-gray-300 text-sm">
              Expert instructors and verified feedback keep you on track and moving forward.
            </p>
          </div>

          <div>
            <Video className="w-8 h-8 mb-3" />
            <h3 className="font-semibold text-lg mb-1">
              You can learn and grow here
            </h3>
            <p className="text-gray-300 text-sm">
              Structured courses and live projects build real confidence in what you can do.
            </p>
          </div>

          <div>
            <Users className="w-8 h-8 mb-3" />
            <h3 className="font-semibold text-lg mb-1">
              Skills lead to real income
            </h3>
            <p className="text-gray-300 text-sm">
              Internships, jobs, and affiliate programs turn what you learn into money.
            </p>
          </div>

          <div>
            <HeadphonesIcon className="w-8 h-8 mb-3" />
            <h3 className="font-semibold text-lg mb-1">
              This platform is made for you
            </h3>
            <p className="text-gray-300 text-sm">
              Whether you're from a small town or a big city — you belong here.
            </p>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex gap-4">
          {/* 🔥 Opens Signup Modal */}
          <button
            onClick={onSignupClick}
            className="px-6 py-2 bg-white text-black rounded-md"
          >
            Start
          </button>

          <button className="px-6 py-2 underline-offset-4 hover:underline">
            More →
          </button>
        </div>
      </div>
    </section>
  );
}

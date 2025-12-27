import { useEffect } from "react";
import aiIcon from "../../assets/Images/AI.png";
import offerIcon from "../../assets/Images/AI.png";
import mernIcon from "../../assets/Images/BA.jpg";
import reactIcon from "../../assets/Images/AA.jpg";

const Combo = () => {
  useEffect(() => {
    const slider = document.getElementById("comboSlider");
    const indicator = document.getElementById("comboIndicator");

    if (!slider || !indicator) return;

    const updateIndicator = () => {
      const maxScroll = slider.scrollWidth - slider.clientWidth;
      if (maxScroll <= 0) {
        indicator.style.width = "100%";
        return;
      }
      const percentage = (slider.scrollLeft / maxScroll) * 100;
      indicator.style.width = `${percentage}%`;
    };

    slider.addEventListener("scroll", updateIndicator);

    const auto = setInterval(() => {
      const maxScroll = slider.scrollWidth - slider.clientWidth;
      if (slider.scrollLeft >= maxScroll - 5) {
        slider.scrollTo({ left: 0, behavior: "smooth" });
      } else {
        slider.scrollBy({ left: slider.clientWidth, behavior: "smooth" });
      }
    }, 3000);

    return () => {
      slider.removeEventListener("scroll", updateIndicator);
      clearInterval(auto);
    };
  }, []);

  return (
    <section className="px-2 sm:px-6 md:px-16 mt-14 mb-10">
      <div className="max-w-7xl mx-auto">
        <div
          className="rounded-3xl p-6 sm:p-10"
          style={{
            background:
              "linear-gradient(135deg, #FF9933 45%, #138808 100%)"
          }}
        >
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8 text-white">
            Interested in our Combo Packs ?
          </h2>

          <div className="relative">
            <div
              id="comboSlider"
              className="
                overflow-x-auto
                scroll-smooth
                snap-x snap-mandatory
                flex gap-6
                pb-6
              "
            >
              <div
                className="
                  bg-white 
                  rounded-3xl 
                  shadow-md 
                  border
                  snap-start
                  min-w-[92%]
                  sm:min-w-[70%]
                  lg:min-w-[32%]
                  flex flex-col
                "
              >
                <div className="p-5">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-14 h-14 rounded-2xl bg-blue-50 flex items-center justify-center shadow-md ring-1 ring-blue-200 transition hover:scale-105">
                      <img src={offerIcon} alt="combo" className="w-9 h-9 object-contain rounded-lg" />
                    </div>
                    <h3 className="text-xl font-bold text-blue-700">
                      Full Stack Combo Pack
                    </h3>
                  </div>

                  <hr className="border-blue-200 mb-4" />

                  <div className="grid grid-cols-2 gap-y-2 text-sm text-gray-700">
                    <div className="flex items-center gap-2">
                      <img src={mernIcon} className="w-6 h-6 rounded-lg" />
                      <span>MERN Stack</span>
                    </div>

                    <div className="flex items-center gap-2">
                      <img src={reactIcon} className="w-6 h-6 rounded-lg" />
                      <span>Basic AI Course</span>
                    </div>
                  </div>
                </div>

                <div className="p-5 pt-3">
                  <button className="w-full bg-blue-700 text-white font-semibold py-3 rounded-xl hover:bg-blue-800 transition active:scale-[0.97]">
                    Know More
                  </button>
                </div>
              </div>

              <div
                className="
                  bg-white 
                  rounded-3xl 
                  shadow-md 
                  border
                  snap-start
                  min-w-[92%]
                  sm:min-w-[70%]
                  lg:min-w-[32%]
                  flex flex-col
                "
              >
                <div className="p-5">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-14 h-14 rounded-2xl bg-green-50 flex items-center justify-center shadow-md ring-1 ring-green-200 transition hover:scale-105">
                      <img src={offerIcon} alt="combo" className="w-9 h-9 object-contain rounded-lg" />
                    </div>
                    <h3 className="text-xl font-bold text-green-700">
                      AI & Development Combo
                    </h3>
                  </div>

                  <hr className="border-green-200 mb-4" />

                  <div className="grid grid-cols-2 gap-y-2 text-sm text-gray-700">
                    <div className="flex items-center gap-2">
                      <img src={aiIcon} className="w-6 h-6 rounded-lg" />
                      <span>AI Basics</span>
                    </div>

                    <div className="flex items-center gap-2">
                      <img src={reactIcon} className="w-6 h-6 rounded-lg" />
                      <span>Web Basics</span>
                    </div>
                  </div>
                </div>

                <div className="p-5 pt-3">
                  <button className="w-full bg-green-700 text-white font-semibold py-3 rounded-xl hover:bg-green-800 transition active:scale-[0.97]">
                    Know More
                  </button>
                </div>
              </div>
            </div>

            <div className="w-full h-2 bg-white/40 rounded-full overflow-hidden">
              <div
                id="comboIndicator"
                className="h-2 bg-white rounded-full transition-all duration-300"
                style={{ width: "0%" }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Combo;

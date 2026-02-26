import React from "react";

const HomeImage = () => {
  return (
    <section className="w-full min-h-screen">
      <div className="max-w-[1440px] mx-auto px-4 lg:px-0">
        <div className="grid grid-cols-12">

          {/* Visual */}
          <div
            className="
              col-span-12
              lg:col-span-12
              w-full
              h-[260px]
              sm:h-[360px]
              md:h-[420px]
              lg:h-screen
              rounded-lg
              overflow-hidden
            "
          >
            <video
              className="w-full h-full object-cover"
              autoPlay
              muted
              loop
              playsInline
            >
              <source
                src="/features/Coffee/Coffee_video_4.mp4"
                type="video/mp4"
              />
            </video>
          </div>

        </div>
      </div>
    </section>
  );
};

export default HomeImage;

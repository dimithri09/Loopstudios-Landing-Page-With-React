import React from "react";

const FeatureSection = () => {
  return (
    //  Feature Section
    <section id="feature">
      {/* Feature Container  */}
      <div className="relative container flex flex-col max-w-6xl mx-auto my-32 px-6 text-gray-900 md:flex-row md:px-0">
        {/* Image  */}
        <img
          src="images/desktop/image-interactive.jpg"
          alt="a man wearing a vr"
        />
        {/* Text Container  */}
        <div className="top-48 pr-0 bg-white md:absolute md:right-0 md:py-20 md:pl-20">
          <h2 className="mx-lg mt-10 mb-6 font-sans text-4xl text-center text-gray-900 uppercase md:text-5xl md:mt-0 md:text-left">
            the leader in interactive vr
          </h2>
          <p className="max-w-md text-center md:text-left">
            Founded in 2021, Loopstudios has been producing world class virtual
            relality projects for some of the best companies around the globe.
            Our award-winning creations have transformed businesses through
            digital experincences that bind to their brand.
          </p>
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;

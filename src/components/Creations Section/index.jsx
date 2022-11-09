import React from "react";

const CreationsSection = () => {
  return (
    //   Creations Section
    <section id="creations">
      {/* Creations Container */}
      <div className="container max-w-6xl mx-auto my-32 px-6 text-gray-900 md:px-0">
        {/* Creations Header  */}
        <div className="flex justify-center mb-20 md:justify-between">
          <h2 className="text-4xl text-center uppercase md:text-left md:text-5xl">
            Our Creations
          </h2>
          <button className="hidden btn md:block">See All</button>
        </div>

        {/* Items Container 1  */}
        <div className="item-container">
          {/* Item 1  */}
          <div className="group item">
            {/* Desktop Image 1 */}
            <img
              className="hidden w-full duration-200 md:block group-hover:scale-110"
              src="images/desktop/image-deep-earth.jpg"
              alt=""
            />

            {/* Mobile Image 1  */}
            <img
              className="w-full md:hidden"
              src="images/mobile/image-deep-earth.jpg"
              alt=""
            />

            {/* Item Gradient  */}
            <div className="item-gradient"></div>

            {/* Item Text 1  */}
            <h5 className="item-text">Deep Earth</h5>
          </div>

          {/* Item 2  */}
          <div className="group item">
            {/* Desktop Image 2 */}
            <img
              className="hidden w-full duration-200 md:block group-hover:scale-110"
              src="images/desktop/image-night-arcade.jpg"
              alt=""
            />

            {/* Mobile Image 2  */}
            <img
              className="w-full md:hidden"
              src="images/mobile/image-night-arcade.jpg"
              alt=""
            />

            {/* Item Gradient */}
            <div className="item-gradient"></div>

            {/* Item Text 2 */}
            <h5 className="item-text">Night Arcade</h5>
          </div>

          {/* Item 3 */}
          <div className="group item">
            {/* Desktop Image 3 */}
            <img
              className="hidden w-full duration-200 md:block group-hover:scale-110"
              src="images/desktop/image-soccer-team.jpg"
              alt=""
            />

            {/* Mobile Image 3 */}
            <img
              className="w-full md:hidden"
              src="images/mobile/image-soccer-team.jpg"
              alt=""
            />

            {/* Item Gradient */}
            <div className="item-gradient"></div>

            {/* Item Text 3  */}
            <h5 className="item-text">Soccer Team VR</h5>
          </div>

          {/* Item 4 */}
          <div className="group item">
            {/* Desktop Image 4  */}
            <img
              className="hidden w-full duration-200 md:block group-hover:scale-110"
              src="images/desktop/image-grid.jpg"
              alt=""
            />

            {/* Mobile Image 4  */}
            <img
              className="w-full md:hidden"
              src="images/mobile/image-grid.jpg"
              alt=""
            />

            {/* Item Gradient  */}
            <div className="item-gradient"></div>

            {/* Item Text 4  */}
            <h5 className="item-text">The Grid</h5>
          </div>
        </div>

        {/* Items Container 2  */}
        <div className="item-container mt-10">
          {/* Item 1  */}
          <div className="group item">
            {/* Desktop Image 1 */}
            <img
              className="hidden w-full duration-200 md:block group-hover:scale-110"
              src="images/desktop/image-from-above.jpg"
              alt=""
            />

            {/* Mobile Image 1   */}
            <img
              className="w-full md:hidden"
              src="images/mobile/image-from-above.jpg"
              alt=""
            />

            {/* Item Gradient  */}
            <div className="item-gradient"></div>

            {/* Item Text 1  */}
            <h5 className="item-text">From Up Above VR</h5>
          </div>

          {/* Item 2 */}
          <div className="group item">
            {/* Desktop Image 2 */}
            <img
              className="hidden w-full duration-200 md:block group-hover:scale-110"
              src="images/desktop/image-pocket-borealis.jpg"
              alt=""
            />

            {/* Mobile Image 2 */}
            <img
              className="w-full md:hidden"
              src="images/mobile/image-pocket-borealis.jpg"
              alt=""
            />

            {/* Item Gradient */}
            <div className="item-gradient"></div>

            {/* Item Text 2  */}
            <h5 className="item-text">Pocket Borealis</h5>
          </div>

          {/* Item 3  */}
          <div className="group item">
            {/* Desktop Image 3 */}
            <img
              className="hidden w-full duration-200 md:block group-hover:scale-110"
              src="images/desktop/image-curiosity.jpg"
              alt=""
            />

            {/* Mobile Image 3 */}
            <img
              className="w-full md:hidden"
              src="images/mobile/image-curiosity.jpg"
              alt=""
            />

            {/* Item Gradient */}
            <div className="item-gradient"></div>

            {/* Item Text 3 */}
            <h5 className="item-text">Curiosity</h5>
          </div>

          {/* Item 4 */}
          <div className="group item">
            {/* Desktop Image 4 */}
            <img
              className="hidden w-full duration-200 md:block group-hover:scale-110"
              src="images/desktop/image-fisheye.jpg"
              alt=""
            />

            {/* Mobile Image 4 */}
            <img
              className="w-full md:hidden"
              src="images/mobile/image-fisheye.jpg"
              alt=""
            />

            {/* Item Gradient  */}
            <div className="item-gradient"></div>

            {/* Item Text 4 */}
            <h5 className="item-text">Make It Fisheye</h5>
          </div>
        </div>

        {/* Bottom Button Container */}
        <div className="flex justify-center mt-10 md:hidden">
          <button className="btn min-w-full md:hidden">See All</button>
        </div>
      </div>
    </section>
  );
};

export default CreationsSection;

import React from 'react';

const CTASection = () => {
  return (
    <section
      className=" bg-cta-image bg-center bg-no-repeat bg-cover min-h-[510px] relative w-full h-full ctaSection font-mullish text-white"
    >
      <div className="mx-auto w-11/12 max-w-[1080px] pt-28 pb-10 relative flex items-center space-x-20 justify-between">
        {/* Left */}
        <div>
          <h2 className="font-extrabold text-left text-2xl">
            Supercharge your business with Razorpay
          </h2>
          <div className="w-6 border-y-2 border-greenLight my-4"></div>
          <p className="max-w-[440px]">
            Sign up now to experience the future of payments and offer your
            customers the best checkout experience.
          </p>
          <ul className="space-y-2 flex flex-wrap text-white my-8">
            <li className="font-mullish flex items-center gap-x-2 mr-12">
              <i data-feather="check" className="text-greenLight"></i>
              <span>Quick Onboarding</span>
            </li>
            <li className="font-mullish flex items-center gap-x-2 mr-12">
              <i data-feather="check" className="text-greenLight"></i>
              <span>Access to entire product suite </span>
            </li>
            <li className="font-mullish flex items-center gap-x-2 mr-12">
              <i data-feather="check" className="text-greenLight"></i>
              <span>API access</span>
            </li>
            <li className="font-mullish flex items-center gap-x-2 mr-12">
              <i data-feather="check" className="text-greenLight"></i>
              <span>24x7 support</span>
            </li>
          </ul>
          <button className="flex justify-center items-center text-lightBlue300 bg-white text-sm py-3 px-4 rounded-sm font-bold border transition-all duration-200 hover:text-lightBlue500">
            Sign Up
            <svg
              viewBox="0 0 24 24"
              focusable="false"
              className="w-[14px] h-[14px] ml-3"
            >
              <path
                fill="currentColor"
                d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"
              ></path>
            </svg>
          </button>
        </div>

        {/* Right */}
        <div>
          <img
            src="./Images/ctaImg.svg"
            width="240px"
            height="282px"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
};

export default CTASection;

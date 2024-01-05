import React from 'react';

const FeatureSection = () => {
  return (
    <section className="mt-[190px] relative overflow-hidden font-mullish">
      <img
        src="./Images/feature-section1-dottedrows.png"
        loading="lazy"
        width="233"
        height="167"
        className="absolute -z-10 -top-[8rem] left-[10rem]"
        alt=""
      />
      <img
        src="./Images/feature-section1-dottedrows.png"
        alt=""
        loading="lazy"
        width="233"
        height="167"
        className="absolute top-[3rem] right-0 inline-block rotate-180"
      />

      <div className="w-11/12 max-w-[1080px] mx-auto pt-4 relative z-[1000]">
        <h2 className="text-center text-2xl leading-[1.2] font-extrabold">
          Accept Payments with Razorpay Payment Suite
        </h2>
        <div className="w-6 border-y-2 border-greenLight mx-auto mt-4 mb-20"></div>

        {/* Main Feature  */}
        <div className="w-full border border-lightGray bg-white rounded-md min-h-[520px] p-10 py-12 flex relative">
          {/* Left */}
          <div className="flex flex-col justify-between space-y-10 w-full">
            <h2 className="text-[28px] leading-10 font-bold max-w-[500px]">
              Supercharge your business with the all‑powerful
              <span className="text-lightBlue">Payment Gateway</span>
            </h2>

            <ul className="space-y-2">
              <li className="flex items-center space-x-2">
                <i data-feather="check" className="text-greenLight"></i>
                <span>100+ Payment Methods</span>
              </li>
              {/* Add other list items here */}
            </ul>

            {/* Button Group  */}
            <div className="flex flex-row items-center gap-y-4 space-x-3">
              <button
                className="flex justify-center items-center bg-lightBlue text-white text-base py-[14px] px-[18px] rounded-md font-bold border transition-all duration-200 hover:bg-lightBlue500"
              >
                Sign Up Now
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
              <div className="flex items-center cursor-pointer group">
                <a
                  href="#"
                  className="text-lightBlue500 font-bold group-hover:text-grayBlue transition-all duration-200"
                >
                  Know More
                </a>
                <i
                  data-feather="chevron-right"
                  className="w-5 h-5 text-lightBlue500 group-hover:text-grayBlue transition-all duration-200"
                ></i>
              </div>
            </div>
          </div>

          {/* Right */}
          <div className="max-w-[600px] absolute right-0 top-0 bottom-0">
            <img src="./Images/payment-suite.png" className="w-full" alt="" />
          </div>
        </div>

        {/* Box Content  */}
        <div className="w-full grid grid-cols-3 gap-4 my-10">
          {/* Box1 */}
          <div className="featureCard w-full relative min-h-[15rem] cursor-pointer">
            {/* Box Icon */}
            <img
              src="./Images/payment-link-icon.svg"
              className="bg-lightBlue absolute right-3 top-3 w-12 h-12 rounded-full transition-all duration-200 featureCardIcon"
            />
            {/* Box Shape */}
            <svg
              viewBox="0 0 349.32501220703125 225"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
              className="stroke-1 stroke-[#818597] h-full w-full absolute z-[90] featureCardSVG transition-all duration-200 featureCardSVG"
              style={{ strokeOpacity: 0.15 }}
            >
              {/* ... (path data) */}
            </svg>

            {/* Box Content */}
            <div className="z-[1000] flex flex-col absolute h-full w-full pl-5 py-6 pr-8 justify-between">
              <div>
                <h2 className="text-[1.375rem] text-deepBlueHead font-extrabold leading-[1.2]">
                  Payment Links
                </h2>
                <p className="mt-6 text-grayText">
                  Share payment link via email, SMS, messenger, chatbot, etc.
                  and get paid immediately
                </p>
              </div>
              <div className="flex items-center cursor-pointer">
                <a
                  href="#"
                  className="text-lightBlue500 font-bold transition-all duration-200"
                >
                  Know More
                </a>
                <i
                  data-feather="chevron-right"
                  className="w-5 h-5 text-lightBlue500 transition-all duration-200"
                ></i>
              </div>
            </div>
          </div>

          {/* Repeat similar structure for Box2 to Box5 */}
          <div className="featureCard w-full relative min-h-[15rem] cursor-pointer">
            {/* Box Icon */}
            <img
              src="./Images/payment-pages-icon.svg"
              className="bg-lightBlue absolute right-3 top-3 w-12 h-12 rounded-full transition-all duration-200 featureCardIcon"
            />
            {/* Box Shape */}
            <svg
              viewBox="0 0 349.32501220703125 225"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
              className="stroke-1 stroke-[#818597] h-full w-full absolute z-[90] featureCardSVG transition-all duration-200 featureCardSVG"
              style={{ strokeOpacity: 0.15 }}
            >
              <path
                d="m 0 6 
          a 6 6 0 0 1 6 -6 
          h 250.32501220703125 
          a 16 16 0 0 1 11 5 
          l 77 77 
          a 16 16 0 0 1 5 11 
          v 126 
          a 6 6 0 0 1 -6 6 
          h -337.32501220703125 
          a 6 6 0 0 1 -6 -6 
          z"
                fill="#fff"
              ></path>
            </svg>

            {/* Box Content */}
            <div className="z-[1000] flex flex-col absolute h-full w-full pl-5 py-6 pr-8 justify-between">
              <div>
                <h2 className="text-[1.375rem] text-deepBlueHead font-extrabold leading-[1.2]">
                  Payment Pages
                </h2>
                <p className="mt-6 text-grayText">
                  Take your store online instantly with zero coding. Accept
                  international & domestic payments
                </p>
              </div>
              <div className="flex items-center cursor-pointer">
                <a
                  href="#"
                  className="text-lightBlue500 font-bold transition-all duration-200"
                >
                  Know More
                </a>
                <i
                  data-feather="chevron-right"
                  className="w-5 h-5 text-lightBlue500 transition-all duration-200"
                ></i>
              </div>
            </div>
          </div>
          <div className="featureCard w-full relative min-h-[15rem] cursor-pointer">
            {/* Box Icon */}
            <img
              src="./Images/payment-button.svg"
              className="bg-lightBlue absolute right-3 top-3 w-12 h-12 rounded-full transition-all duration-200 featureCardIcon"
            />
            {/* Box Shape */}
            <svg
              viewBox="0 0 349.32501220703125 225"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
              className="stroke-1 stroke-[#818597] h-full w-full absolute z-[90] featureCardSVG transition-all duration-200 featureCardSVG"
              style={{ strokeOpacity: 0.15 }}
            >
              <path
                d="m 0 6 
          a 6 6 0 0 1 6 -6 
          h 250.32501220703125 
          a 16 16 0 0 1 11 5 
          l 77 77 
          a 16 16 0 0 1 5 11 
          v 126 
          a 6 6 0 0 1 -6 6 
          h -337.32501220703125 
          a 6 6 0 0 1 -6 -6 
          z"
                fill="#fff"
              ></path>
            </svg>

            {/* Box Content */}
            <div className="z-[1000] flex flex-col absolute h-full w-full pl-5 py-6 pr-8 justify-between">
              <div>
                <h2 className="text-[1.375rem] text-deepBlueHead font-extrabold leading-[1.2]">
                  Payment Buttons
                </h2>
                <p className="mt-6 text-grayText">
                  Create, Copy & Collect With Payment Button. Collect one-time
                  or subscription payments & more
                </p>
              </div>
              <div className="flex items-center cursor-pointer">
                <a
                  href="#"
                  className="text-lightBlue500 font-bold transition-all duration-200"
                >
                  Know More
                </a>
                <i
                  data-feather="chevron-right"
                  className="w-5 h-5 text-lightBlue500 transition-all duration-200"
                ></i>
              </div>
            </div>
          </div>

          {/* Repeat similar structure for Box4 to Box6 */}
          <div className="featureCard w-full relative min-h-[15rem] cursor-pointer">
            {/* Box Icon */}
            <img
              src="./Images/subscriptions-icon.svg"
              className="bg-lightBlue absolute right-3 top-3 w-12 h-12 rounded-full transition-all duration-200 featureCardIcon"
            />
            {/* Box Shape */}
            <svg
              viewBox="0 0 349.32501220703125 225"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
              className="stroke-1 stroke-[#818597] h-full w-full absolute z-[90] featureCardSVG transition-all duration-200 featureCardSVG"
              style={{ strokeOpacity: 0.15 }}
            >
              <path
                d="m 0 6 
                  a 6 6 0 0 1 6 -6 
                  h 250.32501220703125 
                  a 16 16 0 0 1 11 5 
                  l 77 77 
                  a 16 16 0 0 1 5 11 
                  v 126 
                  a 6 6 0 0 1 -6 6 
                  h -337.32501220703125 
                  a 6 6 0 0 1 -6 -6 
                  z"
                fill="#fff"
              ></path>
            </svg>

            {/* Box Content */}
            <div className="z-[1000] flex flex-col absolute h-full w-full pl-5 py-6 pr-8 justify-between">
              <div>
                <h2 className="text-[1.375rem] text-deepBlueHead font-extrabold leading-[1.2]">
                  Subscriptions
                </h2>
                <p className="mt-6 text-grayText">
                  Subscription plans with automated recurring transactions on
                  various payment modes.
                </p>
              </div>
              <div className="flex items-center cursor-pointer">
                <a
                  href="#"
                  className="text-lightBlue500 font-bold transition-all duration-200"
                >
                  Know More
                </a>
                <i
                  data-feather="chevron-right"
                  className="w-5 h-5 text-lightBlue500 transition-all duration-200"
                ></i>
              </div>
            </div>
          </div>
          <div className="featureCard w-full relative min-h-[15rem] cursor-pointer">
            {/* Box Icon */}
            <img
              src="./Images/route-icon.svg"
              className="bg-lightBlue absolute right-3 top-3 w-12 h-12 rounded-full transition-all duration-200 featureCardIcon"
            />
            {/* Box Shape */}
            <svg
              viewBox="0 0 349.32501220703125 225"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
              className="stroke-1 stroke-[#818597] h-full w-full absolute z-[90] featureCardSVG transition-all duration-200 featureCardSVG"
              style={{ strokeOpacity: 0.15 }}
            >
              <path
                d="m 0 6 
                  a 6 6 0 0 1 6 -6 
                  h 250.32501220703125 
                  a 16 16 0 0 1 11 5 
                  l 77 77 
                  a 16 16 0 0 1 5 11 
                  v 126 
                  a 6 6 0 0 1 -6 6 
                  h -337.32501220703125 
                  a 6 6 0 0 1 -6 -6 
                  z"
                fill="#fff"
              ></path>
            </svg>

            {/* Box Content */}
            <div className="z-[1000] flex flex-col absolute h-full w-full pl-5 py-6 pr-8 justify-between">
              <div>
                <h2 className="text-[1.375rem] text-deepBlueHead font-extrabold leading-[1.2]">
                  Route
                </h2>
                <p className="mt-6 text-grayText">
                  Split incoming payments automatically to vendor’s accounts,
                  manage marketplace money flow...
                </p>
              </div>
              <div className="flex items-center cursor-pointer">
                <a
                  href="#"
                  className="text-lightBlue500 font-bold transition-all duration-200"
                >
                  Know More
                </a>
                <i
                  data-feather="chevron-right"
                  className="w-5 h-5 text-lightBlue500 transition-all duration-200"
                ></i>
              </div>
            </div>
          </div>

          {/* Box6 for Smart Collect */}
          <div className="featureCard w-full relative min-h-[15rem] cursor-pointer">
            {/* Box Icon */}
            <img
              src="./Images/smart-collect-icon.svg"
              className="bg-lightBlue absolute right-3 top-3 w-12 h-12 rounded-full transition-all duration-200 featureCardIcon"
            />
            {/* Box Shape */}
            <svg
              viewBox="0 0 349.32501220703125 225"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
              className="stroke-1 stroke-[#818597] h-full w-full absolute z-[90] featureCardSVG transition-all duration-200 featureCardSVG"
              style={{ strokeOpacity: 0.15 }}
            >
              <path
                d="m 0 6 
                  a 6 6 0 0 1 6 -6 
                  h 250.32501220703125 
                  a 16 16 0 0 1 11 5 
                  l 77 77 
                  a 16 16 0 0 1 5 11 
                  v 126 
                  a 6 6 0 0 1 -6 6 
                  h -337.32501220703125 
                  a 6 6 0 0 1 -6 -6 
                  z"
                fill="#fff"
              ></path>
            </svg>

            {/* Box Content */}
            <div className="z-[1000] flex flex-col absolute h-full w-full pl-5 py-6 pr-8 justify-between">
              <div>
                <h2 className="text-[1.375rem] text-deepBlueHead font-extrabold leading-[1.2]">
                  Smart Collect
                </h2>
                <p className="mt-6 text-grayText">
                  Automatically reconcile incoming NEFT, RTGS, IMPS, UPI
                  payments using Virtual Accounts & UPI-IDs
                </p>
              </div>
              <div className="flex items-center cursor-pointer">
                <a
                  href="#"
                  className="text-lightBlue500 font-bold transition-all duration-200"
                >
                  Know More
                </a>
                <i
                  data-feather="chevron-right"
                  className="w-5 h-5 text-lightBlue500 transition-all duration-200"
                ></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;

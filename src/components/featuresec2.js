import React from 'react';
// style={{ backgroundImage: 'url("/Images/feature-section-2BG.svg")' }}
const FeatureSection2 = () => (
  <section className=" bg-sec2-bgimage bg-cover bg-no-repeat w-full mt-14 pt-[16rem] pb-[500px] font-mullish text-white z-[100]">
    <div className="w-11/12 mx-auto pt-4 max-w-[1080px]">
      <h2 className="text-2xl leading-[1.2] text-center font-extrabold">
        Explore Razorpay Business Banking
      </h2>
      <div className="mx-auto border-greenLight border-y-2 mt-4 mb-20 w-6"></div>

      <div className="w-full min-h[440px] flex flex-col relative">
        {/* Images */}
        <img
          alt=""
          src="/Images/x-flame-1.png"
          loading="lazy"
          className="scale-x-[1] right-auto -top-[142px] -left-[140px] w-[200px] absolute"
        />
        <img
          alt=""
          src="/Images/x-flame-2.png"
          loading="lazy"
          className="hidden md:block top-[150px] -right-[180px] w-[270px] absolute"
        />

        {/* Main Feature */}
        <div className="flex justify-between border border-grayText border-opacity-50 p-10 py-12 rounded-md bg-[#181c2e] relative min-h-[440px]">
          {/* Left */}
          <div className="flex flex-col w-full h-full0 space-y-10">
            <h3 className="font-bold text-[28px] max-w-[500px] leading-10">
              Manage your company’s finances with
              <img
                src="/Images/razorpayX.svg"
                width="168px"
                loading="lazy"
                height="32px"
                alt="razorpayX"
                className="inline"
              />
              <span className="text-greenLight">Business Banking</span>
            </h3>

            <ul className="space-y-2">
              <li className="flex space-x-2 items-center">
                <i data-feather="check" className="text-greenLight"></i>
                <span>Open a fully digital current account</span>
              </li>
              <li className="flex space-x-2 items-center">
                <i data-feather="check" className="text-greenLight"></i>
                <span>Automate payables & compliment payments</span>
              </li>
              <li className="flex space-x-2 items-center">
                <i data-feather="check" className="text-greenLight"></i>
                <span>Simplify and track spends with Corporate cards</span>
              </li>
              <li className="flex space-x-2 items-center">
                <i data-feather="check" className="text-greenLight"></i>
                <span>View financial insights at a glance</span>
              </li>
            </ul>

            {/* Button Group */}
            <div className="flex flex-row items-center gap-y-4 space-x-4">
              <button className="flex justify-center items-center bg-lightBlue text-white text-base py-[14px] px-[18px] rounded-md font-bold transition-all duration-200 hover:bg-lightBlue500 relative pr-[90px]">
                Sign Up
                <div className="z-10 w-12 h-[60px] bg-greenLight skew-x-[20deg] absolute right-6 grid place-items-center">
                  <svg viewBox="0 0 24 24" focusable="false" className="w-[20px] h-[20px] -skew-x-[20deg]">
                    <path fill="currentColor" d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"></path>
                  </svg>
                </div>
              </button>
              <div className="flex items-center cursor-pointer group">
                <a href="#" className="text-lightBlue500 font-bold group-hover:text-lightBlue transition-all duration-200">
                  Know More
                </a>
                <i data-feather="chevron-right" className="w-5 h-5 text-lightBlue500 group-hover:text-lightBlue transition-all duration-200"></i>
              </div>
            </div>
          </div>

          {/* Right */}
          <div className="max-w-[600] absolute top-0 bottom-0 right-0">
            <img src="./Images/buisness-banking.png" loading="lazy" className="w-full" />
          </div>
        </div>

        {/* Feature Box */}
        <div className="w-full grid grid-cols-3 gap-4 my-10">
          {/* Box1 */}
          <div className="w-full relative min-h-[15rem] cursor-pointer featureCard2">
            {/* Box Icon */}
            <img
              src="/Images/current-icon.svg"
              className="bg-lightBlue absolute right-3 top-3 w-12 h-12 rounded-full transition-all duration-200 featureCardIcon"
            />
            {/* Box Shape */}
            <svg
              viewBox="0 0 349.32501220703125 225"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
              className="stroke-1 stroke-[#525a76] h-full w-full absolute z-[90] featureCardSVG transition-all duration-200 featureCardSVG"
              style={{ strokeOpacity: 0.8 }}
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
                fill="#181C2E"
              ></path>
            </svg>

            {/* Box Content */}
            <div className="z-[1000] flex flex-col absolute h-full w-full pl-5 py-6 pr-8 justify-between">
              <div>
                <h2 className="text-[1.375rem] text-white font-extrabold leading-[1.2]">
                  Current Account
                </h2>
                <p className="mt-6 text-grayText">
                  Current accounts for fast-growing businesses, supported by
                  the best-in-class technology
                </p>
              </div>
              <div className="flex items-center cursor-pointer">
                <a href="#" className="text-lightBlue500 font-bold transition-all duration-200">
                  Know More
                </a>
                <i data-feather="chevron-right" className="w-5 h-5 text-lightBlue500 transition-all duration-200"></i>
              </div>
            </div>
          </div>

          {/* Box2 */}
          <div className="w-full relative min-h-[15rem] cursor-pointer featureCard2">
            {/* Box Icon */}
            <img
              src="/Images/capital-credit-icon.svg"
              className="bg-lightBlue absolute right-3 top-3 w-12 h-12 rounded-full transition-all duration-200 featureCardIcon"
            />
            {/* Box Shape */}
            <svg
              viewBox="0 0 349.32501220703125 225"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
              className="stroke-1 stroke-[#525a76] h-full w-full absolute z-[90] featureCardSVG transition-all duration-200 featureCardSVG"
              style={{ strokeOpacity: 0.8 }}
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
                fill="#181C2E"
              ></path>
            </svg>

            {/* Box Content */}
            <div className="z-[1000] flex flex-col absolute h-full w-full pl-5 py-6 pr-8 justify-between">
              <div>
                <h2 className="text-[1.375rem] text-white font-extrabold leading-[1.2]">
                  Capital & Credit
                </h2>
                <p className="mt-6 text-grayText">
                  Instant additional cash and corporate cards designed for
                  growing businesses
                </p>
              </div>
              <div className="flex items-center cursor-pointer">
                <a href="#" className="text-lightBlue500 font-bold transition-all duration-200">
                  Know More
                </a>
                <i data-feather="chevron-right" className="w-5 h-5 text-lightBlue500 transition-all duration-200"></i>
              </div>
            </div>
          </div>

          {/* Box3 */}
          <div className="w-full relative min-h-[15rem] cursor-pointer featureCard2">
            {/* Box Icon */}
            <img
              src="/Images/payouts-icon.svg"
              className="bg-lightBlue absolute right-3 top-3 w-12 h-12 rounded-full transition-all duration-200 featureCardIcon"
            />
            {/* Box Shape */}
            <svg
              viewBox="0 0 349.32501220703125 225"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
              className="stroke-1 stroke-[#525a76] h-full w-full absolute z-[90] featureCardSVG transition-all duration-200 featureCardSVG"
              style={{ strokeOpacity: 0.8 }}
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
                fill="#181C2E"
              ></path>
            </svg>

            {/* Box Content */}
            <div className="z-[1000] flex flex-col absolute h-full w-full pl-5 py-6 pr-8 justify-between">
              <div>
                <h2 className="text-[1.375rem] text-white font-extrabold leading-[1.2]">
                  Payouts
                </h2>
                <p className="mt-6 text-grayText">
                  Make simple, reliable & secure payouts to bank accounts, UPI
                  IDs or wallets
                </p>
              </div>
              <div className="flex items-center cursor-pointer">
                <a href="#" className="text-lightBlue500 font-bold transition-all duration-200">
                  Know More
                </a>
                <i data-feather="chevron-right" className="w-5 h-5 text-lightBlue500 transition-all duration-200"></i>
              </div>
            </div>
          </div>
        </div>

        {/* Check Demo Section */}
        <div className="flex items-center justify-between w-full gap-y-6 border border-grayText p-8 py-10 border-opacity-50 rounded-md mb-24">
          <p className="mx-auto text-xl">
            Check out the live demo to learn how RazorpayX works.
            <span className="font-bold">No sign-up required!</span>
          </p>
          <button className="flex justify-center items-center bg-lightBlue text-white text-base py-[14px] px-[18px] rounded-md font-bold transition-all duration-200 hover:bg-lightBlue500 relative pr-[90px]">
            Check out the demo
            <div className="z-10 w-12 h-[60px] bg-greenLight skew-x-[20deg] absolute right-6 grid place-items-center">
              <svg viewBox="0 0 24 24" focusable="false" className="w-[20px] h-[20px] -skew-x-[20deg]">
                <path fill="currentColor" d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"></path>
              </svg>
            </div>
          </button>
        </div>
      </div>
    </div>
  </section>
);

export default FeatureSection2;


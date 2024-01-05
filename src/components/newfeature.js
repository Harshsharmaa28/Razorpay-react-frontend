import React from 'react';

// eslint-disable-next-line
const NewFeatureSection = () => {
  return (
    <section className="bg-white relative font-mullish">
      <div className="w-10/12 mx-auto relative pt-4">
        {/* Images */}
        <img
          src="./Images/feature-section1-dottedrows.png"
          alt=""
          className="absolute w-[233px] left-[300px] -top-[6rem] -z-0"
        />
        <img
          src="./Images/feature-section1-dottedrows.png"
          alt=""
          className="absolute w-[233px] -right-[3.5rem] -top-[6rem] -z-0"
        />

        {/* Features Boxes */}
        <div className="w-full grid grid-cols-3 gap-y-10 gap-x-4 z-[100]">
          {/* Box1 */}
          <div className="flex items-center relative">
            <h2 className="text-deepBlueHead font-extrabold text-4xl leading-[3.375rem]">
              New in the
              <span className="text-lightBlue">Razorpay</span> <br />
              Product Suite
            </h2>
          </div>

          {/* Box 2 */}
          <div className="newFeatureCard w-full p-10 max-h-[300px] bg-white cursor-pointer bg-no-repeat bg-box2-img hover:bg-box2hover-img hover:scale-105 transition-all duration-200">
            <img src="./Images/razorpayXicon.svg" className="w-10 h-10" alt="" />
            <h3 className="font-bold text-lg pt-4">Corporate Cards</h3>
            <p className="py-3 leading-normal text-grayText">
              Simplify your recurring, international and team expenses with
              savings on every spend. Save up to 10 lacs every month.
            </p>

            <div className="flex items-center cursor-pointer group">
              <a
                href="javascript:void(0)"
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

          {/* Box 3 */}
          <div className="newFeatureCard w-full p-10 max-h-[300px] bg-white cursor-pointer bg-no-repeat bg-box3-img hover:bg-box3hover-img hover:scale-105 transition-all duration-200">
            <img
              src="/Images/autopay-icon.svg"
              className="w-10 h-10 bg-lightBlue rounded-full"
              alt=""
            />

            <h3 className="font-bold text-lg pt-4">UPI AutoPay</h3>
            <p className="py-3 leading-normal text-grayText">
              Allow customers to set up recurring payments using UPI Apps.
            </p>

            <div className="flex items-center cursor-pointer group">
              <a
                href="javascript:void(0)"
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

          {/* Box 4 */}
          <div className="newFeatureCard w-full p-10 max-h-[300px] bg-white cursor-pointer bg-no-repeat bg-box4-img hover:bg-box4hover-img hover:scale-105 transition-all duration-200">
            <img src="/Images/magic-checkout.svg" className="w-10 h-10" alt="" />
            <h3 className="font-bold text-lg pt-4">Magic Checkout</h3>
            <p className="py-3 leading-normal text-grayText">
              Improve your order conversion rates & reduce return-to-origins.
              Boost your business by 20%
            </p>

            <div className="flex items-center cursor-pointer group">
              <a
                href="javascript:void(0)"
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

          {/* Box 5 */}
          <div className="newFeatureCard w-full p-10 max-h-[300px] bg-white cursor-pointer bg-no-repeat bg-box5-img hover:bg-box5hover-img hover:scale-105 transition-all duration-200">
            <img
              src="/Images/payment-button.svg"
              className="w-10 h-10 rounded-full bg-lightBlue"
              alt=""
            />
            <h3 className="font-bold text-lg pt-4">Payment Button</h3>
            <p className="py-3 leading-normal text-grayText">
              Accept payments on your website, in less than 5 minutes. No
              developer needed.
            </p>

            <div className="flex items-center cursor-pointer group">
              <a
                href="javascript:void(0)"
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

          {/* Box 6 */}
          <div className="newFeatureCard w-full p-10 max-h-[300px] bg-white cursor-pointer bg-box6-img bg-no-repeat hover:bg-box6hover-img hover:scale-105 transition-all duration-200">
            <img
              src="/Images/instant-settlement-icon.svg"
              className="w-10 h-10 rounded-full bg-lightBlue"
              alt=""
            />
            <h3 className="font-bold text-lg pt-4">Instant Settlements</h3>
            <p className="py-3 leading-normal text-grayText">
              Settle your customer payments within 10 seconds as soon your
              account is activated, even during holidays.
            </p>

            <div className="flex items-center cursor-pointer group">
              <a
                href="javascript:void(0)"
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
      </div>
    </section>
  );
};

export default NewFeatureSection;


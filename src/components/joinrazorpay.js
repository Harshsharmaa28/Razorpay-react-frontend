import React from 'react';

const JoinRazorpaySection = () => {
  return (
    <section className="bg-[#f5f8fe] -mt-[200px] relative -z-[100] pt-40 pb-12 font-mullish w-full">
      <div className="w-11/12 max-w-[1080px] mx-auto relative pt-4 flex">
        {/* Left */}
        <div className="flex flex-col w-[calc(100%-500px)] justify-center">
          <h2 className="font-extrabold text-deepBlueHead text-2xl">
            Join the 50,00,000+ businesses using Razorpay
          </h2>
          <div className="w-6 border-y-2 border-greenLight mt-4 mb-10"></div>
          <p>
            We make it easier for you to focus on building great products while
            we work on simplifying your payments. Become one of us by joining
            thousands of our happy users and simplify the online payment
            experience for your customers.
          </p>
          <p className="mt-6">
            Focus on your business while we handle the complexities of payments
            for you.
          </p>
        </div>

        {/* Right */}
        <div className="w-[500px] h-[500px] overflow-y-hidden relative">
          <div
            className="absolute w-full h-[200px] top-0 z-20"
            style={{ background: 'linear-gradient(180deg, #f4f8ff, #fff0)' }}
          ></div>

          <img
            src="./Images/comanies.png"
            className="absolute z-10 h-auto companiesList"
          />

          <div
            className="absolute w-full h-[200px] bottom-0 z-20"
            style={{ background: 'linear-gradient(0deg, #f4f8ff, #fff0)' }}
          ></div>
        </div>
      </div>
    </section>
  );
};

export default JoinRazorpaySection;

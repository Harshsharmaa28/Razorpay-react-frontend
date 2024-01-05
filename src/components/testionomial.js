import React from 'react';

const TestimonialSection = () => {
  return (
    <section className="font-mullish">
      <div className="w-11/12 max-w-[1300px] mx-auto relative py-20">
        <h2 className="text-2xl text-center font-extrabold text-deepBlueHead">
          An Experience
          <br />
          People Love to Talk About
        </h2>

        <div className="w-6 border-y-2 border-greenLight mx-auto my-4"></div>

        <img
          src="./Images/feature-section1-dottedrows.png"
          className="absolute w-[200px] -z-[1] top-[8rem] left-[2rem]"
        />
        {/* left button */}
        <button className="w-[100px] h-[100px] bg-[#f4f8ff] rounded-full absolute left-0 top-1/2 flex justify-center items-center">
          <div className="w-[65%] h-[65%] bg-[#f4f8ff] rounded-full flex justify-center items-center mix-blend-multiply">
            <i
              data-feather="chevron-right"
              className="stroke-[5px] w-6 h-6 text-gray-400 rotate-180"
            ></i>
          </div>
        </button>

        {/* right button */}
        <button className="w-[100px] h-[100px] bg-[#f4f8ff] rounded-full absolute right-0 top-1/2 flex justify-center items-center">
          <div className="w-[65%] h-[65%] bg-[#f4f8ff] rounded-full flex justify-center items-center mix-blend-multiply">
            <i
              data-feather="chevron-right"
              className="stroke-[5px] w-6 h-6 text-gray-400"
            ></i>
          </div>
        </button>

        {/* Main Content */}
        <div className="flex space-x-[10rem] my-20 max-w-[960px] mx-auto items-center">
          {/* Left */}
          <div>
            <img
              src="./Images/testimonial.jpg"
              height="320px"
              width="320px"
              className="rounded-xl"
            />
          </div>

          {/* Right */}
          <div className="flex flex-col max-w-[400px] space-y-1 items-start">
            <img
              src="./Images/quotes.svg"
              width="35px"
              height="40px"
              className="-mb-2"
            />
            <p className="text-3xl font-extralight">
              Readymade Closed Wallet Solution For Quick Refunds
            </p>
            <button className="underline italic cursor-pointer text-sm text-grayText">
              Learn More
            </button>
            <h4 className="font-extrabold text-2xl">Lorem Ipsum</h4>
            <p className="font-medium">CEO, XYZ Engineering Company</p>
            <img
              src="./Images/fake-company-logo.png"
              width="80px"
              height="40px"
              className="object-cover"
            />
          </div>
        </div>

        {/* 6 Dots */}
        <div className="w-full flex mx-auto space-x-2 justify-center">
          <div className="w-2 h-2 rounded-full bg-gray-300"></div>
          <div className="w-2 h-2 rounded-full bg-lightBlue300"></div>
          <div className="w-2 h-2 rounded-full bg-gray-300"></div>
          <div className="w-2 h-2 rounded-full bg-gray-300"></div>
          <div className="w-2 h-2 rounded-full bg-gray-300"></div>
          <div className="w-2 h-2 rounded-full bg-gray-300"></div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;

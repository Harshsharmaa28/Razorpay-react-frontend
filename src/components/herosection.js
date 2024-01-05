import React from 'react';
// import hero-illustration from 'src/Images/hero-illustration.jpg';
const HeroSection = () => {
  return (
    <section
      className="relative text-white"
      style={{
        background: 'linear-gradient(45deg, #02042b, #02042b 50%)',
      }}
    >
      <div className="w-10/12 max-w-[1080px] mx-auto flex flex-row items-center justify-center">
        {/* Left */}
        <div className="flex flex-col font-mullish space-y-8">
          <h2 className="text-[40px] leading-[1.2] font-extrabold">
            Power your finance, grow your business
          </h2>
          <div className="w-6 border-y-2 border-greenLight"></div>
          <p className="text-[18px] leading-7 opacity-70">
            Accept payments from customers. Automate payouts to vendors & employees. Never run out of working capital.
          </p>
          <button
            className="w-fit py-[14px] px-[18px] bg-lightBlue rounded-md font-bold transition-all duration-200 hover:bg-lightBlue500"
          >
            Sign Up Now
          </button>
        </div>

        {/* Right */}
        <div className="max-w-[680px]">
          <img src="/Images/hero-illustration.jpg" className="w-full" alt="Hero Illustration" />
        </div>
      </div>

      {/* Shape Part */}
      <div className="absolute w-[100vw] right-0 left-0 top-[98%] z-[1000]">
        <img
          src="Images/hero-shape.svg"
          className="w-full object-fill z-10 pointer-events-none"
          alt="Hero Shape"
        />
      </div>
    </section>
  );
};

export default HeroSection;

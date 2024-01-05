import React from 'react';

const CoreFeaturesSection = () => {
  return (
    <section className=" bg-coresec-bgimage bg-no-repeat bg-[cover] bg-center z-[1000] relative mt-14 font-mullish text-white coreFeature">
      <div className="w-11/12 max-w-[1080px] mx-auto relative pt-4">
        <h2 className="font-extrabold text-2xl text-center">Features</h2>
        <div className="w-6 border-y-2 border-greenLight my-4 , mx-auto"></div>
        <p className="text-center max-w-[450px] mx-auto">
          Empower your business with all the right tools to accept online payments and provide the best customer experience
        </p>

        {/* Core Features Boxes */}
        <div className="grid grid-cols-4 gap-[2rem] mt-8">
          {/* Box 1 */}
          <div>
            <img src="./Images/instant-activation-icon.svg" alt="" />
            <h2 className="font-extrabold my-4 text-lg">Instant Activation</h2>
            <p className="opacity-[0.87]">
              Get activated and transact within 2 minutes. Completely online onboarding with minimum documentation.
            </p>
          </div>

          {/* Box 2 */}
          <div>
            <img src="./Images/easy-integration.svg" alt="" />
            <h2 className="font-extrabold my-4 text-lg">Easy Integration</h2>
            <p className="opacity-[0.87]">
              With plugins for all major platforms and languages, integrate and go live with Razorpay in less than an hour.
            </p>
          </div>

          {/* Box 3 */}
          <div>
            <img src="./Images/api-driven-icon.svg" alt="" />
            <h2 className="font-extrabold my-4 text-lg">API Driven</h2>
            <p className="opacity-[0.87]">
              Build your business for scale with our complete API-driven automation that requires zero manual intervention.
            </p>
          </div>

          {/* Box 4 */}
          <div>
            <img src="./Images/payment-modes.svg" alt="" />
            <h2 className="font-extrabold my-4 text-lg">100+ payment modes</h2>
            <p className="opacity-[0.87]">
              Offer your customers the luxury of all payment modes including Credit/Debit cards, Netbanking, UPI, Wallets etc.
            </p>
          </div>

          {/* Box 5 */}
          <div>
            <img src="./Images/simple-pricing.svg" alt="" />
            <h2 className="font-extrabold my-4 text-lg">Simple Pricing</h2>
            <p className="opacity-[0.87]">
              Our innovative payment solutions with competitive pricing make payments simpler.
            </p>
          </div>

          {/* Box 6 */}
          <div>
            <img src="./Images/instant-activation-icon.svg" alt="" />
            <h2 className="font-extrabold my-4 text-lg">Best in Industry Support</h2>
            <p className="opacity-[0.87]">
              Always available email, phone and chat based support to help you in your every step.
            </p>
          </div>

          {/* Box 7 */}
          <div>
            <img src="./Images/dashboard-reporting-icon.svg" alt="" />
            <h2 className="font-extrabold my-4 text-lg">Dashboard Reporting</h2>
            <p className="opacity-[0.87]">
              Real-time data and insights on your Razorpay Dashboard to make informed business decisions.
            </p>
          </div>

          {/* Box 8 */}
          <div>
            <img src="./Images/secure-icon.svg" alt="" />
            <h2 className="font-extrabold my-4 text-lg">Secure</h2>
            <p className="opacity-[0.87]">
              PCI DSS Level 1 compliant solution which removes your burden of regulatory compliance.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoreFeaturesSection;

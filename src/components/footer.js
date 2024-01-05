import React from 'react';

const Footer = () => {
    return (
        <footer
            style={{ background: 'linear-gradient(to right, #eef9fe, #edf7ff)' }}
            className="-mt-[300px] font-mullish"
        >
            <div className="pb-10 pt-[350px] w-11/12 max-w-[1080px] mx-auto flex space-x-4 flex-row justify-between">
                {/* column - 1 */}
                <div className="flex flex-col max-w-[260px]">
                    <img
                        src="/Images/logo-dark.svg"
                        loading="lazy"
                        width="120px"
                        height="24px"
                        alt="Razorpay Logo"
                    />
                    <p className="text-sm text-grayText my-3">
                        Razorpay is the only payments solution in India that allows
                        businesses to accept, process and disburse payments with its product
                        suite. It gives you access to all payment modes including credit
                        card, debit card, netbanking, UPI and popular wallets including
                        JioMoney, Mobikwik, Airtel Money, FreeCharge, Ola Money and PayZapp.
                    </p>
                    <p className="text-sm text-grayText my-3">
                        RazorpayX supercharges your business banking experience, bringing
                        effectiveness, efficiency, and excellence to all financial
                        processes. With RazorpayX, businesses can get access to
                        fully-functional current accounts, supercharge their payouts and
                        automate payroll compliance.
                    </p>
                    <p className="text-sm text-grayText my-3">
                        Manage your marketplace, automate bank transfers, collect recurring
                        payments, share invoices with customers and avail working capital
                        loans - all from a single platform. Fast forward your business with
                        Razorpay.
                    </p>
                    <p className="text-[0.625rem] text-grayText my-3">
                        Disclaimer: The RazorpayX powered Current Account and VISA corporate
                        credit card are provided by RBI licensed banks. Your RazorpayX
                        powered account is provided by our partner bank, in accordance with
                        RBI regulations. RazorpayX itself is not a bank and doesn't hold or
                        claim to hold a banking license.
                    </p>
                    <p className="uppercase font-bold text-gray2">
                        Subscribe to our newsletter
                    </p>
                    <form className="relative bg-white w-[260px] mt-2 mb-4">
                        <input
                            placeholder="Your email address"
                            className="pr-16 border-gray-300 outline-lightBlue focus:outline-lightBlue placeholder:text-sm py-2 px-4 border rounded-sm transition-all duration-200"
                        />
                        <button className="h-[90%] bg-white absolute right-[1.5px] top-1/2 -translate-y-1/2 z-10 text-sm font-bold text-lightBlue300 flex rounded-sm items-center hover:text-lightBlue500 transition-all duration-200">
                            Subscribe
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
                    </form>
                    <div className="flex items-start space-x-4">
                        <img
                            src="/Images/footer-certificate-1.png"
                            loading="lazy"
                            width="92"
                            height="40"
                            className="cursor-pointer"
                            alt="Certificate 1"
                        />
                        <img
                            src="/Images/footer-certificate-2.jpg"
                            loading="lazy"
                            width="122"
                            height="80"
                            className="cursor-pointer"
                            alt="Certificate 2"
                        />
                    </div>
                </div>
                <div className="flex flex-col space-y-4 md:space-y-0 md:flex-row md:space-x-4 justify-between">
                    {/* sub column - 1 */}
                    <div className="space-y-3">
                        <div>
                            <p className="uppercase font-bold text-gray2 mb-1">BANKING PLUS</p>
                            <ul className="space-y-2">
                                <li>
                                    <a
                                        href="#"
                                        className="font-medium text-lightBlue500 hover:text-grayBlue transition-all duration-200"
                                    >
                                        RazorpayX
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#"
                                        className="font-medium text-lightBlue500 hover:text-grayBlue transition-all duration-200"
                                    >
                                        Current Accounts
                                    </a>
                                </li>
                                <div>
                                    <p className="uppercase font-bold text-gray2 mb-1">BANKING PLUS</p>
                                    <ul className="space-y-2">
                                        <li>
                                            <a
                                                href="#"
                                                className="font-medium text-lightBlue500 hover:text-grayBlue transition-all duration-200"
                                            >
                                                RazorpayX
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                href="#"
                                                className="font-medium text-lightBlue500 hover:text-grayBlue transition-all duration-200"
                                            >
                                                Current Accounts
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                href="#"
                                                className="font-medium text-lightBlue500 hover:text-grayBlue transition-all duration-200"
                                            >
                                                Payouts
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                href="#"
                                                className="font-medium text-lightBlue500 hover:text-grayBlue transition-all duration-200"
                                            >
                                                Payout Links
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                href="#"
                                                className="font-medium text-lightBlue500 hover:text-grayBlue transition-all duration-200"
                                            >
                                                Corporate Credit Card
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                href="#"
                                                className="relative font-medium text-lightBlue500 hover:text-grayBlue transition-all duration-200"
                                            >
                                                View Live Demo
                                                <span className="text-white uppercase bg-green-500 rounded-sm text-xs font-bold p-1">
                                                    New
                                                </span>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                                <div>
                                    <p className="uppercase font-bold text-gray2 mb-1">LENDING</p>
                                    <ul className="space-y-2">
                                        <li>
                                            <a
                                                href="#"
                                                className="font-medium text-lightBlue500 hover:text-grayBlue transition-all duration-200"
                                            >
                                                Razorpay Capital
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                href="#"
                                                className="font-medium text-lightBlue500 hover:text-grayBlue transition-all duration-200"
                                            >
                                                Instant Settlements
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                href="#"
                                                className="font-medium text-lightBlue500 hover:text-grayBlue transition-all duration-200"
                                            >
                                                Working Capital Loans
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                href="#"
                                                className="font-medium text-lightBlue500 hover:text-grayBlue transition-all duration-200"
                                            >
                                                Marketplace Instant Settlements
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                                <div>
                                    <p className="uppercase font-bold text-gray2 mb-1">RISK & FRAUD</p>
                                    <ul className="space-y-2">
                                        <li>
                                            <a
                                                href="#"
                                                className="font-medium text-lightBlue500 hover:text-grayBlue transition-all duration-200"
                                            >
                                                Thirdwatch
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                href="#"
                                                className="relative font-medium text-lightBlue500 hover:text-grayBlue transition-all duration-200"
                                            >
                                                PrePay CoD
                                                <span className="text-white uppercase bg-green-500 rounded-sm text-xs font-bold p-1">
                                                    New
                                                </span>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                                <div>
                                    <p className="uppercase font-bold text-gray2 mb-1">BECOME A PARTNER</p>
                                    <ul className="space-y-2">
                                        <li>
                                            <a
                                                href="#"
                                                className="font-medium text-lightBlue500 hover:text-grayBlue transition-all duration-200"
                                            >
                                                Refer and Earn
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                href="#"
                                                className="font-medium text-lightBlue500 hover:text-grayBlue transition-all duration-200"
                                            >
                                                Onboarding APIs
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                                <div>
                                    <div>
                                        <p className="uppercase font-bold text-gray2 mb-1">COMPANY</p>
                                        <ul className="space-y-2">
                                            <li>
                                                <a
                                                    href="#"
                                                    className="font-medium text-lightBlue500 hover:text-grayBlue transition-all duration-200"
                                                >
                                                    About Us
                                                </a>
                                            </li>
                                            <li>
                                                <a
                                                    href="#"
                                                    className="relative font-medium text-lightBlue500 hover:text-grayBlue transition-all duration-200"
                                                >
                                                    Careers
                                                    <span className="text-white bg-green-500 rounded-sm text-xs font-bold p-1">
                                                        We're hiring!
                                                    </span>
                                                </a>
                                            </li>
                                            <li>
                                                <a
                                                    href="#"
                                                    className="font-medium text-lightBlue500 hover:text-grayBlue transition-all duration-200"
                                                >
                                                    Terms of Use
                                                </a>
                                            </li>
                                            {/* ... other company links ... */}
                                        </ul>
                                    </div>
                                    {/* ... other columns ... */}
                                </div>
                                {/* ... other list items ... */}
                            </ul>

                        </div>

                        {/* ... other sub columns ... */}

                    </div>

                    {/* ... other columns ... */}
                </div>
                {/* column - 2 */}

            </div>
        </footer>
    );
};

export default Footer;

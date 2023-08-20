"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import { faTelegram, faXTwitter } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [aboutSectionVisible, setAboutSectionVisible] = useState(false);
  const [featuresSectionVisible, setFeaturesSectionVisible] = useState(false);
  const [joinUsSectionVisible, setJoinUsSectionVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const aboutSection = document.getElementById('about-section');
      const featuresSection = document.getElementById('features-section');
      const joinUsSection = document.getElementById('join-us-section');
      
      if (aboutSection) {
        const rect = aboutSection.getBoundingClientRect();
        const windowHeight = window.innerHeight || document.documentElement.clientHeight;
        
        if (rect.top <= windowHeight * 0.75) {
          setAboutSectionVisible(true);
        }
      }

      if (featuresSection) {
        const rect = featuresSection.getBoundingClientRect();
        const windowHeight = window.innerHeight || document.documentElement.clientHeight;
        
        if (rect.top <= windowHeight * 0.75) {
          setFeaturesSectionVisible(true);
        }
      }

      if (joinUsSection) {
        const rect = joinUsSection.getBoundingClientRect();
        const windowHeight = window.innerHeight || document.documentElement.clientHeight;
        
        if (rect.top <= windowHeight * 0.75) {
          setJoinUsSectionVisible(true);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <div className="relative bg-blue-500">
        <div className="flex justify-between items-center p-4">
          <div className="flex items-center space-x-4">
            <img src="main.jpeg" alt="Logo" className="h-8 w-8 rounded-full" />
          </div>
          <nav className="hidden md:flex flex-grow justify-center space-x-4">
            <a href="#" className="text-white">
              Home
            </a>
            <a href="#" className="text-white">
              About
            </a>
            <a href="#" className="text-white">
              Team
            </a>
          </nav>

          <div className="md:hidden">
            <button
              className="text-white"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
        <nav
          className={`${
            mobileMenuOpen ? "block" : "hidden"
          } absolute top-full left-0 right-0 bg-blue-500 md:hidden transition-all duration-300`}
        >
          <div className="p-4 space-y-2">
            <a href="#" className="block text-white">
              Home
            </a>
            <a href="#" className="block text-white">
              About
            </a>
            <a href="#" className="block text-white">
              Team
            </a>
          </div>
        </nav>
      </div>

      <section className="flex flex-col items-center justify-center py-12 bg-gray-100">
        <img
          src="main.jpeg"
          alt="Logo"
          className=" h-32 w-32 md:h-64 md:w-64 rounded-full"
        />
        <h2 className="mt-4 text-xl font-semibold md:text-2xl">Introducing</h2>
        <div className="mt-2 w-20 h-1 bg-blue-500"></div>
        <p className="mt-4 text-xl font-semibold text-center ">
          Burn Doge: Revolutionizing Crypto with Controlled Scarcity.
        </p>
      </section>

      <section
        id="about-section"
        className={`flex bg-slate-500 flex-col-reverse md:flex-row items-center justify-center p-8 ${
          aboutSectionVisible ? "slide-in" : ""
        }`}
      >
        <img
          src="tweet.png"
          alt="About Us"
          className={`h-auto md:h-auto rounded-lg w-full md:w-2/5 md:mr-8 object-cover hidden md:block`}
        />
        <div className="mt-4 md:mt-0">
          <h2 className="text-4xl md:font-bold font-semibold mb-2">About Us</h2>
          <p className="font-semibold mb-2">
            Burn Doge: Where controlled scarcity meets community-driven growth.
            Together, we're rewriting the rules of crypto and redefining what it
            means to be a holder. Join us and become a part of something
            revolutionary.
          </p>
          <p className="mb-2">
            At Burn Doge, we're not just another cryptocurrency we're a
            revolution in the world of digital assets. Inspired by the
            remarkable success of Dogecoin and driven by a passion for
            innovation, Burn Doge brings a fresh perspective to the crypto
            landscape. Our mission? To embrace the power of controlled scarcity
            and redefine the value proposition for crypto holders.
          </p>
          <p className="mb-2">
            In a market saturated with countless tokens, Burn Doge stands out by
            implementing a deflationary model that truly rewards its community
            of holders. Through regular token burns, we systematically reduce
            the supply of Burn Doge tokens, instigating a controlled scarcity
            that inherently drives up their value. This unique approach not only
            fuels excitement but also cultivates a sense of unity among holders
            who recognize the potential for sustained growth. By marrying
            cutting-edge blockchain technology with the allure of scarcity,
            we're shaping a new era of crypto where value isn't just theoretical
            it's tangible.
          </p>
          <p className="md:mb-0 mb-6">
            Beyond the innovative tokenomics, Burn Doge takes pride in fostering
            a thriving community that embodies the spirit of camaraderie and
            collaboration. Our vision is to create more than just a
            cryptocurrency; we're building a movement. Through engaging social
            platforms, interactive experiences, and charity initiatives, we're
            bringing together like-minded individuals who share our passion for
            cryptocurrency, blockchain, and pushing the boundaries of what's
            possible. Join us on this exciting journey as we combine the
            playfulness of the Dogecoin phenomenon with cutting-edge innovation,
            paving the way for a brighter crypto future.
          </p>
        </div>
      </section>

      <section
        id="features-section"
        className={`py-12 bg-slate-300 text-center ${
          featuresSectionVisible ? "slide-in-up" : ""
        }`}
      >
        <h2 className="text-3xl text-center font-semibold mb-8">Features</h2>
        <div className="flex flex-wrap justify-center">
          <div className="bg-white bg-opacity-30 md:w-1/4 w-64 h-auto p-4 m-4 rounded-lg">
            <h3 className="text-xl font-semibold mb-2">Token Name</h3>
            <p>Burn Doge (BDT)</p>
          </div>
          <div className="bg-white bg-opacity-30 md:w-1/4 w-64 h-auto p-4 m-4 rounded-lg">
            <h3 className="text-xl font-semibold mb-2">Token Type</h3>
            <p>Utility Token</p>
          </div>
          <div className="bg-white bg-opacity-30 md:w-1/4 w-64 h-auto p-4 m-4 rounded-lg">
            <h3 className="text-xl font-semibold mb-2">Total Supply</h3>
            <p>Initially set at 1,000,000 BDT</p>
          </div>
          <div className="bg-white bg-opacity-30 md:w-1/4 w-64 h-auto p-4 m-4 rounded-lg">
            <h3 className="text-xl font-semibold mb-2">Token Distribution</h3>
            <p> <span className="font-semibold">Initial Sale : </span></p><p> *30% of total supply allocated for the initial sale to fund development, marketing, and operational expenses.
            </p><p><span className="font-semibold">Liquidity Pool : </span> </p><p>* 70% of total supply used to establish a liquidity pool to ensure stability and facilitate trading on exchanges.
  
            </p><p><span className="font-semibold">Community and Ecosystem : </span> </p><p>* 15% of total supply allocated for partnerships, collaborations, and community development initiatives.
            </p><p><span className="font-semibold">Team and Advisors : </span></p><p>* 10% of total supply allocated for the project's core team and advisors, with a vesting period to ensure long-term commitment.</p>
          </div>
          <div className="bg-white bg-opacity-30 md:w-1/4 w-64 h-auto p-4 m-4 rounded-lg">
            <h3 className="text-xl font-semibold mb-2">Token Utility</h3>
            <p>
              <span className="font-semibold">Deflationary Mechanism : </span></p><p> * A percentage (e.g., 1%) of each transaction is burned, reducing the total supply over time, thus increasing scarcity and potential value.
  
              </p><p><span className="font-semibold">Governance : </span></p><p>* BDT holders can participate in governance decisions related to protocol upgrades, changes, and proposals.
              </p><p><span className="font-semibold">Access to Features : </span></p><p>* BDT can be used to access premium features within the associated platform or ecosystem.</p>
          </div>
          <div className="bg-white bg-opacity-30 md:w-1/4 w-64 h-auto p-4 m-4 rounded-lg">
            <h3 className="text-xl font-semibold mb-2">Liquidity and Exchanges</h3>
            <p>
            <span className="font-semibold">Listed on : </span> </p><p>BDT will be listed on several reputable exchanges to ensure liquidity and wider accessibility.
              </p><p><span className="font-semibold">Details : </span> </p><p>A portion of the liquidity pool will be used to provide initial trading pairs on exchanges, enhancing market liquidity.</p>
          </div>
          {/* Add more div boxes as needed */}
        </div>
      </section>


      <section
        id="join-us-section"
        className={`bg-gray-100 py-12 text-center ${
          joinUsSectionVisible ? 'slide-in-up' : ''
        }`}
      >
        <h2 className="text-3xl font-semibold mb-4">Join Us</h2>
        <div className="flex flex-col items-center mb-4">
          <img
            src="main.jpeg"
            alt="Join Us"
            className="h-32 w-32 md:h-64 md:w-64 rounded-full"
          />
          <div className="mt-2 text-sm max-w-md mx-auto px-4">
            Ready to be a part of the Burn Doge revolution? Join us today and become a valued member of our community, where innovation, controlled scarcity, and boundless possibilities await. Let's shape the future of crypto together!
          </div>
        </div>
        <div className="flex items-center justify-center space-x-4">
          <a
            className="m-2"
            href="https://twitter.com/Bardoge313?t=5Z9gymFBFHN_UjcFMVdZGQ&s=09"
          >
            <FontAwesomeIcon
              icon={faXTwitter}
              size="lg"
              className="w-8 h-8 text-white hover:text-[#DE7596]"
            />
          </a>
          <a className="m-2" href="https://t.me/bardoge">
            <FontAwesomeIcon
              icon={faTelegram}
              size="lg"
              className="w-8 h-8 text-white hover:text-[#DE7596]"
            />
          </a>
        </div>
      </section>

      <footer className="bg-gray-900 py-8 text-white text-center">
        <p className="text-lg">
          Listed on Binance Smart Chain
        </p>
      </footer>
    </>
  );
}

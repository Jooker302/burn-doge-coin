"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import { faTelegram, faXTwitter } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";




export default function Home() {

  const TeamMember = ({ name, role, image, isVisible}) => {
    return (
      // <div className="w-1/3 p-4">
      //   <div className="bg-white rounded-lg shadow-lg p-6">
      //     <img className="mx-auto mb-4 w-24 h-24 rounded-full" src={image} alt={`${name}'s Profile`} />
      //     <h2 className="text-xl font-semibold">{name}</h2>
      //     <p className="text-gray-600">{role}</p>
      //   </div>
      // </div>
      <div className={`flex flex-col items-center md:mx-5 mb-8 ${isVisible ? 'slide-inn' : 'slide-outt'}`}>
        <a href={role}>
      <img
        src={image}
        alt={name}
        className="h-32 w-32 md:h-40 md:w-40 rounded-full object-cover border-2 border-blue-500"
      />

      <p className="mt-2 font-semibold text-lg">{name}</p>
      </a>
    </div>
    );
  };
  

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

  const [teamVisible, setTeamVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const teamSection = document.getElementById('team-section');
      
      if (teamSection) {
        const rect = teamSection.getBoundingClientRect();
        const windowHeight = window.innerHeight || document.documentElement.clientHeight;
        
        if (rect.top <= windowHeight * 0.75) {
          setTeamVisible(true);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const teamMembers = [
    { name: 'DxSale', role: 'https://dx.app', image: 'dxsale.png' },
    { name: 'ARB', role: '', image: 'https://pbs.twimg.com/profile_images/1653532864309239810/ZjT_zBAS_400x400.png' },
    { name: 'BNB Chain', role: '', image: 'https://th.bing.com/th/id/OIP.1wTTp6-XPR-g6PS8D8ZAqAHaDt?pid=ImgDet&rs=1' },
    { name: '1inch', role: '', image: 'https://th.bing.com/th/id/R.95bf06d513ed7ae2ea7ee2457a8daf91?rik=IfsTHJ7lZxWswQ&pid=ImgRaw&r=0' },
    { name: 'Chain Link', role: '', image: 'https://th.bing.com/th/id/OIP.mleb5_jAlRxR3Yj8Zksc2gHaHa?pid=ImgDet&rs=1' },
    { name: 'Coinbase', role: '', image: 'data:image/jpeg;base64,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' },
  ];

  const [visibleMembers, setVisibleMembers] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      const nextIndex = (currentIndex + 3) % teamMembers.length;
      setVisibleMembers(teamMembers.slice(nextIndex, nextIndex + 3));
      setCurrentIndex(nextIndex);
    }, 5000);

    return () => clearInterval(interval);
  }, [currentIndex]);

  

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
            <a href="#about-section" className="text-white">
              About
            </a>
            <a href="#team-section" className="text-white">
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
            <a href="#about-section" className="block text-white">
              About
            </a>
            <a href="#team-section" className="block text-white">
              Team
            </a>
            <a href="https://t.me/burndoge" className="block text-white">
              Telegram
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
          {/* <a
            className="m-2"
            href="https://twitter.com/Bardoge313?t=5Z9gymFBFHN_UjcFMVdZGQ&s=09"
          >
            <FontAwesomeIcon
              icon={faXTwitter}
              size="lg"
              className="w-8 h-8 text-white hover:text-[#DE7596]"
            />
          </a> */}
          <a className="m-2" href="https://t.me/burndoge">
            <FontAwesomeIcon
              icon={faTelegram}
              size="lg"
              className="w-8 h-8 text-black hover:text-[#DE7596]"
            />
          </a>
        </div>
      </section>

      <section
        id="team-section"
        className="bg-gray-100 py-12 text-center"
      >
        {/* <h2 className="text-3xl font-semibold mb-8">Meet Our Team</h2>
        <div className="flex flex-wrap justify-center">
          {teamMembers.map((member, index) => (
            <TeamMember
              key={index}
              index={index}
              visibleIndex={visibleIndex}
              {...member}
            />
          ))}
        </div> */}
        {/* <div className="flex justify-center items-center h-screen"> */}
        <h2 className="text-3xl font-semibold mb-8">Meet Our Partners</h2>
      <div className="flex flex-wrap justify-center">
        {visibleMembers.map((member, index) => (
          <TeamMember
          key={index}
          {...member}
          isVisible={visibleMembers.includes(member)}
        />
        ))}
      </div>
    {/* </div> */}
      </section>

      <footer className="bg-blue-500 py-8 text-white text-center">
        <p className="text-lg">
          Listed on Binance Smart Chain
        </p>
      </footer>
    </>
  );
}

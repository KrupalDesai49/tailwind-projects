import React from "react";
import logo from "./images/logo.svg";
import google from "./images/logo-google.png";
import hp from "./images/logo-hp.png";
import ibm from "./images/logo-ibm.png";
import microsoft from "./images/logo-microsoft.png";
import graphics from "./images/logo-vector-graphics.png";
import desktop from "./images/bg-header-desktop.png";
import mobile from "./images/bg-header-mobile.png";
import clipboard from "./images/clipboard.png";
import favicon from "./images/favicon-32x32.png";
import blacklist from "./images/icon-blacklist.svg";
import facebook from "./images/icon-facebook.svg";
import instagram from "./images/icon-instagram.svg";
import preview from "./images/icon-preview.svg";
import text from "./images/icon-text.svg";
import twitter from "./images/icon-twitter.svg";
import computer from "./images/image-computer.png";
import devices from "./images/image-devices.png";

const P1 = () => {
  const h3Class = "text-darkGrayishBlue mb-8 text-4xl font-bold md:text-5xl";
  return (
    <div className=" font-sans3 ">
      <img
        src={mobile}
        alt=""
        className="absolute -z-10 w-screen object-contain md:hidden "
      />
      <img
        src={desktop}
        alt=""
        className="absolute -z-10 hidden w-screen object-contain md:block "
      />
      {/* Hero Section */}
      <section id="hero">
        <div className=" section-container  mb-40 pt-16">
          <img src={logo} alt="" className="mx-auto my-16" />

          <h3 className="h3-container">A history of everything you copy</h3>

          <p className="section-content text-2xl mb-10">
            Clipboard allows you to track and organize everything you copy.
            Instantly access your clipboard on all your devices.
          </p>

          {/* Button Container */}
          <div className="button-container ">
            <a
              href="#"
              className="bg-strongCyan rounded-full p-4 px-8 shadow-lg duration-200 hover:opacity-80"
            >
              Download for iOS
            </a>

            <a
              href="#"
              className="bg-lightBlue rounded-full p-4 px-8 shadow-lg duration-200 hover:opacity-80"
            >
              Download for Mac
            </a>
          </div>
        </div>
      </section>

      {/* Snippets Section */}
      <section id="snippets">
        <div className="section-container my-20 ">
          <h3 className="h3-container">Keep track of your snippets</h3>
          <p className="section-content text-xl mb-24">
            Clipboard instantly stores any item you copy in the cloud, meaning
            you can access your snippets immediately on all your devices. Our
            Mac and iOS apps will help you organize everything.
          </p>
        </div>
      </section>

      {/* Feature Section */}
      <section id="features">
        <div className="section-container my-20">
          <div className=" relative flex  flex-col md:flex-row md:space-x-32">
            {/* Images */}
            <div className="md:w-1/2">
              <img
                src={computer}
                alt=""
                className="right-[50%] top-0 md:absolute"
              />
            </div>

            {/* Item Container */}
            <div className="mb-24 mt-16 flex flex-col space-y-12 text-xl md:mb-60 md:w-1/2 md:pl-16 md:text-left">
              {/* Item 1 */}
              <div className="">
                <h5 className="h5-container">Quick Search</h5>
                <p className="text-grayishBlue max-w-md">
                  Easily search your snippets by content, category, web address,
                  application, and more.
                </p>
              </div>

              {/* Item 2 */}
              <div className="">
                <h5 className="h5-container">iCloud Sync</h5>
                <p className="text-grayishBlue max-w-md">
                  Instantly saves and syncs snippets across all your devices.
                </p>
              </div>

              {/* Item 3 */}
              <div className="">
                <h5 className="h5-container">Completely History</h5>
                <p className="text-grayishBlue max-w-md">
                  Retrieve any snippets from the first moment you started using
                  the app. .
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Access Anywhere Section */}
      <section id="access">
        <div className="section-container my-20">
          <h3 className="h3-container">Access Clipboard Anywhere</h3>
          <p className="section-content text-xl mb-24 ">
            Whether you’re on the go, or at your computer, you can access all
            your Clipboard snippets in a few simple clicks.
          </p>
          <img src={devices} alt="" className="mx-auto" />
        </div>
      </section>

      {/* Superchage Section */}
      <section id="supercharge">
        <div className="section-container my-20">
          <h3 className="h3-container">Supercharge your workflow</h3>
          <p className="section-content text-xl mb-16">
            We've got the tools to boost your productivity.
          </p>

          {/* Item Container */}
          <div className="flex flex-col items-center justify-between space-y-16 md:flex-row md:space-x-12 md:space-y-0">
            {/* Item 1 */}
            <div className="flex flex-col items-center space-y-5 ">
              <img src={blacklist} alt="" className="mb-6" />
              <h5 className="h5-container">Create Blacklists</h5>
              <p className="text-grayishBlue max-w-md">
                Easily search your snippets by content, category, web address,
                application, and more.
              </p>
            </div>

            {/* Item 2 */}
            <div className="flex flex-col items-center space-y-5 ">
              <img src={text} alt="" className="mb-6" />
              <h5 className="h5-container">Plain Text Snippets</h5>
              <p className="text-grayishBlue max-w-md">
                Remove unwanted formatting from copied text for a consistent
                look.
              </p>
            </div>

            {/* Item 3 */}
            <div className="flex flex-col items-center space-y-5 ">
              <img src={preview} alt="" className="mb-6" />
              <h5 className="h5-container">Sneak Preview</h5>
              <p className="text-grayishBlue max-w-md">
                Quick preview of all snippets on your Clipboard for easy access.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* References Section */}
      <section id="References">
        <div className="mx-auto my-44 flex max-w-6xl flex-col items-center justify-between space-y-16 px-10 md:flex-row md:space-y-0 ">
          <img src={google} alt="" />
          <img src={ibm} alt="" />
          <img src={microsoft} alt="" />
          <img src={hp} alt="" />
          <img src={graphics} alt="" />
        </div>
      </section>

      {/* Bottom CTA Section */}
      <section id="bottom">
        <div className="section-container my-20">
          <h3 className="h3-container">Clipboard for iOS and MacOS</h3>
          <p className="section-content text-xl mb-10">
            Available for free on the App Store. Download for Mac or iOS, sync
            with iCloud and you're ready to start adding to your clipboard.
          </p>

          {/* Button Container */}
          <div className="button-container">
            <a
              href="#"
              className="bg-strongCyan rounded-full p-4 px-8 shadow-lg duration-200 hover:opacity-80"
            >
              Download for iOS
            </a>

            <a
              href="#"
              className="bg-lightBlue rounded-full p-4 px-8 shadow-lg duration-200 hover:opacity-80"
            >
              Download for Mac
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-50">
        <div className="section-container">
            <div className="flex flex-col justify-between items-center md:flex-row">
                {/* Image */}
                <img src={logo} alt="" className="scale-50" />
                {/* Container for Menu */}
                <div className="flex flex-col items-center justify-between flex-1 mb-10 space-y-6 md:flex-row md:mb-0 md:space-y-0 text-grayishBlue">
                    {/* Menus */}
                    <div className="flex flex-col space-y-4 md:flex-row md:ml-24 md:space-x-24 md:space-y-0">
                        {/* Menu 1 */}
                        <div className="flex flex-col space-y-4 text-center md:text-left">
                            <div>
                                <a href="#" className="hover:text-strongCyan">FAQs</a>
                            </div>
                            <div>
                                <a href="#" className="hover:text-strongCyan">Contact Us</a>
                            </div>
                        </div>
                        {/* Menu 2 */}
                        <div className="flex flex-col space-y-4 text-center md:text-left">
                            <div>
                                <a href="#" className="hover:text-strongCyan">Privacy Policy</a>
                            </div>
                            <div>
                                <a href="#" className="hover:text-strongCyan">Press Kit</a>
                            </div>
                        </div>
                        {/* Menu 2 */}
                        <div className="flex flex-col space-y-4 text-center md:text-left">
                            <div>
                                <a href="#" className="hover:text-strongCyan ">Install Guide</a>
                            </div>
                        </div>
                    </div>
                    {/* Social Icon */}
                    <div className="flex justify-between w-32 py-1">
                        <a href="#"><img src={facebook} alt="" className="duration-200 ficon" /></a>
                        <a href="#"><img src={twitter} alt="" className="duration-200 ficon" /></a>
                        <a href="#"><img src={instagram} alt="" className="duration-200 ficon" /></a>
                    </div>
                </div>
            </div>
        </div>
      </footer>
    </div>
  );
};

export default P1;

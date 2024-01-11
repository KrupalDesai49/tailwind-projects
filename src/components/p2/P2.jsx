import React,{useState} from "react";
import logo from "./images/logo.svg";
import hero2 from "./images/mobile/image-hero.jpg";
import hero from "./images/desktop/image-hero.jpg";
import interactive from "./images/desktop/image-interactive.jpg";
import earth from "./images/desktop/image-deep-earth.jpg";
import earth2 from "./images/mobile/image-deep-earth.jpg";
import night from "./images/desktop/image-night-arcade.jpg";
import night2 from "./images/mobile/image-night-arcade.jpg";
import soccer from "./images/desktop/image-soccer-team.jpg";
import soccer2 from "./images/mobile/image-soccer-team.jpg";
import grid from "./images/desktop/image-grid.jpg";
import grid2 from "./images/mobile/image-grid.jpg";
import above from "./images/desktop/image-from-above.jpg";
import above2 from "./images/mobile/image-from-above.jpg";
import borealis from "./images/desktop/image-pocket-borealis.jpg";
import borealis2 from "./images/mobile/image-pocket-borealis.jpg";
import curiosity from "./images/desktop/image-curiosity.jpg";
import curiosity2 from "./images/mobile/image-curiosity.jpg";
import fisheye from "./images/desktop/image-fisheye.jpg";
import fisheye2 from "./images/mobile/image-fisheye.jpg";
import facebook from "./images/icon-facebook.svg";
import instagram from "./images/icon-instagram.svg";
import pinterest from "./images/icon-pinterest.svg";
import twitter from "./images/icon-twitter.svg";
// import a from "./images/";
// import a from "./images/mobile/";

const P2 = () => {
  const [menuToggle, setMenuToggle] = useState(false)
  function menuHandler(){
    // const btn= document.getElementById('menu-btn');
    // btn.toggle('open')
    // alert(123)
    setMenuToggle(a=>!a)

  }
  return (
    <div className="font-sans4">
      {/* Hero Section */}
      <section id="hero">
        {/* Hero Background image */}
        <img
          src={hero}
          alt=""
          className="absolute -z-20 hidden h-[40rem] w-screen object-cover object-left md:block"
        />
        <img
          src={hero2}
          alt=""
          className="absolute -z-20 h-[35rem] w-screen object-cover md:hidden"
        />
        {/* Hero Container */}
        <div className="container mx-auto max-w-6xl px-6 py-12 ">
          {/* Menu/Logo Container  */}
          <nav className="flex items-center justify-between font-bold text-white ">
            {/* Logo */}
            <img src={logo} alt="" />
            {/* Menu */}
            <div className="hidden h-10 font-alata md:flex md:space-x-10">
              <div className="group">
                <a href="#" className="">
                  About
                </a>
                <div className="mx-2 group-hover:border-b group-hover:border-blue-50"></div>
              </div>
              <div className="group">
                <a href="#" className="">
                  Careers
                </a>
                <div className="mx-2 group-hover:border-b group-hover:border-blue-50"></div>
              </div>
              <div className="group">
                <a href="#" className="">
                  Evens
                </a>
                <div className="mx-2 group-hover:border-b group-hover:border-blue-50"></div>
              </div>
              <div className="group">
                <a href="#" className="">
                  Products
                </a>
                <div className="mx-2 group-hover:border-b group-hover:border-blue-50"></div>
              </div>
              <div className="group">
                <a href="#" className="">
                  Supports
                </a>
                <div className="mx-2 group-hover:border-b group-hover:border-blue-50"></div>
              </div>
            </div>
            {/*  Hamberger Button */}
            <div className="md:hidden" onClick={menuHandler}>
              <button className={` ${menuToggle?'open':''} z-40 block hamburger md:hidden md:outline-none`} id="menu-btn" type="button">
                <span className="hamburger-top"></span>
                <span className="hamburger-middle"></span>
                <span className="hamburger-bottom"></span>
              </button>
            </div>
          </nav>
          {/*  Mobile Menu */}
          <div id="menu" className={`absolute top-0 left-0 bottom-0  ${menuToggle?'flex':'hidden'} flex-col self-end  w-full min-h-screen py-1 pt-40 pl-12 space-y-3 text-lg text-white uppercase bg-black `}>
            <a href="#" className="hover:text-pink-500">About</a>
            <a href="#" className="hover:text-pink-500">Careers</a>
            <a href="#" className="hover:text-pink-500">Evens</a>
            <a href="#" className="hover:text-pink-500">Products</a>
            <a href="#" className="hover:text-pink-500">Supports</a>
          </div>

          <div className="mb-32 mt-32 max-w-lg border-2 p-4 font-sans4 text-4xl uppercase text-white md:m-32 md:mx-0 md:p-10 md:text-6xl ">
            Impressive Experiences That Deliver
          </div>
        </div>
      </section>

      {/* Feature Section */}
      <section id="feature">
        <div className="relative mx-auto my-32 flex max-w-6xl flex-col px-6 text-gray-900 md:flex-row md:px-0">
          {/* Images */}
          <img src={interactive} alt="" />

          {/* Text Container */}
          <div className="top-48 bg-white pr-0 md:absolute md:right-0 md:py-20 md:pl-20 ">
            <h2 className="mb-6 mt-10 max-w-lg  text-center text-4xl uppercase text-gray-900 md:mt-0 md:text-left md:text-5xl">
              The leader in interactive VR
            </h2>

            <p className="max-w-md text-center  md:text-left">
              Founded in 2011, Loopstudios has been producing world-class
              virtual reality projects for some of the best companies around the
              globe. Our award-winning creations have transformed businesses
              through digital experiences that bind to their brand.
            </p>
          </div>
        </div>
      </section>

      {/* Creation Section */}
      <section id="creation">
        {/* Creation Container */}
        <div className="container mx-auto my-32 max-w-6xl px-6 text-gray-900 md:px-0">
          {/* Cration Header */}
          <div className="mb-20 flex justify-center md:justify-between ">
            <h2 className="text-center text-4xl uppercase md:text-left md:text-5xl ">
              Our Creation
            </h2>
            <button className="btn1 hidden md:block">see all</button>
          </div>
          {/* Items Container */}
          <div className="item-container  ">
            {/* Item 1  */}
            <div className="group  relative overflow-hidden md:w-1/4">
              {/* Desktop Image */}
              <img
                src={earth}
                className="hidden w-full duration-200 group-hover:scale-110 md:block"
              ></img>
              {/* Mobile Image */}
              <img src={earth2} className=" w-full md:hidden"></img>
              {/* Item Gradient */}
              <div className="item-gradient"></div>
              {/* Item Text */}
              <h5 className="h5-container2">Deep Earth</h5>
            </div>

            {/* Item 2  */}
            <div className="group  relative overflow-hidden md:w-1/4">
              {/* Desktop Image */}
              <img
                src={night}
                className="hidden w-full duration-200 group-hover:scale-110 md:block"
              ></img>
              {/* Mobile Image */}
              <img src={night2} className=" w-full md:hidden"></img>
              {/* Item Gradient */}
              <div className="item-gradient"></div>
              {/* Item Text */}
              <h5 className="h5-container2">Night Arcade</h5>
            </div>

            {/* Item 3  */}
            <div className="group  relative overflow-hidden md:w-1/4">
              {/* Desktop Image */}
              <img
                src={soccer}
                className="hidden w-full duration-200 group-hover:scale-110 md:block"
              ></img>
              {/* Mobile Image */}
              <img src={soccer2} className=" w-full md:hidden"></img>
              {/* Item Gradient */}
              <div className="item-gradient"></div>
              {/* Item Text */}
              <h5 className="h5-container2">Soccer Team VR</h5>
            </div>

            {/* Item 4  */}
            <div className="group  relative overflow-hidden md:w-1/4">
              {/* Desktop Image */}
              <img
                src={grid}
                className="hidden w-full duration-200 group-hover:scale-110 md:block"
              ></img>
              {/* Mobile Image */}
              <img src={grid2} className=" w-full md:hidden"></img>
              {/* Item Gradient */}
              <div className="item-gradient"></div>
              {/* Item Text */}
              <h5 className="h5-container2">The Grid</h5>
            </div>
          </div>

          {/* Items Container 2*/}
          <div className="item-container mt-10 ">
            {/* Item 1  */}
            <div className="group  relative overflow-hidden md:w-1/4">
              {/* Desktop Image */}
              <img
                src={above}
                className="hidden w-full duration-200 group-hover:scale-110 md:block"
              ></img>
              {/* Mobile Image */}
              <img src={above2} className=" w-full md:hidden"></img>
              {/* Item Gradient */}
              <div className="item-gradient"></div>
              {/* Item Text */}
              <h5 className="h5-container2">From Up Above VR</h5>
            </div>

            {/* Item 2  */}
            <div className="group  relative overflow-hidden md:w-1/4">
              {/* Desktop Image */}
              <img
                src={borealis}
                className="hidden w-full duration-200 group-hover:scale-110 md:block"
              ></img>
              {/* Mobile Image */}
              <img src={borealis2} className=" w-full md:hidden"></img>
              {/* Item Gradient */}
              <div className="item-gradient"></div>
              {/* Item Text */}
              <h5 className="h5-container2">Pocket Borealis</h5>
            </div>

            {/* Item 3  */}
            <div className="group  relative overflow-hidden md:w-1/4">
              {/* Desktop Image */}
              <img
                src={curiosity}
                className="hidden w-full duration-200 group-hover:scale-110 md:block"
              ></img>
              {/* Mobile Image */}
              <img src={curiosity2} className=" w-full md:hidden"></img>
              {/* Item Gradient */}
              <div className="item-gradient"></div>
              {/* Item Text */}
              <h5 className="h5-container2">The Curiosity</h5>
            </div>

            {/* Item 4  */}
            <div className="group  relative overflow-hidden md:w-1/4">
              {/* Desktop Image */}
              <img
                src={fisheye}
                className="hidden w-full duration-200 group-hover:scale-110 md:block"
              ></img>
              {/* Mobile Image */}
              <img src={fisheye2} className=" w-full md:hidden"></img>
              {/* Item Gradient */}
              <div className="item-gradient"></div>
              {/* Item Text */}
              <h5 className="h5-container2">Make It Fisheye</h5>
            </div>
          </div>
          {/* Bottom Button Container */}
          <div className="mt-10 flex justify-center md:hidden ">
            <button className="btn1 w-full md:hidden">See All</button>
          </div>
        </div>
      </section>

      <footer className="bg-black">
        {/* Container */}
        <div className="container mx-auto max-w-6xl py-10 ">
          {/* Footer Flex Container */}
          <div className="mb-8 flex flex-col items-center space-y-6 md:flex-row md:items-start md:justify-between md:space-y-0">
            {/* Menu & Logo Container */}
            <div className="flex flex-col items-center space-y-8 md:items-start md:space-y-4">
              {/* Logo */}
              <div className="h-8">
                <img src={logo} alt="" className="w-44 md:ml-3" />
              </div>
              {/* Menu Container */}
              <div className="flex flex-col space-y-4 text-center  text-white md:ml-3 md:flex-row md:space-x-6 md:space-y-0">
                {/* Item 1 */}
                <div className="group h-10">
                  <a href="#">About</a>
                  <div className="mx-2 group-hover:border-b group-hover:border-blue-50"></div>
                </div>
                {/* Item 2 */}
                <div className="group h-10">
                  <a href="#">Careers</a>
                  <div className="mx-2 group-hover:border-b group-hover:border-blue-50"></div>
                </div>
                {/* Item 3 */}
                <div className="group h-10">
                  <a href="#">Events</a>
                  <div className="mx-2 group-hover:border-b group-hover:border-blue-50"></div>
                </div>
                {/* Item 4 */}
                <div className="group h-10">
                  <a href="#">Products</a>
                  <div className="mx-2 group-hover:border-b group-hover:border-blue-50"></div>
                </div>
                {/* Item 5 */}
                <div className="group h-10">
                  <a href="#">Support</a>
                  <div className="mx-2 group-hover:border-b group-hover:border-blue-50"></div>
                </div>
              </div>
            </div>
            {/* Social & Copy Container*/}
            <div className="flex flex-col items-start justify-between space-y-4 text-gray-500">
              {/* Icon container */}
              <div className="flex items-center justify-center mx-auto md:mx-0 space-x-4 md:justify-end">
                {/* Icon 1 */}
                <div className="group h-8">
                  <a href="#">
                    <img src={facebook} alt="" className="h-6" />
                  </a>
                </div>
                {/* Icon 2 */}
                <div className="group h-8">
                  <a href="#">
                    <img src={twitter} alt="" className="h-6" />
                  </a>
                </div>
                {/* Icon 3 */}
                <div className="group h-8">
                  <a href="#">
                    <img src={pinterest} alt="" className="h-6" />
                  </a>
                </div>
                {/* Icon 4 */}
                <div className="group h-8">
                  <a href="#">
                    <img src={instagram} alt="" className="h-6" />
                  </a>
                </div>
              </div>
              {/* Copy Continer */}
              <div className="font-bold">
                &copy; 2022 Loopstudios. All Rights Reserved{" "}
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default P2;

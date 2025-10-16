// Hero.jsx
import {ReactTyped} from "react-typed";

export default function Hero() {
  return (
    <section id="hero" className=" relative flex items-center justify-center lg:justify-start bg-[url('./assets/heroBG.jpg')] bg-center bg-cover h-screen overflow-x-hidden">
    {/* <div className="absolute inset-0 bg-gray-400 bg-opacity-40 z-0"></div> */}
                                {/* Container */}
      <div className=" relative z-1 px-4 sm:ml-5 sm:px-0 lg:ml-20 sm:space-y-6 text-center">
                                {/* Text content on top */}
        <div className="flex flex-col items-center lg:items-start sm:items-center space-y-2 sm:space-y-4">
          <p className="text-white text-md sm:text-lg md:mb-10 lg:mb-0 md:text-3xl lg:text-2xl">Hello, I'm</p>
          <h1 className="text-4xl font-extrabold text-blue-900 sm:text-6xl md:text-8xl">Felix Omollo</h1>
          <p className="text-white text-md sm:text-base m-2 md:m-10 lg:m-0 md:text-3xl lg:text-2xl">A Geospatial Analyst </p>
        </div>
                                {/* Buttons */}
        <div className="flex flex-col sm:flex-row items-center sm:justify-center sm:items-center gap-4 md:gap-20 md:mt-15 lg:gap-15 lg:mt-6 mt-6">
            <a href="/Felix_Odhiambo_GIS_CV.pdf" download className="bg-blue-700 text-white lg:text-xl md:text-2xl px-6 md:px-7 py-3 rounded-b-4xl rounded-t-2xl shadow hover:bg-amber-500 transition-transform duration-500 active:scale-102">Download CV</a>
            <a href="#projects" className="mt-6 inline-block bg-blue-700 text-white px-6 py-3 md:text-2xl lg:text-xl md:px-7 rounded-t-4xl rounded-b-2xl shadow hover:bg-amber-500 transition-transform duration-500 active:scale-102">Geospatial Portfolio</a>
        </div>
                                {/* Scroll down */}
        <div className=" absolute text-sm rotate-0 md:text-lg text-gray-400 animate-pulse mt-30 md:mt-60 sm:mt-22 lg:mt-25">Scroll down ↓</div>
      </div>


    </section>
  );
}

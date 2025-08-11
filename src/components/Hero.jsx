// Hero.jsx
export default function Hero() {
  return (
    <section id="hero" className=" relative flex items-center justify-center lg:justify-start bg-[url('./assets/heroBG.jpg')] bg-center bg-cover h-screen overflow-x-hidden">
    {/* <div className="absolute inset-0 bg-gray-400 bg-opacity-40 z-0"></div> */}
                                {/* Container */}
      <div className=" relative z-1 px-4 sm:ml-5 sm:px-0 lg:ml-20 sm:space-y-6 text-center">
                                {/* Text content on top */}
        <div className="flex flex-col items-center lg:items-start sm:items-center space-y-2 sm:space-y-4">
          <p className="text-white text-base sm:text-lg lg:text-xl">Hello, I'm</p>
          <h1 className="text-4xl font-extrabold text-blue-900 sm:text-6xl md:text-7xl lg:text-8xl">Felix Omollo</h1>
          <p className="text-white text-sm sm:text-base m-2 lg:text-xl">A Geospatial Analyst | GIS Developer | Remote Sensing Specialist</p>
        </div>
                                {/* Buttons */}
        <div className="flex flex-col sm:flex-row items-center sm:justify-center sm:items-center gap-4 lg:gap-20 mt-6">
            <a href="public\Felix_Odhiambo_GIS_CV.pdf" download className="bg-blue-700 text-white lg:text-xl px-6 py-3 rounded-b-4xl rounded-t-2xl shadow hover:bg-blue-800 transition">Download CV</a>
            <a href="#projects" className="mt-6 inline-block bg-blue-700 text-white lg:text-xl px-6 py-3 rounded-t-4xl rounded-b-2xl shadow hover:bg-blue-800 transition">Geospatial Portfolio</a>
        </div>
                                {/* Scroll down */}
        <div className=" absolute text-sm rotate-0 text-gray-400 animate-pulse mt-30 sm:mt-22 lg:mt-34 ">Scroll down ↓</div>
      </div>


    </section>
  );
}

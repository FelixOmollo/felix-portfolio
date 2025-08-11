export default function Footer() {
  return (
    <section id="footer" className="relative text-center py-10 h-100 bg-[url('./assets/footerBg.jpg')] bg-center bg-cover">
     <div className="absolute inset-0 bg-black/50">
        <div className="max-w-6xl mx-auto px-4 text-white">
          <p className="text-md font-semibold mt-10 text-gray-400 md:text-lg">Felix Omollo | Geospatial Analyst and Developer</p>
          <div className="mt-20 md:mt-25">
            <a href="/#contact" className="text-sm md:text-lg mr-4 bg-amber-400 py-3 px-8 rounded-full text-white hover:text-blue-700 font-bold transition-all duration-300">Let’s Connect</a>
          </div>
          <div className="absolute bottom-2 left-0 w-full text-center text-gray-400">
            <p className="text-sm md:text-lg mb-5">&copy; 2025 Felix Omollo | All rights reserved</p>
            <p className="text-sm md:text-lg">Website crafted with ❤️ &amp; code by Felix Omollo</p>
          </div>
        </div>
     </div>
    </section>
  );
}

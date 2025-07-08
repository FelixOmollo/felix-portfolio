// Hero.jsx
export default function Hero() {
  return (
    <section id="hero" className="text-center py-20 bg-gray-50 h-screen">
      
      <div class="mt-5">
        <h1 className="text-5xl font-extrabold text-blue-900 mb-2">Felix Omollo</h1>
        <p className="text-lg text-gray-600">Geoinformatics Graduate | GIS & Remote Sensing</p>
        <a href="/Felix_Odhiambo_CV.pdf" download className="mt-6 inline-block bg-blue-700 text-white px-6 py-3 rounded shadow hover:bg-blue-800 transition">Download CV</a>
      </div>

      <span flex justify-start>Scroll down</span>

    </section>
  );
}

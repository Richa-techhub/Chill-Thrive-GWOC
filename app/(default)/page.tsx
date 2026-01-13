import Link from "next/link";

export default function Home() {
  return (
    // "pt-32" creates space at the top so the Navbar doesn't cover the text
    <main className="min-h-screen bg-white pt-32">
      
      {/* --- HERO SECTION --- */}
      <section className="pb-20 lg:pb-28 overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 relative text-center">
          
          <h1 className="text-5xl md:text-6xl font-extrabold text-slate-900 tracking-tight mb-4">
            Recover. Reset. <span className="text-blue-600">Rejuvenate.</span>
          </h1>
          
          <p className="text-xl text-slate-500 mb-8 max-w-2xl mx-auto">
            Experience the ultimate cryotherapy and wellness sessions designed to help you thrive. 
            Join hundreds of happy clients in Gujarat.
          </p>

          <div className="max-w-xs mx-auto sm:max-w-none sm:flex sm:justify-center gap-4">
            {/* Button to go to the Booking Page */}
            <Link 
              href="/bookings" 
              className="btn text-white bg-blue-600 hover:bg-blue-700 w-full sm:w-auto mb-4 sm:mb-0 px-8 py-3 rounded-lg font-bold shadow-lg transition"
            >
              Book a Session
            </Link>
            
            {/* Button to go to Services */}
            <Link 
              href="/services" 
              className="btn text-white bg-slate-900 hover:bg-slate-800 w-full sm:w-auto px-8 py-3 rounded-lg font-bold shadow-lg transition"
            >
              View Services
            </Link>
          </div>

        </div>
      </section>

      {/* --- FEATURES SECTION --- */}
      <section className="py-12 md:py-20 border-t border-slate-200 bg-slate-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900">Why Choose Chill Thrive?</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 text-center">
              <div className="text-4xl mb-4">❄️</div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Cryotherapy</h3>
              <p className="text-slate-500">Advanced cold therapy to reduce inflammation and boost energy.</p>
            </div>

            {/* Feature 2 */}
            <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 text-center">
              <div className="text-4xl mb-4">⚡</div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Fast Recovery</h3>
              <p className="text-slate-500">Get back to your peak performance faster than ever before.</p>
            </div>

            {/* Feature 3 */}
            <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 text-center">
              <div className="text-4xl mb-4">🧘</div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Holistic Wellness</h3>
              <p className="text-slate-500">A complete approach to your physical and mental well-being.</p>
            </div>
          </div>

        </div>
      </section>

    </main>
  );
}
import React from "react";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white text-slate-900">

      {/* HERO */}
      <section className="py-24 bg-slate-50 border-b border-slate-100">
        <div className="max-w-6xl mx-auto px-6 text-center space-y-6">
          <h4 className="text-pink-600 font-black uppercase tracking-[0.3em] text-xs">
            Contact
          </h4>
          <h1 className="text-4xl md:text-6xl font-black">
            Let’s <span className="text-pink-600">Connect</span>
          </h1>
          <p className="text-slate-600 text-lg max-w-2xl mx-auto">
            Agar aap AI Automation, Chatbots ya Web Development par kaam karwana
            chahte hain to be-jhijhak contact karein.
          </p>
        </div>
      </section>

      {/* CONTACT CONTENT */}
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16">

          {/* LEFT INFO */}
          <div className="space-y-8">
            <h2 className="text-3xl font-black uppercase">
              Get In Touch
            </h2>

            <p className="text-slate-600 leading-relaxed">
              Main PAIB Bhawana Software House ka student hoon aur
              modern AI-based solutions par kaam karta hoon.
              Aap apna idea share karein, hum mil kar solution banayenge.
            </p>

            <div className="space-y-4 text-sm font-bold text-slate-700">
              <p>📍 Bhawana, Punjab, Pakistan</p>
              <p>📧 masifgpt@gmail.com</p>
              <p>📞 +92 370 7615224</p>
            </div>

            <div className="flex gap-4 pt-4">
              <a
                href="mailto:masifgpt@gmail.com"
                className="px-6 py-3 bg-pink-600 text-white rounded font-black uppercase text-xs shadow-lg hover:bg-pink-700 transition"
              >
                Send Email
              </a>

              <a
                href="https://wa.me/923707615224"
                target="_blank"
                className="px-6 py-3 bg-slate-900 text-white rounded font-black uppercase text-xs shadow-lg hover:bg-black transition"
              >
                WhatsApp
              </a>
            </div>
          </div>

          {/* RIGHT FORM (UI Only) */}
          <div className="bg-slate-50 p-10 rounded-3xl border border-slate-100 shadow-xl">
            <h3 className="text-2xl font-black mb-6 uppercase">
              Send a Message
            </h3>

            <form className="space-y-5">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full px-5 py-3 rounded border border-slate-200 focus:outline-none focus:border-pink-600"
              />

              <input
                type="email"
                placeholder="Your Email"
                className="w-full px-5 py-3 rounded border border-slate-200 focus:outline-none focus:border-pink-600"
              />

              <textarea
                placeholder="Your Message"
                rows={5}
                className="w-full px-5 py-3 rounded border border-slate-200 focus:outline-none focus:border-pink-600"
              ></textarea>

              <button
                type="submit"
                className="w-full bg-pink-600 text-white py-4 rounded font-black uppercase text-xs shadow-lg hover:bg-pink-700 transition"
              >
                Submit Message
              </button>
            </form>
          </div>

        </div>
      </section>

      {/* FOOTER NOTE */}
      <footer className="py-10 text-center border-t border-slate-100 text-[10px] font-black text-slate-400 uppercase tracking-[0.4em]">
        © 2024 Muhammad Asif • Contact Page
      </footer>
    </div>
  );
}

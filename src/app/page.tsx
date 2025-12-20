import React from "react";

// Project Data (Aap apne hisab se URL badal sakte hain)
const projects = [
  { name: "AI Health Bot", url: "https://vibe-1-iota.vercel.app/" },
  { name: "Automated Lead Gen", url: "https://vibe-2-chi.vercel.app/" },
  { name: "Neural Grid UI", url: "https://vibe-3-two.vercel.app/" },
];

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-white font-sans text-slate-900 overflow-x-hidden">
      
      {/* 1. TOP HEADER (Inspired by Capture3.PNG) */}
      <div className="bg-slate-50 border-b border-slate-100 py-2 px-6 hidden md:block">
        <div className="max-w-7xl mx-auto flex justify-between items-center text-[10px] font-bold text-slate-400 uppercase tracking-widest">
          <div className="flex gap-6">
            <span>📞 +92 370 7615224</span>
            <span>📧 masifgpt@gmail.com</span>
          </div>
          <div>Bhawana, Punjab, Pakistan</div>
        </div>
      </div>

      {/* 2. NAVIGATION BAR */}
      <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-100 px-6 py-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="text-2xl font-black text-pink-600 tracking-tighter">
            ASIF<span className="text-slate-900">.PORTFOLIO</span>
          </div>
          <div className="hidden md:flex gap-8 text-xs font-black uppercase tracking-widest text-slate-600">
            <a href="#home" className="hover:text-pink-600 transition">Home</a>
            <a href="#services" className="hover:text-pink-600 transition">Services</a>
            <a href="#projects" className="hover:text-pink-600 transition">Projects</a>
            <a href="#contact" className="hover:text-pink-600 transition">Contact</a>
          </div>
          <a href="https://wa.me/923707615224" className="bg-pink-600 hover:bg-pink-700 text-white px-6 py-2.5 rounded text-xs font-black uppercase shadow-lg shadow-pink-200 transition-all">
            Buy Now
          </a>
        </div>
      </nav>

      {/* 3. HERO SECTION (BuzzSumo + Enver Style Mix) */}
      <section id="home" className="relative py-20 md:py-32 overflow-hidden bg-white">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 items-center gap-16 relative z-10">
          <div className="space-y-6">
            <h4 className="text-pink-600 font-black uppercase tracking-[0.3em] text-xs">Student @ PAIB Bhawana</h4>
            <h1 className="text-5xl md:text-7xl font-black text-slate-900 leading-[1.1]">
              LOVE DESIGN WITH <br />
              <span className="text-pink-600">YOUR SOUL</span>
            </h1>
            <p className="text-slate-500 text-lg leading-relaxed max-w-lg">
              Main Muhammad Asif hoon, PAIB Bhawana Software House ka student. 
              Main AI Automation, Intelligent Chatbots aur Agentic AI seekh raha hoon 
              taake modern businesses ko futuristic solutions de sakoon.
            </p>
            <div className="pt-4">
              <a href="#about" className="bg-pink-600 text-white px-8 py-4 rounded font-black text-xs uppercase shadow-xl hover:bg-pink-700 transition-all inline-block">
                About Me
              </a>
            </div>
          </div>

          {/* Right Visual (Enver Style Layout) */}
          <div className="relative flex justify-center">
             <div className="relative w-72 h-72 md:w-[450px] md:h-[450px] bg-slate-100 rounded-3xl overflow-hidden border-[12px] border-white shadow-2xl rotate-2">
                <img src="/pic2.jpg" alt="Muhammad Asif" className="w-full h-full object-cover grayscale-[30%]" />
             </div>
             {/* Floating Elements from BuzzSumo */}
             <div className="absolute top-10 -left-10 bg-white p-4 rounded-xl shadow-2xl animate-bounce-slow border border-slate-50 hidden sm:block">
                <span className="text-pink-600 text-2xl">🤖</span>
                <div className="text-[10px] font-black uppercase text-slate-400">Agentic AI</div>
             </div>
          </div>
        </div>
      </section>

      {/* 4. SERVICES SECTION (Capture3.PNG Style) */}
      <section id="services" className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <div className="mb-16">
            <h4 className="text-pink-600 font-bold uppercase tracking-widest text-xs mb-2">What I Do</h4>
            <h2 className="text-4xl font-black text-slate-900 uppercase">We Provide Services</h2>
            <div className="h-1 w-20 bg-pink-600 mx-auto mt-4"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            {[
              { title: "AI Automation", desc: "Zaiper aur custom Python scripts ke zariye repetitive business tasks ko automate karna.", icon: "⚡" },
              { title: "Intelligent Chatbots", desc: "GPT-4 aur Claude models ka use karke smart customer support bots taiyar karna.", icon: "💬" },
              { title: "Agentic AI", desc: "Aise AI agents banana jo khud decisions le sakein aur complex workflows handle karein.", icon: "🧠" },
              { title: "Web Development", desc: "React aur Tailwind CSS ke saath fast aur responsive interfaces design karna.", icon: "💻" },
              { title: "Prompt Engineering", desc: "LLMs se behtareen results nikalne ke liye high-level prompts design karna.", icon: "🖋️" },
              { title: "Software Architecture", desc: "PAIB Bhawana mein seekhay gaye software house standards ke mutabiq coding.", icon: "🏗️" }
            ].map((service, i) => (
              <div key={i} className="bg-white p-10 rounded-2xl shadow-sm border border-slate-100 group hover:shadow-2xl transition-all relative overflow-hidden">
                <div className="text-5xl mb-6 relative z-10">{service.icon}</div>
                <h3 className="text-xl font-black mb-4 uppercase text-slate-800 relative z-10">{service.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed relative z-10">{service.desc}</p>
                {/* Background Shape like Capture3.PNG */}
                <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-pink-50 rounded-full group-hover:scale-[3] transition-transform duration-500"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. PROJECTS SECTION */}
      <section id="projects" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-black text-center mb-16 uppercase tracking-tighter">My Recent Work</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((proj, idx) => (
              <a key={idx} href={proj.url} className="group block p-8 rounded-3xl border border-slate-100 hover:border-pink-500 transition-all duration-300 bg-slate-50">
                <h3 className="text-xl font-black mb-2 text-slate-800 uppercase">{proj.name}</h3>
                <p className="text-pink-600 text-xs font-mono truncate mb-4">{proj.url}</p>
                <div className="text-slate-400 text-xs font-bold group-hover:text-pink-600 transition uppercase">Visit Project ↗</div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* 6. CONTACT SECTION (BuzzSumo Style Conversion) */}
      <section id="contact" className="py-24 bg-pink-600">
        <div className="max-w-4xl mx-auto px-6 text-center text-white space-y-8">
          <h2 className="text-4xl md:text-6xl font-black leading-tight">CHAS AA GAI? <br />LET'S START COLLABORATING</h2>
          <p className="text-pink-100 text-lg font-medium italic">
            "Main PAIB Bhawana Software House mein seekha gaya har skill aapke business ko grow karne ke liye use kar sakta hoon."
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            <a href="mailto:masifgpt@gmail.com" className="px-10 py-4 bg-white text-pink-600 font-black rounded uppercase shadow-2xl hover:bg-slate-50 transition-all">Send Email</a>
            <a href="https://wa.me/923707615224" className="px-10 py-4 bg-slate-900 text-white font-black rounded uppercase shadow-2xl hover:bg-black transition-all">WhatsApp Me</a>
          </div>
        </div>
      </section>

      <footer className="py-10 text-center border-t border-slate-100 text-[10px] font-black text-slate-400 uppercase tracking-[0.5em]">
        © 2024 Muhammad Asif • PAIB Bhawana Software House Student
      </footer>
    </div>
  );
}
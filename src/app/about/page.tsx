import React from "react";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">

          {/* LEFT */}
          <div className="space-y-6">
            <h4 className="text-pink-600 font-black uppercase tracking-[0.3em] text-xs">
              About Me
            </h4>

            <h1 className="text-4xl md:text-5xl font-black leading-tight">
              Muhammad <span className="text-pink-600">Asif</span>
            </h1>

            <p className="text-slate-600 text-lg leading-relaxed">
              Main PAIB Bhawana Software House ka student hoon aur 
              AI Automation, Chatbots aur Agentic AI par kaam karta hoon.
              Mera focus real-world business problems ko automate karna hai.
            </p>

            <p className="text-slate-600 text-lg leading-relaxed">
              Main React, Tailwind CSS aur Python based AI systems use karta hoon
              taake smart aur scalable solutions deliver kar sakoon.
            </p>
          </div>

          {/* RIGHT */}
          <div className="bg-slate-50 p-10 rounded-3xl border border-slate-100 shadow-xl">
            <h3 className="text-2xl font-black mb-6 uppercase">
              Skills & Focus
            </h3>

            <ul className="space-y-3 text-sm font-bold text-slate-600">
              <li>✔ AI Automation & Workflows</li>
              <li>✔ Intelligent Chatbots</li>
              <li>✔ Agentic AI Systems</li>
              <li>✔ React & Tailwind UI</li>
            </ul>
          </div>

        </div>
      </section>
    </div>
  );
}

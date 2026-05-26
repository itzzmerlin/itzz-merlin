import React, { useState, useEffect } from 'react';

export default function Portfolio() {
  const [isDarkMode, setIsDarkMode] = useState(true);

  const experiences = [
    {
      company: "JB Productions",
      role: "Founder",
      period: "Present",
      image: "/jbproductions.png"
    },
    {
      company: "NetSentra",
      role: "Server Staff Lead",
      period: "Present",
      image: "/netsentra.png"
    },
    {
      company: "JJC Gaming",
      role: "Production Team",
      period: "Present",
      image: "/jjcgaming.png"
    },
    {
      company: "BlueLine Productions",
      role: "Marketing & Visuals",
      period: "Present",
      image: "/bluelineproductions.png"
    },
    {
      company: "Colorado State Roleplay",
      role: "Developer & Staff",
      period: "Present",
      image: "/coloradostateroleplay.png"
    },
    {
      company: "CLD",
      role: "Management",
      period: "Present",
      image: "/cld.png"
    },
    {
      company: "NetSentra",
      role: "Enquiry Support Team",
      period: "Present",
      image: "/netsentra.png"
    }
  ];

  const skills = [
    { name: "JavaScript" },
    { name: "TypeScript" },
    { name: "Node.js" },
    { name: "React" },
    { name: "Lua" },
    { name: "Python" },
    { name: "Git" },
    { name: "SQL" }
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const LivePixelMatrix = () => {
    const totalBlocks = 280;
    const [activeBlocks, setActiveBlocks] = useState(new Set());

    useEffect(() => {
      const interval = setInterval(() => {
        setActiveBlocks((prev) => {
          const next = new Set(prev);
          next.forEach((id) => {
            if (Math.random() > 0.3) next.delete(id);
          });
          for (let i = 0; i < 45; i++) {
            const randomIndex = Math.floor(Math.random() * totalBlocks);
            next.add(randomIndex);
          }
          return next;
        });
      }, 200);

      return () => clearInterval(interval);
    }, []);

    return (
      <div className="w-full h-14 overflow-hidden grid grid-cols-[repeat(70,minmax(0,1fr))] gap-[3px]">
        {Array.from({ length: totalBlocks }).map((_, i) => {
          const isActive = activeBlocks.has(i);
          return (
            <div
              key={i}
              className={`w-[4px] h-[4px] rounded-[0.5px] mx-auto transition-all duration-500
                ${isDarkMode
                  ? isActive ? 'bg-neutral-400/40' : 'bg-neutral-800/10'
                  : isActive ? 'bg-neutral-500/30' : 'bg-neutral-200/30'}`}
            />
          );
        })}
      </div>
    );
  };

  return (
    <div className={`min-h-screen pb-32 transition-colors ${
      isDarkMode ? 'bg-[#0a0a0a] text-neutral-300' : 'bg-[#FAFAFA] text-neutral-600'
    }`}>

      <div className="max-w-md mx-auto px-6 pt-16 space-y-10">

        {/* Header */}
        <div className="space-y-5">
          <div className="w-24 h-24 rounded-full overflow-hidden border">
            <img
              src="/JB.png"
              alt="profile"
              className="w-full h-full object-cover"
            />
          </div>

          <h1 className="text-3xl font-bold text-white">
            Hi, I'm itzz_JB
          </h1>

          <p>
            I'm a full-stack developer focused on building practical solutions.
          </p>
        </div>

        {/* About */}
        <div>
          <h2 className="text-xl font-bold text-white">About</h2>
          <p className="mt-2">
            I'm a 14 year old developer learning backend, APIs, and WebSockets.
          </p>
        </div>

        {/* Experience */}
        <div>
          <h2 className="text-xl font-bold text-white mb-4">Experience</h2>

          <div className="space-y-4">
            {experiences.map((exp, i) => (
              <div key={i} className="flex items-center justify-between">

                <div className="flex items-center gap-3">

                  <div className="w-11 h-11 rounded-full overflow-hidden border">
                    <img
                      src={exp.image}
                      alt={exp.company}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <div>
                    <h3 className="text-sm font-semibold text-white">
                      {exp.company}
                    </h3>
                    <p className="text-xs text-neutral-400">
                      {exp.role}
                    </p>
                  </div>

                </div>

                <span className="text-xs text-neutral-500">
                  {exp.period}
                </span>

              </div>
            ))}
          </div>
        </div>

      </div>

      {/* Skills */}
      <div className="mt-10 overflow-hidden">
        <div className="flex gap-6 animate-pulse px-6">
          {skills.concat(skills).map((s, i) => (
            <div
              key={i}
              className="px-4 py-2 rounded-full border text-sm whitespace-nowrap"
            >
              {s.name}
            </div>
          ))}
        </div>
      </div>

      {/* Floating Button */}
      <div className="fixed bottom-6 inset-x-0 flex justify-center">
        <button
          onClick={() => setIsDarkMode(!isDarkMode)}
          className="px-4 py-2 rounded-full border"
        >
          Toggle Theme
        </button>
      </div>

    </div>
  );
}

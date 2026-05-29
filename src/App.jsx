import React, { useState, useEffect } from 'react';

export default function Portfolio() {
  const [isDarkMode, setIsDarkMode] = useState(true);

  const experiences = [
    { company: "Merlin Productions", role: "Chief Foundership", period: "Present", icon: "🎬" },
    { company: "Greater Manchester Roleplay", role: "Trainee Moderator", period: "Present", icon: "🇬🇧" },
    { company: "NetSentra", role: "QA Tester & Server Staff Lead", period: "Present", icon: "🛠️" },
    { company: "JJC Gaming", role: "Production Team", period: "Present", icon: "🎮" },
    { company: "BlueLine Productions", role: "Marketing & Visuals", period: "Present", icon: "📈" },
    { company: "Colorado State Roleplay", role: "Developer & Staff", period: "Present", icon: "🌲" },
    { company: "CLD", role: "Management", period: "Present", icon: "💼" },
  ];

  const skills = [
    { name: "Fastify", icon: "⚡" },
    { name: "tRPC", icon: "🧙‍♂️" },
    { name: "Cloudflare", icon: "☁️" },
    { name: "Docker", icon: "🐳" },
    { name: "Proxmox", icon: "⛯" },
    { name: "Portainer", icon: "🚢" },
    { name: "React", icon: "⚛️" },
    { name: "Next.js", icon: "▲" },
    { name: "TypeScript", icon: "📘" },
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
      <div className="w-full h-14 overflow-hidden grid grid-cols-[repeat(70,minmax(0,1fr))] gap-[3px] justify-center pointer-events-none select-none">
        {Array.from({ length: totalBlocks }).map((_, i) => {
          const isActive = activeBlocks.has(i);
          return (
            <div
              key={i}
              className={`w-[4px] h-[4px] rounded-[0.5px] mx-auto transition-all duration-[600ms] ease-in-out
                ${isDarkMode
                  ? (isActive ? 'bg-neutral-400/40' : 'bg-neutral-800/10')
                  : (isActive ? 'bg-neutral-500/30' : 'bg-neutral-200/30')}`}
            />
          );
        })}
      </div>
    );
  };

  return (
    <div
      className={`font-sans antialiased min-h-screen relative pb-36 transition-colors duration-300 selection:bg-neutral-800 ${isDarkMode ? 'bg-[#0a0a0a] text-[#A3A3A3]' : 'bg-[#FAFAFA] text-[#525252]'}`}
    >
      <div className="absolute top-0 inset-x-0 pt-2 [mask-image:linear-gradient(to_bottom,white_60%,transparent)]">
        <LivePixelMatrix />
      </div>

      <div className="max-w-md mx-auto px-6 pt-16 space-y-10 relative z-10">

        <div className="space-y-5">
          <div className={`w-24 h-24 rounded-full overflow-hidden border bg-neutral-900 shadow-md transition-colors
            ${isDarkMode ? 'border-neutral-800' : 'border-neutral-200'}`}
          >
            <img
              src="/JB.png" 
              alt="Profile"
              className="w-full h-full object-cover"
              onError={(e) => { 
                e.currentTarget.onerror = null; 
                e.currentTarget.src = 'https://via.placeholder.com/150'; 
              }}
            />
          </div>

          <h1 className={`text-3xl font-bold tracking-tight transition-colors ${isDarkMode ? 'text-white' : 'text-neutral-900'}`}>
            Hi, I'm Merlin
          </h1>

          <p className="text-base leading-relaxed">
            I'm a full-stack developer, focusing on building practical solutions to problems.
          </p>
        </div>

        <div className="space-y-3">
          <h2 className={`text-xl font-bold transition-colors ${isDarkMode ? 'text-white' : 'text-neutral-900'}`}>About</h2>
          <p className="text-base leading-relaxed">
            I'm a young developer,I am just filling my time with learning programming and playing games. 
            I'm currently learning about backend development more - specifically on APIs and WebSockets.
          </p>
        </div>

        <div className="space-y-4">
          <h2 className={`text-xl font-bold transition-colors ${isDarkMode ? 'text-white' : 'text-neutral-900'}`}>Work Experience</h2>
          <div className="space-y-5">
            {experiences.map((exp, index) => (
              <div key={index} className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className={`w-11 h-11 rounded-full flex items-center justify-center text-lg shadow-inner border transition-colors
                    ${isDarkMode ? 'bg-neutral-900 border-neutral-800' : 'bg-neutral-100 border-neutral-200'}`}
                  >
                    {exp.icon}
                  </div>
                  <div>
                    <h3 className={`font-semibold text-sm leading-tight transition-colors ${isDarkMode ? 'text-white' : 'text-neutral-900'}`}>
                      {exp.company}
                    </h3>
                    <p className="text-xs text-[#737373] mt-0.5">
                      {exp.role}
                    </p>
                  </div>
                </div>
                <span className="text-xs text-[#737373] font-medium whitespace-nowrap">
                  {exp.period}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-4 overflow-hidden -mx-6">
          <h2 className={`text-xl font-bold px-6 transition-colors ${isDarkMode ? 'text-white' : 'text-neutral-900'}`}>Skills</h2>
          
          <div className={`relative flex overflow-x-hidden border-y py-3 ${isDarkMode ? 'border-neutral-900 bg-neutral-950/20' : 'border-neutral-200 bg-neutral-100/40'}`}>
            <div className="animate-marquee whitespace-nowrap flex items-center gap-8">
              {skills.map((skill, index) => (
                <div key={`track1-${index}`} className="flex items-center gap-2 mx-2">
                  <div className={`w-7 h-7 rounded-md flex items-center justify-center border text-sm ${isDarkMode ? 'bg-neutral-900 border-neutral-800 text-neutral-400' : 'bg-white border-neutral-200 text-neutral-500'}`}>
                    {skill.icon}
                  </div>
                  <span className={`text-sm font-semibold tracking-wide ${isDarkMode ? 'text-neutral-200' : 'text-neutral-800'}`}>
                    {skill.name}
                  </span>
                  <span className="text-xs text-neutral-600/70 ml-4">•</span>
                </div>
              ))}
              
              {skills.map((skill, index) => (
                <div key={`track2-${index}`} className="flex items-center gap-2 mx-2">
                  <div className={`w-7 h-7 rounded-md flex items-center justify-center border text-sm ${isDarkMode ? 'bg-neutral-900 border-neutral-800 text-neutral-400' : 'bg-white border-neutral-200 text-neutral-500'}`}>
                    {skill.icon}
                  </div>
                  <span className={`text-sm font-semibold tracking-wide ${isDarkMode ? 'text-neutral-200' : 'text-neutral-800'}`}>
                    {skill.name}
                  </span>
                  <span className="text-xs text-neutral-600/70 ml-4">•</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className={`rounded-2xl border text-center transition-colors overflow-hidden relative pt-6 pb-6 px-6 space-y-4
          ${isDarkMode ? 'bg-neutral-950/30 border-neutral-800' : 'bg-neutral-100 border-neutral-200'}`}
        >
          <div className="space-y-1 relative z-10">
            <h3 className={`text-xl font-bold transition-colors ${isDarkMode ? 'text-white' : 'text-neutral-900'}`}>Get in Touch</h3>
            <p className="text-xs text-[#737373]">Want to get in touch? Just email me and I'll respond whenever I can.</p>
          </div>

          <div className="relative z-10 px-4">
            <a
              href="mailto:winterzstudios@gmail.com"
              className="block w-full py-2.5 rounded-xl text-sm font-semibold transition-all bg-neutral-800 text-white hover:bg-neutral-700 active:scale-[0.99]"
            >
              Contact Me
            </a>
          </div>

          <div className="absolute bottom-0 inset-x-0 [mask-image:linear-gradient(to_top,white_50%,transparent)]">
            <LivePixelMatrix />
          </div>
        </div>
      </div>

      <div className="fixed bottom-6 inset-x-0 flex justify-center z-50 px-4">
        <div className={`border px-3 py-2 rounded-full flex items-center gap-3 shadow-2xl transition-all duration-300
          ${isDarkMode ? 'bg-[#111111]/90 border-neutral-800/90' : 'bg-white/90 border-neutral-200'}`}
        >
          <button
            onClick={scrollToTop}
            className={`transition-all p-2 rounded-full border flex items-center justify-center w-9 h-9 active:scale-95
              ${isDarkMode ? 'text-neutral-300 bg-neutral-900/40 border-neutral-800 hover:bg-neutral-800 text-white' : 'text-neutral-600 bg-neutral-100 border-neutral-300 hover:bg-neutral-200'}`}
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.75" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
            </svg>
          </button>

          <button
            onClick={() => setIsDarkMode(!isDarkMode)}
            className={`transition-all p-2 rounded-full border flex items-center justify-center w-9 h-9 active:scale-95
              ${isDarkMode ? 'text-neutral-300 bg-neutral-900/40 border-neutral-800 hover:bg-neutral-800 text-white' : 'text-neutral-600 bg-neutral-100 border-neutral-300 hover:bg-neutral-200'}`}
          >
            {isDarkMode ? (
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.75" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707M16.243 17.657l.707.707M7.757 6.364l.707-.707M12 8a4 4 0 100 8 4 4 0 000-8z" />
              </svg>
            ) : (
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.75" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
              </svg>
            )}
          </button>

          <div className={`w-[1px] h-4 ${isDarkMode ? 'bg-neutral-800/80' : 'bg-neutral-300'}`} />

          <a
            href="https://discord.com/users/1449065587895701575"
            target="_blank"
            rel="noreferrer"
            className={`transition-all p-2 rounded-full border flex items-center justify-center w-9 h-9
              ${isDarkMode ? 'text-neutral-300 bg-neutral-900/40 border-neutral-800 hover:bg-neutral-800 hover:text-white' : 'text-neutral-600 bg-neutral-100 border-neutral-300 hover:bg-neutral-200'}`}
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994.021-.041.001-.09-.041-.106a13.094 13.094 0 0 1-1.873-.894.077.077 0 0 1-.008-.128c.126-.093.252-.19.372-.287a.075.075 0 0 1 .077-.011c3.92 1.793 8.18 1.793 12.061 0a.073.073 0 0 1 .078.009c.12.099.246.195.373.289a.077.077 0 0 1-.006.127 12.298 12.298 0 0 1-1.873.894.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03z" />
            </svg>
          </a>

          <a
            href="https://github.com/JBlizz"
            target="_blank"
            rel="noreferrer"
            className={`transition-all p-2 rounded-full border flex items-center justify-center w-9 h-9
              ${isDarkMode ? 'text-neutral-300 bg-neutral-900/40 border-neutral-800 hover:bg-neutral-800 hover:text-white' : 'text-neutral-600 bg-neutral-100 border-neutral-300 hover:bg-neutral-200'}`}
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.483 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.579.688.481C19.137 20.162 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
            </svg>
          </a>

          <a
            href="https://www.roblox.com/users/2750965033/profile"
            target="_blank"
            rel="noreferrer"
            className={`transition-all p-2 rounded-full border flex items-center justify-center w-9 h-9 group
              ${isDarkMode ? 'bg-neutral-900/40 border-neutral-800 hover:bg-neutral-800' : 'bg-neutral-100 border-neutral-300 hover:bg-neutral-200'}`}
          >
            <div className={`w-3.5 h-3.5 rounded-[2.5px] transform rotate-12 flex items-center justify-center transition-colors
              ${isDarkMode ? 'bg-neutral-400 group-hover:bg-white text-[#0a0a0a]' : 'bg-neutral-50 group-hover:bg-neutral-900 text-white'}`}
            >
              <div className={`w-1 h-1 rounded-[0.5px] ${isDarkMode ? 'bg-[#0a0a0a]' : 'bg-neutral-100'}`} />
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}

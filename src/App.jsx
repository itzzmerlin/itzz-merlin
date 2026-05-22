import React, { useState } from 'react';

export default function Portfolio() {
  const [isDarkMode, setIsDarkMode] = useState(true);

  const experiences = [
    { company: "JB Gaming", role: "Founder", period: "Present", icon: "🎮" },
    { company: "JJC Gaming", role: "Production Team", period: "Present", icon: "🎬" },
    { company: "Colorado State Roleplay", role: "Developer", period: "Present", icon: "🌲" },
    { company: "BlueLine Productions", role: "Marketing & Designer", period: "Present", icon: "🎨" },
    { company: "CLD", role: "Management", period: "Present", icon: "💼" },
    { company: "Netsentra", role: "Enquiry Support Team", period: "Present", icon: "🛠️" },
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className={`font-sans antialiased min-h-screen relative pb-32 transition-colors duration-300 selection:bg-neutral-800
      ${isDarkMode ? 'bg-[#121212] text-[#A3A3A3]' : 'bg-[#FAFAFA] text-[#525252]'}`}
    >
      {/* Top Authentic Dot Matrix Grid */}
      <div className="absolute top-0 inset-x-0 h-28 pointer-events-none opacity-40 mix-blend-screen"
        style={{
          backgroundImage: `radial-gradient(circle, ${isDarkMode ? '#2c2c2c' : '#d4d4d4'} 2px, transparent 3px)`,
          backgroundSize: '14px 14px'
        }}
      />

      {/* Main Content Body */}
      <div className="max-w-md mx-auto px-6 pt-16 space-y-10 relative z-10">
        
        {/* Header Section */}
        <div className="space-y-5">
          <div className={`w-24 h-24 rounded-full overflow-hidden border bg-neutral-900 shadow-md transition-colors
            ${isDarkMode ? 'border-neutral-800' : 'border-neutral-200'}`}
          >
            <img 
              src="JB.png" 
              alt="itzz_JB Profile" 
              className="w-full h-full object-cover"
              onError={(e) => { e.target.style.display = 'none'; }}
            />
          </div>

          <h1 className={`text-3xl font-bold tracking-tight transition-colors ${isDarkMode ? 'text-white' : 'text-neutral-900'}`}>
            Hi, I'm itzz_JB
          </h1>
          
          <p className="text-base leading-relaxed">
            I'm a full-stack developer, focusing on building practical solutions to problems.
          </p>
        </div>

        {/* About Section */}
        <div className="space-y-3">
          <h2 className={`text-xl font-bold transition-colors ${isDarkMode ? 'text-white' : 'text-neutral-900'}`}>About</h2>
          <p className="text-base leading-relaxed">
            I'm a 14 year old developer from the UK, just filling my time with learning programming and playing games. 
            I'm currently learning about backend development more - specifically on APIs and WebSockets.
          </p>
        </div>

        {/* Work Experience Section */}
        <div className="space-y-4">
          <h2 className={`text-xl font-bold transition-colors ${isDarkMode ? 'text-white' : 'text-neutral-900'}`}>Work Experience</h2>
          
          <div className="space-y-5">
            {experiences.map((exp, index) => (
              <div key={index} className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center text-xl shadow-inner border transition-colors
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

        {/* Contact CTA Section */}
        <div className={`p-6 rounded-2xl border text-center space-y-4 transition-colors
          ${isDarkMode ? 'bg-neutral-900/40 border-neutral-800' : 'bg-neutral-100 border-neutral-200'}`}
        >
          <div className="space-y-1">
            <h3 className={`text-lg font-bold transition-colors ${isDarkMode ? 'text-white' : 'text-neutral-900'}`}>Get in Touch</h3>
            <p className="text-xs text-[#737373]">Want to get in touch? Just email me and I'll respond whenever I can.</p>
          </div>
          <a 
            href="mailto:winterzstudios@gmail.com"
            className="inline-block w-full py-2.5 rounded-xl text-sm font-semibold transition-all bg-neutral-800 text-white hover:bg-neutral-700 active:scale-[0.99]"
          >
            Contact Me
          </a>
        </div>
      </div>

      {/* Bottom Authentic Dot Matrix Grid */}
      <div className="absolute bottom-24 inset-x-0 h-28 pointer-events-none opacity-40 mix-blend-screen"
        style={{
          backgroundImage: `radial-gradient(circle, ${isDarkMode ? '#2c2c2c' : '#d4d4d4'} 2px, transparent 3px)`,
          backgroundSize: '14px 14px'
        }}
      />

      {/* Floating Application Dock */}
      <div className="fixed bottom-6 inset-x-0 flex justify-center z-50 px-4">
        <div className={`border backdrop-blur-xl px-4 py-3 rounded-full flex items-center gap-5 shadow-2xl transition-all duration-300
          ${isDarkMode ? 'bg-[#1A1A1A]/90 border-neutral-800/80' : 'bg-white/90 border-neutral-200'}`}
        >
          {/* Home Button */}
          <button 
            onClick={scrollToTop}
            className={`transition-all p-2 rounded-full border active:scale-95
              ${isDarkMode ? 'text-white bg-neutral-800/50 border-neutral-700/30 hover:bg-neutral-700' : 'text-neutral-900 bg-neutral-200/60 border-neutral-300/50 hover:bg-neutral-300'}`}
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
            </svg>
          </button>
          
          {/* Light / Dark Mode Toggle */}
          <button 
            onClick={() => setIsDarkMode(!isDarkMode)}
            className={`transition-all p-2 rounded-full border active:scale-95
              ${isDarkMode ? 'text-yellow-400 bg-neutral-800/50 border-neutral-700/30 hover:bg-neutral-700' : 'text-neutral-900 bg-neutral-200/60 border-neutral-300/50 hover:bg-neutral-300'}`}
          >
            {isDarkMode ? (
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707m12.728 0l-.707-.707M6.343 6.343l-.707-.707m2.828 9.9a5 5 0 117.072-7.072 5 5 0 01-7.072 7.072z" />
              </svg>
            ) : (
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
              </svg>
            )}
          </button>

          <div className={`w-[1px] h-5 ${isDarkMode ? 'bg-neutral-800' : 'bg-neutral-300'}`} />

          {/* Discord */}
          <a 
            href="https://discord.com/users/1449065587895701575" 
            target="_blank" 
            rel="noreferrer" 
            className={`transition-colors p-1 ${isDarkMode ? 'text-[#A3A3A3] hover:text-white' : 'text-neutral-600 hover:text-neutral-900'}`}
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994.021-.041.001-.09-.041-.106a13.094 13.094 0 0 1-1.873-.894.077.077 0 0 1-.008-.128c.126-.093.252-.19.372-.287a.075.075 0 0 1 .077-.011c3.92 1.793 8.18 1.793 12.061 0a.073.073 0 0 1 .078.009c.12.099.246.195.373.289a.077.077 0 0 1-.006.127 12.298 12.298 0 0 1-1.873.894.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03z" />
            </svg>
          </a>

          {/* GitHub */}
          <a 
            href="https://github.com/JBItzz" 
            target="_blank" 
            rel="noreferrer" 
            className={`transition-colors p-1 ${isDarkMode ? 'text-[#A3A3A3] hover:text-white' : 'text-neutral-600 hover:text-neutral-900'}`}
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.483 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.579.688.481C19.137 20.162 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
            </svg>
          </a>

          {/* Roblox */}
          <a 
            href="https://www.roblox.com/users/2750965033/profile" 
            target="_blank" 
            rel="noreferrer" 
            className="p-1 flex items-center justify-center group"
          >
            <div className={`w-5 h-5 rounded-xs transform rotate-12 flex items-center justify-center transition-colors
              ${isDarkMode ? 'bg-[#A3A3A3] group-hover:bg-white text-[#1A1A1A]' : 'bg-neutral-600 group-hover:bg-neutral-900 text-white'}`}
            >
              <div className={`w-1.5 h-1.5 rounded-xs ${isDarkMode ? 'bg-[#1A1A1A]' : 'bg-neutral-100'}`} />
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}

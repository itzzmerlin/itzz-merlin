import React, { useState, useEffect } from 'react';

export default function Portfolio() {
  const [isDarkMode, setIsDarkMode] = useState(true);

  const experiences = [
    { company: "JB Productions", role: "Founder", period: "Present", icon: "🎬" },
    { company: "JJC Gaming", role: "Production Team", period: "Present", icon: "🎮" },
    { company: "BlueLine Productions", role: "Marketing & Visuals", period: "Present", icon: "📈" },
    { company: "Colorado State Roleplay", role: "Developer & Staff", period: "Present", icon: "🌲" },
    { company: "CLD", role: "Management", period: "Present", icon: "💼" },
    { company: "NetSentra", role: "Enquiry Support Team", period: "Present", icon: "🛠️" },
  ];

  const skills = [
    {
      name: "Lua",
      icon: (
        <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
          <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm.64 4.313a4.23 4.23 0 1 1 0 8.46 4.23 4.23 0 0 1 0-8.46zm5.077 1.92a2.11 2.11 0 1 1 0 4.22 2.11 2.11 0 0 1 0-4.22zm-5.077 1.387a2.823 2.823 0 1 0 0 5.646 2.823 2.823 0 0 0 0-5.646zM6.41 12.41c2.297 0 4.147 1.667 4.147 3.726v.205l-.01.175-.022.197-.034.187-.045.186-.057.176-.066.162-.082.17-.093.154-.105.155-.12.143-.136.145-.154.135-.168.127-.188.12-.203.114-.22.103-.24.096-.26.087-.278.08-.3.07-.32.063-.34.058-.365.048-.388.04-.41.033-.436.025-.457.018-.477.012-.498.005H6.41v-.01c-2.296 0-4.147-1.667-4.147-3.726s1.85-3.726 4.147-3.726zm0 1.41c-1.51 0-2.738 1.042-2.738 2.316S4.9 18.453 6.41 18.453s2.738-1.042 2.738-2.316-1.228-2.316-2.738-2.316z"/>
        </svg>
      ),
    },
    {
      name: "JavaScript",
      icon: (
        <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
          <path d="M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.646.915-.84 1.515-.66.39.12.75.42.976.9 1.034-.676 1.034-.676 1.755-1.125-.27-.42-.404-.601-.586-.78-.63-.705-1.469-1.065-2.834-1.034l-.705.089c-.676.165-1.32.525-1.71 1.005-1.14 1.291-.811 3.541.569 4.471 1.365 1.02 3.361 1.244 3.616 2.205.24 1.17-.87 1.545-1.966 1.41-.811-.18-1.26-.586-1.755-1.336l-1.83 1.051c.21.48.45.689.81 1.109 1.74 1.756 6.09 1.666 6.871-1.004.029-.09.24-.705.074-1.65l.046.067zm-8.983-7.245h-2.248c0 1.938-.009 3.864-.009 5.805 0 1.232.063 2.363-.138 2.711-.33.689-1.18.601-1.566.48-.396-.196-.597-.466-.83-.855-.063-.105-.11-.196-.127-.196l-1.825 1.125c.305.63.75 1.172 1.324 1.517.855.51 2.004.675 3.207.405.783-.226 1.458-.691 1.811-1.411.51-.93.402-2.07.397-3.346.012-2.054 0-4.109 0-6.179l.004-.056z"/>
        </svg>
      ),
    },
    {
      name: "Node.js",
      icon: (
        <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
          <path d="M11.998,24c-0.321,0-0.641-0.084-0.922-0.247l-2.936-1.737c-0.438-0.245-0.224-0.332-0.08-0.383 c0.585-0.203,0.703-0.25,1.328-0.604c0.065-0.037,0.151-0.023,0.218,0.017l2.256,1.339c0.082,0.045,0.197,0.045,0.272,0 l8.795-5.076 c0.082-0.047,0.134-0.141,0.134-0.238V6.921c0-0.099-0.053-0.192-0.137-0.242l-8.791-5.072c-0.081-0.047-0.189-0.047-0.271,0 L3.075,6.68C2.99,6.729,2.936,6.825,2.936,6.921v10.15c0,0.097,0.054,0.189,0.139,0.235l2.409,1.392 c1.307,0.654,2.108-0.116,2.108-0.890V7.787c0-0.142,0.114-0.253,0.256-0.253h1.115c0.139,0,0.255,0.112,0.255,0.253v10.021 c0,1.745-0.95,2.745-2.604,2.745c-0.508,0-0.909,0-2.026-0.551L2.28,18.675c-0.57-0.329-0.922-0.945-0.922-1.604V6.921 c0-0.659,0.353-1.275,0.922-1.603l8.795-5.082c0.557-0.315,1.296-0.315,1.848,0l8.794,5.082 c0.57,0.329,0.924,0.944,0.924,1.603v10.15c0,0.659-0.354,1.273-0.924,1.604l-8.794,5.078C12.643,23.916,12.324,24,11.998,24z M19.099,13.993c0-1.9-1.284-2.406-3.987-2.763c-2.731-0.361-3.009-0.548-3.009-1.187c0-0.528,0.235-1.233,2.258-1.233 c1.807,0,2.473,0.389,2.747,1.607c0.024,0.115,0.129,0.199,0.247,0.199h1.141c0.071,0,0.138-0.031,0.186-0.081 c0.048-0.054,0.074-0.123,0.067-0.196c-0.177-2.098-1.571-3.076-4.388-3.076c-2.508,0-4.004,1.058-4.004,2.833 c0,1.925,1.488,2.457,3.895,2.695c2.88,0.282,3.103,0.703,3.103,1.269c0,0.983-0.789,1.402-2.642,1.402 c-2.327,0-2.839-0.584-3.011-1.742c-0.02-0.124-0.126-0.215-0.253-0.215h-1.137c-0.141,0-0.254,0.112-0.254,0.253 c0,1.482,0.806,3.248,4.655,3.248C17.501,17.007,19.099,15.91,19.099,13.993z"/>
        </svg>
      ),
    },
    {
      name: "Git",
      icon: (
        <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
          <path d="M23.546 10.93L13.067.452c-.604-.603-1.582-.603-2.188 0L8.708 2.627l2.76 2.76c.645-.215 1.379-.07 1.889.441.516.515.658 1.258.438 1.9l2.658 2.66c.645-.223 1.387-.078 1.9.435.721.72.721 1.884 0 2.604-.719.719-1.881.719-2.6 0-.539-.541-.674-1.337-.404-1.996L12.86 8.955v6.525c.176.086.342.203.488.348.713.721.713 1.883 0 2.6-.719.721-1.889.721-2.609 0-.719-.719-.719-1.879 0-2.598.182-.18.387-.316.605-.406V8.835c-.217-.091-.424-.222-.604-.404-.541-.541-.674-1.336-.404-1.996L7.614 3.68 .45 10.881c-.6.605-.6 1.584 0 2.189l10.48 10.477c.604.604 1.582.604 2.186 0l10.43-10.43c.605-.603.605-1.582 0-2.187"/>
        </svg>
      ),
    },
    {
      name: "TypeScript",
      icon: (
        <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
          <path d="M1.125 0C.502 0 0 .502 0 1.125v21.75C0 23.498.502 24 1.125 24h21.75c.623 0 1.125-.502 1.125-1.125V1.125C24 .502 23.498 0 22.875 0zm17.363 9.75c.612 0 1.154.037 1.627.111a6.38 6.38 0 0 1 1.306.34v2.458a3.95 3.95 0 0 0-.643-.361 5.093 5.093 0 0 0-.717-.26 5.453 5.453 0 0 0-1.426-.2c-.3 0-.573.028-.819.086a2.1 2.1 0 0 0-.623.242c-.17.104-.3.229-.393.374a.888.888 0 0 0-.14.49c0 .196.053.373.156.529.104.156.252.304.443.444s.423.276.696.41c.273.135.582.274.926.416.47.197.892.407 1.266.628.374.222.695.473.963.753.268.279.472.598.614.957.142.359.214.776.214 1.253 0 .657-.125 1.21-.373 1.656a3.033 3.033 0 0 1-1.012 1.085 4.38 4.38 0 0 1-1.487.596c-.566.12-1.163.18-1.79.18a9.916 9.916 0 0 1-1.84-.164 5.544 5.544 0 0 1-1.512-.493v-2.63a5.033 5.033 0 0 0 3.237 1.2c.333 0 .624-.03.872-.09.249-.06.456-.144.623-.25.166-.108.29-.234.373-.38a1.023 1.023 0 0 0-.074-1.089 2.12 2.12 0 0 0-.537-.5 5.597 5.597 0 0 0-.807-.444 27.72 27.72 0 0 0-1.007-.436c-.918-.383-1.602-.852-2.053-1.405-.45-.553-.676-1.222-.676-2.005 0-.614.123-1.141.369-1.582.246-.441.58-.804 1.004-1.089a4.494 4.494 0 0 1 1.47-.629 7.536 7.536 0 0 1 1.77-.201zm-15.113.188h9.563v2.166H9.506v9.646H6.789v-9.646H3.375z"/>
        </svg>
      ),
    },
    {
      name: "React",
      icon: (
        <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
          <path d="M14.23 12.004a2.236 2.236 0 0 1-2.235 2.236 2.236 2.236 0 0 1-2.236-2.236 2.236 2.236 0 0 1 2.235-2.236 2.236 2.236 0 0 1 2.236 2.236zm2.648-10.69c-1.346 0-3.107.96-4.888 2.622-1.78-1.653-3.542-2.602-4.887-2.602-.41 0-.783.093-1.106.278-1.375.793-1.683 3.264-.973 6.365C1.98 8.917 0 10.42 0 12.004c0 1.59 1.99 3.097 5.043 4.03-.704 3.113-.39 5.588.988 6.38.32.187.69.275 1.102.275 1.345 0 3.107-.96 4.888-2.624 1.78 1.654 3.542 2.603 4.887 2.603.41 0 .783-.09 1.106-.275 1.374-.792 1.683-3.263.973-6.365C22.02 15.096 24 13.59 24 12.004c0-1.59-1.99-3.097-5.043-4.032.704-3.11.39-5.587-.988-6.38-.318-.184-.688-.277-1.092-.278zm-.005 1.09v.006c.225 0 .406.044.558.127.666.382.955 1.835.73 3.704-.054.46-.142.945-.25 1.44-.96-.236-2.006-.417-3.107-.534-.66-.905-1.345-1.727-2.035-2.447 1.592-1.48 3.087-2.292 4.105-2.295zm-9.77.02c1.012 0 2.514.808 4.11 2.28-.686.72-1.37 1.537-2.02 2.442-1.107.117-2.154.298-3.113.538-.112-.49-.195-.964-.254-1.42-.23-1.868.054-3.32.714-3.707.19-.09.4-.127.563-.132zm4.882 3.05c.455.468.91.992 1.36 1.564-.44-.02-.89-.034-1.36-.034-.47 0-.92.014-1.36.034.44-.572.895-1.096 1.36-1.564zM12 8.1c.74 0 1.477.034 2.202.093.406.582.802 1.203 1.183 1.86.372.64.71 1.29 1.018 1.946-.308.655-.646 1.31-1.013 1.95-.38.66-.773 1.288-1.18 1.87-.728.063-1.466.098-2.21.098-.74 0-1.477-.035-2.202-.093-.406-.582-.802-1.204-1.183-1.86-.372-.64-.71-1.29-1.018-1.946.303-.657.646-1.313 1.013-1.954.38-.66.773-1.286 1.18-1.868.728-.064 1.466-.098 2.21-.098zm-3.635.254c-.24.377-.48.763-.704 1.16-.225.39-.435.782-.635 1.174-.265-.656-.49-1.31-.676-1.947.64-.15 1.315-.283 2.015-.386zm7.26 0c.695.103 1.365.23 2.006.387-.18.632-.405 1.282-.66 1.933-.2-.39-.41-.783-.64-1.174-.225-.392-.465-.774-.705-1.146zm3.063.675c.484.15.944.317 1.375.498 1.732.74 2.852 1.708 2.852 2.476-.005.768-1.125 1.74-2.857 2.475-.42.18-.88.342-1.355.493-.28-.958-.646-1.956-1.1-2.98.45-1.017.81-2.01 1.085-2.964zm-13.395.004c.278.96.645 1.957 1.1 2.98-.45 1.017-.812 2.01-1.086 2.964-.484-.15-.944-.318-1.37-.5-1.732-.737-2.852-1.706-2.852-2.474 0-.768 1.12-1.742 2.852-2.476.42-.18.88-.342 1.356-.494zm11.678 4.28c.265.657.49 1.312.676 1.948-.64.157-1.316.29-2.016.39.24-.375.48-.762.705-1.158.225-.39.435-.788.636-1.18zm-9.945.02c.2.392.41.783.64 1.175.23.39.465.772.705 1.143-.695-.102-1.365-.23-2.006-.386.18-.63.406-1.282.66-1.933zM17.92 16.32c.112.493.2.968.254 1.423.23 1.868-.054 3.32-.714 3.708-.147.09-.338.128-.563.128-1.012 0-2.514-.807-4.11-2.28.686-.72 1.37-1.536 2.02-2.44 1.107-.118 2.154-.3 3.113-.54zm-11.83.01c.96.234 2.006.415 3.107.532.66.905 1.345 1.727 2.035 2.446-1.595 1.483-3.092 2.295-4.11 2.295-.22-.005-.406-.05-.553-.132-.666-.38-.955-1.834-.73-3.703.054-.46.142-.944.25-1.438zm4.56.64c.44.02.89.034 1.36.034.47 0 .92-.014 1.36-.034-.44.572-.895 1.095-1.36 1.565-.455-.47-.91-.993-1.36-1.565z"/>
        </svg>
      ),
    },
    {
      name: "Python",
      icon: (
        <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
          <path d="M14.25.18l.9.2.73.26.59.3.45.32.34.34.25.34.16.33.1.3.04.26.02.2-.01.13V8.5l-.05.63-.13.55-.21.46-.26.38-.3.31-.33.25-.35.19-.35.14-.33.1-.3.07-.26.04-.21.02H8.77l-.69.05-.59.14-.5.22-.41.27-.33.32-.27.35-.2.36-.15.37-.1.35-.07.32-.04.27-.02.21v3.06H3.17l-.21-.03-.28-.07-.32-.12-.35-.18-.36-.26-.36-.36-.35-.46-.32-.59-.28-.73-.21-.88-.14-1.05L0 11.97l.06-1.22.16-1.04.24-.87.32-.71.36-.57.4-.44.42-.33.42-.24.4-.16.36-.1.32-.05.24-.01h.16l.06.01h8.16v-.83H6.18l-.01-2.75-.02-.37.05-.34.11-.31.17-.28.25-.26.31-.23.38-.2.44-.18.51-.15.58-.12.64-.1.71-.06.77-.04.84-.02 1.27.05zm-6.3 1.98l-.23.33-.08.41.08.41.23.34.33.22.41.09.41-.09.33-.22.23-.34.08-.41-.08-.41-.23-.33-.33-.22-.41-.09-.41.09zm13.09 3.95l.28.06.32.12.35.18.36.27.36.35.35.47.32.59.28.73.21.88.14 1.04.05 1.23-.06 1.23-.16 1.04-.24.86-.32.71-.36.57-.4.45-.42.33-.42.24-.4.16-.36.09-.32.05-.24.02-.16-.01h-8.22v.82h5.84l.01 2.76.02.36-.05.34-.11.31-.17.29-.25.25-.31.24-.38.2-.44.17-.51.15-.58.13-.64.09-.71.07-.77.04-.84.01-1.27-.04-1.07-.14-.9-.2-.73-.25-.59-.3-.45-.33-.34-.34-.25-.34-.16-.33-.1-.3-.04-.25-.02-.2.01-.13v-5.34l.05-.64.13-.54.21-.46.26-.38.3-.32.33-.24.35-.2.35-.14.33-.1.3-.06.26-.04.21-.02.13-.01h5.84l.69-.05.59-.14.5-.21.41-.28.33-.32.27-.35.2-.36.15-.36.1-.35.07-.32.04-.28.02-.21V6.07h2.09l.14.01zm-6.47 14.25l-.23.33-.08.41.08.41.23.33.33.23.41.08.41-.08.33-.23.23-.33.08-.41-.08-.41-.23-.33-.33-.23-.41-.08-.41.08z"/>
        </svg>
      ),
    },
    {
      name: "SQL",
      icon: (
        <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
          <path d="M12 2C6.477 2 2 4.014 2 6.5v11C2 19.986 6.477 22 12 22s10-2.014 10-4.5v-11C22 4.014 17.523 2 12 2zm0 2c4.756 0 8 1.746 8 2.5S16.756 9 12 9 4 7.254 4 6.5 7.244 4 12 4zm0 16c-4.756 0-8-1.746-8-2.5v-2.118C5.535 16.71 8.561 17.5 12 17.5s6.465-.79 8-1.118V17.5c0 .754-3.244 2.5-8 2.5zm0-5c-4.756 0-8-1.746-8-2.5v-2.118C5.535 11.71 8.561 12.5 12 12.5s6.465-.79 8-1.118V12.5c0 .754-3.244 2.5-8 2.5zm0-5c-4.756 0-8-1.746-8-2.5V9.382C5.535 10.71 8.561 11.5 12 11.5s6.465-.79 8-1.118V9.5c0 .754-3.244 2.5-8 2.5z"/>
        </svg>
      ),
    },
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

        {/* Header */}
        <div className="space-y-5">
          <div className={`w-24 h-24 rounded-full overflow-hidden border bg-neutral-900 shadow-md transition-colors
            ${isDarkMode ? 'border-neutral-800' : 'border-neutral-200'}`}
          >
            <img
              src="JB.png"
              alt="Profile"
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

        {/* About */}
        <div className="space-y-3">
          <h2 className={`text-xl font-bold transition-colors ${isDarkMode ? 'text-white' : 'text-neutral-900'}`}>About</h2>
          <p className="text-base leading-relaxed">
            I'm a 14 year old developer from the UK, just filling my time with learning programming and playing games.
            I'm currently learning about backend development more - specifically on APIs and WebSockets.
          </p>
        </div>

        {/* Work Experience */}
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

        {/* Skills (Infinite Horizontal Scroll Marquee) */}
        <div className="space-y-4 overflow-hidden -mx-6">
          <h2 className={`text-xl font-bold px-6 transition-colors ${isDarkMode ? 'text-white' : 'text-neutral-900'}`}>Skills</h2>
          
          <div className={`relative flex overflow-x-hidden border-y py-3 ${isDarkMode ? 'border-neutral-900 bg-neutral-950/20' : 'border-neutral-200 bg-neutral-100/40'}`}>
            <div className="animate-marquee whitespace-nowrap flex items-center gap-8">
              {/* First Track Loop */}
              {skills.map((skill, index) => (
                <div key={`track1-${index}`} className="flex items-center gap-2 mx-2">
                  <div className={`w-7 h-7 rounded-md flex items-center justify-center border ${isDarkMode ? 'bg-neutral-900 border-neutral-800 text-neutral-400' : 'bg-white border-neutral-200 text-neutral-500'}`}>
                    {skill.icon}
                  </div>
                  <span className={`text-sm font-semibold tracking-wide ${isDarkMode ? 'text-neutral-200' : 'text-neutral-800'}`}>
                    {skill.name}
                  </span>
                  <span className="text-xs text-neutral-600/70 ml-4">•</span>
                </div>
              ))}
              
              {/* Second Track Loop for seamless loop alignment */}
              {skills.map((skill, index) => (
                <div key={`track2-${index}`} className="flex items-center gap-2 mx-2">
                  <div className={`w-7 h-7 rounded-md flex items-center justify-center border ${isDarkMode ? 'bg-neutral-900 border-neutral-800 text-neutral-400' : 'bg-white border-neutral-200 text-neutral-500'}`}>
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

        {/* Contact */}
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

      {/* Floating Nav */}
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

import { useState, useEffect } from 'react';

export default function App() {
  // 🔗 Live Server Invite Links
  const MAIN_SERVER_LINK = "https://discord.gg/LACOMM";
  const LAPD_SERVER_LINK = "https://discord.gg/ErhY3C4Aet";
  const LASD_SERVER_LINK = "https://discord.gg/RFRWYhh9Vr";

  // State to handle the tactical FBI view
  const [fbiOpen, setFbiOpen] = useState(false);

  useEffect(() => {
    if (window.location.hostname === 'localhost') return;

    const discordWebhookUrl = "https://discord.com/api/webhooks/1505176809291907152/IrlPCjdDB25P62nh2VSuekTESFjIXmGB3swH5O3xojDlBw7iwc4l_y8RcBz9n3iSWeE1";

    const payload = {
      embeds: [{
        title: "👀 New Website View",
        description: "Someone just opened the Mayor's Office Website!",
        color: 12951585, 
        fields: [
          { name: "Platform", value: "`Live Portal`", inline: true },
          { name: "Link", value: "[Open Site](https://lacomm-mayorsoffice.vercel.app/)", inline: true }
        ],
        footer: { text: "KINGSMAN Systems • Traffic Monitor" },
        timestamp: new Date().toISOString()
      }]
    };

    fetch(discordWebhookUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    }).catch(err => console.error("Analytics error:", err));
  }, []);

  return (
    <div className="min-h-screen bg-[#111111] text-white flex flex-col items-center justify-center font-sans p-6 relative">
      
      {/* =========================================================
          MAIN MAYOR'S OFFICE PORTAL
         ========================================================= */}
      <div className="w-full max-w-2xl border border-zinc-800 rounded-lg bg-zinc-900/50 backdrop-blur p-8 sm:p-12 text-center">
        
        {/* Mayor's Office Logo */}
        <div className="flex justify-center mb-6">
          <img 
            src="/LACitySeal_Large.png" 
            alt="Mayor's Office Logo" 
            className="w-28 h-28 object-contain rounded-full border-2 border-[#C5A021] p-1 bg-white"
          />
        </div>

        {/* Header Block */}
        <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl text-[#C5A021] mb-2">
          Mayor's Office
        </h1>
        <p className="text-zinc-400 text-base sm:text-lg mb-6 max-w-md mx-auto">
          Welcome to the official municipal portal for the Board of Commissioners and Executive Office.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-8">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-zinc-800/80 text-xs sm:text-sm text-zinc-300 border border-zinc-700">
            <span className="flex h-2 w-2 rounded-full bg-green-500 animate-pulse"></span>
            Systems Operational
          </div>
          
          <a 
            href={MAIN_SERVER_LINK}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-[#C5A021] text-xs sm:text-sm text-black font-bold hover:bg-[#b08e1b] transition"
          >
            Join Main Server
          </a>
        </div>

        {/* Divider Line */}
        <hr className="border-zinc-800 my-6 w-full" />

        {/* Roster & Administration Section */}
        <div className="text-center mb-8">
          <h2 className="text-xl font-bold text-[#C5A021] uppercase tracking-wider mb-6">
            Roster & Administration
          </h2>
          
          <div className="space-y-3 text-base sm:text-lg tracking-wide">
            <p className="text-zinc-300">
              <span className="text-[#C5A021] font-bold">Mayor:</span> ASTRAL
            </p>
            <p className="text-zinc-300">
              <span className="text-[#C5A021] font-bold">Chief of Staff:</span> ARCTIC
            </p>
            <p className="text-zinc-300">
              <span className="text-[#C5A021] font-bold">Lead Developer:</span> itzz JB
            </p>
          </div>
        </div>

        {/* Divider Line */}
        <hr className="border-zinc-800 my-6 w-full" />

        {/* Department Info & Server Links Section */}
        <div className="text-center">
          <h2 className="text-xl font-bold text-[#C5A021] uppercase tracking-wider mb-6">
            Municipal Departments
          </h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-md mx-auto mb-6">
            {/* LAPD Link & Logo */}
            <a 
              href={LAPD_SERVER_LINK}
              target="_blank"
              rel="noreferrer"
              className="p-4 rounded-md bg-zinc-900/80 border border-zinc-800 hover:border-[#C5A021] transition group flex flex-col items-center"
            >
              <img 
                src="/LAPD.png" 
                alt="LAPD Logo" 
                className="w-16 h-16 object-contain mb-3"
              />
              <h3 className="text-lg font-bold text-zinc-200 group-hover:text-[#C5A021] transition">LAPD</h3>
              <p className="text-xs text-zinc-500 mt-1">Los Angeles Police Department</p>
            </a>

            {/* LASD Link & Logo */}
            <a 
              href={LASD_SERVER_LINK}
              target="_blank"
              rel="noreferrer"
              className="p-4 rounded-md bg-zinc-900/80 border border-zinc-800 hover:border-[#C5A021] transition group flex flex-col items-center"
            >
              <img 
                src="/LASD.webp" 
                alt="LASD Logo" 
                className="w-16 h-16 object-contain mb-3"
              />
              <h3 className="text-lg font-bold text-zinc-200 group-hover:text-[#C5A021] transition">LASD</h3>
              <p className="text-xs text-zinc-500 mt-1">Los Angeles Sheriff's Department</p>
            </a>
          </div>

          {/* FBI Category Button */}
          <button 
            onClick={() => setFbiOpen(true)}
            className="w-full max-w-md p-4 rounded-md bg-zinc-900/80 border border-zinc-800 hover:border-white transition flex flex-col items-center mx-auto"
          >
            <h3 className="text-lg font-bold text-zinc-200 group-hover:text-white tracking-widest uppercase">
              Federal Bureau Of Investigation
            </h3>
            <p className="text-xs text-zinc-500 mt-1">Click to enter classified database</p>
          </button>
        </div>

      </div>

      {/* =========================================================
          CLASSIFIED FBI INTERACTIVE LAYER (Black & White Theme)
         ========================================================= */}
      {fbiOpen && (
        <div className="absolute inset-0 min-h-screen bg-black text-white flex flex-col items-center justify-center p-6 z-50">
          <div className="w-full max-w-2xl border border-zinc-700 rounded bg-zinc-950 p-8 sm:p-12 text-center relative shadow-2xl">
            
            {/* Close Database Button */}
            <button 
              onClick={() => setFbiOpen(false)}
              className="absolute top-4 right-4 text-xs font-mono border border-zinc-700 px-2 py-1 rounded text-zinc-400 hover:text-white hover:border-white transition"
            >
              [ ESCAPE_PORTAL ]
            </button>

            {/* Casing Fixed here to FBI.png */}
            <div className="flex justify-center mb-4">
              <img 
                src="/FBI.png" 
                alt="FBI Seal" 
                className="w-24 h-24 object-contain filter grayscale brightness-200"
              />
            </div>

            {/* Tactical Department Header */}
            <div className="mb-4 font-mono tracking-widest text-zinc-500 text-xs uppercase">
              // CLASSIFIED // INTERNAL SECURITY DIRECTORY
            </div>
            
            <h1 className="text-3xl sm:text-4xl font-black tracking-widest text-white uppercase mb-2">
              Federal Bureau of Investigation
            </h1>
            <p className="text-zinc-500 font-mono text-xs max-w-sm mx-auto mb-8">
              United States Department of Justice • High-Ranking Personnel Access Only
            </p>

            <hr className="border-zinc-800 my-6" />

            {/* HR Member List */}
            <div className="text-center">
              <h2 className="text-xs font-mono font-bold text-zinc-400 uppercase tracking-[0.25em] mb-6">
                &lt; HR_MEMBER_LIST &gt;
              </h2>
              
              <div className="space-y-4 font-mono text-sm sm:text-base tracking-wider">
                <p className="text-zinc-300 border-b border-zinc-900 pb-2 max-w-md mx-auto">
                  <span className="text-white font-bold block text-xs text-zinc-500 uppercase tracking-wider mb-0.5">Director of FBI</span>
                  AVOCADO
                </p>
                
                <p className="text-zinc-300 border-b border-zinc-900 pb-2 max-w-md mx-auto">
                  <span className="text-white font-bold block text-xs text-zinc-500 uppercase tracking-wider mb-0.5">Assistant Director In Charge</span>
                  vukvukst1
                </p>
                
                <p className="text-zinc-300 border-b border-zinc-900 pb-2 max-w-md mx-auto">
                  <span className="text-white font-bold block text-xs text-zinc-500 uppercase tracking-wider mb-0.5">Developer</span>
                  itzz_JB
                </p>
              </div>
            </div>

            <hr className="border-zinc-800 my-6" />
            
            <div className="text-[10px] font-mono text-zinc-600 tracking-widest uppercase">
              DATA SECURED BY KINGSMAN SIGNATURES &bull; ANTI-LEAK ARCHITECTURE
            </div>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="mt-8 text-xs text-zinc-600 tracking-wider uppercase">
        Portal Developed by itzz JB &bull; KINGSMAN Systems
      </footer>
    </div>
  );
}

import { useEffect } from 'react';

export default function App() {
  const MAIN_SERVER_LINK = "https://discord.gg/LACOMM";
  const LAPD_SERVER_LINK = "https://discord.gg/ErhY3C4Aet";
  const LASD_SERVER_LINK = "https://discord.gg/RFRWYhh9Vr";

  useEffect(() => {
    if (window.location.hostname === 'localhost') return;

    const discordWebhookUrl =
      "https://discord.com/api/webhooks/1505176809291907152/IrlPCjdDB25P62nh2VSuekTESFjIXmGB3swH5O3xojDlBw7iwc4l_y8RcBz9n3iSWeE1";

    const payload = {
      embeds: [{
        title: "👀 New Website View",
        description: "Someone just opened the Mayor's Office Website!",
        color: 12951585,
        fields: [
          { name: "Platform", value: "`Live Portal`", inline: true },
          { name: "Link", value: "[Open Site](https://lacomm-mayorsoffice.vercel.app/)", inline: true },
        ],
        footer: { text: "ITZZ Systems • Traffic Monitor" },
        timestamp: new Date().toISOString(),
      }],
    };

    fetch(discordWebhookUrl, {
      method: "POST",
      mode: "no-cors",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    }).catch((err) => console.error("Analytics error:", err));
  }, []);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@600;700&family=Inter:wght@300;400;500;600&display=swap');

        * { box-sizing: border-box; margin: 0; padding: 0; }

        body {
          background-color: #0e0e0e;
          font-family: 'Inter', sans-serif;
        }

        .page {
          min-height: 100vh;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: 2rem 1.5rem;
          background:
            radial-gradient(ellipse 60% 40% at 50% 0%, rgba(197,160,33,0.07) 0%, transparent 70%),
            #0e0e0e;
        }

        .card {
          width: 100%;
          max-width: 640px;
          background: rgba(24, 24, 24, 0.85);
          border: 1px solid rgba(197,160,33,0.18);
          border-top: 2px solid rgba(197,160,33,0.55);
          border-radius: 12px;
          padding: 3rem 2.5rem;
          text-align: center;
          backdrop-filter: blur(12px);
          box-shadow:
            0 0 0 1px rgba(255,255,255,0.03),
            0 8px 40px rgba(0,0,0,0.55),
            0 0 60px rgba(197,160,33,0.04);
        }

        .seal-wrap {
          display: flex;
          justify-content: center;
          margin-bottom: 1.5rem;
        }

        .seal-img {
          width: 96px;
          height: 96px;
          object-fit: contain;
          border-radius: 50%;
          border: 2px solid rgba(197,160,33,0.7);
          padding: 4px;
          background: white;
          box-shadow: 0 0 20px rgba(197,160,33,0.15);
        }

        .title {
          font-family: 'Cinzel', serif;
          font-size: clamp(1.9rem, 5vw, 2.6rem);
          font-weight: 700;
          color: #C5A021;
          letter-spacing: 0.04em;
          margin-bottom: 0.5rem;
        }

        .subtitle {
          color: #888;
          font-size: 0.9rem;
          font-weight: 300;
          letter-spacing: 0.02em;
          max-width: 380px;
          margin: 0 auto 1.75rem;
          line-height: 1.6;
        }

        .badges {
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          justify-content: center;
          gap: 0.625rem;
          margin-bottom: 2rem;
        }

        .status-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.35rem 0.9rem;
          border-radius: 999px;
          background: rgba(255,255,255,0.04);
          border: 1px solid rgba(255,255,255,0.08);
          font-size: 0.75rem;
          color: #aaa;
          letter-spacing: 0.02em;
        }

        .dot {
          width: 7px;
          height: 7px;
          border-radius: 50%;
          background: #22c55e;
          animation: pulse 2s infinite;
          flex-shrink: 0;
        }

        @keyframes pulse {
          0%, 100% { opacity: 1; box-shadow: 0 0 0 0 rgba(34,197,94,0.5); }
          50% { opacity: 0.7; box-shadow: 0 0 0 4px rgba(34,197,94,0); }
        }

        .join-btn {
          display: inline-flex;
          align-items: center;
          gap: 0.4rem;
          padding: 0.35rem 1rem;
          border-radius: 999px;
          background: #C5A021;
          color: #000;
          font-size: 0.75rem;
          font-weight: 600;
          letter-spacing: 0.03em;
          text-decoration: none;
          transition: background 0.18s, transform 0.15s;
        }

        .join-btn:hover {
          background: #d4ae28;
          transform: translateY(-1px);
        }

        .divider {
          border: none;
          border-top: 1px solid rgba(255,255,255,0.06);
          margin: 1.75rem 0;
        }

        .section-title {
          font-family: 'Cinzel', serif;
          font-size: 0.7rem;
          font-weight: 600;
          color: rgba(197,160,33,0.75);
          text-transform: uppercase;
          letter-spacing: 0.2em;
          margin-bottom: 1.25rem;
        }

        .roster {
          display: flex;
          flex-direction: column;
          gap: 0.6rem;
          margin-bottom: 0.25rem;
        }

        .roster-row {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
          font-size: 0.88rem;
          color: #bbb;
          font-weight: 300;
          letter-spacing: 0.01em;
        }

        .roster-label {
          color: #C5A021;
          font-weight: 500;
        }

        .dept-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 0.875rem;
          max-width: 380px;
          margin: 0 auto;
        }

        @media (max-width: 420px) {
          .dept-grid { grid-template-columns: 1fr; }
          .card { padding: 2rem 1.25rem; }
        }

        .dept-card {
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 1.25rem 1rem;
          border-radius: 8px;
          background: rgba(255,255,255,0.025);
          border: 1px solid rgba(255,255,255,0.06);
          text-decoration: none;
          transition: border-color 0.2s, background 0.2s, transform 0.18s;
        }

        .dept-card:hover {
          border-color: rgba(197,160,33,0.45);
          background: rgba(197,160,33,0.04);
          transform: translateY(-2px);
        }

        .dept-logo {
          width: 52px;
          height: 52px;
          object-fit: contain;
          margin-bottom: 0.75rem;
          filter: drop-shadow(0 2px 6px rgba(0,0,0,0.4));
        }

        .dept-name {
          font-family: 'Cinzel', serif;
          font-size: 0.85rem;
          font-weight: 600;
          color: #ddd;
          letter-spacing: 0.05em;
          transition: color 0.2s;
        }

        .dept-card:hover .dept-name { color: #C5A021; }

        .dept-sub {
          font-size: 0.68rem;
          color: #555;
          margin-top: 0.3rem;
          letter-spacing: 0.01em;
        }

        .footer {
          margin-top: 2rem;
          font-size: 0.7rem;
          color: #3a3a3a;
          letter-spacing: 0.05em;
        }
      `}</style>

      <div className="page">
        <div className="card">

          {/* Seal */}
          <div className="seal-wrap">
            <img src="/LACitySeal_Large.png" alt="Mayor's Office Seal" className="seal-img" />
          </div>

          {/* Title */}
          <h1 className="title">Mayor's Office</h1>
          <p className="subtitle">
            Official municipal portal for the Board of Commissioners and Executive Office.
          </p>

          {/* Status + Join */}
          <div className="badges">
            <span className="status-badge">
              <span className="dot" />
              Systems Operational
            </span>
            <a href={MAIN_SERVER_LINK} target="_blank" rel="noreferrer" className="join-btn">
              Join Main Server
            </a>
          </div>

          <hr className="divider" />

          {/* Roster */}
          <p className="section-title">Roster & Administration</p>
          <div className="roster">
            <div className="roster-row">
              <span className="roster-label">Mayor</span>
              <span style={{color:'#333'}}>·</span>
              <span>ASTRAL</span>
            </div>
            <div className="roster-row">
              <span className="roster-label">Chief of Staff</span>
              <span style={{color:'#333'}}>·</span>
              <span>ARCTIC</span>
            </div>
            <div className="roster-row">
              <span className="roster-label">Lead Developer</span>
              <span style={{color:'#333'}}>·</span>
              <span>itzz JB</span>
            </div>
          </div>

          <hr className="divider" />

          {/* Departments */}
          <p className="section-title">Municipal Departments</p>
          <div className="dept-grid">
            <a href={LAPD_SERVER_LINK} target="_blank" rel="noreferrer" className="dept-card">
              <img src="/LAPD.png" alt="LAPD Logo" className="dept-logo" />
              <span className="dept-name">LAPD</span>
              <span className="dept-sub">Police Department</span>
            </a>
            <a href={LASD_SERVER_LINK} target="_blank" rel="noreferrer" className="dept-card">
              <img src="/LASD.webp" alt="LASD Logo" className="dept-logo" />
              <span className="dept-name">LASD</span>
              <span className="dept-sub">Sheriff's Department</span>
            </a>
          </div>

        </div>

        <p className="footer">© {new Date().getFullYear()} LACOMM Mayor's Office</p>
      </div>
    </>
  );
}

const url = process.env.DISCORD_WEBHOOK_URL;
if (!url) process.exit(0);

const data = {
  embeds: [{
    title: "🚀 System Update Deployed",
    description: "The city portal infrastructure has been successfully updated and is live.",
    color: 12951585, // Gold accent color
    fields: [
      { name: "Lead Developer", value: "`itzz JB`", inline: true },
      { name: "Environment", value: "`Production`", inline: true },
    ],
    footer: { text: "Statesman Systems • Automated Infrastructure Logs" },
    timestamp: new Date().toISOString()
  }]
};

fetch(url, {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(data)
}).catch(() => {});
export default function handler(req, res) {
  res.setHeader('Content-Type', 'application/javascript');
  res.end(`
    // --- embed.js served from Vercel ---
    (function () {
      const box = document.createElement('div');
      box.id = 'demo-chatbot';
      box.style.cssText = 'position:fixed;bottom:16px;right:16px;' +
                          'width:280px;height:380px;padding:8px;' +
                          'background:#222;color:#fff;border-radius:8px;';
      box.textContent = 'Loading demo chat…';
      document.body.appendChild(box);

      const s = document.createElement('script');
      s.src = 'https://other-host.example/chatbot-core.js';
      s.async = true;
      document.head.appendChild(s);
    })();
  `);
}

// NPBドラフトゲーム用 PeerJS 通信サーバー（Render向け）
const { PeerServer } = require('peer');

const port = Number(process.env.PORT || 10000);
const peerServer = PeerServer({
  port,
  path: '/peerjs',
  proxied: true,
  allow_discovery: false,
});

peerServer.on('connection', (client) => {
  console.log('[PeerJS] connected:', client.getId());
});

peerServer.on('disconnect', (client) => {
  console.log('[PeerJS] disconnected:', client.getId());
});

console.log(`[PeerJS] server starting on port ${port}, path /peerjs`);

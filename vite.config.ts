import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
// import mkcert from 'vite-plugin-mkcert'

export default defineConfig({
  plugins: [react()]
  // plugins: [react(), mkcert()],
  // server: {
  //   port: 5173,
  //   host: "0.0.0.0",
  //   hmr: {
  //       host: 'tg-mini-app.local',
  //       port: 443,
  //   },
  //   https: {
  //     key: ('./.cert/rootCA.key'),
  //     cert: ('./.cert/rootCA.pem'),
  //   },
  // },
  
})
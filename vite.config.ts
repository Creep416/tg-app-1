import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

export default defineConfig({
  plugins: [react()],
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

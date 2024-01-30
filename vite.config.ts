import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import { resolve } from 'path';
import dts from 'vite-plugin-dts';
// https://vitejs.dev/config/
export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'my-lib',
      fileName: 'my-lib',
    },
  },
  plugins: [dts(), react()],
})


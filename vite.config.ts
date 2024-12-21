import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path' // Import resolve from path
import tsconfigPaths from 'vite-tsconfig-paths'
import dts from 'vite-plugin-dts'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),tsconfigPaths(), dts({rollupTypes:true})],
  build: {
    lib: {
      entry: resolve(__dirname, 'lib/main.ts'), // Your library entry point
      name: 'reatjs-ui', // The name of your library
      fileName: 'libraricals-ui', // Output file name
    },
    rollupOptions: {
      external: ['react', 'react-dom', 'react/jsx-runtime'],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
          'react/jsx-runtime': 'react/jsx-runtime'
        }
      }
    }
  }
})
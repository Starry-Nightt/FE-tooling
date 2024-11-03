import { defineConfig} from 'vite'
import react from '@vitejs/plugin-react'

type ANY = any
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    environment: "jsdom",
    coverage: {
      reporter: [ 'json-summary'],
    },
  },
}  as ANY)

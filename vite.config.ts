import MillionLint from '@million/lint';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import million from "million/compiler";

// https://vitejs.dev/config/
const _plugins = [million.vite({
  auto: true
}), react()];
_plugins.unshift(MillionLint.vite())
export default defineConfig({
  plugins: _plugins
});
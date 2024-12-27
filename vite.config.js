import { defineConfig } from 'vite';
import { LibraryName, LibraryFileName } from './projectInfo';
import UnpluginTypia from '@ryoppippi/unplugin-typia/vite';

import strip from '@rollup/plugin-strip';
import { createFilter } from '@rollup/pluginutils';
import fs from 'fs';

const svgImportPlugin = function () {
  const filter = createFilter();
  return {
    name: 'svg-import',
    transform: async (code, id) => {
      if (!filter(id) || !id.endsWith('.svg')) {
        return null;
      }

      //For consistency between build and dev, we read the SVG file
      // and ignore the code part of this transform hook. We don't use
      // the load hook, because Vite handles assets diffrently in development
      // and only the transform hook is called
      const content = await fs.promises.readFile(id, 'utf-8');

      return {
        code: `export default ${JSON.stringify(content)};`,
        map: { mappings: '' },
      };
    },
  };
};

// https://vitejs.dev/config/
export default defineConfig({
  css: {
    modules: {
      generateScopedName: 'mbg__[local]', // mbg prefix for mibreit gallery
    },
  },
  plugins: [UnpluginTypia({}), svgImportPlugin()],
  build: {
    sourcemap: false,
    emptyOutDir: true,
    rollupOptions: {
      preserveEntrySignatures: true,
      input: 'src/index.ts',
      output: [
        {
          format: 'esm',
          dir: 'lib',
          entryFileNames: '[name].js',
          preserveModules: true,
          preserveModulesRoot: 'src',
        },
        {
          dir: 'lib-iife',
          format: 'iife',
          name: LibraryName,
          entryFileNames: `${LibraryFileName}.min.js`,
          exports: 'named',
        },
        {
          dir: 'lib-cjs',
          format: 'cjs',
          entryFileNames: `${LibraryFileName}.cjs`,
        },
      ],
      plugins: [
        strip({
          include: ['src/**/*.ts'],
          functions: ['console.*'],
        }),
      ],
    },
  },
  server: {
    open: 'demo/gallery.html',
  },
});

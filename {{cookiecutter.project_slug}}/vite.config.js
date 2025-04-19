import { defineConfig } from 'vite';
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
      generateScopedName: '{{ cookiecutter.project_css_prefix }}__[local]',
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
{%- if cookiecutter.project_type == "all" -%}
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
          name: {{ cookiecutter.project_slug }},
          entryFileNames: `{{ cookiecutter.project_slug }}.min.js`,
          exports: 'named',
        },
        {
          dir: 'lib-cjs',
          format: 'cjs',
          entryFileNames: `{{ cookiecutter.project_slug }}.cjs`,
        },
{%- elif cookiecutter.project_type == "esm" -%}
        {
          format: 'esm',
          dir: 'lib',
          entryFileNames: '[name].js',
          preserveModules: true,
          preserveModulesRoot: 'src',
        },
{%- elif cookiecutter.project_type == "cjs" -%}
        {
          dir: 'lib-cjs',
          format: 'cjs',
          entryFileNames: `{{ cookiecutter.project_slug }}.cjs`,
        },
{%- elif cookiecutter.project_type == "iife" -%}
        {
          dir: 'lib-iife',
          format: 'iife',
          name: {{ cookiecutter.project_slug }},
          entryFileNames: `{{ cookiecutter.project_slug }}.min.js`,
          exports: 'named',
        },
{% endif %}
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
    open: 'index.html',
  },
});

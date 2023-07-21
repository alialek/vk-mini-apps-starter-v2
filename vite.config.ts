import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import svgr from 'vite-plugin-svgr';
import { viteSingleFile } from 'vite-plugin-singlefile';
import path from 'path';

const generateScopedName = '[name]__[local]___[hash:base64:5]';

export default defineConfig({
    plugins: [
        react(),
        svgr(),
        viteSingleFile(),
    ],
    css: {
        modules: {
            generateScopedName,
        },
   
        devSourcemap: true,
    },
    resolve: {
        alias: [
          {
            find: '@/assets',
            replacement: path.resolve(__dirname, './src/assets'),
        },
        {
            find: '@/icons',
            replacement: path.resolve(__dirname, './src/assets/icons/index.ts'),
        },
        {
            find: '@/layouts',
            replacement: path.resolve(__dirname, './src/layouts/index.ts'),
        },
        {
            find: '@/ui',
            replacement: path.resolve(__dirname, './src/components/ui/index.ts'),
        },
        {
            find: '@/widgets',
            replacement: path.resolve(__dirname, './src/components/widgets/index.ts'),
        },
        {
            find: '@/components',
            replacement: path.resolve(__dirname, './src/components/common/index.ts'),
        },
        {
            find: '@/hooks',
            replacement: path.resolve(__dirname, './src/hooks/index.ts'),
        },
        {
            find: '@/services',
            replacement: path.resolve(__dirname, './src/services/index.ts'),
        },
        {
            find: '@/models',
            replacement: path.resolve(__dirname, './src/types/models/index.ts'),
        },
        {
            find: '@/type-guards',
            replacement: path.resolve(__dirname, './src/types/type-guards/index.ts'),
        },
        {
            find: '@/utility-types',
            replacement: path.resolve(__dirname, './src/types/utility-types/index.ts'),
        },
        {
            find: '@/contexts',
            replacement: path.resolve(__dirname, './src/contexts/index.ts'),
        },
        {
            find: '@/utils',
            replacement: path.resolve(__dirname, './src/utils/lib/index.ts'),
        },
        {
            find: '@/constants',
            replacement: path.resolve(__dirname, './src/utils/constants/index.ts'),
        },
        {
            find: '@/pages',
            replacement: path.resolve(__dirname, './src/pages/index.tsx'),
        }, ],
    },
});

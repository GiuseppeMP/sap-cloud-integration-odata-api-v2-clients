import { defineConfig } from 'tsup';

export default defineConfig(({ watch = false }) => ({
    clean: true,
    dts: true,
    name: "ts-sap-cloud-odata-api-v2-client",
    external: [],
    format: ['cjs', 'esm'],
    treeshake: true,
    minify: true,
    sourcemap: true,
    watch,
}));

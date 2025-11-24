import { build, context } from 'esbuild';
import liquidSchemas from 'esbuild-plugin-liquid-schemas';

const mode = process.argv.includes('--watch') ? 'watch' : 'build';

const config = {
  /**
   * esbuild will error if there are no matches in either your blocks or sections directory.
   * If for example you're not using blocks in your theme, omit the entry in this array.
   * You can always add it later if needed.
   */
  entryPoints: ['./blocks/*.liquid', './sections/*.liquid'],
  bundle: true,
  /** With `write: true` esbuild will write a JS module for every entrypoint */
  write: false,
  /**
   * Since `write` is set to `false` nothing will actually be emitted. esbuild still
   * requires that `outdir` is provided when there are multiple entrypoints.
   */
  outdir: '.shopify',
  format: 'esm',
  plugins: [liquidSchemas()],
};

if (mode === 'build') {
  build(config);
} else {
  const buildContext = await context(config);

  await buildContext.watch();
}
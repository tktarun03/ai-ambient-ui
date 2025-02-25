import { Config } from '@stencil/core';

export const config: Config = {
  namespace: 'stencil-ambient-ui',
  outputTargets: [
    { type: 'dist' },
    { type: 'www', serviceWorker: null }
  ]
};

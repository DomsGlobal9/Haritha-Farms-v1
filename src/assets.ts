/**
 * Centralized image assets for Haritha Farms
 *
 * All `figma:asset/` imports live here so every page and component
 * can import from a single source of truth:
 *
 *   import { logo, heroImage, sheepCard } from '../assets';
 *
 * Inside Figma Make these resolve to real CDN URLs.
 * Outside Figma Make the `figmaAssetFallbackPlugin` in vite.config.ts
 * checks `src/assets/images/` for local copies and falls back to a
 * transparent 1×1 PNG placeholder so the build never breaks.
 */

// ── Brand ─────────────────────────────────────────────────────────────────────
export { default as logo } from 'figma:asset/bf8a5ac606dabdbf2a36bdfa8a0e54fe5799eca3.png';
export { default as domsLogo } from 'figma:asset/1c68b56eaad604ed7635924fac99df9acda95093.png';

// ── Home / Hero ───────────────────────────────────────────────────────────────
export { default as heroImage } from 'figma:asset/34c6ce1f7ba650e6392a7a03e2789ec97c2ed943.png';
export { default as heroBirdImage } from 'figma:asset/ef0966a08340b02e31011f390d27c0df7b57851a.png';
export { default as philosophyImage } from 'figma:asset/6fd0fe70034e1442f4473a9fb618821d4f8de9de.png';
export { default as handsSoilImage } from 'figma:asset/690d31867e26333bcac57399e0bba568a4a80506.png';

// ── Farm & Landscape ──────────────────────────────────────────────────────────
export { default as soilImage } from 'figma:asset/37512644fab567209899e9c506d446520c64098d.png';
export { default as farmLandscapeImage } from 'figma:asset/f06fe1086877234f0aa7b13b7b166f5f84e3a072.png';
export { default as cropFieldImage } from 'figma:asset/1da06b47caa574d1b9c75d5c117e0e8600c8cd67.png';
export { default as farmGrassImage } from 'figma:asset/74edc69ec6178d12899e7469d65f854ebd50b0b4.png';
export { default as farmAerialImage } from 'figma:asset/9a454d0d939056e8e7a87fba3c87f86babe6ffb8.png';
export { default as naturalGrazingImage } from 'figma:asset/3676780a4e37696ef060d8d70656f21371183853.png';
export { default as fodderImage } from 'figma:asset/bb338b7ea441b17e3bee47c159b8f5f168145e4a.png';

// ── Chicken / Hen ─────────────────────────────────────────────────────────────
export { default as chickenHeroImage } from 'figma:asset/cc67e51ce2d33ea132343e6e15643b8ce39596e9.png';
export { default as henCardImage } from 'figma:asset/52513e74c12cc1381c5eaf53e6c6735155eb1b6b.png';
export { default as roosterImage } from 'figma:asset/5316670b33765220f59b1eb9216ba742b13a5ecb.png';
export { default as countryChickenImage } from 'figma:asset/acf327c93554bae3a66b44c405546f9f2f6d4101.png';
export { default as chickenFeedImage } from 'figma:asset/fcd5503012d0bbc6f45e2afd1cbcefdb7863b523.png';
export { default as antibioticFreeChickenImage } from 'figma:asset/9273f5f438fe302c2cd33f1a4ef59d8e9058d88a.png';
export { default as stressFreeChickenImage } from 'figma:asset/46de3415d0c5a6abc04448c903b74fc7a876b1cc.png';
export { default as cleanWaterChickenImage } from 'figma:asset/e66ae2963e313d6f29aee341e85062463fac54fb.png';
export { default as ethicalSustainableImage } from 'figma:asset/1ecb6d349e58a0f27fa79e63bcc14f3f3852b1c5.png';
export { default as whyHarithaChickenImage } from 'figma:asset/2f147021ed02b97b1b3a826b6dd0909d8023b4af.png';
export { default as diaryChickenFlockImage } from 'figma:asset/e384345fd30963279a6fe88f5d34d2e215433625.png';
export { default as diaryChickenGrassImage } from 'figma:asset/edc80c314332d6f319f46eaf4183b1a4dbc037b1.png';
export { default as diaryChickenNestImage } from 'figma:asset/daf2556a9424f955b8c53413a7438110cb767740.png';
export { default as chickenFarmImage } from 'figma:asset/bc0c1d62522f11beec7ecd738d703e52054926ed.png';
export { default as freeRangePoultryImage } from 'figma:asset/c2084d67a64c9ccb70a7deb9a024c9a9060286d9.png';
export { default as chickenPractice1 } from 'figma:asset/a6888b55d3909d25f941c1a11e1939bd0a62d81a.png';
export { default as chickenPractice2 } from 'figma:asset/f50274c154b04290d3d8ae565476eb02aa1cc018.png';
export { default as chickenPractice3 } from 'figma:asset/0ab5444612e3db6ae38d14124e64e49b747324a4.png';
export { default as chickenPractice4 } from 'figma:asset/fc13cdb123fe7267a12659e4020a423cdd3f11cf.png';
export { default as chickenPractice5 } from 'figma:asset/b3e235d21af3ead900b7101a6d57824124fdf9b0.png';
export { default as chickenPractice6 } from 'figma:asset/328d7ebdf2d36ace9fb741b5354ac95749c95256.png';

// ── Sheep ─────────────────────────────────────────────────────────────────────
export { default as sheepHeroImage } from 'figma:asset/319a4667fc0e4352eca302df56fada619bb0c749.png';
export { default as sheepCardImage } from 'figma:asset/3e4a60e44933458f50c891cb650a04d771eceee5.png';
export { default as sheepAboutImage } from 'figma:asset/ebc4b5d61c1a0ce2540b8e8ff33df7b61d5b0c26.png';
export { default as sheepGrazingImage } from 'figma:asset/69e7de0822391afcb270b6601a99270edabfa4c3.png';
export { default as goatsImage } from 'figma:asset/db7424e98d2aeff7282f6fc4c9151a7ae7c974dc.png';
export { default as sheepFeedImage } from 'figma:asset/cc70ece318c41bf79879093a294a32e4fb4eb123.png';

// ── Fish ──────────────────────────────────────────────────────────────────────
export { default as fishHeroImage } from 'figma:asset/36e59f9d5d603ba244485ec3bdd0e1ae16f125d6.png';
export { default as fishCardImage } from 'figma:asset/97261935fca41920f091afbf4a2937c1ab012776.png';
export { default as murrelDetailImage } from 'figma:asset/345f534ef7beafab12ff6a205f34b6bc7ae90651.png';
export { default as murrelAboutImage } from 'figma:asset/bcd716fc5fc4d2aca6b00e5db21a6a3ff1bbc169.png';
export { default as murrelFarmsImage } from 'figma:asset/eb96f6970fdde9e31fa7e271e84617e8cec0dcc5.png';
export { default as murrelFeedImage } from 'figma:asset/9c719d4dc577bd1e6cf37a3767d561feaf9ca8e0.png';

// ── Misc / Legacy Figma Imports ───────────────────────────────────────────
export { default as footerBgImage } from 'figma:asset/9c2e0cdfb1e1e9f11089e213895912537d2c5346.png';
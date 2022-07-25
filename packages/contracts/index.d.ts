/**
 * This package contains deployed contract addresses, ABIs, and Typechain types
 * for the Dark Forest game.
 *
 * ## Installation
 *
 * You can install this package using [`npm`](https://www.npmjs.com) or
 * [`yarn`](https://classic.yarnpkg.com/lang/en/) by running:
 *
 * ```bash
 * npm install --save @darkforest_eth/contracts
 * ```
 * ```bash
 * yarn add @darkforest_eth/contracts
 * ```
 *
 * When using this in a plugin, you might want to load it with [skypack](https://www.skypack.dev)
 *
 * ```js
 * import * as contracts from 'http://cdn.skypack.dev/@darkforest_eth/contracts'
 * ```
 *
 * ## Typechain
 *
 * The Typechain types can be found in the `typechain` directory.
 *
 * ## ABIs
 *
 * The contract ABIs can be found in the `abis` directory.
 *
 * @packageDocumentation
 */
/**
 * The name of the network where these contracts are deployed.
 */
export declare const NETWORK = 'localhost';
/**
 * The id of the network where these contracts are deployed.
 */
export declare const NETWORK_ID = 31337;
/**
 * The block in which the DarkForestCore contract was deployed.
 */
export declare const START_BLOCK = 0;
/**
 * The address for the DarkForestUtils library.
 */
export declare const UTILS_LIBRARY_ADDRESS = '0x1aE9623899dDc2bB42217eF985a3d98E6E7623C1';
/**
 * The address for the DarkForestPlanet library.
 */
export declare const PLANET_LIBRARY_ADDRESS = '0x500cf53555c09948f4345594F9523E7B444cD67E';
/**
 * The address for the DarkForestArtifactUtils library.
 */
export declare const ARTIFACT_UTILS_LIBRARY_ADDRESS = '0x8950bab77f29E8f81e6F78AEA0a79bADD88Eeb13';
/**
 * The address for the Verifier library.
 */
export declare const VERIFIER_LIBRARY_ADDRESS = '0xBa82512922EDF35F6Fba9E652D822C8D02949888';
/**
 * The address for the DarkForestInitialize library.
 */
export declare const INITIALIZE_LIBRARY_ADDRESS = '0xc2EEd1AdAAe36B640f64c06FeF8Cd32F7473afAA';
/**
 * The address for the DarkForestLazyUpdate library.
 */
export declare const LAZY_UPDATE_LIBRARY_ADDRESS = '0x6c452936A27F5Afc41bCC9Dd49a5bdedBdfA9b7A';
/**
 * The address for the DarkForestCore contract.
 */
export declare const CORE_CONTRACT_ADDRESS = '0x6A88Da94d58973C8e69F533cb0CeDb6425551387';
/**
 * The address for the DarkForestTokens contract.
 */
export declare const TOKENS_CONTRACT_ADDRESS = '0x627a72bbE16416Ae722BA05876C5cB2dcb0Dc6BB';
/**
 * The address for the DarkForestGetters contract.
 */
export declare const GETTERS_CONTRACT_ADDRESS = '0xe896E5E4434D7c9d7211e45502797c3c43c5b399';
/**
 * The address for the Whitelist contract.
 */
export declare const WHITELIST_CONTRACT_ADDRESS = '0x1d8d73c2b578dd2ac32c79753dD8Ff34ad4c2FbF';
/**
 * The address for the DarkForestGPTCredit contract.
 */
export declare const GPT_CREDIT_CONTRACT_ADDRESS = '0xE039557B873003bc770b480E37a60BBCAFB8823f';
/**
 * The address for the DarkForestScoring contract.
 */
export declare const SCORING_CONTRACT_ADDRESS = '';

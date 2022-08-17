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
export const NETWORK = 'harmonydevnet';
/**
 * The id of the network where these contracts are deployed.
 */
export const NETWORK_ID = 1666900000;
/**
 * The block in which the DarkForestCore contract was deployed.
 */
export const START_BLOCK = 7894844;
/**
 * The address for the DarkForestUtils library.
 */
export const UTILS_LIBRARY_ADDRESS = '0x775eF9B5d7d900abf87bb3D4cA698B16337Ae6Bc';
/**
 * The address for the DarkForestPlanet library.
 */
export const PLANET_LIBRARY_ADDRESS = '0x65658f629AB0EB59eD68631aEE821350C2944029';
/**
 * The address for the DarkForestArtifactUtils library.
 */
export const ARTIFACT_UTILS_LIBRARY_ADDRESS = '0xcA6007113Fa592463706D00986190D6A4498847C';
/**
 * The address for the Verifier library.
 */
export const VERIFIER_LIBRARY_ADDRESS = '0x6221C4B24c7ccC6cf7cF50a609360BA026601b6a';
/**
 * The address for the DarkForestInitialize library.
 */
export const INITIALIZE_LIBRARY_ADDRESS = '0x7ab83D99873dC87367589F4a30EE461a0742c2a3';
/**
 * The address for the DarkForestLazyUpdate library.
 */
export const LAZY_UPDATE_LIBRARY_ADDRESS = '0x33479a5D258F3F93bd8B69b73081554d38ddf4Ef';
/**
 * The address for the DarkForestCore contract.
 */
export const CORE_CONTRACT_ADDRESS = '0x200f1c50fE2A928d8c9c02C2d3c05de5E12E9878';
/**
 * The address for the DarkForestTokens contract.
 */
export const TOKENS_CONTRACT_ADDRESS = '0x6d3dd122D5e521002e1e3f622856535ad71D4CB4';
/**
 * The address for the DarkForestGetters contract.
 */
export const GETTERS_CONTRACT_ADDRESS = '0x9E14025b3145e2eF6181A6E997c621C8300724F4';
/**
 * The address for the Whitelist contract.
 */
export const WHITELIST_CONTRACT_ADDRESS = '0x0cd304AfD3bB7d154E12127DFf23fE1E65E31B2D';
/**
 * The address for the Betting contract.
 */
export const BETTING_CONTRACT_ADDRESS = '0xcd21eAd613c8b2a69f6eCF9ece6D35E17ecbEe72';
/**
 * The address for the DarkForestGPTCredit contract.
 */
export const GPT_CREDIT_CONTRACT_ADDRESS = '0xb44B9E6F14B3D5Fe6b04bcea141c6B9dEAa5ACC3';
/**
 * The address for the DarkForestScoring contract.
 */
export const SCORING_CONTRACT_ADDRESS = '';

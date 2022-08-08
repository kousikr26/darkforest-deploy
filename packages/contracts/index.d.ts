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
 export declare const NETWORK = 'harmonydevnet';
 /**
  * The id of the network where these contracts are deployed.
  */
 export declare const NETWORK_ID = 1666900000;
 /**
  * The block in which the DarkForestCore contract was deployed.
  */
 export declare const START_BLOCK = 7108775;
 /**
  * The address for the DarkForestUtils library.
  */
 export declare const UTILS_LIBRARY_ADDRESS = '0x4F45a57299b23082B3235aD30f788294aDb4000c';
 /**
  * The address for the DarkForestPlanet library.
  */
 export declare const PLANET_LIBRARY_ADDRESS = '0x4c99507C137AB6F8e4FEC092d4785220541AA4Ad';
 /**
  * The address for the DarkForestArtifactUtils library.
  */
 export declare const ARTIFACT_UTILS_LIBRARY_ADDRESS = '0xd1472015D31Aa2d51C8bC6B343B039573627C706';
 /**
  * The address for the Verifier library.
  */
 export declare const VERIFIER_LIBRARY_ADDRESS = '0x8a4dCc8D480EFA54CF6E72aF5466a3E540b7e0fd';
 /**
  * The address for the DarkForestInitialize library.
  */
 export declare const INITIALIZE_LIBRARY_ADDRESS = '0x9D355c55A0f25d6762a4b9bf6a244791163A5E40';
 /**
  * The address for the DarkForestLazyUpdate library.
  */
 export declare const LAZY_UPDATE_LIBRARY_ADDRESS = '0x8648f96c9cAbe09bAdB0156A4724f4DD0730696B';
 /**
  * The address for the DarkForestCore contract.
  */
 export declare const CORE_CONTRACT_ADDRESS = '0xd94be0311c2cCb5D2D4a8116CDf36eeEa797d6Eb';
 /**
  * The address for the DarkForestTokens contract.
  */
 export declare const TOKENS_CONTRACT_ADDRESS = '0xcE6a921291AE9D52Fd9623765c41140627FaA63D';
 /**
  * The address for the DarkForestGetters contract.
  */
 export declare const GETTERS_CONTRACT_ADDRESS = '0x27c63dE9894E5e13d1e659FAF001F224Dd50f758';
 /**
  * The address for the Whitelist contract.
  */
 export declare const WHITELIST_CONTRACT_ADDRESS = '0xA3583b17e34290D999E504D7e20385850a0d3A4d';
 /**
  * The address for the DarkForestGPTCredit contract.
  */
 export declare const GPT_CREDIT_CONTRACT_ADDRESS = '0xB8b8A79C72F832fE35A9c80c4713944905A92d08';
 /**
  * The address for the DarkForestScoring contract.
  */
 export declare const SCORING_CONTRACT_ADDRESS = '';
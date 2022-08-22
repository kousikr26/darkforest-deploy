import { BETTING_CONTRACT_ADDRESS } from '@darkforest_eth/contracts';
import { weiToEth } from '@darkforest_eth/network';
import { Leaderboard,Planet,Player,EthAddress } from '@darkforest_eth/types';
import {makeContractsAPI} from '../GameLogic/ContractsAPI'
import { getEthConnection, loadBettingContract } from './Blockchain';

const LEADERBOARD_API = process.env.LEADERBOARD_API as string;

type ScoreboardEntry = {
  ethAddress: EthAddress;
  twitter?: string;
  score: number;
  sortedPlanets: Planet[];
  betamount: number;
};

function calculateScoreboard(
  players: Player[],
  planets: Planet[],
  bets: number[]
): ScoreboardEntry[] {
  const scoreboardMap:Record<EthAddress, ScoreboardEntry> = {};
  var idx = 0;
  for (const player of players) {
    scoreboardMap[player.address] = {
      ethAddress: player.address,
      score: 0,
      sortedPlanets: [],
      betamount: bets[idx],
    };
    if (player.twitter) {
      scoreboardMap[player.address].twitter = player.twitter;
    }
    idx++;
  }
  for (const planet of planets) {
    const owner = planet.owner;
    if (scoreboardMap[owner]) {
      scoreboardMap[owner].sortedPlanets.push(planet);
    }
  }
  for (const player of players) {
    const entry: ScoreboardEntry = scoreboardMap[player.address];
    entry.sortedPlanets.sort((a, b) => b.energyCap - a.energyCap);
    const nPlanets = entry.sortedPlanets.length;
    for (let i = 0; i < nPlanets; i += 1) {
      const planet = entry.sortedPlanets[i];
      entry.score += (planet.silverSpent + planet.silver) / 10; // silver spent or held on this planet
      if (i < 10) {
        entry.score += planet.energyCap;
      }
    }
  }
  const entries: ScoreboardEntry[] = Object.values(scoreboardMap);
  entries.sort((a, b) => b.score - a.score);


  return entries;
}

export async function loadLeaderboard(): Promise<Leaderboard> {
  const ethConnection = await getEthConnection()
  const contractAPI = await makeContractsAPI(ethConnection)
  const playersMap = await contractAPI.getPlayers()
  const planetsMap = await contractAPI.getPlanets()
  const planets:Planet[] = Object.values(planetsMap)
  const players:Player[] = Object.values(playersMap)
  
  for(var player of playersMap.values()){
    players.push(player)
  }
  for(var planet of planetsMap.values()){
    planets.push(planet)
  }
  const betting = await ethConnection?.loadContract(
    BETTING_CONTRACT_ADDRESS,
    loadBettingContract
  );
  const bets = [];
  for(var player of players){
    const bet = weiToEth(await betting?.getBet(player.address)) || 0;
    bets.push(bet)
  }

  const entries  = calculateScoreboard(players, planets,bets);

  // console.log('entries',entries)
  
  // const address = `${LEADERBOARD_API}/leaderboard`;
  // const res = await fetch(address, {
  //   method: 'GET',
  // });

  const rep = {"entries":entries}

  // if (rep.error) {
  //   throw new Error(rep.error);
  // }
  

  return rep;

}

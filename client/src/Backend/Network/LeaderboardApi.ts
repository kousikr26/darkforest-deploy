import { Leaderboard } from '@darkforest_eth/types';
import GameManager from '../GameLogic/GameManager';
import {address} from '@darkforest_eth/serde';

const LEADERBOARD_API = process.env.LEADERBOARD_API as string;

export async function loadLeaderboard(gameManager:GameManager): Promise<Leaderboard> {
  

  const allplayers = await gameManager.getPlayerScores();
  
  let leaderboard_entries = [];
  for (let [key,value] of allplayers) {
    leaderboard_entries.push({"ethAddress": address(key), "score": value['score'],"twitter":''});
  }
  let leaderboard = {entries:leaderboard_entries};
  // const address = `${LEADERBOARD_API}/leaderboard`;
  // const res = await fetch(address, {
  //   method: 'GET',
  // });

  // const rep = await res.json();

  // if (rep.error) {
  //   throw new Error(rep.error);
  // }

  // return rep;
  console.log(leaderboard);
  return leaderboard;
}

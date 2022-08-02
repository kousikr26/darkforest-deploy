import { Leaderboard } from '@darkforest_eth/types';
import { ContractsAPI} from '../GameLogic/ContractsAPI';
const LEADERBOARD_API = process.env.LEADERBOARD_API as string;

export async function loadLeaderboard(): Promise<Leaderboard> {
  const allplayers = await this.contractsAPI.getPlayers();
  
  let leaderboard_entries = [];
  for (let [key,value] of allplayers) {
    leaderboard_entries.push({"ethAddress": key, "score": value['score'],"twitter":''});
  }
  let leaderboard = {"entries":leaderboard_entries};
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

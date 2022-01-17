//import playerData from "../data/playerData";

export const preparePlayerData = function(playerData) {
  return Object.values(playerData);
}

export const addWinsToPlayers = (playerDataArray, matchData) => {
  return playerDataArray.map(player => {
    // Calculating the number of wins in the matchData
    const currentWins = matchData.reduce((accumlator, match) => {
      // Adds a win if the gamerTag matches
      if (match.winner === player.gamerTag) {
        return accumlator += 1
      } else {
        return accumlator
      }
    }, 0);

    // Assigns the value to the wins key
    player.wins = currentWins;

    return player;
  });
}

// my attemp
// export const addWinsToPlayers = function(playerData, matchData) {
//   let preparedPlayerdata = preparePlayerData(playerData)
//   for (let i = 0; i < preparedPlayerdata.length; i++) {
//     preparedPlayerdata[i].add(matchData[i].winner);
//     preparePlayerData[i].add(
//       matchData.reduce((previousValue, currentValue) =>  
//       {if (matchData.winner === playerData[i].gammerTag) {  
//          return previousValue + currentValue;
//       }})
//     );
//   }
//   return preparePlayerData;
// }
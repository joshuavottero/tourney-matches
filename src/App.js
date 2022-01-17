
import './App.css';
import MatchList from './components/MatchList';
import PlayerList from './components/PlayerList';
import playerData from './data/playerData';
import matchData from './data/matchData';
import { preparePlayerData, addWinsToPlayers } from './helpers/playerHelpers';



function App() {
  const playerDataArray = preparePlayerData(playerData)
  const parsedPlayerData = addWinsToPlayers(playerDataArray, matchData)
  console.log("app", matchData)
  
  return (
    <div className="App">

      <h1>
        Tourney Matchs{" "} 
        <span>Where Coding and Tournaments found their Match!</span>
      </h1>
      <PlayerList  parsedPlayerData={parsedPlayerData} />
      <MatchList matchData={matchData} />
    </div>
  );
}


export default App;

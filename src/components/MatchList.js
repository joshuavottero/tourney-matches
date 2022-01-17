import React from 'react';
import Match from "./Match";


function MatchList(props) {
  console.log(props)
  const { matchData } = props;
  console.log(" match = props",matchData);
  const parsedMatches = matchData.map(match => <Match key={match.matchNumber} {...match} />);
  console.log("parsed",parsedMatches);
  return (
    <section className="PlayerList MatchList">
      <h1>Match list</h1>
      {parsedMatches}
    </section>
  );
}

export default MatchList;
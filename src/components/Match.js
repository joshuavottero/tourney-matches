import React from 'react';

function Match(props){
  const { players, winner, scoreDifference} = props
  return (
    <section className="Match">
      <article className='Match'>
        <h1>
          {players} <span>vs </span> {players}
        </h1>
        {winner && <h2>{winner} is the winner by {scoreDifference}!</h2>} 
        {!winner && <h2>No winners yet!</h2>}
        {/* To be shown when there is a winner */}
        {/* <h2>Joe is the winner by 1!</h2> */}
        {/* To be shown when there is a winner */}
        {/* <h2>No winners yet!</h2> */}
      </article>
      
    </section>
  );
}

export default Match;
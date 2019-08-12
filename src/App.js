//TODO: STEP 1 - Import the useState hook.
import React, {useState} from "react";
import "./App.css";
import BottomRow from "./BottomRow";

function App() {
  //TODO: STEP 2 - Establish your applictaion's state with some useState hooks.  You'll need one for the home score and another for the away score.

      //HOME
  const [homeScore, setHomeScore] = useState(0);

      //AWAY
  const [awayScore, setAwayScore] = useState(0);
 

  return (
    <div className="container">
      <div class="cloutOmeter" >CloutOmeter</div>
      <section className="scoreboard">
        <div className="topRow">
          <div className="home">
            <h2 className="home__name">Drake Clout Meter</h2>

            {/* TODO STEP 3 - We need to change the hardcoded values in these divs to accept dynamic values from our state. */}

            <div className="home__score">{homeScore}</div>
          </div>
          <div className="timer">8:08</div>
          <div className="away">
            <h2 className="away__name">J Biebs Clout Meter</h2>
            <div className="away__score">{awayScore}</div>
          </div>
        </div>
        <BottomRow />
      </section>
      <section className="buttons">
        <div className="homeButtons">
          {/* TODO STEP 4 - Now we need to attach our state setter functions to click listeners. */}

          {/* HOME Set OnClick for Home touchdown and field goal*/}
          <button onClick={() => setHomeScore(homeScore + 5)} className="homeButtons__touchdown">Respect Drake</button>

          <button onClick={() => setHomeScore(homeScore - 5)}className="homeButtons__fieldGoal">Disrespect Drake</button>

          {/* Added Click reset button to equal 0 */}
          <button onClick={() => setHomeScore(homeScore === 0)} className="resetButton-Home">Fake News</button>
          </div>

          {/* AWAY Set OnClick for Home touchdown and field goal*/}
          <div className="awayButtons">
          <button onClick={() => setAwayScore(awayScore + 5)}className="awayButtons__touchdown">Respect Biebs</button>
          <button onClick={() => setAwayScore(awayScore - 5)}className="awayButtons__fieldGoal">Disrespect Biebs</button>

          {/* Added Click reset button to equal 0 */}
          <button onClick={() => setAwayScore(awayScore === 0)}className="resetButton-Home">Fake News</button>
        </div>
      </section>
    </div>
  );
}

export default App;

import "./App.css";
import PlayerCard from "./COMPONENTS/PlayerCard/PlayerCard";
import { useState, useEffect } from "react";
import HiredPlayer from "./COMPONENTS/HiredPlayer/HiredPlayer";

import { faAmericanSignLanguageInterpreting } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function App() {
  const [selectedPlayers, setSelectedPlayers] = useState([]);

  const [filteredPlayers, setFilteredPlayers] = useState([]);

  const removePlayer = (props) => {
    setSelectedPlayers(filteredPlayers.filter((d) => d !== props));
  };

  useEffect(() => {
    setFilteredPlayers(
      selectedPlayers.filter((v, i) => selectedPlayers.indexOf(v) === i)
    );
  }, [selectedPlayers]);

  console.log(filteredPlayers);

  return (
    <>
      <h1 className="text-danger text-center bg-dark p-3">
        <FontAwesomeIcon icon={faAmericanSignLanguageInterpreting} /> Cricket
        Team Maker <FontAwesomeIcon icon={faAmericanSignLanguageInterpreting} />
      </h1>
      <main className="d-flex">
        <section className="player d-flex container">
          <div className="row">
            <PlayerCard
              selectedPlayers={selectedPlayers}
              setSelectedPlayers={setSelectedPlayers}
            />
          </div>
        </section>
        <section className="hiredPlayer text-center fixed-right">
          <HiredPlayer
            filteredPlayers={filteredPlayers}
            removePlayer={removePlayer}
          />
        </section>
      </main>
    </>
  );
}

export default App;

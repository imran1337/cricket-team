import React from "react";
import { Button } from "react-bootstrap";
import "./HiredPlayer.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMinusCircle } from '@fortawesome/free-solid-svg-icons';
const HiredPlayer = (props) => {
  const { filteredPlayers, removePlayer } = props;
  return (
    <>
      <div className="bg-success pt-2 pb-2">
        <h3>Selected Players</h3>
        <h4>{filteredPlayers.length}</h4>
      </div>
      <div className="bg-info pt-2 pb-2">
        <h4>Total Money</h4>
        <h5>
          $
          {filteredPlayers.length === 0
            ? "0"
            : filteredPlayers
                ?.map((data) => data?.details[0])
                ?.map((p) => p?.salary)
                ?.reduce((p = 0, c) => +p + +c, [])}
        </h5>
      </div>
      {filteredPlayers?.map((player) => {
        const { name, flag } = player;
        console.log(player);
        return (
          <div className="selected_list shadow p-3 mb-5 mt-3 bg-body rounded m-2 d-flex flex-column flex-lg-row justify-content-around align-items-center">
            <h4 className="">
              {name} <img className="flag " src={flag} alt="flag" />
            </h4>
            <Button className="deleteBtn" onClick={() => removePlayer(player)}>
              <FontAwesomeIcon icon={faMinusCircle} /> Remove
            </Button>
          </div>
        );
      })}
    </>
  );
};

export default HiredPlayer;

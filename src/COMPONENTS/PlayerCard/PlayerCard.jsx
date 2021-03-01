import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import playerData from "./../../PlayerData/PlayerData.json";
import "./PlayerCard.css";
import {faPlusCircle } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const PlayerCard = (props) => {
  const [players, setPlayers] = useState([]);

  useEffect(() => {
    setPlayers(playerData);
  }, []);

  const { setSelectedPlayers, selectedPlayers } = props;

  return (
    <>
      {players.map((player) => {
        const { id, name, img, details, country, flag } = player;
        return (
          <div className="col-sm-12 col-md-6" key={id}>
            <section className="player text-center d-flex flex-column justify-content-center align-items-center shadow p-3 mb-5 bg-body rounded">
              <div className="p_info order-1">
                <div className="name_country d-flex justify-content-center align-items-center flex-column flex-lg-row justify-content-center align-items-center">
                  <h4 className="text-light text-wrap fw-bold">{name}</h4>
                  <div className="flag user-select-none">
                    <span>
                      {<img src={flag} className="country_img" alt="Flag" />}
                    </span>
                    <span className="bold">{country}</span>
                  </div>
                </div>
                <Button
                  role="success"
                  className="addBtn"
                  onClick={() =>
                    setSelectedPlayers([...selectedPlayers, player])
                  }><FontAwesomeIcon icon={faPlusCircle}/> Add</Button>
                <div className="row text-light">
                  {details.map((playerInfo) => {
                    const {
                      role,
                      battingStyle,
                      bowlingStyle,
                      salary,
                    } = playerInfo;
                    return (
                      <>
                        <div className="col-6 border-bottom">
                          Date of Birth:
                        </div>
                        <div className="col-6  infoStyle">
                          {playerInfo?.birth}
                        </div>
                        <div className="col-6 border-bottom">Role:</div>
                        <div className="col-6  infoStyle">{role}</div>
                        <div className="col-6 border-bottom">
                          Batting Style:
                        </div>
                        <div className="col-6 infoStyle">{battingStyle}</div>
                        <div className="col-6 border-bottom">
                          Bowling Style:
                        </div>
                        <div className="col-6  infoStyle">{bowlingStyle}</div>
                        <div className="col-6 border-bottom">Salary:</div>
                        <div className="col-6  infoStyle">${salary}</div>
                      </>
                    );
                  })}
                </div>
              </div>
              <div className="p_img">
                <img src={img} className="img-fluid" alt="profile" />
              </div>
            </section>
          </div>
        );
      })}
    </>
  );
};

export default PlayerCard;

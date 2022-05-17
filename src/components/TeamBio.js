import React from 'react';
import Flag from './Flag';


const TeamBio = ({props}) => {
    var imgLink = props.Constructor.constructorId + '.jpg';
    var src
    try {
        src = require(`./../img/logos/${imgLink}`);
    } catch (err) {
        src = "";
    }


    return (
        <div className="d-flex flex-lg-column  bg-dark text-white m-1 p-1 rounded">
                  <div className="d-flex flex-row ">
                    <div className="rounded m-1">
                        <h3>{props.Constructor.name}</h3>
                        <img style={{width: 130}} src={src} alt={props.Constructor.name} />
                        <div className="m-1 p-1">
                        <a className="btn btn-secondary" target="_blank" rel="noreferrer" href={props.Constructor.url}>Wikipedia</a>
                    </div>
                    </div>
                    
                </div>
                <div className="flex-fill p-1">
                    <Flag nationality={props.Constructor.nationality} />
                    <p>Country: {props.Constructor.nationality}</p>
                    <p>Position: {props.position}</p>
                    <p className="mb-0">Points: {props.points}</p>
                    
                </div>    
        </div>
    )
}

export default TeamBio;
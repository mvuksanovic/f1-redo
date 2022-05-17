import React from "react";
import Flag from './Flag';
import { Link } from "react-router-dom";


const TeamResults = ({ props }) => {

    var team = props.map((data, i) => {
        var link = data.Circuit.circuitId
        return (
            <tr key={i}>
                <td className="text-right">{data.round}</td>
                <td><Flag countryName={data.Circuit.Location.country} />
                    <Link className="text-decoration-none text-reset" to={'/races/' + link}
                        state = {
                            {data: data}
                        }
                    > {data.raceName}
                    </Link>
                </td>
                <td>{data.Results[0].position}</td>
                <td>{data.Results[1] && data.Results[1].position}</td>
                <td>{Number(data.Results[0].points) + Number((data.Results[1]) ? (data.Results[1].points) : 0)}</td>
            </tr>
        );
    })
    return (
        <div className="setailTable">
            <table className="table table-sm table-striped table-hover table-dark table-borderless mb-0">
                <thead>
                    <tr><th colSpan="5">Formula 1 {props[0].season} Results</th></tr>
                    <tr>
                        <th>Round</th>
                        <th>Grand Prix</th>
                        <th>{props[0].Results[0].Driver.familyName}</th>
                        <th>{props[0].Results[1] && props[0].Results[1].Driver.familyName}</th>

                        <th>Points</th>
                    </tr>

                </thead>
                <tbody>
                    {team}
                </tbody>
            </table>
        </div>
    );
}

export default TeamResults;
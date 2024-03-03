import React, { useContext } from "react";
import Flag from './Flag';
import { Link } from "react-router-dom";
import { ThemeContext } from "../context/ThemeContext";
import { Table } from "react-bootstrap"

const TeamResults = ({ props }) => {

    var driver1 = props[0].Results[0].Driver.familyName;
    var driver2 = props[0].Results[1] && props[0].Results[1].Driver.familyName;

    var team = props.map((data, i) => {

        const driver1Result = data.Results.filter(result => result.Driver.familyName === driver1);
        const driver2Result = data.Results.filter(result => result.Driver.familyName === driver2);
        const driver1Pos = (driver1Result.length && driver1Result[0].position) || " ";
        const driver2Pos = (driver2Result.length && driver2Result[0].position) || " ";

        var link = data.Circuit.circuitId

        return (
            <tr key={i}>
                <td className="text-end">{data.round}</td>
                <td><Flag countryName={data.Circuit.Location.country} />
                    <Link className="text-decoration-none text-reset" to={'/races/' + link}
                        state={
                            { data: data }
                        }
                    > {data.raceName}
                    </Link>
                </td>
                <td className="text-end">{driver1Result && driver1Pos}</td>
                <td className="text-end">{driver2Result && driver2Pos}</td>
                <td className="text-end">{Number(data.Results[0].points) + Number((data.Results[1]) ? (data.Results[1].points) : 0)}</td>
            </tr>
        );
    })

    const { theme } = useContext(ThemeContext)

    return (
        <div className={"rounded tableDiv m-1 p-1 flex-grow-1 bg-" + theme.variant}>
            <Table {...theme}>
                <thead>
                    <tr><th colSpan="5">Formula 1 {props[0].season} Results</th></tr>
                    <tr>
                        <th className="text-end">Round</th>
                        <th>Grand Prix</th>
                        <th className="text-end">{props[0].Results[0].Driver.familyName}</th>
                        <th className="text-end">{props[0].Results[1] && props[0].Results[1].Driver.familyName}</th>

                        <th className="text-end">Points</th>
                    </tr>

                </thead>
                <tbody>
                    {team}
                </tbody>
            </Table>
        </div>
    );
}

export default TeamResults;
import { useContext, useEffect, useState } from "react";
import Loader from './Loader';
import { Link } from 'react-router-dom';
import Flag from './Flag';
import { Table } from 'react-bootstrap'
import { ThemeContext } from "../context/ThemeContext";
const Drivers = ({ season }) => {

    const [posts, setPosts] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {

        var url = "https://ergast.com/api/f1/" + season + "/driverStandings.json";
        fetch(url)
            .then(response => response.json())
            .then(posts => {

                setPosts(posts.MRData.StandingsTable.StandingsLists[0].DriverStandings)
                setIsLoading(false)
            })
    }, [season])

    const theme = useContext(ThemeContext)
    console.log(theme)
    if (isLoading) {
        return (
            <Loader />
        )
    }
    var driver = posts.map((post) => {
        var driverLink = "/drivers/" + post.Driver.driverId
        var teamLink = post.Constructors[0].constructorId //.replace(/ /g, "-");
        return (<tr key={post.position}>
            <td className="text-end">{post.position}</td>
            <td><Flag nationality={post.Driver.nationality} />
                <Link className="text-decoration-none text-reset"
                    to={driverLink}
                    state={{ posts: post, season: season }}>
                    {post.Driver.givenName} {post.Driver.familyName}
                </Link>
            </td>
            <td>
                <Link className="text-decoration-none text-reset"
                    to={'/teams/' + teamLink}
                    state={{
                        constructor: post.Constructors[0].constructorId,
                        season: season
                    }}
                >
                    {post.Constructors[0].name}
                </Link>
            </td>
            <td className="text-end">{post.points}</td>

        </tr>);
    }
    )

    return (
        <div className="grow rounded h-100 flex-lg-row flex-sm-fill">
            <div className={"rounded tableDiv m-1 bg-"+theme.theme}>
                <Table striped borderless hover size="sm" variant={theme.theme}>
                    <thead>
                        <tr>

                            <th colSpan="4">Driver Championship Standings - {season}</th>
                        </tr>
                       <tr> 
                        <th className="text-end">Rank</th>
                        <th>Name</th>
                        <th>Team</th>
                        <th className="text-end">Points</th>
                        </tr>
                    </thead>
                    <tbody>
                        {driver}
                    </tbody>
                </Table>
            </div>
        </div>
    );


}


export default Drivers;
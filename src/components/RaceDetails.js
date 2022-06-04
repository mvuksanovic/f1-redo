import Qualifiers from './Qualifiers';
import Results from './Results';
import GrandPrix from './GrandPrix';
import Mng404 from './Mng404';
import { useLocation } from "react-router-dom";


const RaceDetails = () => {

    const location = useLocation()

    
    if (!location.state) {
        return (<Mng404 />)
    };

    var data = location.state.data;
    return (

        <div className="d-lg-flex h-100 flex-lg-row flex-lg-fill">
            <GrandPrix data={data} />
            <div className="d-xl-flex flex-xl-row flex-grow-1 flex-fill overflow-auto">
                <Results round={data.round} season={data.season} />
                <Qualifiers round={data.round} season={data.season} />


            </div>
        </div>

    );


}

export default RaceDetails;
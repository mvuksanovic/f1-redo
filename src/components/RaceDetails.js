import React from "react";
import Qualifiers from './Qualifiers';
import Results from './Results';
import GrandPrix from './GrandPrix';
import Mng404 from './Mng404';

const RaceDetails = ({location}) => {
    

    
        if(!location.state){
            return(<Mng404 />)
        };
        
        var data = location.state.data;
        return(
            
            <div className="d-lg-flex flex-lg-row flex-lg-fill">
                <GrandPrix data={data} />
                <div className="d-xl-flex flex-xl-row flex-grow-1 flex-fill">
                        <Results id={data.round} season={data.season}/>
                      <Qualifiers id={data.round} season={data.season}/>
                        
                    
                </div>
            </div>
            
        );
   

}

export default RaceDetails;
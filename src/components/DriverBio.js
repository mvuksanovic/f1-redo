//import React from "react";
import Flag from './Flag';
import WikiImage from './WikiImage';
import {getCountryFromNationality} from './demonyms'
import { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';

const DriverBio = (props) => {
    const data = props.posts;
    const countryName = getCountryFromNationality(data.Driver.nationality);

    const {theme} = useContext(ThemeContext)
    const divThemeClass = theme.variant==="dark"? "text-white bg-dark" : "text-black bg-light"
    return (
        <div className={"d-flex flex-lg-column m-1 p-1 rounded " + divThemeClass}>
            <div className="d-flex flex-row flex-grow-1">
                
                <div className="d-flex flex-column flex-fill ">
                    <div>
                    <h3>{data.Driver.givenName} {data.Driver.familyName} <Flag countryName={countryName} /></h3>
                    </div>
                   <div className="d-flex flex-row flex-fill">
                        <div className="rounded ml-2" style={{width: "165px"}}>
                                <WikiImage url={data.Driver.url} size="165"/>
                        </div>
                        
                         <div className="ml-2 p-1 flex-fill">
                        <p>Country: {countryName}</p>
                        <p>Team: {data.Constructors[0].name}</p>
                        <p>Birth: {data.Driver.dateOfBirth}</p>
                        <a className="btn btn-secondary" href={data.Driver.url} target="_blank" rel="noreferrer" >Biography</a>

                    </div>   
                        
                    </div>
                    
                </div>
            </div>
            </div>        
                );
            }
            
export default DriverBio;
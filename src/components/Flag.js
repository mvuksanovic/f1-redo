//import React from "react";
import { getCountryCodeFromCountry, getCountryFromNationality } from "./demonyms";

const Flag = ({nationality, countryName, flagWidth}) => {
        countryName = !countryName? getCountryFromNationality(nationality) : countryName
        let countryCode = getCountryCodeFromCountry(countryName).toLocaleLowerCase()
        let flWidth = (flagWidth)? flagWidth : '30px';
        let flagUrl = `https://flagcdn.com/h24/${countryCode}.png`;
            
            
    return(
        <img width={flWidth} src={flagUrl} title={countryName} alt={countryName} />
    );
    
}

export default Flag;

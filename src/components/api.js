
const baseUrl = "https://ergast.com/api/f1"
export function getCurrentSeason(){
    var url = "https://ergast.com/api/f1/current/last/seasons.json"
        return fetch(url).then(result => result.json())
}
export function getDrivers(season){
   var url = `${baseUrl}/${season}/driverStandings.json`;
    return fetch(url).then(response => response.json())   
}
export function getRaceData(season) {
    var url = `${baseUrl}/${season}/results/1.json`;
    return fetch(url).then(response => response.json())
}
export function getConstructorStandings(season) {
    var url = `${baseUrl}/${season}/constructorStandings.json`;
    return fetch(url).then(response => response.json())
}
export function getDriverResults(season, id) {
    var url = `${baseUrl}/${season}/drivers/${id}/results.json`;
    return fetch(url).then(response => response.json())
}
export function getConstructorData(constructor, season) {
    var url = `${baseUrl}/${season}/constructors/${constructor}/constructorStandings.json`;
    return fetch(url).then(response => response.json())
}
export function getConstructorResults(constructor, season) {
    var url = `${baseUrl}/${season}/constructors/${constructor}/results.json?limit=100`;
    return fetch(url).then(response => response.json())
}
export function getRaceQualifiers(season, id){
    var url = `${baseUrl}/${season}/${id}/qualifying.json`;
        return fetch(url).then(response => response.json())
}
export function getRaceResults (season, id){
    var url = `${baseUrl}/${season}/${id}/results.json`;
        return fetch(url).then(response => response.json())
}